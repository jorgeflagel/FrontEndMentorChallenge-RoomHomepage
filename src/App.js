import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';


const Container = styled.div`
  @media screen and (min-width: 900px) {
    min-height: 100vh;
  }
`

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
    <Container className="App">
      <Navbar />
      <Hero windowWidth={windowWidth}/>
      <About/>
    </Container>
  );
}

export default App;
