import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import { CourseList } from "./courseList";
import { CourseAddModal } from "./courseAddModal";
import { SemesterEditor } from "./semesterEditor";

export function SemesterView({
    semester,
    course,
    //editCourse,
    //removeCourse,
    editSemester,
    deleteSemester
}: {
    semester: Semester;
    course: Course;
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
            course={course}
            editSemester={editSemester}
            deleteSemester={deleteSemester}
        ></SemesterEditor>
    ) : (
        <div>
            <div>
                <h3>
                    {semester.title} {semester.year}
                </h3>
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
                        New Course
                    </Button>
                    <Button
                        variant="danger"
                        className="m-4"
                        onClick={deleteAllCourse}
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
