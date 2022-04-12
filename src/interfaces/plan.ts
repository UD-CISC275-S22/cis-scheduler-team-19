import { Semester } from "./semester";

export interface Plan {
    /** A unique identifier for the plan */
    plan_id: number;
    /** */
    plan_title: string;
    /** The year where user arranges their academic plan */
    semester: Semester[];
    /** Wheather the plan can be shown on the page */
    publish: boolean;
}
