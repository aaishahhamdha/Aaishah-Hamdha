import React from 'react';
import './Skills.css';

import pmImg from '../../assets/pm.png';
import leadershipImg from '../../assets/lead.jpeg';
import timeManagementImg from '../../assets/time.png';
import problemSolvingImg from '../../assets/ps.jpeg';
import effectiveCommunicationImg from '../../assets/com.jpeg';
import criticalThinkingImg from '../../assets/crit.jpeg';
import StressManagementImg from '../../assets/stress.png';


import javaImg from '../../assets/javaImg.svg';
import cImg from '../../assets/cImg.png';
import pythonImg from '../../assets/pythonImg.png';
import jsImg from '../../assets/jsImg.png';
import reactImg from '../../assets/reactImg.png';
import djangoImg from '../../assets/djangoImg.svg';
import nodeImg from '../../assets/nodejs.png';
import sql from '../../assets/mysqlImg.png';
import postmanImg from '../../assets/postman.png';
import figmaImg from '../../assets/figmaImg.png';
import gimpImg from '../../assets/gimp.png';
import photoshopImg from '../../assets/ps.svg.png';
import canvaImg from '../../assets/canva.webp';
import blenderImg from '../../assets/blender.png';

const technicalSkills = [
  { id: 8, imgSrc: javaImg, name: 'Java' },
  { id: 9, imgSrc: cImg, name: 'C Programming ' },
  { id: 10, imgSrc: pythonImg, name: 'Python ' },
  { id: 11, imgSrc: jsImg, name: 'JavaScript ' },
  { id: 12, imgSrc: reactImg, name: 'React ' },
  { id: 13, imgSrc: djangoImg, name: 'Django' },
  { id: 14, imgSrc: nodeImg, name: 'Node.js (Advanced)' },
  { id: 15, imgSrc: sql, name: 'MySQL' },
  { id: 16, imgSrc: postmanImg, name: 'Postman' },
  { id: 17, imgSrc: figmaImg, name: 'Figma' },
  { id: 18, imgSrc: gimpImg, name: 'GIMP' },
  { id: 19, imgSrc: photoshopImg, name: 'Photoshop' },
  { id: 20, imgSrc: canvaImg, name: 'Canva' },
  { id: 21, imgSrc: blenderImg, name: 'Blender' },
];


const professionalSkills = [
  { id: 1, imgSrc: pmImg, name: 'Project Management' },
  { id: 2, imgSrc: leadershipImg, name: 'Leadership/ Teamwork' },
  { id: 3, imgSrc: timeManagementImg, name: 'Time Management' },
  { id: 4, imgSrc: problemSolvingImg, name: 'Problem Solving' },
  { id: 5, imgSrc: effectiveCommunicationImg, name: 'Effective Communication' },
  { id: 6, imgSrc: criticalThinkingImg, name: 'Critical Thinking' },
  { id: 7, imgSrc: StressManagementImg, name: 'Stress Management' },
];

const getRandomDelay = () => Math.floor(Math.random() * 5) + 1; // Random delay between 1s and 6s

const Skills = () => {
  return (
    <section className='skills'>
      <div className='projects-title'>What I Do Best</div>
      <div className='skills-container'>
        <div className='tech'>
        <div className="button-container">
          <h2 className='hero-button'> Technical Skills</h2>
          </div>
          <div className='skill-grid'>
            {technicalSkills.map(skill => (
              <div
                className='skill-card'
                key={skill.id}
                style={{ animationDelay: `${getRandomDelay()}s` }}
              >
                <img src={skill.imgSrc} alt={skill.name} className='skillimg' />
                <p className='skillname'>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      
        <div className='prof'>
        <div className="button-container">
          <h2 className='hero-button'>Professional Skills</h2>
          </div>
          <div className='skill-grid'>
            {professionalSkills.map(skill => (
              <div
                className='skill-card'
                key={skill.id}
                style={{ animationDelay: `${getRandomDelay()}s` }}
              >
                <img src={skill.imgSrc} alt={skill.name} className='skillimg' />
                <p className='skillname'>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
