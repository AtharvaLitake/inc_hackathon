import React from "react";
import pict_logo from "../Assets/pict_logo.png";
import logo_hack from "../Assets/logo.png";
import "../Styling/About.css";
import Footer from "./Footer";
const About = () => {
  return (
    <>
      <div className="about_us">
        <h1>ABOUT PICT</h1>
        <div className="about_pict1">
          <div className="pict_logo">
            <img src={pict_logo} alt="" />
          </div>
          <div className="about_content">
            <p>
              Pune Institute of Computer Technology (popularly known as PICT),
              is an elite academic Institute located in Pune, “The Oxford of the
              East.” Since our establishment in 1983, PICT has been
              revolutionizing the education sector by nurturing skilled and
              industry-ready engineers.PICT believes in value-based quality
              education in Information and Communication Technology (ICT).PICT
              has a well-established Research & Development (R&D) center. The
              faculty members have undertaken numerous research projects funded
              by renowned organizations.
            </p>
          </div>
        </div>
        <h1>ABOUT TECHFIESTA</h1>
        <div className="about_pict1">
          <div className="pict_logo">
            <img src={logo_hack} alt="" />
          </div>
          <div className="about_content">
            <p>
              Pune Institute of Computer Technology (popularly known as PICT),
              is an elite academic Institute located in Pune, “The Oxford of the
              East.” Since our establishment in 1983, PICT has been
              revolutionizing the education sector by nurturing skilled and
              industry-ready engineers.PICT believes in value-based quality
              education in Information and Communication Technology (ICT).PICT
              has a well-established Research & Development (R&D) center. The
              faculty members have undertaken numerous research projects funded
              by renowned organizations.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
