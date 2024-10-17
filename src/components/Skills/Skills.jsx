import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Skills.css';




import javaImg from '../../assets/javaImg.svg';
import cImg from '../../assets/cImg.png';
import pythonImg from '../../assets/pythonImg.png';
import jsImg from '../../assets/jsImg.png';
import reactImg from '../../assets/reactImg.png';
import htmlImg from '../../assets/html.jpg';
import cssImg from '../../assets/css.webp';
import djangoImg from '../../assets/djangoImg.svg';
import nodeImg from '../../assets/nodejs.png';
import mysqlImg from '../../assets/mysqlImg.png';
import sqliteImg from '../../assets/sqlite.png';
import mssqlImg from '../../assets/mssql.png';
import postmanImg from '../../assets/postman.png';
import insomniaImg from '../../assets/insomnia.png';
import figmaImg from '../../assets/figmaImg.png';
import gimpImg from '../../assets/gimp.png';
import photoshopImg from '../../assets/ps.svg.png';
import canvaImg from '../../assets/canva.webp';
import blenderImg from '../../assets/blender.png';
import vsCodeImg from '../../assets/vscode.png';
import intelliJImg from '../../assets/intellij.png';
import gitImg from '../../assets/git.png';
import githubImg from '../../assets/github.jpg';

const technicalSkills = {
  "Programming Languages": [
    { id: 1, imgSrc: javaImg, name: 'Java' },
    { id: 2, imgSrc: cImg, name: 'C' },
    { id: 3, imgSrc: pythonImg, name: 'Python' },
    { id: 4, imgSrc: jsImg, name: 'JavaScript' }
  ],
  "Web Development": [
    { id: 5, imgSrc: reactImg, name: 'React' },
    { id: 6, imgSrc: htmlImg, name: 'HTML' },
    { id: 7, imgSrc: cssImg, name: 'CSS' },
    { id: 8, imgSrc: djangoImg, name: 'Django' },
    { id: 9, imgSrc: jsImg, name: 'JavaScript' },
    { id: 10, imgSrc: nodeImg, name: 'Node.js' },
  ],
  "Database": [
    { id: 12, imgSrc: mysqlImg, name: 'MySQL' },
    { id: 13, imgSrc: sqliteImg, name: 'SQLite' },
    { id: 14, imgSrc: mssqlImg, name: 'MsSQL' },
  ],
  "Version Control": [
    { id: 27, imgSrc: gitImg, name: 'Git' },
    { id: 28, imgSrc: githubImg, name: 'Github' }
  ],
  "Testing": [
    { id: 17, imgSrc: postmanImg, name: 'Postman' },
    { id: 18, imgSrc: insomniaImg, name: 'Insomnia' }
  ],
  "IDE": [
    { id: 25, imgSrc: vsCodeImg, name: 'VSCode' },
    { id: 26, imgSrc: intelliJImg, name: 'IntelliJ' }
  ],
  "Design": [
    { id: 19, imgSrc: figmaImg, name: 'Figma' },
    { id: 20, imgSrc: gimpImg, name: 'GIMP' },
    { id: 21, imgSrc: photoshopImg, name: 'Photoshop' },
    { id: 22, imgSrc: canvaImg, name: 'Canva' },
    { id: 23, imgSrc: blenderImg, name: 'Blender' },
  ],
};

const Skills = () => {
  const categoryRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    categoryRefs.current.forEach(ref => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 25,
          speed: 300,
          glare: true,
          "max-glare": 0.5,
        });
      }
    });
  }, []);

  return (
    <section className='skills'>
      <div className='projects-title'>My Skills</div>
      <div className='skills-container'>
        {Object.entries(technicalSkills).map(([category, skills], index) => (
          <div
            className='skill-category-card'
            key={category}
            data-aos="fade-up"
            ref={el => categoryRefs.current[index] = el}
          >
            <div className="skill-category">
              <h2 className='category'>{category}</h2>
              <div className='skill-grid'>
                {skills.map(skill => (
                  <div className='skill-card' key={skill.id} aria-label={skill.name}>
                    <img src={skill.imgSrc} alt={skill.name} className='skillimg' />
                    <p className='skillname'>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
