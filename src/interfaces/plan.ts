import { Semester } from "./semester";

export interface Plan {
    /** The brief title of the plan */
    title: string;
    /** The list of several semesters */
    semesters: Semester[];
    /** Wheather the plan can be shown on the page */
    publish: boolean;
}
