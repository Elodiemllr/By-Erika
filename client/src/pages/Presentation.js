import React from "react";
import NavBar from "../components/NavBar.js";
import PresentationOne from "../components/presentationone.js";

const Presentation = () => {
    return (
        <div className="presentation">
            {" "}
            <NavBar />
            {""}
            <PresentationOne />
        </div>
    );
};

export default Presentation;
