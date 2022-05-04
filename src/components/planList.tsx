import React from "react";
import { Stack } from "react-bootstrap";
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
        <div>
            <Stack gap={3}>
                {plans.map((plan: Plan) => (
                    <div key={plan.title} className="bg-light border m-2 p-2">
                        <PlanView
                            plan={plan}
                            editPlan={editPlan}
                            deletePlan={deletePlan}
                        ></PlanView>
                    </div>
                ))}
            </Stack>
        </div>
    );
}
