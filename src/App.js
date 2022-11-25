import React from 'react';
import './App.css';
// import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Routes>

        <Route path="/" element={<Home />} />

        <Route path="resume" element={<Resume />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
