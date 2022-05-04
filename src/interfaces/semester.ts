import { Course } from "./course";

export interface Semester {
    /** The brief title of the semester */
    title: string;
    /** The year where user arranges their academic plan */
    year: string;
    /** The list of several courses */
    courses: Course[];
}
