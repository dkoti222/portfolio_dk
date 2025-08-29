'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface NavbarProps {
  homeRef: React.RefObject<HTMLElement>;

  projectsRef: React.RefObject<HTMLElement>;

}

const Navbar: React.FC<NavbarProps> = ({ homeRef, projectsRef }) => {
  const handleScroll = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      const navbarHeight = 80; // approximate height of your navbar in px
      const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - navbarHeight, // offset by navbar height
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full px-6 md:px-16"
    >
      <div className="max-w-2xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 px-8 md:px-10 py-2 rounded-2xl flex items-center justify-between text-white shadow-md">

        {/* Left side nav */}
        <div className="flex gap-6 md:gap-8 text-base md:text-lg font-medium">
          <button
            onClick={() => handleScroll(homeRef)}
            className="hover:opacity-70 transition"
          >
            Home
          </button>

        </div>

        {/* Center Logo */}
        <motion.div
          whileHover={{
            rotate: 360,
            transition: {
              repeat: Infinity,
              duration: 1,
              ease: 'linear',
            },
          }}
          className="w-12 md:w-14 md:h-14 p-1 border-2 border-white/50 rounded-full overflow-hidden shadow-md cursor-pointer"
        >
          <Image
            src="/koti.png"
            alt="Koti Duddu Logo"
            width={36}
            height={36}
            className="object-cover w-full h-full rounded-full"
          />
        </motion.div>

        {/* Right side nav */}
        <div className="flex gap-6 md:gap-8 text-base md:text-lg font-medium">
          <button
            onClick={() => handleScroll(projectsRef)}
            className="hover:opacity-70 transition"
          >
            Projects
          </button>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
