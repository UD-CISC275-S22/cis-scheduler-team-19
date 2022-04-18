import React from "react";
import { Course } from "../interfaces/course";

export function CourseView({ course }: { course: Course }): JSX.Element {
    return (
        <fieldset>
            <table>
                <thead>
                    <tr>
                        <th>{course.id}</th>
                        <th>{course.title}</th>
                        <th>{course.description}</th>
                        <th>{course.credit}</th>
                    </tr>
                </thead>
            </table>
        </fieldset>
    );
}
