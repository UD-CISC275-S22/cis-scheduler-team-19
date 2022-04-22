import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
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
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th scope="col">Course Code</th>
                        <th scope="col">Course Title</th>
                        <th scope="col">Course Description</th>
                        <th scope="col">Course Credit</th>
                        <th scope="col"></th>
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
            <Button>Add new</Button>
            <Button>Clear All</Button>
        </div>
    );
}
