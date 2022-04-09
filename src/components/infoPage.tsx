import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

const YEARS = ["Freshmen", "Sophomore", "Junior", "Senior", "Graduate"];
const DEFAULT_YEAR = YEARS[0];

export function InputInfo({
    startEdit
}: {
    startEdit: () => void;
}): JSX.Element {
    const [name, setName] = useState<string>("");
    const [year, setYear] = useState<string>(DEFAULT_YEAR);
    const [confirm, setConfirm] = useState<boolean>(false);

    function updateName(event: ChangeEvent) {
        setName(event.target.value);
    }

    function updateYear(event: ChangeEvent) {
        setYear(event.target.value);
    }

    function changeConfirm() {
        setConfirm(!confirm);
    }

    return (
        <div>
            <Form.Group controlId="FormName" as={Row}>
                <Form.Label column sm={2}>
                    Your Name:
                </Form.Label>
                <Col>
                    <Form.Control
                        style={{ padding: 6 }}
                        value={name}
                        onChange={updateName}
                        placeholder="Enter Name"
                    />
                </Col>
            </Form.Group>
            <Form.Group controlId="FormYear" as={Row}>
                <Form.Label column sm={2}>
                    Academic Year:
                </Form.Label>
                <Col>
                    <Form.Select
                        style={{ padding: 6 }}
                        value={year}
                        onChange={updateYear}
                    >
                        {YEARS.map((year: string) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </Form.Select>
                </Col>
            </Form.Group>
            <div>
                <Button className="m-4" onClick={changeConfirm}>
                    Confirm
                </Button>
            </div>
        </div>
    );
}
