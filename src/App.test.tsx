import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { InputInfo } from "./components/infoPage";

test("There is an uploaded picture as background instead of words", () => {
    render(<App />);
    const linkElement = screen.getByText(
        /Scheduler System for CISC undergraduates/i
    );
    expect(linkElement).toBeInTheDocument();
});

test("There is an user name input box.", () => {
    render(<InputInfo />);
    const inputBox = screen.getByRole("textbox");
    expect(inputBox).toBeInTheDocument();
});

test("There is a select box for user to choose academic year", () => {
    render(<InputInfo />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
});
