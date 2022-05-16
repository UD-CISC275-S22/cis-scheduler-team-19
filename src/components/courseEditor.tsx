import React, { useState } from "react";
import { Button, Row, Col, Form, Modal, ButtonGroup } from "react-bootstrap";
import { Course } from "../interfaces/course";

// It's actually a courseEditorModal

export function CourseEditor({
    course,
    editCourse,
    removeCourse,
    moveCourse
}: {
    course: Course;
    editCourse: (code: string, newCourse: Course) => void;
    removeCourse: (code: string) => void;
    moveCourse: (code: string) => void;
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

    const defaultcode = course.code;
    const defaulttitle = course.title;
    const defaultcredit = course.credit;
    const defaultdescription = course.description;
    const defaultpreReq = course.preReq;

    function resetCourse() {
        editCourse(course.code, {
            ...course,
            code: defaultcode,
            title: defaulttitle,
            credit: defaultcredit,
            description: defaultdescription,
            preReq: defaultpreReq
        });
        setTempCourse({
            code: defaultcode,
            title: defaulttitle,
            credit: defaultcredit,
            description: defaultdescription,
            preReq: defaultpreReq,
            taken: true
        });
        changeEditing();
        handleClose();
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
            <Button variant="light" onClick={handleShow}>
                Edit
            </Button>
            <Modal show={showAddModal} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Code */}
                    <Form.Group controlId="formCourseCode" as={Row}>
                        <Form.Label sm={2}>Course Code:</Form.Label>
                        <Col>
                            <Form.Control
                                value={tempCourse.code}
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
                                value={tempCourse.title}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                    setTempCourse({
                                        ...tempCourse,
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
                                value={tempCourse.credit}
                                onChange={(
                                    event: React.ChangeEvent<HTMLSelectElement>
                                ) =>
                                    setTempCourse({
                                        ...tempCourse,
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
                                value={tempCourse.description}
                                onChange={(
                                    event: React.ChangeEvent<HTMLTextAreaElement>
                                ) =>
                                    setTempCourse({
                                        ...tempCourse,
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
                                value={tempCourse.preReq}
                                onChange={(
                                    event: React.ChangeEvent<HTMLTextAreaElement>
                                ) =>
                                    setTempCourse({
                                        ...tempCourse,
                                        preReq: event.target.value
                                    })
                                }
                            />
                        </Col>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={() => moveCourse(tempCourse.code)}
                        variant="light"
                        className="me-4"
                    >
                        Move
                    </Button>
                    <Button
                        onClick={() => resetCourse()}
                        className="reset-course-btn"
                        data-testid="reset-btn"
                        variant="outline-dark"
                    >
                        Reset
                    </Button>
                    <ButtonGroup>
                        <Button
                            onClick={save}
                            variant="success"
                            className="me-3"
                        >
                            Save
                        </Button>
                        <Button
                            onClick={cancel}
                            variant="warning"
                            className="me-4"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={() => removeCourse(tempCourse.code)}
                            variant="danger"
                            className="me-5"
                        >
                            Remove
                        </Button>
                    </ButtonGroup>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
