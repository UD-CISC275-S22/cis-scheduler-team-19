import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";

export function SemesterEditor({
    changeEditing,
    semester,
    editSemester,
    clearCourses //clear all the courses in a semester
}: {
    changeEditing: () => void;
    semester: Semester;
    editSemester: (id: number, newSemseter: Semester) => void;
    clearCourses: (id: number) => void;
}): JSX.Element {
    const [title, setTitle] = useState<string>(semester.title);
    const [year, setYear] = useState<string>(semester.year);
    const [courseList, setCourseList] = useState<Course[]>(semester.courseList);

    function save() {
        editSemester(semester.id, {
            ...semester,
            title: title,
            year: year,
            courseList: courseList
        });
    }

    function cancel() {
        changeEditing();
    }

    return <Container>
            <Row>
                <Col>
                    {/* Title */}
                    <Form.Group controlId="formSemesterTitle" as={Row}>
                        <Form.Label column sm={2}>
                            Title:
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
                    {/* Release Year */}
                    <Form.Group controlId="formSemesterYear" as={Row}>
                        <Form.Label column sm={2}>
                            Year:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="string"
                                value={year}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setYear(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/* Rating */}
                    <Form.Group controlId="formCourseList" as={Row}>
                        <Form.Label column sm={2}>
                            Course:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="array"
                                value={courseList}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setCourseList(courseList)}
                        /></Col>
                    </Form.Group>
                    <Button onClick={save} variant="success" className="me-4">
                        Save
                    </Button>
                    <Button onClick={cancel} variant="warning" className="me-5">
                        Cancel
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
}
