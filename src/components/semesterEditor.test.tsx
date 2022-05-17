import React from "react";
import { render, screen } from "@testing-library/react";
import { SemesterEditor } from "./semesterEditor";
import { cleanup } from "@testing-library/react";

describe("SemesterList Component tests", () => {
    beforeEach(() => {
        const semester = {
            title: "",
            year: "",
            courses: []
        };
        render(
            <SemesterEditor
                changeEditing={() => []}
                semester={semester}
                editSemester={() => []}
                deleteSemester={() => []}
            />
        );
    });
    afterEach(cleanup);

    test("There is a button named Save", () => {
        const Save = screen.getByRole("button", {
            name: /Save/i
        });
        expect(Save).toBeInTheDocument();
    });
});
