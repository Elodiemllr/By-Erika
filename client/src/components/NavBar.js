import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink exact to="/MonHistoire" className="navbar__link">
                Mon histoire
            </NavLink>
            <NavLink exact to="/Realisation" className="navbar__link">
                Réalisations
            </NavLink>

            <NavLink exact to="/Home" className="navbar__link">
                <img
                    src="./img/logo.svg"
                    alt="logo"
                    className="navbar__link__logo"
                ></img>
            </NavLink>
            <NavLink exact to="/Temoignage" className="navbar__link">
                Témoignages
            </NavLink>
            <NavLink exact to="/Contact" className="navbar__link">
                Contact
            </NavLink>
        </div>
    );
};

export default NavBar;
