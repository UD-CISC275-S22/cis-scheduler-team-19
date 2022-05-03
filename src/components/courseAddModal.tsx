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
    // const [id, setId] = useState<number>(0);
    const [code, setCode] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [credit, setCredit] = useState<string>("");

    function saveChanges() {
        addCourse({
            id: 0,
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
                            <Form.Control
                                value={credit}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setCredit(event.target.value)}
                            />
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
