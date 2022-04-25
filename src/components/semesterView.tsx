import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import { CourseList } from "./courseList";

export function semesterView({
    semester,
    courses,
    editCourse,
    removeCourse
}: {
    semester: Semester[];
    courses: Course[];
    editCourse: (id: number, newCourse: Course) => void;
    removeCourse: (id: number) => void;
}): JSX.Element {
    return (
        <div>
            <div>
                <CourseList
                    courses={courses}
                    editCourse={editCourse}
                    removeCourse={removeCourse}
                ></CourseList>
            </div>
        </div>
    );
}
