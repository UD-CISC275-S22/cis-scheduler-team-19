import React, { useState } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import { CourseList } from "./courseList";
import { SemesterEditor } from "./semesterEditor";

export function SemesterView({
    semester,
    courses,
    editCourse,
    removeCourse
    //editSemester,
    //clearCourses //clear all courses in a semester
}: {
    semester: Semester;
    courses: Course[];
    editCourse: (id: number, newCourse: Course) => void;
    removeCourse: (id: number) => void;
    //editSemester: (id: number, newSemseter: Semester) => void;
    //clearCourses: (id: number) => void;
}): JSX.Element {
    
    const [editing, setEditing] = useState<boolean>(false);

    function changeEditing(){
        setEditing(!editing);
    }

    return editing ? (
       <Button onClick={changeEditing}>Edit</Button>
    ) : (<Container>
            <Row>
                <Col>
                    <h3>{semester.title}</h3>
                    <CourseList
                        courses = {courses}
                        editCourse={editCourse}
                        removeCourse={removeCourse}
                    ></CourseList>
                </Col>
            </Row>
        </Container>
    );
}
