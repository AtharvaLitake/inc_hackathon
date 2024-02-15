import React, { useState } from "react";
import "../Styling/Home.css";
import logo_hack from "../Assets/logo.png";
import pict_logo from "../Assets/pict_logo.png";
import Register_extended from "../Assets/Registration_extended.png";
import TechFiestaTemplate from "../Assets/TechFiesta_Template.pptx";
import { Link } from "react-router-dom";

const Home = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleDialogToggle = () => {
    setShowDialog(!showDialog);
  };

  return (
    <>
      <div className="marquee" id="ppt_download">
        <a href={TechFiestaTemplate} download>
          Download Idea submission ppt template -- Click here
        </a>
      </div>
      <div className="Registeration_extension" onClick={handleDialogToggle}>
        <div className="extended">
          <img src={Register_extended} alt="" />
        </div>
      </div>
      {showDialog && (
        <div className="dialog">
          <h1>Registration Extended</h1>
          <span className="close" onClick={handleDialogToggle}>
              &times;
          </span>
          <p>
            In the view of the requests from different colleges regarding idea
            submission, registration & idea submission for hackathon is extended
            upto 19th Feb.
          </p>
          <div className="link_to_next_page">
            <button id="next_page">
              <Link to="/register" onClick={handleDialogToggle}>
                Register Now
              </Link>
            </button>
          </div>
          <hr />
          <h1>Instructions Regarding Online Meeting</h1>
          <p>
            An online meeting is scheduled on 16th February at 11:00 am for all
            team leaders, please check the instructions below.
          </p>
          <div className="link_to_next_page">
            <button id="next_page">
              <Link to="/instructions" onClick={handleDialogToggle}>
                Details
              </Link>
            </button>
          </div>
        </div>
      )}
      <div className="main_page">
        <div className="content-home">
          <div className="home_content">
            <img src={pict_logo} alt="logo_of pict" />
          </div>
          <div className="home_content">
            <h4>SOCIETY FOR COMPUTER TECHNOLOGY AND RESEARCH'S</h4>
            <h2>PUNE INSTITUTE OF COMPUTER TECHNOLOGY</h2>
            <h4>PRESENTS</h4>
          </div>
        </div>
        <h1>TECHFIESTA - AN INTERNATIONAL HACKATHON</h1>
        <img src={logo_hack} alt="logo_of hackathon" />
      </div>
    </>
  );
};

export default Home;
