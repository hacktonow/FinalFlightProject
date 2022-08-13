
import React from 'react';
import './home.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import Navbar from '../Navbar';
import { Topnav } from '../Topnav';

function Home() {
  return (
    <>
   
    <Topnav/>
    
    <Navbar/>
      <HeroSection />
      <Cards />
      
      
      <Footer/>
    </>
  );
}

export default Home;
