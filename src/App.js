import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Travel from './components/travel/Travel';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact'

function App() {
  return (
    <div className='app'>
      <Router> 
        <Navbar />
        <Routes>
        <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
