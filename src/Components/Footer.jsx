import React from "react";
import "../Styling/Footer.css";
const Footer = () => {
  return (
    <div className="footer_div">
      <h1>CONTACT US</h1>
      <div className="contact1">
        <div className="contact_info">
          <p>
            <i class="fa-solid fa-user"></i>Atharva Litake
          </p>
        </div>
        <div className="contact_info">
          {" "}
          <p>
            <i class="fa-solid fa-envelope"></i><a href="mailto:litakeatharva24@gmail.com">litakeatharva24@gmail.com</a>
          </p>
        </div>
        <div className="contact_info">
          <p>
            <i class="fa-solid fa-mobile-screen"></i><a href="tel:8237095572">+91-8237095572</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
