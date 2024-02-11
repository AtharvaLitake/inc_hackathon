import React, { useState } from "react";
import "../Styling/Home.css";
import logo_hack from "../Assets/logo.png";
import pict_logo from "../Assets/pict_logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleDialogToggle = () => {
    setShowDialog(!showDialog);
  };

  return (
    <>
      <div className="marquee">
        <h4>
          REGISTRATION FEE - <b>&#8377; 400 /- </b>(Till 15th Feb)
        </h4>
      </div>
      <div className="Registeration_extension" onClick={handleDialogToggle}>
        <div className="extended">
          <h2>
            Registration <br />
            Extended
          </h2>
        </div>
      </div>
      {showDialog && (
        <div className="dialog">
          <h1>Registeration Extended</h1>
          <p>
            In the view of the requests from different colleges, registeration
            for hackathon is extended upto 15th Feb.
          </p>
          <Link to="/register" onClick={handleDialogToggle}>
            Go to Next Page
          </Link>
          <button onClick={handleDialogToggle}>Close</button>
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
