import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar_presentation">
                <NavLink exact to="/presentation">
                    <span>Mon histoire</span>
                </NavLink>
            </div>
            <div className="navbar_realisation">
                <NavLink exact to="/realisation">
                    <span>Réalisations</span>
                </NavLink>
            </div>
            <div className="navbar_home">
                <NavLink exact to="/home">
                    <div>
                        <img
                            src="./img/logo.svg"
                            alt="logo"
                            className="navbar_home_logo"
                        ></img>
                    </div>
                </NavLink>
            </div>
            <div className="navbar_temoignage">
                <NavLink exact to="/temoignage">
                    <span>Témoignages </span>
                </NavLink>
            </div>
            <div className="navbar_contact">
                <NavLink exact to="/contact">
                    <span>Contact </span>
                </NavLink>
            </div>
        </div>
    );
};

export default NavBar;
