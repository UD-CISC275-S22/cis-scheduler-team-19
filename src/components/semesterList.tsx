import React from "react";
import { Stack } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import { SemesterView } from "./semesterView";

export function SemesterList({
    semesters,
    courses,
    editCourse,
    removeCourse,
    editSemester,
    clearSemester
}: {
    semesters: Semester[];
    courses: Course[];
    editCourse: (id: number, newCourse: Course) => void;
    removeCourse: (id: number) => void;
    editSemester: (id: number, newSemseter: Semester) => void;
    clearSemester: (id: number) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {semesters.map((semester: Semester) => (
                <div key={semester.id} className="bg-light border m-2 p-2">
                    <SemesterView
                        semester={semester}
                        courses={courses}
                        editCourse={editCourse}
                        removeCourse={removeCourse}
                        clearSemester={clearSemester}
                        editSemester={editSemester}
                    ></SemesterView>
                </div>
            ))}
        </Stack>
    );
}
