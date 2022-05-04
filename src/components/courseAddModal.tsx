import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function CourseAddModal({
    show,
    handleClose,
    addCourse
}: {
    show: boolean;
    handleClose: () => void;
    addCourse: (newCourse: Course) => void;
}) {
    const [code, setCode] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [credit, setCredit] = useState<string>("");

    function saveChanges() {
        addCourse({
            code: code,
            title: title,
            credit: credit,
            description: description,
            preReq: "",
            taken: true
        });
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Code */}
                <Form.Group controlId="formCourse" as={Row}>
                    <Row>
                        <Form.Label column sm={3}>
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
                    </Row>
                    {/* Title */}
                    <Row>
                        <Form.Label column sm={3}>
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
                    </Row>
                    {/* Description */}
                    <Row>
                        <Form.Label column sm={3}>
                            Course Description:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={description}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setDescription(event.target.value)}
                            />
                        </Col>
                    </Row>
                    {/* Credit */}
                    <Row>
                        <Form.Label column sm={3}>
                            Course Credit:
                        </Form.Label>
                        <Col>
                            <Form.Select
                                value={credit}
                                onChange={(
                                    event: React.ChangeEvent<HTMLSelectElement>
                                ) => setCredit(event.target.value)}
                            >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
