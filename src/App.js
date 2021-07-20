import React, { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWidth = (e) => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  })

  return (
    <div className="App">
      <Navbar />
      <Hero windowWidth={windowWidth}/>
      <About/>
    </div>
  );
}

export default App;
