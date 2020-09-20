import React from "react";
import ban from "../src/image/Banner.png";
import down from "../src/image/DownArrow.svg";

const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <img src={ban} alt="banner" id="BannerPicture" />
          <img src={down} alt="down" id="DownArrow" />
          <div className="welcomeText">Welcome to</div>
          <div className="welcomeText1">Hive Coding Club</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
