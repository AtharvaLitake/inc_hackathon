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
              TechFiesta, the PICT International Hackathon, is a thrilling
              convergence of global tech talent set against the backdrop of
              innovation and collaboration. This exciting event gathers
              brilliant minds from around the world to tackle pressing
              challenges and create groundbreaking solutions in the realm of
              technology. Participants engage in a dynamic exchange of ideas,
              leveraging their diverse skill sets to push the boundaries of what
              is possible. The hackathon provides a unique platform for
              networking and learning, fostering an environment where creativity
              flourishes, and innovation takes center stage. As teams immerse
              themselves in intensive coding sessions, problem-solving, and
              prototyping, TechFiesta becomes a hub for the exchange of
              knowledge and the birthplace of cutting-edge projects. Beyond the
              competition, this international hackathon serves as a catalyst for
              forging new connections, pushing the limits of technological
              exploration, and contributing to the ever-evolving landscape of
              global innovation. TechFiesta at PICT promises to be an
              unforgettable journey into the future of technology.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
