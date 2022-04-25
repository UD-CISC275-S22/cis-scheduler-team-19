import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";

export function SemesterEditor({
    changeEditing,
    semester,
    editSemester,
    clearCourses, //clear all courses in this semester
    insertCourse //insert a course in this semester
}: {
    changeEditing: () => void;
    semester: Semester;
    editSemester: (id: number, newSemseter: Semester) => void;
    clearCourses: (id: number) => void;
    insertCourse: (id: number) => void;
}): JSX.Element {
    const [title, setTitle] = useState<string>(semester.title);
    const [year, setYear] = useState<string>(semester.year);
    const [courseList, setCourseList] = useState<Course[]>(semester.courseList);

    return <div></div>;
}
