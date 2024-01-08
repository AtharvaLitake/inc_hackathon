import React from "react";
import "../Styling/Footer.css";
const Footer = () => {
  return (
    <div className="footer_div">
        <h1>CONTACT US</h1>
      <div className="contact1">
        <div className="contact_info">
          <p><i class="fa-solid fa-user"></i>Atharva Litake</p>
        </div>
        <div className="contact_info">
          <i class="fa-solid fa-envelope"></i>
          <a href="https://gmail.com">litakeatharva24@gmail.com</a>
        </div>
        <div className="contact_info">
          <p><i class="fa-solid fa-mobile-screen"></i>+91-8237095572</p>
        </div>
      </div>
      <div className="contact1">
        <div className="contact_info">
          <p><i class="fa-solid fa-user"></i>Atharva Litake</p>
        </div>
        <div className="contact_info">
          <i class="fa-solid fa-envelope"></i>
          <a href="https://gmail.com">litakeatharva24@gmail.com</a>
        </div>
        <div className="contact_info">
          <p><i class="fa-solid fa-mobile-screen"></i>+91-8237095572</p>
        </div>
      </div>
      <h1>Connect to us</h1>
    </div>
  );
};

export default Footer;
