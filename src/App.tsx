import React from "react";
import "./App.css";
import { InputInfo } from "./components/infoPage";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Hexuan Jiang, Yiming
                Wang, Ziyang Jiang
            </header>
            <p>Welcome to the scheduler system made for CISC students!</p>
            <InputInfo></InputInfo>
        </div>
    );
}

export default App;
