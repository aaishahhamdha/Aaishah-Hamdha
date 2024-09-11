import React from 'react';
import './Education.css';
import uom from "../../assets/uom.jpg";
import clc from "../../assets/clc.jpeg";
import bcc from "../../assets/bcc.jpg";
import gzc from "../../assets/gzc.jpeg";

const educationDetails = [
  {
    institution: "University of Moratuwa",
    duration: "2022-2026 (expected)",
    degree: "BSc Hons in Information Technology",
    gpa: "SGPA 3.95/4.00",
    image: uom
  },
  {
    institution: "Ceylon Ladies’ Campus, Warakapola",
    duration: "2018-2020",
    degree: "GCE AL- Bio Science",
    grades: "Phy- A | Chem- A | Bio- C | Z-Score - 1.8611",
    image: clc
  },
  {
    institution: "Baduriya Central College, Mawanella",
    duration: "2014-2017",
    degree: "GCE Ordinary Level",
    grades: "8AB",
    image: bcc
  },
  {
    institution: "Zahira National School, Gampola",
    duration: "2006-2012",
    image: gzc
  }
];

const Education = () => {
  return (
    <section className="education-section">
      <h1 className='projects-title'>My Academic Journey</h1>
      <div className="education-list">
        {educationDetails.map((education, index) => (
          <div className="education-item" key={index}>
            <div className="image-container">
              <img src={education.image} alt={education.institution} className="education-image" />
            </div>
            <div className="education-content">
              <h3 className="education-institution">{education.institution} ({education.duration})</h3>
              <p className="education-degree">{education.degree}</p>
              {education.gpa && <p className="education-gpa gpa-highlight">{education.gpa}</p>}
              {education.grades && <p className="education-grades">{education.grades}</p>}
              {education.zScore && <p className="education-zscore">{education.zScore}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
