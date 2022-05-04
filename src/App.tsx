import React from "react";
import "./App.css";
import { InputInfo } from "./components/infoPage";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Welcome to the scheduler system made for CISC undergraduate
                students!
            </header>
            <InputInfo></InputInfo>
        </div>
    );
}

export default App;
