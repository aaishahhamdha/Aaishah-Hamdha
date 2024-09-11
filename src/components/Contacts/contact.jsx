import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './contact.css'; 
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

import certOne from '../../assets/certifs/1.png';
import certTwo from '../../assets/certifs/2.png';
import certThree from '../../assets/certifs/3.png';
import certFour from '../../assets/certifs/4.png';
import certFive from '../../assets/certifs/5.png';
import certSix from '../../assets/certifs/10.png';

import certEight from '../../assets/certifs/14.png';
import certNine from '../../assets/certifs/15.png';
import certTen from '../../assets/certifs/16.png';
import certEleven from '../../assets/certifs/9.jpg';

const Contact = () => {

  const carousalImgs = [
    { src: certOne, alt: 'Certification 1' },
    { src: certTwo, alt: 'Certification 2' },
    { src: certThree, alt: 'Certification 3' },
    { src: certFour, alt: 'Certification 4' },
    { src: certFive, alt: 'Certification 5' },
    { src: certSix, alt: 'Certification 6' },
    
    { src: certEight, alt: 'Certification 8' },
    { src: certNine, alt: 'Certification 9' },
    { src: certTen, alt: 'Certification 10' },
    { src: certEleven, alt: 'Certification 11' }
  ];

  return (
    <section className='cont'>
      <div className="contact-container">
      <div className="carousel-wrapper">
      <Carousel
  showThumbs={true}   // Hide the thumbnail preview
  autoPlay
  infiniteLoop
  interval={2000}
  showArrows={false}
  showStatus={false}
  renderIndicator={() => null} // Override the default indicator rendering
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
