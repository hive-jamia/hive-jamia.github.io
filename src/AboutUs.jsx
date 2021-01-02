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
                  <h1 className="heading">About Hive</h1>
                </b>
                <p>
                Hive, a student-run cooperative club of Jamia Millia Islamia, inherits the motto “He taught man what he knew not”,  and aims at encouraging ‘innovation and creativity’ among students. As learning is the best means of self-improvement, we as a team do ample projects and other programs, and they are our vital opportunities of learning.
                </p>
                <p>
                This club majorly involves students to develop real world projects, together we transform ideas into reality. We focus on developing motivation among the students for coding and bring like-minded people together to develop critical projects so that they get industry-ready and can contribute to the society as well. 
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
