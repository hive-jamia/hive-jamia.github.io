import React from "react";
import p1 from "../src/image/project1.jpg";
import p2 from "../src/image/project2.jpg";
import p5 from "../src/image/project5.jpg";
import p4 from "../src/image/project4.jpg";

const ProjectBanner = () => {
  return (
    <div>
      <div className="USELESS">
        <div className="welcomeText">Projects</div>
        <div className="LAPTOP">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide carousel"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item">
                <img
                  src={p1}
                  alt="project"
                  className="d-block w-100 h-100 rounded"
                />
              </div>
              <div className="carousel-item  ">
                <img
                  src={p2}
                  alt="project"
                  className="d-block w-100 h-100 rounded"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={p5}
                  alt="project"
                  className="d-block w-100 h-100 rounder"
                />
              </div>
              <div className="carousel-item active">
                <img
                  src={p4}
                  alt="project"
                  className="d-block w-100 h-100 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;
