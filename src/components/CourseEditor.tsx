import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function CourseEditor({
    changeEditing,
    course,
    editCourse,
    removeCourse
}: //moveCourse
{
    changeEditing: () => void;
    course: Course;
    editCourse: (id: number, newCourse: Course) => void;
    removeCourse: (id: number) => void;
    //moveCourse: ()
}): JSX.Element {
    const [code, setCode] = useState<string>(course.code);
    const [title, setTitle] = useState<string>(course.title);
    const [credit, setCredit] = useState<string>(course.credit);
    const [description, setDescription] = useState<string>(course.description);

    function save() {
        editCourse(course.id, {
            ...course,
            code: code,
            title: title,
            credit: credit,
            description: description
        });
        changeEditing();
    }

    function cancel() {
        changeEditing();
    }

    return (
        <Container>
            <Row>
                <Col>
                    {/* Code */}
                    <Form.Group controlId="formCourseCode" as={Row}>
                        <Form.Label column sm={2}>
                            Course Code:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={code}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setCode(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/* Title */}
                    <Form.Group controlId="formCourseTitle" as={Row}>
                        <Form.Label column sm={2}>
                            Couurse Title:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={title}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setTitle(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/* Credit */}
                    <Form.Group controlId="formCourseCredit" as={Row}>
                        <Form.Label column sm={2}>
                            Course Credit:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={credit}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setTitle(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/* Description */}
                    <Form.Group controlId="formCourseDescription" as={Row}>
                        <Form.Label column sm={2}>
                            Course Description:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={description}
                                onChange={(
                                    event: React.ChangeEvent<HTMLTextAreaElement>
                                ) => setDescription(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/* Save/Cancel */}
                    <Button onClick={save} variant="success" className="me-4">
                        Save
                    </Button>
                    <Button onClick={cancel} variant="warning" className="me-5">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => removeCourse(course.id)}
                        variant="danger"
                        className="me-8"
                    >
                        Remove
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
