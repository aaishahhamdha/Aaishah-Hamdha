import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';


const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const textRef = useRef(null);
  const texts = [
    "IT Undergraduate",
    "Aspiring Software Engineer",
    "Explorer"
  ];
  const speed = 50; // Typing speed in milliseconds
  const delay = 1000; // Delay before starting to erase

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
    <section className="hero-section">
      <div className="hero-container">
        <div className="text-content">
          <h2 className="title2">Hey there!</h2>
         
          <h1 className="name1"> <hi className="name2">It's</hi> Aaishah Hamdha</h1>
          <h2 className="title" ref={textRef}></h2> 
          <p className="about">
            Self-motivated and passionate about tech, I thrive on solving challenges and exploring innovative solutions. I’m eager to apply my skills in impactful ways.
          </p>
          <div className="button-container">
            <a href="/Resume.pdf" className="hero-button" target="_blank" rel="noopener noreferrer">View Resume</a>
            <a href="#Projects" className="hero-button">Show My Work</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
