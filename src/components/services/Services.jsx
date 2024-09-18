import React, { useEffect } from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faCogs, faFileAlt, faCamera, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <section className="services-section">
      <h2 className="section-title">What I offer</h2>
      
      <div className="services-container">
        <div className="service-card" data-aos="fade-up">
          <div className="card-icon">
            <FontAwesomeIcon icon={faCode} className="service-icon" />
          </div>
          <div className="card-content">
            <h3>Web Development</h3>
            <p>Creating responsive and dynamic websites with modern technologies.</p>
          </div>
        </div>
        
        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
          <div className="card-icon">
            <FontAwesomeIcon icon={faPalette} className="service-icon" />
          </div>
          <div className="card-content">
            <h3>UI/UX Design</h3>
            <p>Designing user-friendly interfaces with a focus on aesthetics and usability.</p>
          </div>
        </div>
        
        <div className="service-card" data-aos="fade-up" data-aos-delay="200">
          <div className="card-icon">
            <FontAwesomeIcon icon={faCogs} className="service-icon" />
          </div>
          <div className="card-content">
            <h3>Software Engineering</h3>
            <p>Building efficient, scalable software solutions tailored to business needs.</p>
          </div>
        </div>
        
        <div className="service-card" data-aos="fade-up" data-aos-delay="300">
          <div className="card-icon">
            <FontAwesomeIcon icon={faFileAlt} className="service-icon" />
          </div>
          <div className="card-content">
            <h3>Poster/Flyer Design</h3>
            <p>Creating eye-catching designs for posters and flyers to promote your events, products or businesses.</p>
          </div>
        </div>
        
        <div className="service-card" data-aos="fade-up" data-aos-delay="400">
          <div className="card-icon">
            <FontAwesomeIcon icon={faCamera} className="service-icon" />
          </div>
          <div className="card-content">
            <h3>Photo/Video Editing</h3>
            <p>Professional photo and video editing to enhance your media content.</p>
          </div>
        </div>
        
        <div className="service-card" data-aos="fade-up" data-aos-delay="500">
          <div className="card-icon">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="service-icon" />
          </div>
          <div className="card-content">
            <h3>Tutoring</h3>
            <p>Providing individual tutoring services in Physics(A/L), Maths, and ICT(O/L) to help students excel academically.</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ServicesSection;
