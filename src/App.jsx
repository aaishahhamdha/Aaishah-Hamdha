import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Contact from './components/Contacts/contact.jsx';
import Services from './components/services/Services.jsx';
import Footer from './components/footer/Footer.jsx';
import Project from './components/Projects/Project.jsx';
import Skills from './components/Skills/Skills.jsx';
import Blogs from './components/blogs/Blogs.jsx'
import About from "./components/about/about.jsx"


import './App.scss';


const App = () => {
  
  return (
    <div className='App'>
          <BrowserRouter>
      <div className="container-xl"><Navbar /></div>
      <div className="sec" id="Hero"><Hero /></div>
      <div className="sec" id="About"><About /></div>
      <div className="sec" id="Projects"><Project /></div>
      <div className="sec" id="Skills"><Skills /></div>
     
      <div className="sec" id="blogs"><Blogs /></div>
      <div className="sec" id="services"><Services /></div>
      <div className="sec" id="Contact"><Contact /></div>
      <div className="sec" ><Footer /></div>
    </BrowserRouter>
    </div>

  );
};

export default App;
