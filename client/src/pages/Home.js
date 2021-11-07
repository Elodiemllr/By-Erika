import React from "react";
import Footer from "../components/Footer.js";
import HomeAbout from "../components/homeAbout.js";
import NavBar from "../components/NavBar.js";

const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <HomeAbout />
            <Footer />
        </div>
    );
};

export default Home;
