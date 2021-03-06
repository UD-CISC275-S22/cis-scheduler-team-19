import React from "react";
import { render, screen } from "@testing-library/react";
import { CourseEditorModal } from "./courseEditorModal";
import { cleanup } from "@testing-library/react";

describe("CourseEditor Component tests", () => {
    beforeEach(() => {
        const course = {
            code: "",
            title: "",
            description: "",
            preReq: "",
            credit: "",
            taken: true
        };
        render(
            <CourseEditorModal
                course={course}
                editCourse={() => []}
                removeCourse={() => []}
                moveCourse={() => []}
            />
        );
    });
    afterEach(cleanup);

    test("There is a button labeled Edit", () => {
        const EditButton = screen.getByRole("button", {
            name: /Edit/i
        });
        expect(EditButton).toBeInTheDocument();
    });
});
