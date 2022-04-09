import React, { useState } from "react";
import "./App.css";
import { InputInfo } from "./components/infoPage";

function App(): JSX.Element {
    const [plans, setPlans] = useState(null);

    function startEdit() {
        setPlans(null);
    }

    return (
        <div className="App">
            <header className="App-header">
                Welcome to the scheduler system made for CISC students!
            </header>
            <InputInfo startEdit={startEdit}></InputInfo>
        </div>
    );
}

export default App;
