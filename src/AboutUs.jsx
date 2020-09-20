import React from "react";
import css from "../src/image/CSS.png";
import js from "../src/image/JS.png";
import react from "../src/image/REACT.png";
import html from "../src/image/HTML.png";
import lv from "../src/image/LV.png";
import bs from "../src/image/BS.png";

const AboutUs = () => {
  return (
    <div>
      <div className="clearfix1"></div>
      <div className="container-fluid" id="about-us">
        <table align="center" width="90%">
          <tr>
            <td>
              <table
                className="bgAboutImage"
                border="0px"
                align="left"
                width="540px"
                height="540px"
              >
                <tr>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="540"
                      height="540"
                      viewBox="0 0 540 540"
                    >
                      <title>Orbital Revolution</title>
                      <path
                        className="p1"
                        d="M 68,274 A200,200 0 1,0 68, 273"
                      ></path>
                      <image
                        className="CSS"
                        href={css}
                        height="45px"
                        width="45px"
                      ></image>
                      <path
                        className="p1"
                        d="M 25,274 A245,60 0 1,0 25, 273 "
                      ></path>
                      <image
                        className="JAVASCRIPT"
                        href={js}
                        height="45px"
                        width="45px"
                      ></image>
                      <path
                        className="p1"
                        d=" M 210 88 A 245 60 60 1 1 208 86 "
                      ></path>
                      <image
                        className="REACT"
                        href={react}
                        height="45px"
                        width="45px"
                      ></image>
                      <path
                        className="p1"
                        d=" M 398 88 A 245 60 120 1 1 398 87 "
                      ></path>
                      <image
                        className="HTML"
                        href={html}
                        height="45px"
                        width="45px"
                      ></image>
                      <image
                        className="LARAVEL"
                        href={lv}
                        height="45px"
                        width="45px"
                      ></image>
                      <image
                        className="BOOTSTRAP"
                        href={bs}
                        height="45px"
                        width="45px"
                      ></image>
                    </svg>
                  </td>
                </tr>
              </table>
              <div align="center" className="ABOUTHIVE">
                <b>
                  <u>
                    <h2>About Hive</h2>
                  </u>
                </b>
                <p>
                  All Googlers have access to excellent healthcare choices. In
                  some locations, we also offer onsite wellness and healthcare
                  services, including physicians, chiropractic, physical
                  therapy, and massage services. In addition, many of our
                  offices are equipped with on-site fitness centers and classes
                  to save you time and keep you fit. Our wide assortment of on
                  campus cafes and micro kitchens provide nutritious meals and
                  snacks to keep you healthfully energized throughout the day.
                </p>
                <p>
                  We all need time away from work to recharge, travel, take care
                  of personal stuff, or spend time with family and friends. Take
                  a vacation, volunteer, or flex your workday to meet your
                  personal and business needs—there’s no one-size-fits-all
                  recipe for helping you to be at your best.
                </p>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AboutUs;
