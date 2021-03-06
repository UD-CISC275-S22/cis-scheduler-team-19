import React from "react";
import { Container, Table } from "react-bootstrap";
import { Course } from "../../interfaces/course";
import { CourseEditorModal } from "../modal/courseEditorModal";

export function CourseList({
    courses,
    editCourse,
    removeCourse,
    moveCourse
}: // resetCourse
{
    courses: Course[];
    editCourse: (code: string, newCourse: Course) => void;
    removeCourse: (code: string) => void;
    moveCourse: (code: string) => void;
    // resetCourse: () => void;
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
                    {courses.map((course: Course) => (
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
                                <CourseEditorModal
                                    editCourse={editCourse}
                                    course={course}
                                    removeCourse={removeCourse}
                                    moveCourse={moveCourse}
                                ></CourseEditorModal>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
