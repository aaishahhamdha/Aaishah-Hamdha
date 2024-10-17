import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaGithub, FaMediumM, FaHackerrank, FaEnvelope } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Footer = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText('your-email@example.com');
    toast.success('Email copied to clipboard!');
  };

  return (
    <section className="footer">
      <div className="footer-content">
        <div className="footer-socials">
          <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://medium.com" aria-label="Medium" target="_blank" rel="noopener noreferrer">
            <FaMediumM />
          </a>
          <a href="https://hackerrank.com" aria-label="HackerRank" target="_blank" rel="noopener noreferrer">
            <FaHackerrank />
          </a>
          <a href="mailto:aaishahhamdha@gmail.com" aria-label="Copy Email">
            <FaEnvelope />
          </a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} aaishahamdha. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
