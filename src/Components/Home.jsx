// Home.jsx

import React from "react";
import "../Styling/Home.css";
import logo_hack from "../Assets/logo.png";
import pict_logo from "../Assets/pict_logo.png";

const Home = () => {
  return (
    <>
      <div className="marquee">
        <h4>
          <i class="fa-solid fa-bell"></i>&nbsp;&nbsp;NOW PARTICIPATE AND WIN AMAZING
          PRIZES WORTH 3.5 LAKH + &nbsp;&nbsp;<i class="fa-solid fa-bell"></i>
        </h4>
      </div>
      <div className="main_page">
        <div className="content-home">
          <div className="home_content">
            <img src={pict_logo} alt="logo_of pict" />
          </div>
          <div className="home_content">
            <h2>
              SOCIETY FOR COMPUTER TECHNOLOGY AND RESEARCH'S PUNE INSTITUTE OF
              COMPUTER TECHNOLOGY PRESENTS
            </h2>
          </div>
        </div>
        <h1>TECHFIESTA - INTERNATIONAL PICT HACKATHON</h1>
        <img src={logo_hack} alt="logo_of hackathon" />
      </div>
    </>
  );
};

export default Home;
