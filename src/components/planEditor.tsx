import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { Plan } from "../interfaces/plan";

export function PlanEditor({
    changeEditing,
    plan,
    editPlan,
    removePlan,
    clearPlan,
    unfulfilledPlan
}: {
    changeEditing: () => void;
    plan: Plan;
    editPlan: (id: number, newPlan: Plan) => void;
    removePlan: (id: number) => void;
    clearPlan: (id: number) => void;
    unfulfilledPlan: (id: number) => void;
}): JSX.Element {
    const [id, setId] = useState<number>(plan.id);
    const [title, setTitle] = useState<string>(plan.title);
    // const [semester, setSemester] = useState<Semester>(plan.semester);
    const [publish, setPublish] = useState<boolean>(plan.publish);
    function save() {
        editPlan(plan.id, {
            ...plan,
            title: title,
            semester: plan.semester,
            publish: publish
        });
    }
    return (
        <Container>
            <Row>
                <Col></Col>
            </Row>
        </Container>
    );
}
