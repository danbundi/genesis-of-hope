import React from 'react';
import './App.css';
import Home from './pages/home';
import Videos from './pages/videos';
import About from './pages/about';
import Services from './pages/services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/videos" element={<Videos/>}></Route>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path='/services' element={<Services/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
