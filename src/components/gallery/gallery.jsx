import React from 'react';
import './gallery.css';

import Fit21_1 from "../../assets/gallery/fit21 1.jpeg";
import Fit21_2 from "../../assets/gallery/fit21 2.jpeg";
import Fit21_3 from "../../assets/gallery/fit21 3.jpeg";
import FreshersInauguration from "../../assets/gallery/freshers inauguration.jpeg";
import Choir from "../../assets/gallery/choir.jpeg";
import Magazine from "../../assets/gallery/magazine.jpeg";
import Pref from "../../assets/gallery/pref.jpeg";
import Prefect from "../../assets/gallery/prefect.jpeg";
import Sports from "../../assets/gallery/sports.png";
import Sports2 from "../../assets/gallery/sports.2.jpeg";
import SecondYearProject from "../../assets/gallery/2nd year project.png";
import WSO2 from "../../assets/gallery/wso2.jpeg";
import Announce from "../../assets/gallery/announce.png";

const photos = [
  { title: 'Fit21 Level 1', src: Fit21_1 },
  { title: 'Fit21 Level 1', src: Fit21_3 },
  { title: 'Freshers Inauguration- CLC', src: FreshersInauguration },
  { title: 'School Choir-BCC', src: Choir },
  { title: 'Prefects Orientation - CLC', src: Pref },
  { title: 'Prefects Guild-CLC', src: Prefect },
  { title: 'Sports Meet 2019-Vice House captain', src: Sports },
  { title: 'Fit21 Level 2', src: Fit21_2 },
  { title: 'Sports Meet 2019-Vice House captain', src: Sports2 },
  { title: 'Level 2 Project Team', src: SecondYearProject },
  { title: 'Sceince Magazine Launch', src: Magazine },
  { title: 'WSO2 - Company Visit', src: WSO2 },
  { title: 'Annual Day 2018 - CLC', src: Announce },
 
];

const Gallery = () => {
  return (
    <div>
    <h1 className="section-title2 projects-title">Moments</h1>
    <div className="gallery">
       
      {photos.map((photo, index) => (
        <div key={index} className="gallery-item">
          <img src={photo.src} alt={photo.title} className="gallery-photo" />
          <div className="gallery-item-title">{photo.title}</div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Gallery;
