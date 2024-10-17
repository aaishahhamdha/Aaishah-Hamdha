import React, { useState, useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { Modal } from 'antd'; 
import './project.scss';
import hw from '../../assets/mactim.png';
import sw from '../../assets/sw.png';
import port from '../../assets/port.png';
import price from '../../assets/price.png';
import blogpad from '../../assets/blogpad.png';
import meal from '../../assets/meal.png';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';

const projects = [
  { 
    id: 1, 
    imgsrc: hw, 
    name: 'Mactim', 
    description: 'A device to Monitor and Control Theft in MotorBikes', 
    tech: 'Arduino, C, GPS, GSM, IR sensor, Accelerometer, LED display, Atmel Studio, Blender, KiCad', 
    tech2: 'Arduino, C, GPS, GSM, IR sensor, Accelerometer, LED display, Atmel Studio, Blender, KiCad', 
    details: 'The Mactim device features an anti-theft mode activated by a secure button press, detecting falls, theft attempts, and unauthorized ignition, sending alerts with GPS coordinates to the owner.',
    contribution: 'Responsible for developing the GSM module for SMS alerts and integrating the IR sensor for speed monitoring.',
    status: 'Completed',
    link: '' 
  },
  {
    id: 2,
    imgsrc: sw,
    name: 'Dataverse',
    description: 'NLP-based data visualization tool',
    tech: 'React.js, OAuth, OpenAI, LangChain, Django REST Framework, SQLite, Chart.js, Postman',
    tech2: 'React.js, OAuth, OpenAI, LangChain, Django REST Framework, SQLite, Chart.js, Postman',
    details: 'Key Functionalities: Natural language to SQL query generation, JWT & social login authentication, data visualization, database management, chat & voice input for queries.',
    contribution: 'UI design, JWT authentication, role management, and natural language to SQL conversion.',
    status: 'Completed',
    link: ''
  },  
  { 
    id: 3, 
    imgsrc: price, 
    name: 'PriceRadar', 
    description: 'Webscraper application to scrape Amazon products', 
    tech: 'NextJs, NodeJs, MongoDB, Tailwind CSS, Cheerio, Bright Data', 
    tech2: 'NextJs, NodeJs, MongoDB, Tailwind CSS, Cheerio, Bright Data',
    details: 'A web scraper that tracks Amazon product prices.', 
    contribution: 'Full development', 
    status: 'Completed',
    link: '' 
  },
  {
    id: 4, 
    imgsrc: port, 
    name: 'Portfolio', 
    description: 'Responsive 3D personal website', 
    tech: 'ReactJs, ThreeJs', 
    tech2: 'ReactJs, ThreeJs', 
    details: 'A fully responsive 3D personal portfolio website featuring sections like Hero, About, Skills, Projects, and Contact.',
    contribution: 'Full development', 
    status: 'Completed',
    link: '' 
  },
  /*
  {
    id: 5,
    imgsrc: blogpad, 
    name: 'Blogpad',
    description: 'Blog application built using MERN stack',
    tech: 'MongoDB, Express.js, React.js, Node.js',
    tech2: 'MongoDB, Express.js, React.js, Node.js',
    details: 'A full-stack blog application with features like post creation, user authentication, and comments.',
    contribution: 'Full development',
    status: 'Ongoing',
    link: ''
  },
  {
    id: 6,
    imgsrc: meal, 
    name: 'Meal Mate',
    description: 'An employee meal ordering app using React.js, Ballerina, and SQL',
    tech: 'React.js, Ballerina, SQL',
    tech2: 'React.js, Ballerina, SQL',
    details: 'A meal ordering app that allows employees to order meals from a selection of available options and customize their orders',
    contribution: 'Frontend and backend development',
    status: 'Ongoing',
    link: ''
  }*/
  
];

const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const Project = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const chunkedProjects = chunkArray(projects, 4);
  const tiltRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
    tiltRefs.current.forEach(ref => {
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

  const showModal = (project) => {
    setActiveProject(project);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <section className='projects-area'>
      <div className='projects'>
        <div className='projects-title'>What I’ve Built</div>
        {chunkedProjects.map((row, rowIndex) => (
          <div className='row' key={rowIndex}>
            {row.map((item, index) => (
              <div
                className='card'
                key={item.id}
                ref={el => tiltRefs.current[index + rowIndex * 4] = el}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className='title'>{item.name}</div>
                <div className='image-card'>
                  <img src={item.imgsrc} alt={item.name} />
                </div>
                <div className='description'>{item.description}</div>
                <div className='technologies'>{item.tech2}</div>
                <div className='link'>
                  <a onClick={() => showModal(item)} className='read-more2'>more</a>
                </div>
              </div>
            ))}
          </div>
        ))}

        {activeProject && (
          <Modal
            title={activeProject.name}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            className='project-modal'
          >
            <div className='modal-content'>
              <img src={activeProject.imgsrc} alt={activeProject.name} style={{ width: '100%', marginBottom: '20px' }} />
              <h3>{activeProject.description}</h3>
              <strong>
  <span className={`status ${activeProject.status === 'Completed' ? 'completed' : 'ongoing'}`}>
    {activeProject.status === 'Completed' ? (
      <>
        <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '8px', color: 'green' }} />
        <p> {activeProject.status}</p>
      </>
    ) : (
      <>
        <FontAwesomeIcon icon={faSpinner} spin style={{ marginRight: '8px', color: 'blue' }} />
        <p> {activeProject.status}</p>
      </>
    )}
  </span>
</strong>
              <p><strong>Project Details:</strong></p>
              <p>{activeProject.details}</p>
              <p><strong>My contribution:</strong></p>
              <p>{activeProject.contribution}</p>
              <p><strong>Technologies Used:</strong></p>
              <ul>
                {activeProject.tech.split(', ').map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
             
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Project;
