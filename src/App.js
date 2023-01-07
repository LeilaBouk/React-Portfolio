import React, {useState, useEffect} from 'react';
import './App.css';
// import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import Loading from './components/Loading';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  // BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
  // Link
} from "react-router-dom";

// Fade in on load
const variant = {
  visible: { opacity: 1,  transition: { duration: 0.6 } },
  hidden: { opacity: 0 },
}

function App() {

      // Scroll animation
      const control = useAnimation()
      const [ref, inView] = useInView()
  
      useEffect(() => {
          if (inView) {
            control.start("visible");
          } 
          else {
              control.start("hidden");
            }
        }, [control, inView]);

  // Loading Screen Logic
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2300)
  }, [])

  return (
    <div className="App">
      {
        loading ? 
        
        <Loading />

        :

        <HashRouter base='/'>
        {/* <Header /> */}
        <motion.div
    ref={ref}
     variants={variant}
     initial="hidden"
     animate={control}>
        <Routes>

        <Route path="/" element={<Home />} />

        <Route path="resume" element={<Resume />} />

        </Routes>
        </motion.div>

      </HashRouter>

      }
    </div>
  );
}

export default App;
