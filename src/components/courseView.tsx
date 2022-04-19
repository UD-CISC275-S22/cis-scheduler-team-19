import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function CourseView({ course }: { course: Course }): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    function changeEditing() {
        setEditing(!editing);
    }
    //( editing ? (
    // <CourseEditor
    // changeEditing={changeEditing}
    // plan={plan}
    // editPlan={editPlan}
    // removePlan={removePlan}
    // clearPlan={clearPlan}
    // unfulfilledPlan={unfulfilledPlan}
    // ></CourseEditor>
    //) : (
    return (
        <Container>
            <td>{course.code}</td>
            <td>{course.title}</td>
            <td>{course.description}</td>
            <td>{course.credit}</td>
        </Container>
    );
    //)
}
