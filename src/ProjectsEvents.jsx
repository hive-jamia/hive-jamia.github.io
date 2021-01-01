import React from "react";
import e1 from "../src/image/event1.jpg";
import e2 from "../src/image/event2.jpg";
import e3 from "../src/image/event3.jpg";
import e4 from "../src/image/event4.jpg";

const ProjectsEvents = () => {
  return (
    <div>
      <div className="clearfix"></div>
      <div className="container-fluid">
        <h1 className="heading">Events</h1>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <div className="zoom">
                <img src={e1} alt="" />
                <div className="caption">
                  <h4>Webinar</h4>
                  <p>
                    Webinar on emereging trends in industrial and academic research in computer science {" "}
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-xs-12 col-sm-6 col-lg-3">
              <div className="zoom">
                <img src={e2} alt="" />
                <div className="caption">
                  <h4 style={{fontSize:"17.5px",fontWeight:"bold"}}>Commpetitive Programming</h4>
                  <p>
                    A session on basics of commpetitive programming along with its do's and dont's for a begginer.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-xs-12 col-sm-6 col-lg-3">
              <div className="zoom">
                <img src={e3} alt="" />
                <div className="caption">
                  <h4 style={{fontSize:"17.5px",fontWeight:"bold"}}>Web Developement Session</h4>
                  <p>
                    It was a offline session while basics of web developemnt HTML and CSS was discussed. Along with it SEO was also laid focus on.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <div className="zoom">
                <img src={e4} alt="" />
                <div className="caption">
                  <h4>The 100</h4>
                  <p>
                    This session embarked the beggining of very famous trend in industry 100 days of code. Here the sole focus was commpetitive programming.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="heading">Projects</h1>
        <div className="container hy">
          <div className="row hi">
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <div className="zoom">
                <img src={e4} alt="" />
                <div className="caption">
                  <h4>Lorem</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-xs-12 col-sm-6 col-lg-3">
              <div className="zoom">
                <img src="https://picsum.photos/300/400" alt="" />
                <div className="caption">
                  <h4>Lorem</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-xs-12 col-sm-6 col-lg-3">
              <div className="zoom">
                <img src="https://picsum.photos/500/500" alt="" />
                <div className="caption">
                  <h4>Lorem</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <div className="zoom">
                <img src="https://picsum.photos/400/600" alt="" />
                <div className="caption">
                  <h4>Lorem</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsEvents;
