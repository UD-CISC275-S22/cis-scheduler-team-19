import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { CourseEditor } from "./courseEditor";

export function CourseList({
    courses,
    editCourse,
    removeCourse,
    moveCourse,
    resetCourse
}: {
    courses: Course[];
    editCourse: (code: string, newCourse: Course) => void;
    removeCourse: (code: string) => void;
    moveCourse: (code: string) => void;
    resetCourse: (code: string) => void;
}): JSX.Element {
    return (
        <Container>
            <Table striped bordered hover id="courseTable">
                <thead>
                    <tr>
                        <th>Course Code</th>
                        <th>Course Title</th>
                        <th>Course Description</th>
                        <th>PreReq</th>
                        <th>Course Credit</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr
                            key={course.code}
                            className="bg-light border m-2 p-2"
                        >
                            <td>{course.code}</td>
                            <td>{course.title}</td>
                            <td>{course.description}</td>
                            <td>{course.preReq}</td>
                            <td>{course.credit}</td>
                            <td>
                                <CourseEditor
                                    editCourse={editCourse}
                                    course={course}
                                    removeCourse={removeCourse}
                                    moveCourse={moveCourse}
                                ></CourseEditor>
                                <Button
                                    onClick={() => resetCourse(course.code)}
                                    className="reset-course-btn"
                                    data-testid="reset-btn"
                                >
                                    Reset
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
