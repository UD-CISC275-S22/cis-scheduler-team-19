import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Plan } from "../interfaces/plan";
import { PlanEditor } from "./planEditor";
import { semesterList } from "./semesterList";

export function PlanView({
    plan,
    editPlan,
    removePlan,
    clearPlan,
    unfulfilledPlan
}: {
    plan: Plan;
    editPlan: (id: number) => void;
    removePlan: (id: number) => void;
    clearPlan: (id: number) => void;
    unfulfilledPlan: (id: number) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    function changeEditing() {
        setEditing(!editing);
    }
    return editing ? (
        <PlanEditor
            changeEditing={changeEditing}
            plan={plan}
            editPlan={editPlan}
            removePlan={removePlan}
            clearPlan={clearPlan}
            unfulfilledPlan={unfulfilledPlan}
        ></PlanEditor>
    ) : (
        <Container>
            <Row>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
            </Row>
        </Container>
    );
}
