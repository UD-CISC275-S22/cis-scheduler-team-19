import { Semester } from "./semester";

export interface Plan {
    /** The year where user arranges their academic plan */
    semester: Semester;
    /** A unique identifier for the plan */
    plan_id: string;
    /** Wheather the plan can be shown on the page */
    publish: boolean;
}
