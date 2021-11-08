import React from "react";
import Footer from "../components/Footer.js";
import HomeAbout from "../components/homeAbout.js";
import HomeImage from "../components/homeImage.js";
import NavBar from "../components/NavBar.js";

const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <HomeAbout />
            <HomeImage />
            <Footer />
        </div>
    );
};

export default Home;
