import React, { useState } from "react";
import { Button, Row, Col, Stack, Offcanvas } from "react-bootstrap";
import { Course } from "../interfaces/course";
import courseData from "../data/cisc_course.json";

const COURSEPOOL = courseData.map(
    (course): Course => ({
        ...course,
        credit: course.credit.toString()
    })
);

export function CoursePool(): JSX.Element {
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

    return (
        <>
            {" "}
            <Button onClick={handleShow}>Course Search</Button>
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
                    <Stack gap={3}>
                        <input
                            placeholder="Search your course"
                            onChange={(event) => setQuery(event.target.value)}
                        />
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
                            <div
                                key={course.code}
                                style={{ marginBottom: "4px" }}
                            >
                                <Button
                                    onClick={() => chooseCourse(course)}
                                    size="sm"
                                >
                                    {course.code}
                                </Button>
                            </div>;
                        })}
                        <Row>
                            <Col>
                                <span>Course Pool: </span>
                                {courses.map((course: Course) => (
                                    <li key={course.code}>{course.code}</li>
                                ))}
                                <div>
                                    <Button onClick={clearCourses}>
                                        Clear Course
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Stack>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
