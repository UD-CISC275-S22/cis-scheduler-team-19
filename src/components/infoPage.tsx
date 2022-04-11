import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { PlanList } from "../components/planList";
import { Plan } from "../interfaces/plan";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

const YEARS = ["Freshmen", "Sophomore", "Junior", "Senior", "Graduate"];
const DEFAULT_YEAR = YEARS[0];

export function InputInfo(): JSX.Element {
    const [name, setName] = useState<string>("");
    const [year, setYear] = useState<string>(DEFAULT_YEAR);
    const [editing, setEditing] = useState<boolean>(false);
    const [plans, setPlans] = useState<Plan[]>([]);

    function updateName(event: ChangeEvent) {
        setName(event.target.value);
    }

    function updateYear(event: ChangeEvent) {
        setYear(event.target.value);
    }

    function startEditing() {
        setEditing(!editing);
    }

    function addPlan(plan_id: string, newPlan: Plan) {
        setPlans(
            plans.map(
                (plan: Plan): Plan =>
                    plan.plan_id === plan_id ? newPlan : plan
            )
        );
    }

    function clearPlans(plan_id: string) {
        setPlans(
            plans.filter((plan: Plan): boolean => plan.plan_id !== plan_id)
        );
    }

    return editing ? (
        <PlanList
            plans={plans}
            addPlan={addPlan}
            clearPlans={clearPlans}
        ></PlanList>
    ) : (
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
                <Button className="m-4" onClick={startEditing}>
                    Confirm
                </Button>
            </div>
        </div>
    );
}
