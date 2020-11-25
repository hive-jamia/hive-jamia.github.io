import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import TeamBanner from "./TeamBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
    };
  }

  componentDidMount() {
    axios
      .get("/team.json")
      .then((response) => {
        console.log(response);
        this.setState({ team: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { team } = this.state;

    return (
      <div>
        <TeamBanner />
        <div className="our-team top">
          <div className="container">
            <div className="col-md-12">
              <h1 className="wow slideInLeft text-center mb-10">Our Team</h1>
              <br />
            </div>
            <div className="container-fluid mb-10">
              <div className="row">
                <div className="col-12 mx-auto">
                  <div className="row gy-8">
                    {team.length
                      ? team.map((members) => (
                          <div className="col-md-3 col-12 mx-auto">
                            <div id={members.id} className="team-img">
                              <img
                                src={members.Profile}
                                alt="team1"
                                className="img-responsive wow zoomIn"
                              />
                            </div>
                            <div class="team-box">
                              <h2 class="wow slideInUp">{members.Name}</h2>
                              <h3 class="wow slideInUp">{members.Domain}</h3>
                              <div class="social-links">
                                <NavLink exact to="/">
                                  <FontAwesomeIcon
                                    className="i"
                                    icon={faLinkedin}
                                    size="lg"
                                  />
                                </NavLink>
                                <NavLink exact to="/">
                                  <FontAwesomeIcon
                                    className="i"
                                    icon={faFacebook}
                                    size="lg"
                                  />
                                </NavLink>
                                <NavLink exact to="/">
                                  <FontAwesomeIcon
                                    className="i"
                                    icon={faGithub}
                                    size="lg"
                                  />
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        ))
                      : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
