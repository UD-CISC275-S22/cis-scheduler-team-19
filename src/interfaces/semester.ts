import { Course } from "./course";

export interface Semester {
    /** which semester it is */
    semester_id: number;
    /**  */
    semester_title: string;
    /** */
    semester_year: string;
    /** The list of several courses */
    courseList: Course[];
}
