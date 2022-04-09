import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { InputInfo } from "./infoPage";

export function planView(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);

    function changeEdit() {
        setEdit(!edit);
    }

    return edit ? (
        <InputInfo startEdit={changeEdit}></InputInfo>
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
