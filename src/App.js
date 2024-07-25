import React from 'react';
import './styles/main.css';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import PricingCards from './components/PricingCards';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <PricingCards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
