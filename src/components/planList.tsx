import React from "react";
import { Nav, Tab, Tabs } from "react-bootstrap";
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
        <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
        >
            {plans.map((plan: Plan) => (
                <Tab eventKey="home" title={plan.title} key={plan.title}>
                    <Nav.Link eventKey="first">{plan.title}</Nav.Link>
                </Tab>
            ))}
            <Tab.Content>
                {plans.map((plan: Plan) => (
                    <Tab.Pane eventKey="first" key={plan.title}>
                        <PlanView
                            plan={plan}
                            editPlan={editPlan}
                            deletePlan={deletePlan}
                        ></PlanView>
                    </Tab.Pane>
                ))}
            </Tab.Content>
        </Tabs>
    );
}
