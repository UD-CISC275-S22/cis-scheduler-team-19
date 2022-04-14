import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
// import { PlanList } from "../components/planList";
import { CourseList } from "./courseList";
import { Plan } from "../interfaces/plan";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import cisc from "../data/cisc_plans.json";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

const YEARS = [
    "Choose your Academic Year",
    "Freshman",
    "Sophomore",
    "Junior",
    "Senior",
    "Graduate"
];
const DEFAULT_YEAR = YEARS[0];
/*
const COURSE = cisc.map(
    (plan): Plan => ({ 
        ...plan, 
        semester: plan.semester.map(
            (semester: Semester): Semester => ({
                ...semester, 
                courseList: semester.course.map(
                    (course: Course): Course => { ...course })
            )
        })
    )
})
);
*/

export function InputInfo(): JSX.Element {
    const [name, setName] = useState<string>("");
    const [year, setYear] = useState<string>(DEFAULT_YEAR);
    const [editing, setEditing] = useState<boolean>(false);
    // const [plans, setPlans] = useState<Plan[]>([]);
    const [courses, setCourses] = useState<Course[]>([]);

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
            setEditing(!editing);
        }
        return;
    }
    /*
    function addPlan(plan_id: number, newPlan: Plan) {
        setPlans(
            plans.map(
                (plan: Plan): Plan =>
                    plan.plan_id === plan_id ? newPlan : plan
            )
        );
    }
    */
    /*
    function clearPlans(plan_id: number) {
        setPlans(
            plans.filter((plan: Plan): boolean => plan.plan_id !== plan_id)
        );
    }
    */
    function addCourse(course_id: number, newCourse: Course) {
        setCourses(
            courses.map(
                (course: Course): Course =>
                    course.course_id === course_id ? newCourse : course
            )
        );
    }
    function clearCourse(course_id: number) {
        setCourses(
            courses.filter(
                (course: Course): boolean => course.course_id !== course_id
            )
        );
    }

    return editing ? (
        // <PlanList
        // plans={plans}
        // addPlan={addPlan}
        // clearPlans={clearPlans}
        // ></PlanList>
        <CourseList
            courses={courses}
            addCourse={addCourse}
            clearCourse={clearCourse}
        ></CourseList>
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
