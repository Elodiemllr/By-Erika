import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar_link">
                <NavLink exact to="/presentation">
                    <span>Mon histoire</span>
                </NavLink>
            </div>
            <div className="navbar_link">
                <NavLink exact to="/realisation">
                    <span>Réalisations</span>
                </NavLink>
            </div>
            <div className="navbar_link">
                <NavLink exact to="/home">
                    <img
                        src="./img/logo.svg"
                        alt="logo"
                        className="navbar_link_logo"
                    ></img>
                </NavLink>
            </div>
            <div className="navbar_link">
                <NavLink exact to="/temoignage">
                    <span>Témoignages </span>
                </NavLink>
            </div>
            <div className="navbar_link">
                <NavLink exact to="/contact">
                    <span>Contact </span>
                </NavLink>
            </div>
        </div>
    );
};

export default NavBar;
