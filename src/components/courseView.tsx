import React from "react";
import { Container } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function CourseView({ course }: { course: Course }): JSX.Element {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>{course.code}</th>
                        <th>{course.title}</th>
                        <th>{course.description}</th>
                        <th>{course.credit}</th>
                    </tr>
                </thead>
            </table>
        </Container>
    );
}
