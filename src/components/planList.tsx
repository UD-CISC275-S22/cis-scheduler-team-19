import React from "react";
import { Stack, Button } from "react-bootstrap";
import { Plan } from "../interfaces/plan";
import { planView } from "./planView";

export function PlanList({
    plans,
    addPlan,
    clearPlans
}: {
    plans: Plan[];
    addPlan: (plan_id: string, newPlan: Plan) => void;
    clearPlans: (plan_id: string) => void;
}): JSX.Element {
    return (
        <div>
            <Stack gap={3}></Stack>
            <Button>Add new</Button>
            <Button>Clear All</Button>
        </div>
    );
}
