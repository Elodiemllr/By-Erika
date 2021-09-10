import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import Contact from "./pages/Contact.js";
import Home from "./pages/Home.js";
import Presentation from "./pages/Presentation.js";
import Realisation from "./pages/Realisations.js";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/presentation" exact component={Presentation} />
                <Route path="/realisation" exact component={Realisation} />
                <Route path="/contact" exact component={Contact} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};
export default App;
