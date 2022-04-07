export interface Course {
    /** A unique identifier for the course */
    course_id: string;
    /** The brief title of the course */
    course_title: string;
    /** How many credits this course is worth */
    course_credit: number;
    /** The general introduction of the course */
    course_description: string;
}
