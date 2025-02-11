import React from "react";
import { ReactDOM } from "react-dom";

import Main from "./components/Main.js";
import Navbar from "./components/Navbar.js";
import "./style.css"

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}