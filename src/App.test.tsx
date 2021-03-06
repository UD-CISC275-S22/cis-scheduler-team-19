import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("There is an uploaded picture as background instead of words", () => {
    render(<App />);
    const linkElement = screen.getByText(
        /Scheduler System for CISC undergraduates/i
    );
    expect(linkElement).toBeInTheDocument();
});

test("There is a button labeled Welcome!", () => {
    const EditButton = screen.getByRole("button", {
        name: /Welcome!/i
    });
    expect(EditButton).toBeInTheDocument();
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
