import React, { useState } from "react";
import { Button, Container, Table, Col } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { CourseEditor } from "./courseEditor";
import { CoursePool } from "./coursePool";

export function CourseList({
    courses,
    editCourse,
    removeCourse
}: {
    courses: Course[];
    editCourse: (code: string, newCourse: Course) => void;
    removeCourse: (code: string) => void;
}): JSX.Element {
    const [showAddModal, setShowAddModal] = useState(false);

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    return (
        <Container>
            <Col>
                <CoursePool></CoursePool>
            </Col>
            <Table striped bordered hover id="courseTable">
                <thead>
                    <tr>
                        <th>Course Code</th>
                        <th>Course Title</th>
                        <th>Course Description</th>
                        <th>PreReq</th>
                        <th>Course Credit</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course, index) => (
                        <tr key={index} className="bg-light border m-2 p-2">
                            <td>{course.code}</td>
                            <td>{course.title}</td>
                            <td>{course.description}</td>
                            <td>{course.preReq}</td>
                            <td>{course.credit}</td>
                            <td>
                                <Button onClick={handleShowAddModal}>
                                    Edit
                                </Button>
                                <CourseEditor
                                    show={showAddModal}
                                    handleClose={handleCloseAddModal}
                                    course={course}
                                    editCourse={editCourse}
                                    removeCourse={removeCourse}
                                    setShowAddModal={handleShowAddModal}
                                ></CourseEditor>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
