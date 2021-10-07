import React from "react";
import NavBar from "../components/NavBar.js";
import PresentationOne from "../components/presentationone.js";
import PresentationTwo from "../components/presentationtwo.js";

const Presentation = () => {
    return (
        <div className="presentation">
            {" "}
            <NavBar />
            {""}
            <PresentationOne />
            <h3> QUOTES</h3>
            <PresentationTwo />
        </div>
    );
};

export default Presentation;
