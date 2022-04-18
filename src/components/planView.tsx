import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Plan } from "../interfaces/plan";
import { PlanEditor } from "./planEditor";

export function PlanView({ 
    plan,
    editPlan,
    removePlan,
    clearPlan,
    unfulfilledPlan,
}: { 
    plan: Plan;
    editPlan: (id: number) => void;
    removePlan: (id: number) => void;
    clearPlan: (id: number) => void;
    unfulfilledPlan: () => Plan;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    function changeEditing(){
        setEditing(!editing);
    }
    return editing ? (
        <PlanEditor
            changeEditing={changeEditing}
            plan={plan}
            editPlan={editPlan}
            removePlan={removePlan}
            clearPlan={clearPlan}
            unfulfilledPlan: () => Plan;
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
