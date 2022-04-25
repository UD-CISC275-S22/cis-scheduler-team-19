import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function CourseEditor({
    course,
    editCourse,
    removeCourse
}: //moveCourse
{
    course: Course;
    editCourse: (id: number, newCourse: Course) => void;
    removeCourse: (id: number) => void;
    //moveCourse: ()
}): JSX.Element {
    const [code, setCode] = useState<string>(course.code);
    const [title, setTitle] = useState<string>(course.title);
    const [description, setDescription] = useState<string>(course.description);
    const [credit, setCredit] = useState<string>(course.credit);
    const [editing, setEditing] = useState<boolean>(true);

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

    function changeEditing() {
        setEditing(!editing);
    }

    return editing ? (
        <Button onClick={changeEditing}>Edit</Button>
    ) : (
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
                            Course Title:
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
                                ) => setCredit(event.target.value)}
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
