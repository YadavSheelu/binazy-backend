
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/layout/Navbar/Navbar';
import Home from './Components/layout/Navbar/Home';
import Footer from './Components/layout/Navbar/Footer';
import Project from './Components/layout/Project/Project';
import Service from './Components/layout/Project/Service';
import Skills from './Components/layout/Project/Skills';
import Testimonials from './Components/layout/Project/Testimonials';
import Team from './Components/layout/Project/Team';
import Contact from './Components/layout/Project/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/services" element={<Service />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />

      
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
