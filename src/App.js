import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Videos from './pages/videos';
import Services from './pages/services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

