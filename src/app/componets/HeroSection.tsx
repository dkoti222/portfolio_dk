import React, { forwardRef } from "react";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TiVendorAndroid } from 'react-icons/ti';
import { IoIosAppstore } from 'react-icons/io';

const techStack = [
  { icon: <TiVendorAndroid />, color: "text-green-400" },
  { icon: <IoIosAppstore />, color: "text-green-500" },
];

const HeroSection = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return (
      <section
        ref={ref}
        id="home"
        {...props}
        className="mt-10 flex flex-col items-center w-full max-w-5xl mx-auto px-2 pt-32 scroll-mt-32"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full gap-10 md:gap-24">
          {/* Left: Name, Role, Stack */}
          <div className="flex flex-col text-center md:text-left space-y-6 max-w-xl">
            <h1 className="text-3xl md:text-6xl font-serif font-bold">Hello,</h1>
            <h1 className="text-3xl md:text-6xl font-serif font-bold">I'm Koti Duddu</h1>

            <div className="flex flex-col md:flex-row md:gap-4 items-center rounded-2xl">
              <h2 className="text-xl md:text-3xl text-white/80 font-serif mb-4 md:mb-0">
                React Native Developer
              </h2>

              <motion.div
                className="flex flex-row gap-2 justify-center overflow-x-auto md:flex-wrap"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1 }}
              >
                {techStack.map((tech, i) => (
                  <motion.div
                    key={i}
                    className={`text-5xl ${tech.color} shadow-lg backdrop-blur-md`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech.icon}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right: Spinning Globe with Profile */}
          <div className="relative w-50 h-50 rounded-full flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="absolute w-full h-full animate-[spin_7s_linear_infinite]"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
                />
              </defs>

              <text fontSize="10" fill="rgba(255,255,255,0.8)">
                <textPath href="#circlePath" startOffset="0%">
                  AVAILABLE FOR WORK  •
                </textPath>
              </text>

              <text fontSize="10" fill="rgba(255,255,255,0.8)" transform="rotate(180,50,50)">
                <textPath href="#circlePath" startOffset="0%">
                  AVAILABLE FOR WORK  •
                </textPath>
              </text>
            </svg>

            <div className="w-[130px] h-[130px] rounded-full overflow-hidden shadow-md bg-black">
              <Image
                src="/pp.jpeg"
                alt="Koti Duddu Profile"
                width={130}
                height={130}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
