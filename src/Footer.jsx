import React from "react";
import jamia from "../src/image/JamiaLogo.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_content">
          <div className="footer_section about">
            <h3>Hive Coding Club</h3>
            <br />
            <h4>
              Department of Computer Science
              <br />
              Jamia Millia Islamia
              <br />
              New Delhi, India
            </h4>
          </div>
          <div className="footer_section links">
            <img src={jamia} alt="jamia logo" className="jamia_logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
