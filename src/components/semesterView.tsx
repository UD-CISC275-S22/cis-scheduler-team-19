import React, { useState } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import { CourseList } from "./courseList";
<<<<<<< HEAD
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
=======
import { CourseAddModal } from "./courseAddModal";
import { SemesterEditor } from "./semesterEditot";

export function SemesterView({
    semester,
    //courses,
    //editCourse,
    //removeCourse,
    editSemester,
    deleteSemester
}: {
    semester: Semester;
    //courses: Course[];
    //editCourse: (id: number, newCourse: Course) => void;
    //removeCourse: (id: number) => void;
    editSemester: (id: number, newSemseter: Semester) => void;
    deleteSemester: (id: number) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [courses, setCourse] = useState<Course[]>(semester.courseList);
    const [showAddModal, setShowAddModal] = useState(false);

    function changeEditing() {
        setEditing(!editing);
    }

    function addCourse(newCourse: Course) {
        const existing = courses.find(
            (course: Course): boolean => course.id === newCourse.id
        );
        if (existing === undefined) {
            setCourse([...courses, newCourse]);
        }
    }

    function editCourse(id: number, newCourse: Course) {
        setCourse(
            courses.map(
                (course: Course): Course =>
                    course.id === id ? newCourse : course
            )
        );
    }

    function removeCourse(id: number) {
        setCourse(
            courses.filter((course: Course): boolean => course.id !== id)
        );
        setShowAddModal(false);
    }

    function deleteAllCourse() {
        setCourse([]);
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    return editing ? (
        <SemesterEditor
            changeEditing={changeEditing}
            semester={semester}
            editSemester={editSemester}
            deleteSemester={deleteSemester}
        ></SemesterEditor>
    ) : (
        <div>
            <div>
                <h3>{semester.title}</h3>
                <CourseList
                    courses={courses}
                    editCourse={editCourse}
                    removeCourse={removeCourse}
                ></CourseList>
                <div>
                    <Button
                        variant="success"
                        className="m-4"
                        onClick={handleShowAddModal}
                    >
                        Add New
                    </Button>
                    <Button
                        variant="danger"
                        className="m-4"
                        onClick={deleteAllCourse}
                    >
                        Clear All
                    </Button>
                    <CourseAddModal
                        show={showAddModal}
                        handleClose={handleCloseAddModal}
                        addCourse={addCourse}
                    ></CourseAddModal>
                </div>
            </div>
        </div>
>>>>>>> 0edb8cc9bc616f81b2ebe3ef1f7280f968b9c68d
    );
}
