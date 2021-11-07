import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import Contact from "./pages/contact.js";
import Home from "./pages/Home.js";
import MonHistoire from "./pages/monHistoire.js";
import Realisation from "./pages/realisation.js";
import Temoignage from "./pages/temoignages.js";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/MonHistoire" exact component={MonHistoire} />
                <Route path="/Realisation" exact component={Realisation} />
                <Route path="/Temoignage" exact component={Temoignage} />
                <Route path="/Contact" exact component={Contact} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};
export default App;
