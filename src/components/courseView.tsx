import React from "react";
import { Course } from "../interfaces/course";
import { useState } from "react";
import { CourseEditor } from "./CourseEditor";
import { Button, Container, Row, Col, Form } from "react-bootstrap";

export function CourseView({ 
    course,
    removeCourse,
    editCourse,
}: { 
    course: Course;
    removeCourse: (id: number) => void
    editCourse: (id: string, newCourse: Course) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    function changeEditing() {
        setEditing(!editing);
    }
        return editing ? (
            <CourseEditor
                changeEditing={changeEditing}
                course={course}
                editCourse={editCourse}
                removeCourse={removeCourse}
            ></CourseEditor>
        ):(
        <fieldset>
            <table>
                <thead>
                    <tr>
                        <th>{course.code}</th>
                        <th>{course.title}</th>
                        <th>{course.credit}</th>
                        <th>{course.description}</th>
                    </tr>
                </thead>
            </table>
        </fieldset>
    );
}
