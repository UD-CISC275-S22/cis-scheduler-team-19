import React from "react";
import { useState } from "react";
import { Semester } from "../interfaces/semester";
import { Plan } from "../interfaces/plan";
import { PlanEditor } from "./planEditor";
import { SemesterList } from "./semesterList";
import { SemesterAddModal } from "./semesterAddModal";
import { Button } from "react-bootstrap";

export function PlanView({
    plan,
    editPlan,
    deletePlan
}: {
    plan: Plan;
    editPlan: (id: number, newPlan: Plan) => void;
    deletePlan: (id: number) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    // const [courses, setCourses] = useState<Course[]>();
    const [semesters, setSemesters] = useState<Semester[]>(plan.semester);
    const [showAddModal, setShowAddModal] = useState(false);

    function changeEditing() {
        setEditing(!editing);
    }

    function editSemester(id: number, newSemester: Semester) {
        setSemesters(
            semesters.map(
                (semester: Semester): Semester =>
                    semester.id === id ? newSemester : semester
            )
        );
    }

    function deleteSemester(id: number) {
        setSemesters(
            semesters.filter(
                (semester: Semester): boolean => semester.id !== id
            )
        );
    }

    function addSemester(newSemester: Semester) {
        const existing = semesters.find(
            (semester: Semester): boolean => semester.id === newSemester.id
        );
        if (existing === undefined) {
            setSemesters([...semesters, newSemester]);
        }
    }

    function deleteAllSemester() {
        setSemesters([]);
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    return editing ? (
        <PlanEditor
            changeEditing={changeEditing}
            plan={plan}
            editPlan={editPlan}
            deletePlan={deletePlan}
        ></PlanEditor>
    ) : (
        <div>
            <div>
                <h3>{plan.title}</h3>
                <SemesterList
                    semesters={semesters}
                    editSemester={editSemester}
                    deleteSemester={deleteSemester}
                ></SemesterList>
                <div>
                    <Button
                        variant="success"
                        className="m-4"
                        onClick={handleShowAddModal}
                    >
                        New Semester
                    </Button>
                    <Button
                        variant="danger"
                        className="m-4"
                        onClick={deleteAllSemester}
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
        </div>
    );
}
