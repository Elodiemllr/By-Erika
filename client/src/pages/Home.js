import React from "react";
import HomeVideo from "../components/homeVideo.js";
import NavBar from "../components/NavBar.js";
import WhoAmI from "../components/WhoAmI.js";
const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <WhoAmI />
            <HomeVideo />
        </div>
    );
};

export default Home;
