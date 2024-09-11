import React, { useState, useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { Modal } from 'antd'; // Using Ant Design for the modal
import './project.scss';
import hw from '../../assets/mactim.png';
import sw from '../../assets/sw.png';
import port from '../../assets/port.png';
import price from '../../assets/price.png';

const projects = [
  { id: 1, imgsrc: hw, name: 'Mactim', description: 'A device to Monitor and Control Theft in MotorBikes', tech: 'Arduino, C, GPS, GSM, IR sensor, Accelerometer, LED display, Atmel Studio, Blender, KiCad' ,tech2: 'Arduino, C, GPS, GSM, IR sensor, Accelerometer, LED display, Atmel Studio, Blender, KiCad', details: 'Contribution: Developed GSM module and integrated IR sensor. Created 3D models using Blender and produced a demonstration video using iMovie.', link: '' },
  {
    id: 2,
    imgsrc: sw,
    name: 'Dataverse',
    description: 'NLP-based data visualization tool',
    tech: 'Frontend: React.js | Authentication & Authorization: OAuth| JWT , LLM: OpenAI| LangChain , Backend: Python| Django REST Framework , Database: SQLite , Visualization: Chart.js , API: Django REST Framework (DRF), Postman',
    tech2: 'React.js , OAuth , OpenAI, LangChain , Django REST Framework , SQLite , Chart.js , Postman',
    details: 'Key Functionalities: Natural language to SQL query generation, JWT & social login authentication, user management, profile customization, data visualization, database management, collaboration, chat & voice input for queries, admin dashboard.\n My Contributions: UI design in Figma, JWT-based login, social login, role management, profile editing, user & role management, collaboration, database views, natural language to SQL conversion, system module integration, and UI refinement.',
    link: ''
  },  
  { id: 3, imgsrc: price, name: 'PriceRadar', description: 'Webscraper application to scrape amazon products', tech: ' NextJs, NodeJs, MongoDB, Tailwind CSS, Cheerio , Bright Data', tech2: ' NextJs, NodeJs, MongoDB, Tailwind CSS, Cheerio , Bright Data',details: 'Features: Web scraper application that scrapes Amazon products and tracks their prices.', link: '' },
  { id: 4, imgsrc: port, name: 'Portfolio', description: 'Responsive personal website', tech: 'ReactJs', tech2: 'ReactJs', details: 'A fully responsive personal portfolio website featuring key sections such as Hero, About, Skills, Projects, Services, and Contact. The site includes smooth scrolling navigation for a seamless user experience, customizable dark/light mode options, and is optimized for flawless interaction across all devices.', link: '' },
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
    tiltRefs.current.forEach(ref => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 25,
          speed: 400,
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
              <div className='card' key={item.id} ref={el => tiltRefs.current[index + rowIndex * 4] = el}>
                <div className='title'>{item.name}</div>
                <div className='image-card'>
                  <img src={item.imgsrc} alt={item.name} />
                </div>
                <div className='description'>{item.description}</div>
                <div className='technologies'>{item.tech2}</div>
                <div className='link'>
                  <a onClick={() => showModal(item)} className='read-more'>more</a>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Modal for project details */}
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
              <p><strong>Project Details:</strong></p>
              <p>{activeProject.details}</p>
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
