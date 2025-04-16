import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Work from './Components/Work';
import Contact from './Components/Contact'; 
import Certifs from './Components/Certifs';
import Formation from './Components/Formation';

function App() {
  return (
    <div>
     <Navbar />
      <Hero />
      <About />
      <Formation />
      <Services />
      <Work />
      <Certifs />
      <Contact />
    </div>
  );
}

export default App;
