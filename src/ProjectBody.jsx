import React from "react";

const ProjectBody = () => {
  return (
    <div>
      <div className="container project">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="zoom">
              <div className="heading">
                <h3>Q blogging</h3>
              </div>
              <img src="https://s27389.pcdn.co/wp-content/uploads/2019/08/four-unexpected-blockchain-use-cases.jpeg" alt="pro" />
              <div className="caption">
                <div className="container"><p>
                Web application which emphasis on the quality of blogging by implementing partial concepts of blockchain & Social networking sites{" "}
                </p>
                </div>
                <div className="container">
                <button><a href="https://github.com/aryabhatta22/Qblogging.git">Read more</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-6 col-lg-4">
            <div className="zoom">
              <div className="heading">
                <h3>mlpack</h3>
              </div>
              <img src="https://avatars3.githubusercontent.com/u/10216045?s=400&v=4" alt="pro" />
              <div className="caption">
                <div className="container">
                <p>
                mlpack: a scalable C++ machine learning library{" "}
                </p>
                </div>
                <div className="container">
                <button><a href="https://github.com/zjaweds/mlpack.git">Read more</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-6 col-lg-4 ">
            <div className="zoom">
              <div className="heading">
                <h3>Hall Allotment System</h3>
              </div>
              <img src="https://dhanjivpandey.com/wp-content/uploads/2018/05/php.jpg" alt="pro" />
              <div className="caption">
              <div className="container">
                <p>
                Hall Allotment System for my hostel : Indira Gandhi Hall{" "}
                </p>
                </div>
                <div className="container">
                <button><a href="https://github.com/sabasarwar/Hall-Allotment-System.git">Read more</a></button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="zoom">
              <div className="heading">
                <h3 style={{fontSize:"26px",fontWeight:"bold"}}>Stock Exchange Prediction</h3>
              </div>
              <img src="https://miro.medium.com/max/3840/1*opzxrBna63YDbd8_pM5trw.png" alt="pro" />
              <div className="caption">
                <p>
                The model predicts whether the stock prices of a company are going to be Up or Down based on the historical performance of its stock.{" "}
                </p>
                <button><a href="https://github.com/aryabhatta22/Stock-Exchange-Prediction-using-CNN.git">Read more</a></button>
              </div>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-6 col-lg-4">
            <div className="zoom">
              <div className="heading">
                <h3>Online Shopping Website</h3>
              </div>
              <img src="https://www.monsterinsights.com/wp-content/uploads/2019/11/breathtaking-online-shopping-statistics-you-never-knew.png" alt="pro" />
              <div className="caption">
                <p>
                Online shopping website demo developed using JSP and Microsoft Access{" "}
                </p>
                <br/><br/>
                <button><a href="https://github.com/sanaeram5/online_shopping_website.git">Read more</a></button>
              </div>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-6 col-lg-4">
            <div className="zoom">
              <div className="heading">
                <h3>Project Scribe</h3>
              </div>
              <img src="https://miro.medium.com/max/3200/1*N6ugtpXET1pOLysSk_DWaQ.png" alt="pro" />
              <div className="caption">
                <p>
                  Developed using Typescript & Javascript{" "}
                </p>
                <br/><br/>
                <button><a href="https://github.com/maarifhaque/Scribe.git">Read more</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBody;
