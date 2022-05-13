import React, { useState } from "react";
import { Button, Row, Col, Offcanvas, Container, Card } from "react-bootstrap";
import { Course } from "../interfaces/course";
import courseData from "../data/cisc_course.json";

const COURSEPOOL = courseData.map(
    (course): Course => ({
        ...course,
        credit: course.credit.toString()
    })
);

export function CoursePool({
    addCourseList
}: {
    addCourseList: (newCourse: Course[]) => void;
}): JSX.Element {
    const [query, setQuery] = useState("");
    const [courses, setCourses] = useState<Course[]>([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function chooseCourse(newCourse: Course) {
        if (!courses.includes(newCourse)) {
            setCourses([...courses, newCourse]);
        }
    }

    function clearCourses() {
        return setCourses([]);
    }

    function addCourses() {
        courses.map((course): void =>
            addCourseList([
                {
                    code: course.code,
                    title: course.title,
                    credit: course.credit,
                    description: course.description,
                    preReq: course.preReq,
                    taken: true
                }
            ])
        );
    }

    return (
        <>
            {" "}
            <Button onClick={handleShow}>Course Search 🔍</Button>
            <Offcanvas
                show={show}
                onHide={handleClose}
                scroll={true}
                backdrop={false}
                placement="end"
                header="Right"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Courses Search Engine</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <input
                        style={{ width: "370px" }}
                        placeholder="Search your course"
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <Container>
                        <Row>
                            <Col>
                                {COURSEPOOL.filter((course) => {
                                    if (query === "") {
                                        return courses;
                                    } else if (
                                        course.code
                                            .toLowerCase()
                                            .includes(query.toLowerCase())
                                    ) {
                                        return courses;
                                    }
                                }).map((course) => {
                                    return (
                                        <Container
                                            key={course.code}
                                            style={{ marginBottom: "4px" }}
                                        >
                                            <Button
                                                onClick={() =>
                                                    chooseCourse(course)
                                                }
                                                size="sm"
                                                variant="outline-secondary"
                                            >
                                                {course.code}
                                            </Button>
                                        </Container>
                                    );
                                })}
                            </Col>
                            <Col>
                                <Row>
                                    <Col>
                                        <span>Course Pool: </span>
                                        {courses.map((course: Course) => (
                                            <div key={course.code}>
                                                <Card
                                                    style={{ width: "18rem" }}
                                                >
                                                    <Card.Body>
                                                        <Card.Title>
                                                            {course.code}
                                                        </Card.Title>
                                                        <Card.Subtitle className="mb-2 text-muted">
                                                            {course.title} (
                                                            {course.credit}{" "}
                                                            credits)
                                                        </Card.Subtitle>
                                                        <Card.Text>
                                                            Description:{" "}
                                                            {course.description}
                                                        </Card.Text>
                                                        <Card.Text className="mb-2 text-muted">
                                                            Pre-requirement:{" "}
                                                            {course.preReq}
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        ))}
                                        <div>
                                            <Button
                                                size="sm"
                                                onClick={addCourses}
                                            >
                                                Add Course
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="danger"
                                                onClick={clearCourses}
                                            >
                                                Clear Course
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
