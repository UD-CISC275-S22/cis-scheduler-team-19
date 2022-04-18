import { Course } from "./course";

export interface Semester {
    /** A unique identifier for the semester */
    id: number;
    /** The brief title of the semester */
    title: string;
    /** The year where user arranges their academic plan */
    year: string;
    /** The list of several courses */
    courseList: Course[];
}
