import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faCogs } from '@fortawesome/free-solid-svg-icons';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2 className="section-title">What I offer</h2>
      
      <div className="services-container">
       
        <div className="service-card">
          <div className="card-icon">
            <FontAwesomeIcon icon={faCode} className="service-icon" />
          </div>
          <div className="card-content">
            <h3>Web Development</h3>
            <p>Creating responsive and dynamic websites with modern technologies.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="card-icon">
            <FontAwesomeIcon icon={faPalette} className="service-icon" />
          </div>
          <div className="card-content">
            <h3>UI/UX Design</h3>
            <p>Designing user-friendly interfaces with a focus on aesthetics and usability.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="card-icon">
            <FontAwesomeIcon icon={faCogs} className="service-icon" />
          </div>
          <div className="card-content">
            <h3>Software Engineering</h3>
            <p>Building efficient, scalable software solutions tailored to business needs.</p>
          </div>
          
        </div>
      
      </div>
    </section>
  );
};

export default ServicesSection;
