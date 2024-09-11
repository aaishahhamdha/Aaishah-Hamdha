import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import one from '../../assets/1.jpg';
import two from '../../assets/2.jpg';
import three from '../../assets/3.jpg';
import four from '../../assets/4.jpg';
import five from '../../assets/5.jpg';
import six from '../../assets/6.jpg';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const images = [one, two, three, four, five, six];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams, process.env.USER_ID)
      .then((response) => {
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        alert('Failed to send message. Please try again later.');
        console.error('Error:', error);
      });
  };

  return (
    <section className='cont'>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <h1>Say Hello</h1>
          <span>
            <input
              type="text"
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='name'
              required
            />
            <input
              type="email"
              placeholder='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='mail'
              required
            />
          </span>
          <input
            type="text"
            placeholder='Subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className='input2'
            required
          />
          <textarea
            value={message}
            placeholder='Message'
            onChange={(e) => setMessage(e.target.value)}
            className='input2'
            required
          />
          <button type="submit">Send Now</button>
        </form>
        <div className='images'>
          <div className="slider">
            <img src={images[currentIndex]} className="slide-image" alt={`Slide ${currentIndex}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
