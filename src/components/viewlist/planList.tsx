import React from "react";
import { Accordion } from "react-bootstrap";
import { Plan } from "../../interfaces/plan";
import { PlanView } from "./planView";

export function PlanList({
    plans,
    deletePlan,
    editPlan
}: {
    plans: Plan[];
    deletePlan: (title: string) => void;
    editPlan: (title: string, newPlan: Plan) => void;
}): JSX.Element {
    return (
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
            {plans.map((plan, index) => (
                <Accordion.Item eventKey={index + ""} key={plan.title}>
                    <Accordion.Header>{plan.title}</Accordion.Header>
                    <Accordion.Body>
                        <PlanView
                            plan={plan}
                            editPlan={editPlan}
                            deletePlan={deletePlan}
                        ></PlanView>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}
