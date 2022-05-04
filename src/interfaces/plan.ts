import { Semester } from "./semester";

export interface Plan {
    /** A unique identifier for the plan */
    id: number;
    /** The brief title of the plan */
    title: string;
    /** The list of several semesters */
    semester: Semester[];
    /** Wheather the plan can be shown on the page */
    publish: boolean;
}
