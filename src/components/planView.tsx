import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import { Plan } from "../interfaces/plan";
import { PlanEditor } from "./planEditor";
import { SemesterList } from "./semesterList";

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
    const [courses, setCourses] = useState<Course[]>();
    const [semesters, setSemesters] = useState<Semester[]>(plan.semester);

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
                    semesters={plan.semester}
                    editSemester={editSemester}
                    deleteSemester={deleteSemester}
                ></SemesterList>
            </div>
        </div>
    );
}
