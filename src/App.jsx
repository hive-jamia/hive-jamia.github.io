import React from "react";
import Home from "./Home";
import Team from "./Team";
import Project from "./Projects";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/project" component={Project} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
