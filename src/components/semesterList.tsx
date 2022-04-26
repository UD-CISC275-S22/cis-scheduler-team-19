import React from "react";
import { Stack, Button } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { SemesterView } from "./semesterView";
import { Course } from "../interfaces/course";
import { CourseList } from "./courseList";

export function SemesterList({
    semesters,
    courses,
    editCourse,
    removeCourse
    //editSemester,
    //removeSemester, //remove this semester from the plan,
}: {
    semesters: Semester[];
    courses: Course[];
    editCourse: (id: number, newCourse: Course) => void;
    removeCourse: (id: number) => void;
    //editSemester: (id: number, newSemseter: Semester) => void;
    //removeSemester: (id: number) => void;
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
                        //removeSemester={removeSemester}
                        //editSemester={editSemester}
                    ></SemesterView>
                </div>
            ))}
        </Stack>
    );
}
