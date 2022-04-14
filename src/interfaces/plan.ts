import { Semester } from "./semester";

export interface Plan {
    /** A unique identifier for the plan */
    plan_id: number;
    /** The brief title of the plan */
    plan_title: string;
    /** The list of several semesters */
    semester: Semester[];
    /** Wheather the plan can be shown on the page */
    publish: boolean;
}
