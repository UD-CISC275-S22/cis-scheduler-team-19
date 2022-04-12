import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Plan } from "../interfaces/plan";

export function CourseEditor({
    changeEditing,
    course,
    editCourse,
    deleteCourse
}: {
    changeEditing: () => void;
    course: Course;
    editCourse: (id: string, title: string, credit: number) => void;
    deleteCourse: (id: string) => void;
}): JSX.Element {
    const [id, setId] = useState<string>(course.course_id);
    const [title, setTitle] = useState<string>(course.course_title);
    return
        <Container>
            <><Row>
                <Col></Col>
            </Row><Row>
                    <Col></Col>
                    <Col></Col>
                </Row></>
        </Container>
})