import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export function planView(): JSX.Element {
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
