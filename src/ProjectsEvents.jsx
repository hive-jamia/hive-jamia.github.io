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
                <img src={e2} alt="" />
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
                <img src={e3} alt="" />
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
