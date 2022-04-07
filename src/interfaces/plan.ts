import { Course } from "./course";

export interface Plan {
    year: string;
    plan_id: string;
    courseList: Course[];
    publish: boolean;
}
