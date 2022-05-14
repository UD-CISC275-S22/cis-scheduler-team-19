import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import { CourseList } from "./courseList";
import { CourseAddModal } from "./courseAddModal";
import { SemesterEditor } from "./semesterEditor";
import { CoursePool } from "./coursePool";

export function SemesterView({
    semester,
    editSemester,
    deleteSemester
}: {
    semester: Semester;
    editSemester: (title: string, newSemseter: Semester) => void;
    deleteSemester: (title: string) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const courses = semester.courses;
    function setCourses(newCourses: Course[]) {
        editSemester(semester.title, { ...semester, courses: newCourses });
    }
    const [showAddModal, setShowAddModal] = useState(false);
    // alerts if users want to clear all course
    const [show, setShow] = useState(false);
    // after clearing courses, clear button disabled
    const [disable, setDisable] = React.useState(false);

    function changeEditing() {
        setEditing(!editing);
    }

    function addCourse(newCourse: Course) {
        const existing = courses.find(
            (course: Course): boolean => course.code === newCourse.code
        );
        if (existing === undefined) {
            setCourses([...courses, newCourse]);
        }
    }

    function addCourseList(newCourses: Course[]) {
        newCourses.map((course): void => addCourse(course));
    }

    function editCourse(code: string, newCourse: Course) {
        setCourses(
            courses.map(
                (course: Course): Course =>
                    course.code === code ? newCourse : course
            )
        );
    }

    function resetCourse() {
        setCourses(courses);
    }

    function moveCourse(code: string) {
        const targeting = semester;
        if (targeting === undefined) {
            setCourses([...courses]);
            setCourses(
                courses.filter(
                    (course: Course): boolean => course.code !== code
                )
            );
        }
        setShowAddModal(false);
    }

    function removeCourse(code: string) {
        setCourses(
            courses.filter((course: Course): boolean => course.code !== code)
        );
        setShowAddModal(false);
    }

    function deleteAllCourse() {
        setCourses([]);
        setShow(!show);
        if (courses !== []) {
            setDisable(!disable);
        }
    }

    function cancel() {
        setShow(!show);
    }
    // This function is for skipSemester, but not quite sure if we need a addSemester at the same time,
    // since for it bascially funtions as deleteSemester
    function skipSemester() {
        deleteSemester(semester.title);
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
                <h3>
                    {semester.title} {semester.year}{" "}
                    <Button variant="light" onClick={changeEditing}>
                        ✏️
                    </Button>
                    <Button
                        variant="light"
                        onClick={skipSemester}
                        style={{ float: "right" }}
                    >
                        ⏭️
                    </Button>
                </h3>
                <CoursePool addCourseList={addCourseList}></CoursePool>
                <CourseList
                    courses={courses}
                    editCourse={editCourse}
                    removeCourse={removeCourse}
                    moveCourse={moveCourse}
                    resetCourse={resetCourse}
                ></CourseList>
                <div>
                    <Button
                        variant="success"
                        className="m-4"
                        onClick={handleShowAddModal}
                    >
                        New Course
                    </Button>
                    <Alert show={show} variant="danger">
                        <Alert.Heading>Warning ⚠️</Alert.Heading>
                        <p>Are you sure to delete all courses?</p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={cancel} variant="outline-success">
                                Wait a second
                            </Button>
                            <Button
                                onClick={deleteAllCourse}
                                variant="outline-danger"
                            >
                                No doubt
                            </Button>
                        </div>
                    </Alert>
                    <Button
                        variant="danger"
                        className="m-4"
                        disabled={disable}
                        onClick={() => setShow(true)}
                    >
                        Clear All Courses
                    </Button>
                    <CourseAddModal
                        show={showAddModal}
                        handleClose={handleCloseAddModal}
                        addCourse={addCourse}
                    ></CourseAddModal>
                </div>
            </div>
        </div>
    );
}
