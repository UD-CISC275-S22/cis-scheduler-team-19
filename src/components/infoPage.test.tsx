import React from "react";
import { render, screen } from "@testing-library/react";
import { InputInfo } from "./infoPage";
import userEvent from "@testing-library/user-event";

describe("InputInfo Component tests", () => {
    beforeEach(() => {
        render(<InputInfo />);
    });

    test("Cannot leave input box blank and drop down box original", () => {
        const confirm = screen.getByRole("button", { name: /Confirm/i });
        const nameBox = screen.getByRole("textbox");
        userEvent.type(nameBox, "");
        confirm.click();
        expect(window.alert("Please enter your name"));
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "Choose your Academic Year");
        confirm.click();
        expect(window.alert("Please choose your Academic Year"));
    });

    test("Clearing the plan works", () => {
        const [, second, third, fourth, fifth, , clear] =
            screen.queryAllByRole("button");
        third.click();
        second.click();
        fifth.click();
        let currentPlan = screen.queryAllByRole("listitem");
        expect(currentPlan).toHaveLength(3);
        expect(currentPlan[0].textContent).toEqual(third.textContent);
        expect(currentPlan[1].textContent).toEqual(second.textContent);
        expect(currentPlan[2].textContent).toEqual(fifth.textContent);
        clear.click();
        currentPlan = screen.queryAllByRole("listitem");
        expect(currentPlan).toHaveLength(0);
        fourth.click();
        currentPlan = screen.queryAllByRole("listitem");
        expect(currentPlan).toHaveLength(1);
        expect(currentPlan[0].textContent).toEqual(fourth.textContent);
    });
});
