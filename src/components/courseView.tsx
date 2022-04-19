import React from "react";
import { Container } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { useState } from "react";
import { CourseEditor } from "./CourseEditor";
import { Button, Container, Row, Col, Form } from "react-bootstrap";

export function CourseView({ course }: { course: Course }): JSX.Element {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>{course.code}</th>
                        <th>{course.title}</th>
                        <th>{course.credit}</th>
                        <th>{course.description}</th>
                    </tr>
                </thead>
            </table>
        </Container>
    );
}
