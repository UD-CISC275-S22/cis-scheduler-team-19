import React from "react";
import { Accordion } from "react-bootstrap";
import { Plan } from "../interfaces/plan";
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
            {plans.map((plan: Plan) => (
                // how to increase the value of eventKey when add new plan ?
                <Accordion.Item eventKey="0" key={plan.title}>
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
