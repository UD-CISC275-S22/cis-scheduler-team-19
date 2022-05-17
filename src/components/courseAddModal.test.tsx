import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { CourseEditor } from "./courseEditor";
import { Course } from "../interfaces/course";
import { CourseAddModal } from "./courseAddModal";

const defaultcourse: Course = {
    code: "",
    title: "",
    description: "",
    preReq: "",
    credit: "",
    taken: true
};
const testcourse: Course = {
    code: "ACCT 207",
    title: "Accounting I",
    description: "",
    preReq: "",
    credit: "3",
    taken: true
};

describe("courseAddModal tests", () => {
    test("Edit course title is shown", () => {
        render(
            <CourseAddModal
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                addCourse={function (newCourse: Course): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const linkElement = screen.getByText(/Edit Course/i);
        expect(linkElement).toBeInTheDocument();
    });
});
