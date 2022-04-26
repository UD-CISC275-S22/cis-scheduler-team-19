import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { CourseEditor } from "./CourseEditor";

export function CourseAddModal({
    show,
    handleClose
}: {
    show: boolean;
    handleClose: () => void;
}) {
    const [code, setCode] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [credit, setCredit] = useState<string>("");

    function saveChanges() {
        const table = document.getElementById(
            "courseTable"
        ) as HTMLTableElement;
        const row = table.insertRow(table.rows.length);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        cell1.innerHTML = code;
        cell2.innerHTML = title;
        cell3.innerHTML = description;
        cell4.innerHTML = credit;
        cell5.innerHTML = "<button>Edit</button>";

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
