import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <NavLink exact to="/MonHistoire" className="nav-link">
                            Mon histoire
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact to="/Realisation" className="nav-link">
                            Réalisations
                        </NavLink>
                    </li>

                    <NavLink exact to="/Home" className="navbar__link">
                        <img
                            src="./img/logo.svg"
                            alt="logo"
                            className="navbar__logo"
                        ></img>
                    </NavLink>
                    <li class="nav-item">
                        <NavLink exact to="/Temoignage" className="nav-link">
                            Témoignages
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact to="/Contact" className="nav-link">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
