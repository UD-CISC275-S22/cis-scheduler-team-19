import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function CourseEditor({
    // changeEditing,
    course
}: // editCourse,
// deleteCourse
{
    changeEditing: () => void;
    course: Course;
    editCourse: (id: number, title: string, credit: number) => void;
    deleteCourse: (id: number) => void;
}): JSX.Element {
    // const [id, setId] = useState<number>(course.course_id);
    // const [title, setTitle] = useState<string>(course.course_title);
    return (
        <Container>
            <Row>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
            </Row>
        </Container>
    );
}
