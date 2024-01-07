import React from 'react';
import logo1 from '../Assets/logo.png';
import '../Styling/Themes.css';

const themeData = [
    { id: 1, name: 'Agriculture', image: logo1 },
    { id: 2, name: 'Technology', image: logo1 },
    { id: 3, name: 'Technology', image: logo1 },
    { id: 4, name: 'Technology', image: logo1 },
    { id: 5, name: 'Technology', image: logo1 },
    { id: 6, name: 'Technology', image: logo1 },
];

const Themes = () => {
    return (
        <div className="themes">
            <h1>THEMES</h1>
            <div className="theme_list">
                {themeData.map((theme) => (
                    <div key={theme.id} className="single_theme">
                        <div className="theme_image">
                            <img src={theme.image} alt="" />
                        </div>
                        <div className="theme_content">
                            <p>{theme.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Themes;
