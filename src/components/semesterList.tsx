import React from "react";
import { Stack } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { SemesterView } from "./semesterView";

export function SemesterList({
    semesters,
    // course,
    //editCourse,
    //removeCourse,
    editSemester,
    deleteSemester
}: {
    semesters: Semester[];
    // course: Course;
    //editCourse: (id: number, newCourse: Course) => void;
    //removeCourse: (id: number) => void;
    editSemester: (id: number, newSemseter: Semester) => void;
    deleteSemester: (id: number) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {semesters.map((semester: Semester) => (
                <div key={semester.id} className="bg-light border m-2 p-2">
                    <SemesterView
                        semester={semester}
                        // course={course}
                        //editCourse={editCourse}
                        //removeCourse={removeCourse}
                        deleteSemester={deleteSemester}
                        editSemester={editSemester}
                    ></SemesterView>
                </div>
            ))}
        </Stack>
    );
}
