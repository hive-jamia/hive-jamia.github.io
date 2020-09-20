import React from "react";
import Home from "./Home";
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
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
