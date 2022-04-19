import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";

export function SemesterEditor({
    changeEditing,
    semester,
    editSemester, 
    clearCourses, //clear all courses in this semester
    insertCourse //insert a course in this semester
}: {
    changeEditing: () => void;
    semester: Semester;
    editSemester: (id: number, newSemseter: Semester) => void;
    clearCourses: (id: number) => void;
    insertCourse: (id: number) => void;
}): JSX.Element {
    const [title, setTitle] = useState<string>(semester.title);
    const [year, setYear] = useState<string>(semester.year);
    const [courseList, setCourseList] = useState<Course[]>(semester.courseList);

    return (
        <Container>
            <Row>
                <Col>
                    {/* Title */}
                    <Form.Group controlId="formSemesterTitle" as={Row}>
                        <Form.Label column sm={2}>
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
                    <Form.Group controlId="formMovieRelease" as={Row}>
                        <Form.Label column sm={2}>
                            Release Year:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="number"
                                value={releaseYear}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setReleaseYear(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/* Rating */}
                    <Form.Group controlId="formMovieRating" as={Row}>
                        <Form.Label column sm={2}>
                            Release Year:
                        </Form.Label>
                        <Col>
                            <Form.Select
                                value={rating}
                                onChange={(
                                    event: React.ChangeEvent<HTMLSelectElement>
                                ) => setRating(event.target.value)}
                            >
                                <option value="0">✰✰✰✰✰</option>
                                <option value="2">⭐✰✰✰✰</option>
                                <option value="4">⭐⭐✰✰✰</option>
                                <option value="6">⭐⭐⭐✰✰</option>
                                <option value="8">⭐⭐⭐⭐✰</option>
                                <option value="10">⭐⭐⭐⭐⭐</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    {/* Description */}
                    <Form.Group controlId="formMovieDescription" as={Row}>
                        <Form.Label column sm={2}>
                            Description:
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
                    {/* Soundtrack */}
                    <SoundtrackEditor
                        songs={soundtrack}
                        setSongs={setSoundtrack}
                    ></SoundtrackEditor>
                    {/* Save/Cancel */}
                    <Button onClick={save} variant="success" className="me-4">
                        Save
                    </Button>
                    <Button onClick={cancel} variant="warning" className="me-5">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => deleteMovie(movie.id)}
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