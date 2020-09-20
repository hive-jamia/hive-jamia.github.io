import React from "react";
import FooterBanner from "../src/image/Footer.png";
import jamia from "../src/image/JamiaLogo.png";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid footer">
        <div className="row">
          <img src={FooterBanner} alt="" id="BannerFooter" />
          <div className="footerText">
            <h3>Hive Coding Club</h3>
          </div>
          <div className="footerText1">
            <h5>
              Department of Computer Science
              <br />
              New Delhi, India
            </h5>
          </div>
          <img src={jamia} alt="" id="jamia-logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
