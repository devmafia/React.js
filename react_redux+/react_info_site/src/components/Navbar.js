import React from "react";
import ReactDom from "react-dom";
import logo from "../assets/logo-react-js.png";

export default function Main() {
    return (
        <div>
           <nav>
            <img src={logo} styles="width: 10px" className="nav--icon"/>            
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React - Project 1</h4>
           </nav>
        </div>
    )
}