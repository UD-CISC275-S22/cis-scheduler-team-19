import React from "react";
import { Stack, Button, Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { CourseView } from "./courseView";

export function CourseList({
    courses
}: // addCourse,
// clearCourse
{
    courses: Course[];
    addCourse: (id: number, newCourse: Course) => void;
    clearCourse: (id: number) => void;
}): JSX.Element {
    return (
        <div>
            <Table striped bordered hover>
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
                            <td>
                                <CourseView course={course}></CourseView>
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
