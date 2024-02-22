import React, { useState } from "react";
import "../Styling/Home.css";
import logo_hack from "../Assets/logo.png";
import pict_logo from "../Assets/pict_logo.png";
import Register_extended from "../Assets/Registration_extended.png";
import round1 from "../Assets/techfiesta-removebg-preview.png";
import TechFiestaTemplate from "../Assets/TechFiesta_Template.pptx";
import { Link } from "react-router-dom";

const Home = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [showDialog1, setShowDialog1] = useState(false);
  const handleDialogToggle = () => {
    setShowDialog(!showDialog);
  };
  const handleDialogToggle1 = () => {
    setShowDialog1(!showDialog1);
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
      {
        <div
          className="Registeration_extension_1"
          onClick={handleDialogToggle1}
        >
          <div className="extended">
            <img src={round1} alt="" />
          </div>
        </div>
      }

      {showDialog && (
        <div className="dialog_home">
          <h1>Regarding Idea Submission</h1>
          <p>
            Those who have paid the fees, but have not completed g-form / Not
            received a mail, please click on the link below -
          </p>
          <div className="link_to_next_page">
            <button id="next_page">
              <a href="https://forms.gle/AJWgP4aKcwqXgZKi8">
                Google Form
              </a>
            </button>
          </div>

          <hr />
          <h1>Registration Extended</h1>
          <span className="close" onClick={handleDialogToggle}>
            &times;
          </span>
          <p>
            In view of the requests from various colleges regarding idea
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
      {showDialog1 && (
        <div className="dialog_home_1">
          <h1>Round-1 Schedule</h1>
          <span className="close" onClick={handleDialogToggle1}>
            &times;
          </span>
          <p>Click on your domain to get respective schedule -</p>
          <div className="link_to_next_page_1">
            <button id="next_page_1">
              <a href="/TechFiesta Smart Cities Villages.pdf" download>
                Smart Cities / Villages
              </a>
            </button>
            <br />
            <button id="next_page_1">
              <a href="/TechFiesta HealthCare.pdf" download>
                HealthCare
              </a>
            </button>
            <br />
          </div>
          <div className="link_to_next_page_1">
            <button id="next_page_1">
              <a href="/TechFiesta Education & Technology.pdf" download>
                Education
              </a>
            </button>
            <br />
            <button id="next_page_1">
              <a href="/TechFiesta Agriculture.pdf" download>
                Agriculture
              </a>
            </button>
            <br />
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
