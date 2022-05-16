import React from "react";
import { useState } from "react";
import { Semester } from "../interfaces/semester";
import { Plan } from "../interfaces/plan";
import { PlanEditor } from "./planEditor";
import { SemesterList } from "./semesterList";
import { SemesterAddModal } from "./semesterAddModal";
import { Alert, Button } from "react-bootstrap";

export function PlanView({
    plan,
    editPlan,
    deletePlan
}: {
    plan: Plan;
    editPlan: (code: string, newPlan: Plan) => void;
    deletePlan: (code: string) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const semesters = plan.semesters;
    function setSemesters(newSemesters: Semester[]) {
        editPlan(plan.title, { ...plan, semesters: newSemesters });
    }
    //const [semesters, setSemesters] = useState<Semester[]>(plan.semesters);
    const [showAddModal, setShowAddModal] = useState(false);
    // alerts if users want to clear all semesters
    const [show, setShow] = useState(false);
    // after clearing courses, clear button disabled
    const [disable, setDisable] = React.useState(false);

    function changeEditing() {
        setEditing(!editing);
    }

    function editSemester(title: string, newSemester: Semester) {
        setSemesters(
            semesters.map(
                (semester: Semester): Semester =>
                    semester.title === title ? newSemester : semester
            )
        );
    }

    function deleteSemester(title: string) {
        setSemesters(
            semesters.filter(
                (semester: Semester): boolean => semester.title !== title
            )
        );
    }

    function addSemester(newSemester: Semester) {
        const existing = semesters.find(
            (semester: Semester): boolean =>
                semester.title === newSemester.title
        );
        if (existing === undefined) {
            setSemesters([...semesters, newSemester]);
        }
    }

    function deleteAllSemester() {
        setSemesters([]);
        setShow(!show);
        setDisable(true);
    }

    function cancel() {
        setShow(!show);
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    return editing ? (
        <>
            <PlanEditor
                changeEditing={changeEditing}
                plan={plan}
                editPlan={editPlan}
                deletePlan={deletePlan}
            ></PlanEditor>
        </>
    ) : (
        <div>
            <div>
                <Button onClick={changeEditing} variant="light">
                    {plan.title}
                </Button>
                <SemesterList
                    semesters={semesters}
                    editSemester={editSemester}
                    deleteSemester={deleteSemester}
                ></SemesterList>
                <Button
                    className="m-4"
                    onClick={handleShowAddModal}
                    variant="outline-success"
                >
                    New Semester
                </Button>
                <Alert show={show} variant="danger">
                    <Alert.Heading>Warning ⚠️</Alert.Heading>
                    <p>Are you sure to delete all semesters?</p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={cancel} variant="outline-success">
                            Wait a second
                        </Button>
                        <Button
                            onClick={deleteAllSemester}
                            variant="outline-danger"
                        >
                            No doubt
                        </Button>
                    </div>
                </Alert>
                <Button
                    className="m-4"
                    disabled={disable}
                    onClick={() => setShow(true)}
                    variant="outline-danger"
                >
                    Clear All Semester
                </Button>
                <SemesterAddModal
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    addSemester={addSemester}
                ></SemesterAddModal>
            </div>
        </div>
    );
}
