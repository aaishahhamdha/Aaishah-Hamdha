import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './contact.css'; 
import emailjs from 'emailjs-com';
import Modal from 'react-modal';
import { FaCheckCircle } from 'react-icons/fa';

Modal.setAppElement('#root'); 

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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_okpkr7z', 'template_na89ykn', formData, 'YeVpIVko6L4Uf38P_')
      .then((result) => {
        console.log(result.text);
        setModalIsOpen(true);
      }, (error) => {
        console.log(error.text);
      });
    
  
    setFormData({
      user_name: '',
      user_email: '',
      subject: '',
      message: ''
    });
  };

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
            showThumbs={true}
            autoPlay
            infiniteLoop
            interval={2000}
            showArrows={false}
            showStatus={false}
            renderIndicator={() => null}
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
        <div className="contact-form">
          <h1>Say Hello!</h1>
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

     
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Email Sent Confirmation"
        className="modal"
        overlayClassName="overlay"
      >
        <FaCheckCircle className="success-icon" />
        <h2>Thank You!</h2>
        <p>Your message has been sent successfully. I'll get back to you as soon as possible!</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </section>
  );
};

export default Contact;
