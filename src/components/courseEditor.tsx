import React, { useState } from "react";
import { Button, Row, Col, Form, Modal } from "react-bootstrap";
import { Course } from "../interfaces/course";

// It's actually a courseEditorModal

export function CourseEditor({
    course,
    editCourse,
    removeCourse
}: {
    course: Course;
    editCourse: (code: string, newCourse: Course) => void;
    removeCourse: (code: string) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(true);
    const [tempCourse, setTempCourse] = useState<Course>(course);

    const [showAddModal, setShowAddModal] = useState(false);

    const handleClose = () => setShowAddModal(false);
    const handleShow = () => setShowAddModal(true);

    function changeEditing() {
        setEditing(!editing);
        setShowAddModal(false);
    }

    function save() {
        editCourse(course.code, {
            ...tempCourse
        });
        changeEditing();
        handleClose();
    }

    function cancel() {
        changeEditing();
        handleClose();
    }

    return (
        <div>
            <Button onClick={handleShow}>Edit</Button>
            <Modal show={showAddModal} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Code */}
                    <Form.Group controlId="formCourseCode" as={Row}>
                        <Form.Label sm={2}>Course Code:</Form.Label>
                        <Col>
                            <Form.Control
                                value={course.code}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                    setTempCourse({
                                        ...tempCourse,
                                        code: event.target.value
                                    })
                                }
                            />
                        </Col>
                    </Form.Group>
                    {/* Title */}
                    <Form.Group controlId="formCourseTitle" as={Row}>
                        <Form.Label sm={2}>Course Title:</Form.Label>
                        <Col>
                            <Form.Control
                                value={course.title}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                    setTempCourse({
                                        ...course,
                                        title: event.target.value
                                    })
                                }
                            />
                        </Col>
                    </Form.Group>
                    {/* Credit */}
                    <Form.Group controlId="formCourseCredit">
                        <Form.Label sm={2}>Course Credit:</Form.Label>
                        <Col>
                            <Form.Select
                                value={course.credit}
                                onChange={(
                                    event: React.ChangeEvent<HTMLSelectElement>
                                ) =>
                                    setTempCourse({
                                        ...course,
                                        credit: event.target.value
                                    })
                                }
                            >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    {/* Description */}
                    <Form.Group controlId="formCourseDescription" as={Row}>
                        <Form.Label sm={2}>Course Description:</Form.Label>
                        <Col>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={course.description}
                                onChange={(
                                    event: React.ChangeEvent<HTMLTextAreaElement>
                                ) =>
                                    setTempCourse({
                                        ...course,
                                        description: event.target.value
                                    })
                                }
                            />
                        </Col>
                    </Form.Group>
                    {/* preReq */}
                    <Form.Group controlId="formCourseDescription" as={Row}>
                        <Form.Label sm={2}>Course PreReq:</Form.Label>
                        <Col>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={course.preReq}
                                onChange={(
                                    event: React.ChangeEvent<HTMLTextAreaElement>
                                ) =>
                                    setTempCourse({
                                        ...course,
                                        preReq: event.target.value
                                    })
                                }
                            />
                        </Col>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={save} variant="success" className="me-4">
                        Save
                    </Button>
                    <Button onClick={cancel} variant="warning" className="me-5">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => removeCourse(course.code)}
                        variant="danger"
                        className="me-8"
                    >
                        Remove
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
