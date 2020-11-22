import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/image/Hivelogo.png";

const Home = () => {
  return (
    <div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light transparent">
              <NavLink exact className="navbar-brand" to="/">
                <img src={logo} alt="" className="logo" />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/"
                    >
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/team"
                    >
                      Team
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/project"
                    >
                      Project
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/registerpatient"
                    >
                      Event
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/registerpatient"
                    >
                      Resources
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/registerpatient"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
