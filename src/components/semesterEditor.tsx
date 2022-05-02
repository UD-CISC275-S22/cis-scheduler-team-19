import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { CourseEditor } from "./courseEditor";

export function SemesterEditor({
    changeEditing,
    semester,
    editSemester,
    deleteSemester
}: {
    changeEditing: () => void;
    semester: Semester;
    editSemester: (id: number, newSemseter: Semester) => void;
    deleteSemester: (id: number) => void;
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
        changeEditing();
    }

    function cancel() {
        changeEditing();
    }

    function editCourse(id: number, newCourseList: Course) {
        setCourseList(
            courseList.map(
                (courseList: Course): Course =>
                    courseList.id === id ? newCourseList : courseList
            )
        );
    }

    function removeCourse(id: number) {
        setCourseList(
            courseList.filter(
                (courseList: Course): boolean => courseList.id !== id
            )
        );
    }

    return (
        <Container>
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
                    {/* Year */}
                    <Form.Group controlId="formSemesterYear" as={Row}>
                        <Form.Label column sm={2}>
                            Year:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="number"
                                value={year}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setYear(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/* CourseList */}
                    <CourseEditor
                        course={...courseList}
                        editCourse={editCourse}
                        removeCourse={removeCourse}
                    ></CourseEditor>
                    {/* Save/Cancel */}
                    <Button onClick={save} variant="success" className="me-4">
                        Save
                    </Button>
                    <Button onClick={cancel} variant="warning" className="me-5">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => deleteSemester(semester.id)}
                        variant="danger"
                        className="me-8"
                    >
                        Delete
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
