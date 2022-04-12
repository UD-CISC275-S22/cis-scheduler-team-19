import { Course } from "./course";
export interface Semester {
    /** which semester it is */
    semester_id: string;
    /** The list of several courses */
    courseList: Course[];
}
