import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
// import { Semester } from "../interfaces/semester";
import { Plan } from "../interfaces/plan";
// import { SemesterEditor } from "./semesterEditor";

export function PlanEditor({
    changeEditing,
    plan,
    editPlan,
    deletePlan
}: {
    changeEditing: () => void;
    plan: Plan;
    editPlan: (id: number, newPlan: Plan) => void;
    deletePlan: (id: number) => void;
}): JSX.Element {
    // const [id, setId] = useState<number>(plan.id);
    const [title, setTitle] = useState<string>(plan.title);
    // const [semesters, setSemesters] = useState<Semester[]>(plan.semester);
    // const [publish, setPublish] = useState<boolean>(plan.publish);

    function save() {
        editPlan(plan.id, {
            ...plan,
            title: title,
            semester: plan.semester,
            publish: true
        });
    }

    function cancel() {
        changeEditing();
    }

    // function editSemester(id: number, newSemester: Semester) {
    //     setSemesters(
    //         semesters.map(
    //             (semester: Semester): Semester =>
    //                 semester.id === id ? newSemester : semester
    //         )
    //     );
    // }

    // function deleteSemester(id: number) {
    //     setSemesters(
    //         semesters.filter(
    //             (semester: Semester): boolean => semester.id !== id
    //         )
    //     );
    // }
    return (
        <Container>
            <Row>
                <Col>
                    {/* Title */}
                    <Form.Group controlId="formPlanTitle" as={Row}>
                        <Form.Label column sm={2}>
                            Title:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={title}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setTitle(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/* Semester */}
                    {/* <SemesterEditor
                        changeEditing={changeEditing}
                        semester={semester}
                        editSemester={editSemester}
                        deleteSemester={deleteSemester}
                    ></SemesterEditor> */}
                    {/* Save/Cancel */}
                    <Button onClick={save} variant="success" className="me-4">
                        Save
                    </Button>
                    <Button onClick={cancel} variant="warning" className="me-5">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => deletePlan(plan.id)}
                        variant="danger"
                        className="me-8"
                    >
                        Delete
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
