import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { CourseEditor } from "./CourseEditor";
import { CourseAddModal } from "./courseAddModal";

export function CourseList({
    courses,
    editCourse,
    removeCourse
}: {
    courses: Course[];
    editCourse: (id: number, newCourse: Course) => void;
    removeCourse: (id: number) => void;
}): JSX.Element {
    const [course, setCourse] = useState<Course[]>(courses);
    const [showAddModal, setShowAddModal] = useState(false);

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    function addCourse(newCourse: Course) {
        const existing = course.find(
            (course: Course): boolean => course.id === newCourse.id
        );
        if (existing === undefined) {
            setCourse([...course, newCourse]);
        }
    }

    function deleteCourse(id: number) {
        setCourse(course.filter((course: Course): boolean => course.id !== id));
        setShowAddModal(false);
    }

    function deleteAllCourse() {
        setCourse([]);
    }

    return (
        <div>
            <Table striped bordered hover id="courseTable">
                <thead>
                    <tr>
                        <th scope="col">Course Code</th>
                        <th scope="col">Course Title</th>
                        <th scope="col">Course Description</th>
                        <th scope="col">Course Credit</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course: Course) => (
                        <tr key={course.id} className="bg-light border m-2 p-2">
                            <td>{course.code}</td>
                            <td>{course.title}</td>
                            <td>{course.description}</td>
                            <td>{course.credit}</td>
                            <td>
                                <CourseEditor
                                    course={course}
                                    editCourse={editCourse}
                                    removeCourse={removeCourse}
                                ></CourseEditor>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
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
                ></CourseAddModal>
            </div>
        </div>
    );
}
