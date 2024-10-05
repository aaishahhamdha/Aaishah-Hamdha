import React, { useState, useEffect } from 'react';
import './Education.css';
import uom from "../../assets/uom.jpeg";
import clc from "../../assets/clc.jpeg";
import bcc from "../../assets/bcc.jpg";
import gzc from "../../assets/gzc.jpeg";
import logo1 from "../../assets/logo1.png"; 
import logo2 from "../../assets/logo2.jpeg"; 
import logo3 from "../../assets/logo3.jpeg"; 
import logo4 from "../../assets/logo4.jpeg"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const educationDetails = [
  {
    institution: "University of Moratuwa",
    duration: "2022-2026 (expected)",
    degree: "BSc Hons in Information Technology",
    gpa: "SGPA 3.95/4.00",
    image: uom,
    logo: logo1,
    description:
    "I am currently reading a Bachelor of Science with Honours in Information Technology at the University of Moratuwa. I have completed 4 semesters and am currently in my third year. Ive completed modules such as Data Structures and Algorithms (A+), Object-Oriented Programming (A+), Database Management Systems(pending), Software Engineering (A), Operating Systems (A+), Object Oriented Analysis and Design (A+), Data communication(A), Operating Systems(A+) and Principles of Management(A+) among others in this course."
  },
  {
    "institution": "Ceylon Ladies’ Campus, Warakapola",
    "duration": "2018-2020",
    "degree": "GCE AL - Bio Science",
    "grades": "Phy- A | Chem- A | Bio- C, Z-Score - 1.8611",
    "image": clc,
    "logo": logo2,
    "description": "Advanced level with 2 A's in Physics and Chemistry, and a C in Biology. I actively participated in various clubs and events, including serving as Vice House Captain for the sports meet, President of the English Literature Association, Magazine Committee President, and Annual Day Announcer for 2018 and 2019. I was also a member of the Science Club and organized many events. Additionally, I was the student head and was awrded the most outstanding student of the science stream 2018."
  },
  
  {
    institution: "Baduriya Central College, Mawanella",
    duration: "2014-2017",
    degree: "GCE Ordinary Level",
    grades: "8 A's and 1 B",
    image: bcc,
    logo: logo3,
    description: "GCE Ordinary Level with 8 A's in English, Maths, Science, ICT, Religion, Tamil, History, and Sinhala and B grade in English Literature. Participated in the Science Club, Art Club, Netball, and Maths Olympiad, also received national, provincial, district, and zonal level awards."
  },
  {
    institution: "Zahira National School, Gampola",
    duration: "2006-2012",
    image: gzc,
    logo: logo4,
    description: "I served as a Junior Prefect and Class Leader, and have won national, provincial, and zonal level competitions."
  }
];

const Education = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleMoreClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="education-section">
      <div className='education-wrapper'>
        <h1 className="projects-title">My Academic Journey</h1>
        <div className="timeline">
          {educationDetails.map((education, index) => (
            <div 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} 
              key={index}
              data-aos={`fade-${index % 2 === 0 ? 'right' : 'left'}`}
            >
              <div className="badge-container" data-aos="zoom-in" data-aos-duration="1500">
                <img src={education.logo} alt={`Logo for ${education.institution}`} className="badge-logo" />
              </div>
              <div className="content-container">
                <div className="year-badge">{education.duration}</div>
                <div className="education-content">
                  <div className="image-container">
                    <img src={education.image} alt={education.institution} className="education-image" />
                  </div>
                  <div className="education-text">
                    <h3 className="education-institution">{education.institution}</h3>
                    <p className="education-degree">{education.degree}</p>
                    {education.grades && <p className="education-grades">{education.grades}</p>}
                  </div>
                </div>
                <span 
                  className="more-text" 
                  onClick={() => handleMoreClick(index)}
                >
                  {expandedIndex === index 
                    ? <>
                        Show Less <FontAwesomeIcon icon={faChevronUp} />
                      </>
                    : <>
                        More <FontAwesomeIcon icon={faChevronDown} />
                      </>
                  }
                </span>
                {expandedIndex === index && <p className="education-description">{education.description}</p>}
              </div>
            </div>
          ))}
        
        </div>
      </div>
    </section>
  );
};

export default Education;
