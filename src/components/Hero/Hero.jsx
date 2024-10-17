import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import StyledStarsCanvas from './bg.jsx';
import './Hero.css';
import dp from "../../assets/aaishah.jpg"

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const texts = ["IT Undergraduate", "Aspiring Software Engineer", "Explorer"];
  const speed = 50; 
  const delay = 1000; 

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      let textIndex = 0;
      let charIndex = 0;
      let isTyping = true;
      let typingTimeout;

      function typeText() {
        if (isTyping) {
          if (charIndex < texts[textIndex].length) {
            if (textRef.current) {
              textRef.current.textContent += texts[textIndex][charIndex];
            }
            charIndex++;
            typingTimeout = setTimeout(typeText, speed);
          } else {
            isTyping = false;
            setTimeout(() => {
              eraseText();
            }, delay);
          }
        }
      }

      function eraseText() {
        if (!isTyping) {
          if (charIndex > 0) {
            if (textRef.current) {
              textRef.current.textContent = textRef.current.textContent.slice(0, -1);
            }
            charIndex--;
            typingTimeout = setTimeout(eraseText, speed);
          } else {
            isTyping = true;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(() => {
              typeText();
            }, delay);
          }
        }
      }

      typeText();

      return () => {
        clearTimeout(typingTimeout);
        if (textRef.current) textRef.current.textContent = '';
      };
    }
  }, [isLoaded]);

  return (
    <section className="hero-section" ref={heroRef}>
      <StyledStarsCanvas />
      
      <motion.div 
        className="hero-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >  
                <div className="dp-container">
          <img src={dp} alt="Profile" className="profile-image" />
        </div>
        <div className="text-content">
          <h2 className="title2">Hey there!</h2>
          <h1 className="name1"><span className="name2">It's</span> Aaishah Hamdha</h1>
          <h2 className="title" ref={textRef}></h2>
          <p className="about">
          I am a quick-learner, a strong communicator and a problem solver
fascinated by the potential of technology to reshape reality. I aspire to
become an impactful Software Engineer , eager to expand my skillset
through mentorship from experienced mentors and live projects, and
am excited to contribute my enthusiasm and skills to a dynamic team.
          </p>
          <div className="button-container">
            <a href="https://drive.google.com/file/d/1Z-TWlF3wbC8gJIIS7yv2lh4SrO2KNkWU/view?usp=sharing" className="hero-button" target="_blank" rel="noopener noreferrer">View Resume</a>
            
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;
