'use client'
import React, { useRef } from 'react';
import Projects from './componets/Project';
import Connect from './componets/Connect';
import MyStack from './componets/Mystack';
import Navbar from './componets/Navbar';
import HeroSection from './componets/HeroSection';

export default function Home() {
<<<<<<< HEAD
  const homeRef = useRef<any>(null);
  const projectsRef = useRef<any>(null);

  return (
    <div className="flex flex-col text-white bg-[#1A1A1A] scroll-smooth">
      <Navbar homeRef={homeRef} projectsRef={projectsRef} />
      <HeroSection ref={homeRef} />
      <Projects ref={projectsRef} />
      <MyStack />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />
=======

  const homeRef = useRef<any>(null);

  const projectsRef = useRef<any>(null);


  return (
    <div className="flex flex-col justify-center min-h-screen px-6 md:px-16 text-white bg-[#1A1A1A] space-y-16 scroll-smooth">
      <Navbar
        homeRef={homeRef}

        projectsRef={projectsRef}

      />

      <HeroSection ref={homeRef} />
      <MyStack />
      <Projects ref={projectsRef} />
>>>>>>> e010bd2adef4df0fba066fdad713a4b521654769
      <Connect />
    </div>
  );
}
