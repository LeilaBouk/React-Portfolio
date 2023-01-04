import React, {useState, useEffect} from 'react';
import './App.css';
// import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import Loading from './components/Loading';

import {
  // BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
  // Link
} from "react-router-dom";

function App() {

  // Loading Screen Logic
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1800)
  }, [])

  return (
    <div className="App">
      {
        loading ? 
        
        <Loading />

        :

        <HashRouter base='/'>
        {/* <Header /> */}
        <Routes>

        <Route path="/" element={<Home />} />

        <Route path="resume" element={<Resume />} />

        </Routes>

      </HashRouter>

      }
    </div>
  );
}

export default App;
