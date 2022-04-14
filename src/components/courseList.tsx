import React from "react";
import { Stack, Button } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { CourseView } from "./courseView";

export function CourseList({
    courses
}: // addCourse,
// clearCourse
{
    courses: Course[];
    addCourse: (course_id: number, newCourse: Course) => void;
    clearCourse: (course_id: number) => void;
}): JSX.Element {
    return (
        <div>
            <Stack gap={3}>
                {courses.map((course: Course) => (
                    <div
                        key={course.course_id}
                        className="bg-light border m-2 p-2"
                    >
                        <CourseView course={course}></CourseView>
                    </div>
                ))}
            </Stack>
            <Button>Add new</Button>
            <Button>Clear All</Button>
        </div>
    );
}
