import { Course } from "./course";

export interface Semester {
    /** A unique identifier for the semester */
    semester_id: number;
    /** The brief title of the semester */
    semester_title: string;
    /** The year where user arranges their academic plan */
    semester_year: string;
    /** The list of several courses */
    courseList: Course[];
}
