import React from "react";
import down from "../src/image/DownArrow.svg";

const Home = () => {
  return (
    <div>
      <div className="USELESS">
        <img src={down} alt="down" id="DownArrow" />
        <div className="welcomeText">Welcome to</div>
        <div className="welcomeText1">Hive Coding Club</div>
      </div>
    </div>
  );
};

export default Home;
