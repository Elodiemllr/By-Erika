import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer class="footer-distributed">
            <div className="footer">
                <div class="footer-left">
                    <p class="footer-links">
                        <NavLink exact to="/home">
                            Home
                        </NavLink>
                        ·
                        <NavLink exact to="/MonHistoire">
                            Presentation
                        </NavLink>
                        ·
                        <NavLink exact to="/Realisation">
                            Réalisation
                        </NavLink>
                        ·
                        <NavLink exact to="/Temoignages">
                            Témoignage
                        </NavLink>
                        ·
                        <NavLink exact to="/Contact">
                            Contact
                        </NavLink>
                        ·
                    </p>

                    <p class="footer-company-name">Elodie m &copy;</p>
                </div>

                <div class="footer-center">
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p>
                            <span>Esch-sur-alzette</span> Luxembourg
                        </p>
                    </div>
                </div>

                <div class="footer-right">
                    <p class="footer-company-about">
                        <span>A propos de ByErika</span>
                        By Erika vous propose des cadeaux personnalisés.
                    </p>

                    <div class="footer-icons">
                        <a href="https://www.facebook.com/profile.php?id=100061085753413">
                            <i class="bi bi-facebook"></i>
                        </a>

                        <a href="https://www.instagram.com/By.erika.lux/?fbclid=IwAR2RH-I7Lk-YWMdITa_AXO7SWOSZaMoBkgkakF-HsPv0asiWWte6K7DH15M">
                            <i class="bi bi-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
