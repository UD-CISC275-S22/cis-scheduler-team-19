import React from "react";
import "./App.css";
import { InputInfo } from "./components/infoPage";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Scheduler System for CISC undergraduates
            </header>
            <InputInfo></InputInfo>
        </div>
    );
}

export default App;
