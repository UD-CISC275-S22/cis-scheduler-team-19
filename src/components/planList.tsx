import React from "react";
import { Stack, Button } from "react-bootstrap";
import { Plan } from "../interfaces/plan";
import { PlanView } from "./planView";

export function PlanList({
    plans,
    addPlan,
    clearPlans
}: {
    plans: Plan[];
    addPlan: (plan_id: number, newPlan: Plan) => void;
    clearPlans: (plan_id: number) => void;
}): JSX.Element {
    return (
        <div>
            <Stack gap={3}>
                {plans.map((plan: Plan) => (
                    <div key={plan.plan_id} className="bg-light border m-2 p-2">
                        <PlanView plan={plan}></PlanView>
                    </div>
                ))}
            </Stack>
            <Button>Add new</Button>
            <Button>Clear All</Button>
        </div>
    );
}
