import { Course } from "./course";

export interface Plan {
    /** The year where user arranges their academic plan */
    year: string;
    /** A unique identifier for the plan */
    plan_id: string;
    /** The list of several courses */
    courseList: Course[];
    /** Wheather the plan can be shown on the page */
    publish: boolean;
}
