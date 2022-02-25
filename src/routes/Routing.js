import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';
import Contact from '../components/Contact';

function Routing() {
  return (
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Router>
        
    );
}

export default Routing;
