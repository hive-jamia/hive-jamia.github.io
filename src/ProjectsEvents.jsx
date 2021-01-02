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
      <h2 className="heading">Events</h2>
        <div className="container main-container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <div className="zoom">
                <img src={e1} alt="" />
                <div className="caption">
                  <p>Webinar</p>
                </div>
              </div>
            </div>
            <div className=" col-xs-12 col-sm-6 col-lg-3">
              <div className="zoom">
                <img src={e2} alt="" />
                <div className="caption">
                  <p>Commpetitive Programming</p>
                </div>
              </div>
            </div>
            <div className=" col-xs-12 col-sm-6 col-lg-3">
              <div className="zoom">
                <img src={e3} alt="" />
                <div className="caption">
                  <p>Web Developement Session</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <div className="zoom">
                <img src={e4} alt="" />
                <div className="caption">
                  <p>100 days of Code</p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <h2 className="heading">Projects</h2>
        <div className="container hy pr">
          <div className="row hi">
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <div className="zoom">
                <img src="https://s27389.pcdn.co/wp-content/uploads/2019/08/four-unexpected-blockchain-use-cases.jpeg" alt="" />
                <div className="caption">
                  <h6>QBlogging</h6>
                  <div className="project-desc">
                    <p>
                    Web application which emphasis on the quality of blogging by implementing partial concepts of blockchain & Social networking sites{" "}
                    </p> 
                  </div>
                  <br/><br/><br/>  
                  <button type="button" class="btn btn-outline-dark btn-sm"><a href="https://github.com/aryabhatta22/Qblogging.git">Source Code</a></button>
                </div>
              </div>
            </div>
            <div className=" col-xs-12 col-sm-6 col-lg-3">
              <div className="zoom">
                <img src="https://avatars3.githubusercontent.com/u/10216045?s=400&v=4" alt="" />
                <div className="caption">
                  <h6>MLpack</h6>
                  <div className="project-desc">
                    <p>
                    MLpack, A scalable C++ machine learning library</p>
                  </div> 
                  <br/><br/><br/><br/>
                  <button type="button" class="btn btn-outline-dark btn-sm"><a href="https://github.com/zjaweds/mlpack.git">Source Code</a></button>
                </div>
              </div>
            </div>
            <div className=" col-xs-12 col-sm-6 col-lg-3">
              <div className="zoom">
                <img src="https://dhanjivpandey.com/wp-content/uploads/2018/05/php.jpg" alt="" />
                <div className="caption">
                  <h6>Hall Allotment System</h6>
                  <div className="project-desc">
                    <p>Hall Allotment System for my hostel, Indira Gandhi Hall</p>
                  </div>
                  <br/><br/><br/><br/>
                  <button type="button" class="btn btn-outline-dark btn-sm"><a href="https://github.com/sabasarwar/Hall-Allotment-System.git">Source Code</a></button>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <div className="zoom">
                <img src="https://miro.medium.com/max/3840/1*opzxrBna63YDbd8_pM5trw.png" alt="" />
                <div className="caption">
                  <h6>Stock Exchange Prediction</h6>
                  <div className="project-desc">
                    <p>
                    The model predicts whether the stock prices of a company are going to be Up or Down based on the historical performance of its stock.</p>
                  </div>
                  <br/><br/><br/>
                 <button type="button" class="btn btn-outline-dark btn-sm"><a href="https://github.com/aryabhatta22/Stock-Exchange-Prediction-using-CNN.git">Source Code</a></button>
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
