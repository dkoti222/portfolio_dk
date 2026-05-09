'use client';
import React, { forwardRef } from "react";
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return (
      <section
        ref={ref}
        id="home"
        {...props}
        className="relative flex items-center justify-center min-h-screen w-full max-w-6xl mx-auto px-6 pb-24 scroll-mt-32"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full gap-10 md:gap-14">

          {/* LEFT: text content */}
          <div className="flex flex-col max-w-xl">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-slate-100">
                I'm <span className="text-white">Koti</span>
              </h1>
            </motion.div>

            <motion.div
              className="mb-8 font-mono text-sm md:text-base leading-8 w-full"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            >
              <p>
                <span className="text-violet-400">const</span>{' '}
                <span className="text-slate-200">developer</span>{' '}
                <span className="text-slate-500">= {'{'}</span>
              </p>
              <p className="pl-6">
                <span className="text-slate-400">name</span>
                <span className="text-slate-500">: </span>
                <span className="text-emerald-300">'Koti Duddu'</span>
                <span className="text-slate-500">,</span>
              </p>
              <p className="pl-6">
                <span className="text-slate-400">location</span>
                <span className="text-slate-500">: </span>
                <span className="text-emerald-300">'Hyderabad, India'</span>
                <span className="text-slate-500">,</span>
              </p>
              <p className="pl-6">
                <span className="text-slate-400">role</span>
                <span className="text-slate-500">: </span>
                <span className="text-emerald-300">'React Native Developer'</span>
                <span className="text-slate-500">,</span>
              </p>
              <p>
                <span className="text-slate-500">{'};'}</span>
              </p>
            </motion.div>

            <motion.div
              className="space-y-1 text-base md:text-lg leading-relaxed mt-2"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: 'easeOut' }}
            >
              <p className="text-slate-200 font-semibold">I design and build seamless mobile experiences using React Native.</p>
              <p className="text-slate-400 font-medium">From concept to production — I handle it all.</p>
            </motion.div>
          </div>

          {/* RIGHT: Spinning Globe with Profile */}
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
              <text fontSize="9" fill="rgba(255,255,255,0.8)">
                <textPath href="#circlePath" startOffset="0%">
                  AVAILABLE FOR WORK  •
                </textPath>
              </text>
              <text fontSize="9" fill="rgba(255,255,255,0.8)" transform="rotate(180,50,50)">
                <textPath href="#circlePath" startOffset="0%">
                  AVAILABLE FOR WORK  •
                </textPath>
              </text>
            </svg>

            <div className="w-[130px] h-[130px] rounded-full overflow-hidden shadow-md bg-black">
              <Image
                src="/onepic1.jpeg"
                alt="Koti Duddu Profile"
                width={130}
                height={130}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Bottom gradient line */}
        <motion.div
          className="absolute bottom-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.6, ease: 'easeInOut' }}
          style={{ transformOrigin: 'center' }}
        />
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
