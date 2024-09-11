import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './navbar.scss';
import { HashLink as Link } from 'react-router-hash-link';
import { FaLinkedinIn, FaGithub, FaMediumM, FaHackerrank } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";

const Navbar = () => {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleDarkMode = () => {
    if (theme === 'dark') {
      document.documentElement.classList.add('light-theme');
      setTheme('light');
    } else {
      document.documentElement.classList.remove('light-theme');
      setTheme('dark');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Detect clicks outside the menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className='navbar'>
      <div className='nav-left'>
        <div className='icons'>
          <a href="http://www.linkedin.com/in/aaishah-hamdha/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className='icon' />
          </a>
          <a href="https://github.com/aaishahhamdha" target="_blank" rel="noopener noreferrer">
            <FaGithub className='icon' />
          </a>
          <a href="https://medium.com/@aaishamdha" target="_blank" rel="noopener noreferrer">
            <FaMediumM className='icon' />
          </a>
          <a href="https://www.hackerrank.com/profile/aishahhamdha" target="_blank" rel="noopener noreferrer">
            <FaHackerrank className='icon' />
          </a>
        </div>
      </div>
      <div className='nav-right' ref={menuRef}>
        <ul className={`links ${menuOpen ? 'active' : ''}`}>
          <li><Link smooth to="#Hero" className='nav-item'>About</Link></li>
          <li><Link smooth to="#Projects" className='nav-item'>Projects</Link></li>
          <li><Link smooth to="#Skills" className='nav-item'>Skills</Link></li>
          <li><Link smooth to="#blogs" className='nav-item'>Blogs</Link></li>
          <li><Link smooth to="#Contact" className='nav-item'>Contact</Link></li>
          <img id='sun-moon' src={theme === 'dark' ? sun : moon} onClick={handleDarkMode} alt="Toggle Theme" />
        </ul>
        <MdMenu className="hamburger" onClick={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
