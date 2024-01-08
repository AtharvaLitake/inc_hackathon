import React from 'react';
import '../Styling/Home.css'
import Footer from '../Components/Footer'
import logo_hack from '../Assets/logo.png'
const Home = () => {
    return (
        <>
        <div className='main_page'>
            <div className="content-home">
                <h2>SOCIETY FOR COMPUTER TECHNOLOGY AND RESEARCH'S
                    PUNE INSTITUTE OF COMPUTER TECHNOLOGY
                    PRESENTS
                </h2>
                <h1>
                    TECHFIESTA - INTERNATIONAL PICT HACKATHON
                </h1>
                <img src={logo_hack} alt="logo_of hackathon" />
            </div>/
        </div>
        </>
    );
}

export default Home;
