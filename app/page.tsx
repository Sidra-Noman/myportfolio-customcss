'use client';  // to use AOS
import React, { useEffect } from 'react'

import Header from "./components/Header/Header";
import Footer from"./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact"
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills"
import AOS from "aos"
import"aos/dist/aos.css";


const Home = () => {
  useEffect(() =>{
    AOS.init({
      easing:"ease-out-back",
      duration:1200,
      delay:100,
      mirror:true,
      offset:160,
      
    });
    AOS.refresh()
  }, []);
  
  return (
    <div className='home' >
      <Header/>
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
          <Contact/>
          <Footer/>
    </div>
  )
}

export default Home

