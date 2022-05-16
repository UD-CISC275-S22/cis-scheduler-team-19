import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Semester } from "../interfaces/semester";

export function SemesterAddModal({
    show,
    handleClose,
    addSemester
}: {
    show: boolean;
    handleClose: () => void;
    addSemester: (newSemester: Semester) => void;
}) {
    const [title, setTitle] = useState<string>("");
    const [year, setYear] = useState<string>("");

    function saveChanges() {
        addSemester({
            title: title,
            year: year,
            courses: []
        });
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Semester</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="formCourse" as={Row}>
                    {/* Title */}
                    <Row>
                        <Form.Label column sm={3}>
                            Semester:
                        </Form.Label>
                        <Col>
                            <Form.Select
                                value={title}
                                onChange={(
                                    event: React.ChangeEvent<HTMLSelectElement>
                                ) => setTitle(event.target.value)}
                            >
                                <option value="Blank"></option>
                                <option value="Spring Semester">
                                    Spring Semester
                                </option>
                                <option value="Summer Semester">
                                    Summer Semester
                                </option>
                                <option value="Fall Semester">
                                    Fall Semester
                                </option>
                                <option value="Winter Semester">
                                    Winter Semester
                                </option>
                            </Form.Select>
                        </Col>
                    </Row>
                    {/* Year */}
                    <Row>
                        <Form.Label column sm={3}>
                            Year:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={year}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setYear(event.target.value)}
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
