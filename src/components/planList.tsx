import React from "react";
import { Stack, Button } from "react-bootstrap";
import { Plan } from "../interfaces/plan";
import { PlanView } from "./planView";

export function PlanList({
    plans
}: // addPlan,
// clearPlans
{
    plans: Plan[];
    addPlan: (plan_id: number, newPlan: Plan) => void;
    clearPlans: (plan_id: number) => void;
}): JSX.Element {
    function editPlan() {
        return null;
    }

    function removePlan() {
        return null;
    }

    function clearPlan() {
        return null;
    }

    function unfulfilledPlan() {
        return plans.map((plan: Plan) => plan);
    }

    return (
        <div>
            <Stack gap={3}>
                {plans.map((plan: Plan) => (
                    <div key={plan.id} className="bg-light border m-2 p-2">
                        <PlanView
                            plan={plan}
                            editPlan={editPlan}
                            removePlan={removePlan}
                            clearPlan={clearPlan}
                            unfulfilledPlan={unfulfilledPlan}
                        ></PlanView>
                    </div>
                ))}
            </Stack>
            <Button>Add new</Button>
            <Button>Clear All</Button>
        </div>
    );
}
