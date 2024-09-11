import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './contact.css'; 
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';


import one from '../../assets/1.jpg';
import two from '../../assets/2.jpg';
import three from '../../assets/3.jpg';
import four from '../../assets/4.jpg';
import five from '../../assets/5.jpg';
import six from '../../assets/6.jpg';

const Contact = () => {

  const carousalImgs = [
    { src: one, alt: 'Image 1' },
    { src: two, alt: 'Image 2' },
    { src: three, alt: 'Image 3' },
    { src: four, alt: 'Image 4' },
    { src: five, alt: 'Image 5' },
    { src: six, alt: 'Image 6' },
  ];

  return (
    <section className='cont'>
      <div className="contact-container">
      <div className="carousel-wrapper">
          <Carousel
            showThumbs={true}
            autoPlay
            infiniteLoop
            interval={2000}
            showArrows={false}
            showStatus={false}
          >
            {
              carousalImgs.map((image) => (
                <div key={image.alt} className="carousel-image-wrapper">
                  <img src={image.src} alt={image.alt} className="slide-image" />
                </div>
              ))
            }
          </Carousel>

        
        </div>
        <div className="contact-details">

          <h1>Contact Me</h1>
          <ul>
          <li><strong><FaEnvelope /></strong> <a href="mailto:aaishahhamdha@gmail.com">aaishahhamdha@gmail.com</a></li>
            <li><strong><FaPhoneAlt /></strong> <a href="tel:+123456789">+94 75 638 4278</a></li>
            <li><strong><FaLinkedin /></strong> <a href="http://www.linkedin.com/in/aaishah-hamdha/" target="_blank" rel="noopener noreferrer">Visit my LinkedIn</a></li>
            <li><strong><FaGithub /></strong> <a href="https://github.com/aaishahhamdha" target="_blank" rel="noopener noreferrer">View my GitHub</a></li>
          </ul>
        </div>
       
      </div>
    </section>
  );
};

export default Contact;
