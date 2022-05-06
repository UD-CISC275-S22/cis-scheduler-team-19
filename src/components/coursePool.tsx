import React, { useState } from "react";
import { Button, Row, Col, Stack } from "react-bootstrap";
import { Course } from "../interfaces/course";
import courseData from "../data/cisc_course.json";

const COURSEPOOL = courseData.map(
    (course): Course => ({
        ...course,
        credit: course.credit.toString(),
        description: course.description,
        preReq: course.preReq,
        taken: course.taken
    })
);

export function CoursePool(): JSX.Element {
    const [query, setQuery] = useState("");
    const [courses, setCourses] = useState<Course[]>([]);
    function chooseCourse(newCourses: Course) {
        if (!courses.includes(newCourses)) {
            setCourses([...courses, newCourses]);
        }
    }

    function clearCourses() {
        return setCourses([]);
    }

    return (
        <Stack gap={3}>
            <h3>Course Search</h3>
            <input
                placeholder="Search your course"
                onChange={(event) => setQuery(event.target.value)}
            />
            {COURSEPOOL.filter((post) => {
                if (query === "") {
                    return post;
                } else if (
                    post.code.toLowerCase().includes(query.toLowerCase())
                ) {
                    return post;
                }
            }).map((post, index) => {
                <div key={index}>
                    <p>{post.code}</p>
                    <p>{post.description}</p>
                </div>;
            })}
            <Row>
                <Col>
                    {COURSEPOOL.map((course: Course) => (
                        <div key={course.code} style={{ marginBottom: "4px" }}>
                            <Button
                                onClick={() => chooseCourse(course)}
                                size="sm"
                            >
                                {course.code}
                            </Button>
                        </div>
                    ))}
                </Col>
            </Row>
            <Row>
                <Col>
                    <strong>Course Pool:</strong>
                    {courses.map((course: Course) => (
                        <li key={course.code}>{course.code}</li>
                    ))}
                    <Button onClick={clearCourses}>Clear Course</Button>
                </Col>
            </Row>
        </Stack>
    );
}
