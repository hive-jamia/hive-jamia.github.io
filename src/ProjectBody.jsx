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
              <img src="data:image/jpeg;base64,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" alt="pro" />
              <div className="caption">
                <p>
                Web application which emphasis on the quality of blogging by implementing partial concepts of blockchain & Social networking sites{" "}
                </p>
                <button><a href="https://github.com/aryabhatta22/Qblogging.git">Read more</a></button>
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
                <p>
                mlpack: a scalable C++ machine learning library{" "}
                </p>
                <button><a href="https://github.com/zjaweds/mlpack.git">Read more</a></button>
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
                <p>
                Hall Allotment System for my hostel : Indira Gandhi Hall{" "}
                </p>
                <button><a href="https://github.com/sabasarwar/Hall-Allotment-System.git">Read more</a></button>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="zoom">
              <div className="heading">
                <h3>Stock Exchange Prediction</h3>
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
                <h3>Project Title</h3>
              </div>
              <img src="https://picsum.photos/250/400" alt="pro" />
              <div className="caption">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
                <button>Read more</button>
              </div>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-6 col-lg-4">
            <div className="zoom">
              <div className="heading">
                <h3>Project Title</h3>
              </div>
              <img src="https://picsum.photos/300/450" alt="pro" />
              <div className="caption">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
                <button>Read more</button>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="zoom">
              <div className="heading">
                <h3>Project Title</h3>
              </div>
              <img src="https://picsum.photos/200/300" alt="pro" />
              <div className="caption">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
                <button>Read more</button>
              </div>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-6 col-lg-4">
            <div className="zoom">
              <div className="heading">
                <h3>Project Title</h3>
              </div>
              <img src="https://picsum.photos/250/300" alt="pro" />
              <div className="caption">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
                <button>Read more</button>
              </div>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-6 col-lg-4">
            <div className="zoom">
              <div className="heading">
                <h3>Project Title</h3>
              </div>
              <img src="https://picsum.photos/300/300" alt="pro" />
              <div className="caption">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
                <button>Read more</button>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="zoom">
              <div className="heading">
                <h3>Project Title</h3>
              </div>
              <img src="https://picsum.photos/200/600" alt="pro" />
              <div className="caption">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
                <button>Read more</button>
              </div>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-6 col-lg-4">
            <div className="zoom">
              <div className="heading">
                <h3>Project Title</h3>
              </div>
              <img src="https://picsum.photos/250/700" alt="pro" />
              <div className="caption">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
                <button>Read more</button>
              </div>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-6 col-lg-4">
            <div className="zoom">
              <div className="heading">
                <h3>Project Title</h3>
              </div>
              <img src="https://picsum.photos/300/800" alt="pro" />
              <div className="caption">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
                <button>Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBody;
