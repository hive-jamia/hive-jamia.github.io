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
        <div className="container hy pr">
          <div className="row hi">
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <div className="zoom" style={{height:"470px"}}>
                <img src="https://s27389.pcdn.co/wp-content/uploads/2019/08/four-unexpected-blockchain-use-cases.jpeg" alt="" />
                <div className="caption">
                  <h4>Q Blogging</h4>
                  <p>
                  Web application which emphasis on the quality of blogging by implementing partial concepts of blockchain & Social networking sites{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-xs-12 col-sm-6 col-lg-3">
              <div className="zoom">
                <img src="https://avatars3.githubusercontent.com/u/10216045?s=400&v=4" alt="" />
                <div className="caption" style={{height:"600px"}}>
                  <h4>mlpack</h4>
                  <p>
                  mlpack: a scalable C++ machine learning library{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-xs-12 col-sm-6 col-lg-3">
              <div className="zoom" style={{height:"470px"}}>
                <img src="https://dhanjivpandey.com/wp-content/uploads/2018/05/php.jpg" alt="" />
                <div className="caption">
                  <h4>Hall Allotment System</h4>
                  <p>
                  Hall Allotment System for my hostel : Indira Gandhi Hall{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <div className="zoom" style={{height:"600px"}}>
                <img src="https://miro.medium.com/max/3840/1*opzxrBna63YDbd8_pM5trw.png" alt="" />
                <div className="caption">
                  <h4>Stock Exchange Prediction</h4>
                  <p>
                  The model predicts whether the stock prices of a company are going to be Up or Down based on the historical performance of its stock.{" "}
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
