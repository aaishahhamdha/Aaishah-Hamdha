import React from 'react';
import './Skills.css';

import cImg from '../../assets/c.png';
import pImg from '../../assets/p.png';
import jImg from '../../assets/j.svg';
import rImg from '../../assets/r.png';
import nImg from '../../assets/n.png';
import sImg from '../../assets/s.png';
import fImg from '../../assets/f.png';

import pmImg from '../../assets/pm.png';
import leadershipImg from '../../assets/lead.jpeg';
import timeManagementImg from '../../assets/time.png';
import problemSolvingImg from '../../assets/ps.jpeg';
import effectiveCommunicationImg from '../../assets/com.jpeg';
import criticalThinkingImg from '../../assets/crit.jpeg';
import StressManagementImg from '../../assets/crit.jpeg';
import TeamworkImg from '../../assets/com.jpeg';

const technicalSkills = [
  { id: 1, imgSrc: cImg, name: 'C Programming' },
  { id: 2, imgSrc: pImg, name: 'Python' },
  { id: 3, imgSrc: jImg, name: 'JavaScript' },
  { id: 4, imgSrc: rImg, name: 'React' },
  { id: 5, imgSrc: nImg, name: 'Node.js' },
  { id: 6, imgSrc: sImg, name: 'SQL' },
  { id: 7, imgSrc: fImg, name: 'Figma' },
];

const professionalSkills = [
  { id: 1, imgSrc: pmImg, name: 'Project Management' },
  { id: 2, imgSrc: leadershipImg, name: 'Leadership/Teamwork' },
  { id: 3, imgSrc: timeManagementImg, name: 'Time Management' },
  { id: 4, imgSrc: problemSolvingImg, name: 'Problem Solving' },
  { id: 5, imgSrc: effectiveCommunicationImg, name: 'Effective Communication' },
  { id: 6, imgSrc: criticalThinkingImg, name: 'Critical Thinking' },
  { id: 7, imgSrc: StressManagementImg, name: 'Stress Management' },
 
];

const Skills = () => {
  return (
    <section className='skills'>
      <div className='projects-title'>What I Do Best</div>
      <div className='skills-container'>
        <div className='tech'>
          <h2>Technical Skills</h2>
          <div className='skill-grid'>
            {technicalSkills.map(skill => (
              <div className='skill-card' key={skill.id}>
                <img src={skill.imgSrc} alt={skill.name} className='skillimg' />
                <p className='skillname'>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <hr className='hr' />
        <div className='prof'>
          <h2>Professional Skills</h2>
          <div className='skill-grid'>
            {professionalSkills.map(skill => (
              <div className='skill-card' key={skill.id}>
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
