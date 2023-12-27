import React from 'react';
import pict_logo from '../Assets/pict_logo.png'
import logo_hack from '../Assets/logo.png'
import '../Styling/About.css'
const About = () => {
    return (
        <div className='about_us'>
            <h1>ABOUT PICT</h1>
            <div className="about_pict1">
                <div className="pict_logo">
                    <img src={pict_logo} alt="" />
                </div>
                <div className="about_content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae culpa quisquam, error facere qui dolores sed repellendus dolorem ullam, cum aut delectus! Sed facilis voluptas quaerat fuga maxime eaque in?
                        Sapiente repellat rerum, ab, accusamus neque blanditiis necessitatibus earum assumenda minima obcaecati corrupti quis voluptates sit voluptatum facere provident, optio expedita incidunt corporis doloremque. Nam sit distinctio dicta natus sapiente.
                        Recusandae rerum quaerat, tempore autem facere impedit! Deserunt iusto quidem sunt sint similique odio quos odit voluptatum itaque, voluptate natus ab! Pariatur facere minima quae similique consequatur, corporis placeat expedita!
                    </p>
                </div>
            </div>
            <h1>ABOUT TECHFIESTA</h1>
            <div className="about_pict2">
                <div className="about_content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae culpa quisquam, error facere qui dolores sed repellendus dolorem ullam, cum aut delectus! Sed facilis voluptas quaerat fuga maxime eaque in?
                        Sapiente repellat rerum, ab, accusamus neque blanditiis necessitatibus earum assumenda minima obcaecati corrupti quis voluptates sit voluptatum facere provident, optio expedita incidunt corporis doloremque. Nam sit distinctio dicta natus sapiente.
                        Recusandae rerum quaerat, tempore autem facere impedit! Deserunt iusto quidem sunt sint similique odio quos odit voluptatum itaque, voluptate natus ab! Pariatur facere minima quae similique consequatur, corporis placeat expedita!
                    </p>
                </div>
                <div className="pict_logo">
                    <img src={logo_hack} alt="" />
                </div>
            </div>
        </div>
    );
}

export default About;
