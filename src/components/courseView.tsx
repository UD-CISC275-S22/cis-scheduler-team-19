import React from "react";
import { Container } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function CourseView({ course }: { course: Course }): JSX.Element {
    return (
        <Container>
            <td>{course.code}</td>
            <td>{course.title}</td>
            <td>{course.description}</td>
            <td>{course.credit}</td>
        </Container>
    );
}
