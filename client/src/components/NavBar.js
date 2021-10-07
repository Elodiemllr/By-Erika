import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink exact to="/presentation" className="navbar__link">
                Mon histoire
            </NavLink>
            <NavLink exact to="/realisation" className="navbar__link">
                Réalisations
            </NavLink>

            <NavLink exact to="/home" className="navbar__link">
                <img
                    src="./img/logo.svg"
                    alt="logo"
                    className="navbar__link__logo"
                ></img>
            </NavLink>
            <NavLink exact to="/temoignage" className="navbar__link">
                Témoignages
            </NavLink>
            <NavLink exact to="/contact" className="navbar__link">
                Contact
            </NavLink>
        </div>
    );
};

export default NavBar;
