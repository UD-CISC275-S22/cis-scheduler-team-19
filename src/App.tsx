import React from "react";
import "./App.css";
import { InputInfo } from "./components/infoPage";
import { Plan } from "./interfaces/plan";
import { Semester } from "./interfaces/semester";
import { Course } from "./interfaces/course";
import plans from "./data/cisc_plans.json";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Welcome to the scheduler system made for CISC students!
            </header>
            <InputInfo></InputInfo>
        </div>
    );
}

export default App;
