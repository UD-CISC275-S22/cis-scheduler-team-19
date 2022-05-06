import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { PlanList } from "../components/planList";
import { Plan } from "../interfaces/plan";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import ciscData from "../data/cisc_plans.json";
import { PlanAddModal } from "./planAddModal";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

const YEARS = [
    "Choose your Academic Year",
    "Freshman",
    "Sophomore",
    "Junior",
    "Senior"
];
const DEFAULT_YEAR = YEARS[0];

const PLAN = ciscData.map(
    (plan): Plan => ({
        ...plan,
        // id: plan.id,
        // title: plan.title,
        // publish: plan.publish,
        semester: plan.semester.map(
            (semester): Semester => ({
                ...semester,
                //id: semester.id,
                // title: semester.title,
                // year: semester.year,
                courses: semester.courses.map(
                    (course): Course => ({
                        ...course,
                        // id: course.id,
                        // code: course.code,
                        // title: course.title,
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

export function InputInfo(): JSX.Element {
    const [name, setName] = useState<string>("");
    const [year, setYear] = useState<string>(DEFAULT_YEAR);
    const [plans, setPlans] = useState<Plan[]>(PLAN);
    const [submit, setSubmit] = useState<boolean>(false);
    const [showAddModal, setShowAddModal] = useState(false);

    function updateName(event: ChangeEvent) {
        setName(event.target.value);
    }

    function updateYear(event: ChangeEvent) {
        setYear(event.target.value);
    }

    function startEditing() {
        if (name == "") {
            alert("Please enter your name");
        }
        if (year == "Choose your Academic Year") {
            alert("Please choose your Academic Year");
        } else {
            setSubmit(!submit);
        }
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
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    // function editCourse(id: number, newCourse: Course) {
    //     setPlans(
    //         plans.map((plan: Plan): Plan => {
    //             return {
    //                 ...plan,
    //                 semester: plan.semester.map(
    //                     (semester: Semester): Semester => {
    //                         {
    //                             return {
    //                                 ...semester,
    //                                 courseList: semester.courseList.map(
    //                                     (course: Course): Course =>
    //                                         course.id === id
    //                                             ? newCourse
    //                                             : course
    //                                 )
    //                             };
    //                         }
    //                     }
    //                 )
    //             };
    //         })
    //     );
    // }

    // function removeCourse(id: number) {
    //     setPlans(
    //         plans.filter((plan: Plan): Plan => {
    //             return {
    //                 ...plan,
    //                 semester: plan.semester.filter(
    //                     (semester: Semester): Semester => {
    //                         return {
    //                             ...semester,
    //                             courseList: semester.courseList.filter(
    //                                 (course: Course): boolean =>
    //                                     course.id !== id
    //                             )
    //                         };
    //                     }
    //                 )
    //             };
    //         })
    //     );
    // }

    // function clearPlans(id: number) {
    //     setPlans(plans.filter((plan: Plan): boolean => plan.id !== id));
    // }

    // function clearSemester(id: number) {
    //     setPlans(plans.filter((plan: Plan): boolean => plan.id !== id));
    // }

    // function editSemester(id: number, newSemester: Semester) {
    //     setPlans(
    //         plans.map((plan: Plan): Plan => {
    //             return {
    //                 ...plan,
    //                 semester: plan.semester.map(
    //                     (semester: Semester): Semester =>
    //                         semester.id === semester.id ? newSemester : semester
    //                 )
    //             };
    //         })
    //     );
    // }

    return submit ? (
        <div>
            <label>Hi, {name}!</label>
            <PlanList
                plans={plans}
                editPlan={editPlan}
                deletePlan={deletePlan}
            ></PlanList>
            <div>
                <Button
                    variant="success"
                    className="m-4"
                    onClick={handleShowAddModal}
                >
                    NEW PLAN
                </Button>
                <Button
                    variant="danger"
                    className="m-4"
                    onClick={deleteAllPlan}
                >
                    Clear All PLAN
                </Button>
                <PlanAddModal
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    addPlan={addPlan}
                ></PlanAddModal>
            </div>
        </div>
    ) : (
        <div>
            <Form.Group controlId="FormName" as={Row}>
                <Form.Label column sm={2}>
                    Your Name:
                </Form.Label>
                <Col>
                    <Form.Control
                        style={{ padding: 6 }}
                        value={name}
                        onChange={updateName}
                        placeholder="Enter your Name"
                    />
                </Col>
            </Form.Group>
            <Form.Group controlId="FormYear" as={Row}>
                <Form.Label column sm={2}>
                    Academic Year:
                </Form.Label>
                <Col>
                    <Form.Select
                        style={{ padding: 6 }}
                        value={year}
                        onChange={updateYear}
                    >
                        {YEARS.map((year: string) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </Form.Select>
                </Col>
            </Form.Group>
            <div>
                <Button className="m-4" onClick={startEditing}>
                    Confirm
                </Button>
            </div>
        </div>
    );
}
