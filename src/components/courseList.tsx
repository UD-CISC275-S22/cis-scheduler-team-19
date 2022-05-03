import React from "react";
import { Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { CourseEditor } from "./courseEditor";

export function CourseList({
    courses,
    editCourse,
    removeCourse
}: {
    courses: Course[];
    editCourse: (id: number, newCourse: Course) => void;
    removeCourse: (id: number) => void;
}): JSX.Element {
    return (
        <div>
            <Table striped bordered hover id="courseTable">
                <thead>
                    <tr>
                        <th>Course Code</th>
                        <th>Course Title</th>
                        <th>Course Description</th>
                        <th>Course Credit</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course: Course) => (
                        <tr key={course.id} className="bg-light border m-2 p-2">
                            <td>{course.code}</td>
                            <td>{course.title}</td>
                            <td>{course.description}</td>
                            <td>{course.credit}</td>
                            <td>
                                <CourseEditor
                                    course={course}
                                    editCourse={editCourse}
                                    removeCourse={removeCourse}
                                ></CourseEditor>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
