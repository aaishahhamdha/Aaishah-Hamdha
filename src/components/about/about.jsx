import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faTrophy, faImages } from '@fortawesome/free-solid-svg-icons'; 
import Edu from '../endorsements/Education.jsx';
import Extra from "../extracurricular/extracurricular.jsx";
import Gallery from "../gallery/gallery.jsx";
import './about.css';

const About = () => {
    const [activeSection, setActiveSection] = useState('education');

    const renderSection = () => {
        switch (activeSection) {
            case 'education':
                return <Edu />;
            case 'extracurricular':
                return <Extra />;
            case 'gallery':
                return <Gallery />;
            default:
                return <Edu />;
        }
    };

    return (
        <div className="about-container">
            <div className="menu">
                <FontAwesomeIcon
                    icon={faGraduationCap}
                    size="2x"
                    onClick={() => setActiveSection('education')}
                    className={`fa-icon menu-item ${activeSection === 'education' ? 'active' : ''}`}
                />
                <FontAwesomeIcon
                    icon={faTrophy}
                    size="2x"
                    onClick={() => setActiveSection('extracurricular')}
                    className={`fa-icon menu-item ${activeSection === 'extracurricular' ? 'active' : ''}`}
                />
                <FontAwesomeIcon
                    icon={faImages}
                    size="2x"
                    onClick={() => setActiveSection('gallery')}
                    className={`fa-icon menu-item ${activeSection === 'gallery' ? 'active' : ''}`}
                />
            </div>

            <div className={`content ${activeSection ? 'active' : ''}`}>
                {renderSection()}
            </div>
        </div>
    );
}

export default About;
