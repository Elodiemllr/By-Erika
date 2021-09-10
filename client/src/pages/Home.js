import React from "react";
import NavBar from "../components/NavBar.js";
import WhoAmI from "../components/WhoAmI.js";
const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <WhoAmI />
        </div>
    );
};

export default Home;
