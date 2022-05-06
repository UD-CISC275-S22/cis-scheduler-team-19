import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { InputInfo } from "./components/infoPage";

test("renders the course name somewhere", () => {
    render(<App />);
    const linkElement = screen.getByText(
        /Welcome to the scheduler system made for CISC undergraduate students!/i
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
