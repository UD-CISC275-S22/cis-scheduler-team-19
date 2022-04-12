import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Plan } from "../interfaces/plan";

export function PlanView({ plan }: { plan: Plan }): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    return (
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
