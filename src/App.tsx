import "./App.css";
import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { PlanList } from "./components/viewlist/planList";
import { Plan } from "./interfaces/plan";
import { Semester } from "./interfaces/semester";
import { Course } from "./interfaces/course";
import ciscData from "./data/cisc_plans.json";
import { PlanAddModal } from "./components/modal/planAddModal";
import { ImportCSV } from "./components/importCSV";
import { NavbarFeature } from "./components/NavbarFeature";

const PLAN = ciscData.map(
    (plan): Plan => ({
        ...plan,
        semesters: plan.semester.map(
            (semester): Semester => ({
                ...semester,
                courses: semester.courses.map(
                    (course): Course => ({
                        ...course,
                        credit: course.credit,
                        description: course.description,
                        preReq: course.preReq,
                        taken: course.taken
                    })
                )
            })
        )
    })
);

let loadedData = PLAN;
const saveDataKey = "MY-New-PLAN-DATA";
const previousData = localStorage.getItem(saveDataKey);
if (previousData !== null) {
    loadedData = JSON.parse(previousData);
}

function App(): JSX.Element {
    const [plans, setPlans] = useState<Plan[]>(loadedData);
    const [submit, setSubmit] = useState<boolean>(false);
    // control plan add modal
    const [showAddModal, setShowAddModal] = useState(false);
    // alerts if users want to clear all plans
    const [show, setShow] = useState(false);
    // after clearing courses, clear button disabled
    const [disable, setDisable] = React.useState(false);

    function startEditing() {
        setSubmit(!submit);
        return;
    }

    function addPlan(newPlan: Plan) {
        const existing = plans.find(
            (plan: Plan): boolean => plan.title === newPlan.title
        );
        if (existing === undefined) {
            setPlans([...plans, newPlan]);
        }
    }

    function deletePlan(title: string) {
        setPlans(plans.filter((plan: Plan): boolean => plan.title !== title));
    }

    function editPlan(title: string, newPlan: Plan) {
        setPlans(
            plans.map(
                (plan: Plan): Plan => (plan.title === title ? newPlan : plan)
            )
        );
    }

    function deleteAllPlan() {
        setPlans([]);
        setShow(!show);
        setDisable(true);
    }

    function cancel() {
        setShow(!show);
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    function saveData() {
        localStorage.setItem(saveDataKey, JSON.stringify(plans));
    }

    return submit ? (
        <div className="App">
            <header className="App-header">
                Scheduler System for CISC undergraduates
            </header>
            <>
                <NavbarFeature></NavbarFeature>
                <PlanList
                    plans={plans}
                    editPlan={editPlan}
                    deletePlan={deletePlan}
                ></PlanList>
                <Alert show={show} variant="danger">
                    <Alert.Heading>Warning ??????</Alert.Heading>
                    <p>Are you sure to delete all semesters?</p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={cancel} variant="outline-success">
                            Wait a second
                        </Button>
                        <Button
                            onClick={deleteAllPlan}
                            variant="outline-danger"
                        >
                            No doubt
                        </Button>
                    </div>
                </Alert>
                <Button
                    variant="danger"
                    className="m-0"
                    disabled={disable}
                    onClick={() => setShow(true)}
                >
                    ????
                </Button>
                <Button
                    variant="light"
                    className="m-0"
                    onClick={handleShowAddModal}
                >
                    ???
                </Button>
                <PlanAddModal
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    addPlan={addPlan}
                ></PlanAddModal>
                <Button onClick={saveData}>????</Button>
                <div>
                    {/* <ExportCSV plans={PLAN}></ExportCSV> */}
                    <ImportCSV></ImportCSV>
                </div>
            </>
        </div>
    ) : (
        <div className="App">
            <header className="App-header">
                Scheduler System for CISC undergraduates
            </header>
            <div>
                <Button
                    variant="outline-dark"
                    className="m-4"
                    onClick={startEditing}
                >
                    Welcome!
                </Button>
            </div>
        </div>
    );
}

export default App;
