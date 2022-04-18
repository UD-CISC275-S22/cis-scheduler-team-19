export interface Course {
    /** A unique identifier for the course */
    id: number;
    /** Ex: CISC108 */
    code: string;
    /** The brief title of the course */
    title: string;
    /** How many credits this course is worth */
    credit: string;
    /** The general introduction of the course */
    description: string;
    /** A list of the courses required to take this course */
    preReq: string;
    /** Whether or not this course has been taken */
    taken: boolean;
}
