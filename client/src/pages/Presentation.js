import React from "react";
import NavBar from "../components/NavBar.js";
import PresentationOne from "../components/presentationone.js";
import PresentationThree from "../components/presentationthree.js";
import PresentationTwo from "../components/presentationtwo.js";

const Presentation = () => {
    return (
        <div className="presentation">
            {" "}
            <NavBar />
            {""}
            <PresentationOne />
            <div className="quotes">
                <h3> QUOTES</h3>
            </div>{" "}
            <PresentationTwo />
            <PresentationThree />
        </div>
    );
};

export default Presentation;
