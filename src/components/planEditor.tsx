import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Plan } from "../interfaces/plan";

export function PlanEditor({
    changeEditing,
    plan,
    editPlan,
    removePlan,
    clearPlan
}: {
    changeEditing: () => void;
    plan: Plan;
    editPlan: (id: number, newPlan: Plan) => void;
    removePlan: (id: number) => void;
    clearPlan: (id: number) => void;
}): JSX.Element {
    const [course, setCourse] = useState<Course>();
    
    function save(){
        editPlan(plan.id,{
            ...plan,

            
        })
    }
}