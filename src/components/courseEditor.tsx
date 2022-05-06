import React, { useState } from "react";
import { Button, Row, Col, Form, Modal } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function CourseEditor({
    show,
    setShowAddModal,
    handleClose,
    course,
    editCourse,
    removeCourse // remove this course in a semester
}: //moveCourse
{
    show: boolean;
    handleClose: () => void;
    course: Course;
    editCourse: (code: string, newCourse: Course) => void;
    removeCourse: (code: string) => void;
    setShowAddModal: (show: boolean) => void;
    //moveCourse: ()
}): JSX.Element {
    const [code, setCode] = useState<string>(course.code);
    const [title, setTitle] = useState<string>(course.title);
    const [description, setDescription] = useState<string>(course.description);
    const [credit, setCredit] = useState<string>(course.credit);
    const [editing, setEditing] = useState<boolean>(true);

    function changeEditing() {
        setEditing(!editing);
        setShowAddModal(false);
    }

    function save() {
        editCourse(course.code, {
            ...course,
            code: code,
            title: title,
            credit: credit,
            description: description
        });
        changeEditing();
        handleClose();
    }

    function cancel() {
        changeEditing();
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                <Form.Group controlId="formCourseCredit">
                    <Form.Label column sm={2}>
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
    );
}
