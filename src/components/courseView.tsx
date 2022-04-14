import React from "react";
import { Course } from "../interfaces/course";

export function CourseView({ course }: { course: Course }): JSX.Element {
    return (
        <fieldset>
            <table>
                <thead>
                    <tr>
                        <th>{course.course_id}</th>
                        <th>{course.course_title}</th>
                        <th>{course.course_description}</th>
                        <th>{course.course_credit}</th>
                    </tr>
                </thead>
            </table>
        </fieldset>
    );
}
