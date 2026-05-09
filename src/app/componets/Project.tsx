'use client';

<<<<<<< HEAD
import Image from 'next/image';
import React, { useState, forwardRef } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from 'framer-motion';
import { X } from 'lucide-react';

type Project = {
  title: string;
  image?: string;
  iconBg?: string;
  iconInitial?: string;
  description: string;
  features: string[];
  personal?: boolean;
  androidUrl?: string;
  iosUrl?: string;
  udemyUrl?: string;
  apkUrl?: string;
};

const projects: Project[] = [
  {
    title: 'RadleyCare',
    image: '/Radley.png',
    description:
      'A mental and behavioural health support app that helps users stay organised, connected, and supported in their care journey.',
    features: [
      'Book & manage appointments',
      'Real-time chat powered by WebSockets',
      'Video calls via Zoom SDK integration',
      'Take personal notes and upload attachments',
    ],
    androidUrl: 'https://play.google.com/store/apps/details?id=com.axion.radleycare&hl=en_IN',
    iosUrl: 'https://apps.apple.com/us/app/radleycare/id6751409074',
  },
  
  {
    title: 'Love Hurts',
    image: '/lovehurtsIcon.png',
    description:
      'A sexual health platform that educates users on STIs and enables anonymous, stigma-free partner notifications.',
    features: [
      "expo",
      'Anonymous contact notifications',
      'Location & Google Places map integration',
      'Secuirty features',
      'Amplitude analytics',
    ],
    androidUrl: 'https://play.google.com/store/apps/details?id=com.lovehurts.dev&hl=en_IN&pli=1',
    iosUrl: 'https://apps.apple.com/us/app/love-hurts/id6502663941',
  },
   {
    title: 'Pista House',
    image: '/pistahouse.png',
    description:
      "Brings Hyderabad's authentic flavours straight to your doorstep — a full e-commerce food ordering experience.",
    features: [
      'React Navigation (stack & tab flows)',
      'Context API for cart & state',
      'Map integration for delivery tracking',
      'E-commerce order & checkout flow',
    ],
    androidUrl: 'https://play.google.com/store/apps/details?id=com.pistahouse&hl=en_IN',
  },
  {
    title: 'Samsthi Schools',
    image: '/SamasthiIcon.png',
    description:
      'A parent dashboard app for Samashti Group of Schools — keeping parents connected with attendance, academics, and school activities in real time.',
    features: [
      'Attendance & behaviour tracking',
      'Live bus location',
      'Fee payment & timetable',
      'Homework, leave & exam updates',
    ],
  },
 
  {
    title: 'Quilt',
    image: '/quilt.png',
    description:
      'A health communication platform that bridges the gap between health advisors and patients, enabling real-time messaging, appointment coordination, and personalised care plans.',
    features: [
      'Real-time messaging between advisors & patients',
      'Appointment coordination & reminders',
      'Personalised care plan management',
      'Secure health data sharing',
    ],
  },
  {
    title: 'HiPhones',
    iconBg: 'from-blue-500 to-cyan-500',
    iconInitial: 'H',
    personal: true,
    description:
      'A production-ready full-stack e-commerce mobile app built with React Native and Node.js — covering everything from UI to backend to database.',
    features: [
      'Role-based access (Admin & User)',
      'Secure login, signup & JWT auth',
      'Product CRUD with image upload',
      'REST API (React Native + Node.js + MongoDB)',
    ],
    udemyUrl: 'https://www.udemy.com/certificate/UC-7b93f5f7-931a-4cae-a889-22e3c13a97d9/',
  },
  {
    title: 'IT_Cooliluuu',
    iconBg: 'from-emerald-500 to-teal-600',
    iconInitial: 'IT',
    personal: true,
    description:
      'A powerful and modern chat application designed to master real-time messaging, user interactions, and full-stack development with a scalable backend.',
    features: [
      'One-to-one & group chat',
      'Expo + React Native + Reanimated',
      'Node.js backend with MongoDB',
      'Real-time messaging via WebSockets',
    ],
  },
];

function AppIcon({ project, size = 64 }: { project: Project; size?: number }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.title}
        width={size}
        height={size}
        className="object-cover w-full h-full"
      />
    );
  }
  return (
    <div className={`w-full h-full bg-gradient-to-br ${project.iconBg} flex items-center justify-center`}>
      <span className="text-white font-bold" style={{ fontSize: size * 0.38 }}>
        {project.iconInitial}
      </span>
    </div>
  );
}

const headingWords = ['Have', 'a', 'look', 'at', 'some', 'of', 'the', 'projects', "I've", 'worked', 'on...'];

function ProjectsHeading() {
  return (
    <motion.p
      className="text-center text-xs font-semibold uppercase tracking-widest mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {headingWords.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: i * 0.06, duration: 0.35, ease: 'easeOut' },
            },
          }}
          animate={{
            color: i % 3 === 0
              ? ['#64748b', '#a78bfa', '#64748b']
              : ['#64748b', '#64748b', '#64748b'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

function IconButton({
  project,
  i,
  onClick,
}: {
  project: Project;
  i: number;
  onClick: () => void;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-32, 32], [14, -14]), {
    stiffness: 300,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [-32, 32], [-14, 14]), {
    stiffness: 300,
    damping: 24,
  });

  const shimmerX = useMotionValue(-100);

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
    shimmerX.set(((e.clientX - rect.left) / rect.width) * 100);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    shimmerX.set(-100);
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.09, duration: 0.5, ease: 'easeOut' }}
      animate={{ y: [0, -6, 0] }}
      // @ts-ignore — framer merges whileInView + animate fine at runtime
      style={{ y: undefined }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col items-center gap-3 focus:outline-none cursor-pointer group"
    >
      {/* 3-D tilt wrapper */}
      <motion.div
        style={{ rotateX, rotateY, perspective: 600, transformStyle: 'preserve-3d' }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.86, rotateX: 0, rotateY: 0 }}
        className="relative"
      >
        {/* Ripple ring — fires once on enter */}
        <motion.span
          className="absolute inset-0 rounded-2xl border border-violet-400/50 pointer-events-none z-20"
          initial={{ scale: 1, opacity: 0.8 }}
          whileInView={{ scale: 1.55, opacity: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 + i * 0.1, duration: 1, ease: 'easeOut' }}
        />

        {/* Hover glow */}
        <motion.span
          className="absolute -inset-1 rounded-2xl pointer-events-none z-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          style={{ boxShadow: '0 0 22px 6px rgba(139,92,246,0.5)' }}
        />

        {/* Icon — layoutId makes it morph into the modal */}
        <motion.div
          layoutId={`icon-${project.title}`}
          className="w-16 h-16 rounded-2xl overflow-hidden border border-white/12 shadow-lg relative z-10"
          transition={{ type: 'spring', stiffness: 340, damping: 28 }}
        >
          <AppIcon project={project} size={64} />


          {/* Shimmer sweep */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: useTransform(
                shimmerX,
                [0, 100],
                [
                  'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)',
                  'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)',
                ]
              ),
            }}
          />
        </motion.div>
      </motion.div>

      <span className="text-[11px] text-slate-500 group-hover:text-slate-200 transition-colors duration-200 font-medium">
        {project.title}
      </span>

      {/* View indicator — slides in below name on hover */}
      <span className="flex items-center gap-1 text-[10px] text-violet-400 font-semibold tracking-wider uppercase opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
        View
        <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
          <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>

      {/* Udemy link — only shown if project has it */}
      {project.udemyUrl && (
        <div className="flex items-center gap-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 delay-75">
          {project.udemyUrl && (
            <a
              href={project.udemyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-[9px] text-slate-400 hover:text-orange-400 transition-colors duration-150 font-medium"
            >
              <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill="currentColor">
                <path d="M6 1L1 3v3.4c0 3 2.26 5.86 5 6.52 2.74-.66 5-3.52 5-6.52V3L6 1zM5.38 8.28L3.6 6.5l.7-.7 1.08 1.09 2.32-2.32.7.7-3.02 3.01z"/>
              </svg>
              Certificate
            </a>
          )}
        </div>
      )}

      {/* Store links — only shown if project has URLs */}
      {(project.androidUrl || project.iosUrl) && (
        <div className="flex items-center gap-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 delay-75">
          {project.androidUrl && (
            <a
              href={project.androidUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-[9px] text-slate-400 hover:text-green-400 transition-colors duration-150 font-medium"
            >
              {/* Play Store triangle */}
              <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill="currentColor">
                <path d="M2 10.5V1.5c0-.41.47-.65.8-.4l7 4.5a.5.5 0 010 .8l-7 4.5c-.33.25-.8.01-.8-.4z"/>
              </svg>
              Android
            </a>
          )}
          {project.androidUrl && project.iosUrl && (
            <span className="text-slate-700 text-[9px]">·</span>
          )}
          {project.iosUrl && (
            <a
              href={project.iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-[9px] text-slate-400 hover:text-green-400 transition-colors duration-150 font-medium"
            >
              {/* Apple logo */}
              <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill="currentColor">
                <path d="M9.35 9.75c-.41.62-.86 1.23-1.52 1.24-.67.01-.88-.4-1.65-.4-.76 0-1 .39-1.63.41-.65.02-1.15-.66-1.57-1.27C1.63 8.5.97 6.22 1.85 4.7c.44-.76 1.22-1.24 2.06-1.26.64-.01 1.25.44 1.64.44.4 0 1.13-.54 1.9-.45.32.01 1.23.13 1.82.99-.05.03-1.08.64-1.07 1.9.01 1.51 1.32 2.01 1.34 2.02-.01.04-.21.72-.69 1.41zM6.5 1.75c.37-.42.97-.73 1.47-.75.06.59-.17 1.18-.52 1.6-.35.42-.91.75-1.47.71-.08-.58.2-1.18.52-1.56z"/>
              </svg>
              iOS
            </a>
          )}
        </div>
      )}
    </motion.button>
  );
}

const Projects = forwardRef<HTMLElement>((_props, ref) => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section ref={ref} id="projects" className="relative w-full max-w-5xl mx-auto px-6 py-12 overflow-hidden">
      {/* Ambient floating blobs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-violet-600/6 blur-3xl pointer-events-none -z-10"
        animate={{ x: [0, 35, 0], y: [0, -25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none -z-10"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-violet-400/4 blur-3xl pointer-events-none -z-10"
        animate={{ x: [0, 20, -20, 0], y: [0, -15, 15, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
      />
      <ProjectsHeading />
      <div className="flex items-start justify-center gap-8 md:gap-10 flex-wrap">
        {projects.map((project, i) => (
          <IconButton key={project.title} project={project} i={i} onClick={() => setSelected(project)} />
        ))}
      </div>

      {/* Modal — icon morphs here via layoutId */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={() => setSelected(null)}
            />

            <motion.div
              key="card"
              className="relative z-10 bg-[#1C1C1C] border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: 'spring', stiffness: 340, damping: 30 }}
            >
              {/* Ambient corner glows */}
              <motion.div
                className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-violet-600/12 blur-2xl pointer-events-none"
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-indigo-600/8 blur-2xl pointer-events-none"
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              />

              <motion.button
                onClick={() => setSelected(null)}
                whileHover={{ rotate: 90, scale: 1.15 }}
                transition={{ duration: 0.2 }}
                className="absolute top-4 right-4 text-slate-600 hover:text-white transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </motion.button>

              {/* Icon morphs from strip */}
              <div className="flex items-center gap-4 mb-5">
                <motion.div
                  layoutId={`icon-${selected.title}`}
                  className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0 shadow-md"
                  transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                >
                  <AppIcon project={selected} size={64} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                >
                  <h2 className="text-white text-xl font-bold leading-tight">{selected.title}</h2>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.35 }}
              >
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{selected.description}</p>

                <h3 className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2 mb-6">
                  {selected.features.map((f, idx) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.22 + idx * 0.06, duration: 0.28 }}
                      className="flex items-start gap-2.5 text-sm text-slate-300"
                    >
                      <motion.span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0"
                        animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.3 }}
                      />
                      {f}
                    </motion.li>
                  ))}
                </ul>

                {(selected.udemyUrl || selected.apkUrl !== undefined) && (
                  <>
                    <div className="h-px bg-white/8 mb-4" />
                    <div className="flex gap-3 mb-4">
                      {selected.udemyUrl && (
                        <a
                          href={selected.udemyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-400/30 transition-all"
                        >
                          <svg viewBox="0 0 24 24" className="w-5 h-5 text-orange-400 flex-shrink-0" fill="currentColor">
                            <path d="M12 0L1.608 4.15v6.796c0 6.065 4.525 11.729 10.392 13.054 5.867-1.325 10.392-6.989 10.392-13.054V4.15L12 0zm-1.24 16.57l-3.6-3.6 1.414-1.414 2.186 2.187 5.372-5.372 1.414 1.414-6.786 6.786z"/>
                          </svg>
                          <div>
                            <div className="text-[9px] text-slate-500 leading-none mb-0.5 uppercase tracking-wider">Course</div>
                            <div className="text-xs text-white font-semibold leading-none">Certificate</div>
                          </div>
                        </a>
                      )}
                      {selected.apkUrl !== undefined && (
                        selected.apkUrl ? (
                          <a
                            href={selected.apkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green-400/30 transition-all"
                          >
                            <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor">
                              <path d="M17.523 15.341A7.274 7.274 0 0112 17.727a7.274 7.274 0 01-5.523-2.386L3.5 17.5l1.659-2.977A7.25 7.25 0 014.727 12 7.273 7.273 0 0112 4.727 7.273 7.273 0 0119.273 12a7.25 7.25 0 01-.932 2.523L20 17.5l-2.477-2.159zM8.5 6.5L6 2l1.5-.5 2 3.5m7 1.5L19 2l-1.5-.5-2 3.5M9 13a1 1 0 100-2 1 1 0 000 2m6 0a1 1 0 100-2 1 1 0 000 2"/>
                            </svg>
                            <div>
                              <div className="text-[9px] text-slate-500 leading-none mb-0.5 uppercase tracking-wider">Download</div>
                              <div className="text-xs text-white font-semibold leading-none">APK</div>
                            </div>
                          </a>
                        ) : (
                          <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 opacity-40 cursor-not-allowed">
                            <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor">
                              <path d="M17.523 15.341A7.274 7.274 0 0112 17.727a7.274 7.274 0 01-5.523-2.386L3.5 17.5l1.659-2.977A7.25 7.25 0 014.727 12 7.273 7.273 0 0112 4.727 7.273 7.273 0 0119.273 12a7.25 7.25 0 01-.932 2.523L20 17.5l-2.477-2.159zM8.5 6.5L6 2l1.5-.5 2 3.5m7 1.5L19 2l-1.5-.5-2 3.5M9 13a1 1 0 100-2 1 1 0 000 2m6 0a1 1 0 100-2 1 1 0 000 2"/>
                            </svg>
                            <div>
                              <div className="text-[9px] text-slate-500 leading-none mb-0.5 uppercase tracking-wider">Coming soon</div>
                              <div className="text-xs text-white font-semibold leading-none">APK</div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </>
                )}

                {(selected.androidUrl || selected.iosUrl) && (
                  <>
                    <div className="h-px bg-white/8 mb-4" />
                    <p className="text-[10px] uppercase tracking-widest text-slate-600 mb-3 font-semibold">Available on</p>
                    <div className="flex gap-3">
                      {selected.androidUrl && (
                        <a
                          href={selected.androidUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green-400/30 transition-all"
                        >
                          <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor">
                            <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5a1 1 0 010 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/>
                          </svg>
                          <div>
                            <div className="text-[9px] text-slate-500 leading-none mb-0.5 uppercase tracking-wider">Get it on</div>
                            <div className="text-xs text-white font-semibold leading-none">Google Play</div>
                          </div>
                        </a>
                      )}
                      {selected.iosUrl && (
                        <a
                          href={selected.iosUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green-400/30 transition-all group/ios"
                        >
                          <svg viewBox="0 0 24 24" className="w-5 h-5 text-slate-400 group-hover/ios:text-green-400 transition-colors flex-shrink-0" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                          </svg>
                          <div>
                            <div className="text-[9px] text-slate-500 leading-none mb-0.5 uppercase tracking-wider">Download on the</div>
                            <div className="text-xs text-white group-hover/ios:text-green-400 font-semibold leading-none transition-colors">App Store</div>
                          </div>
                        </a>
                      )}
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
=======

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import React, { forwardRef } from 'react';
import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";


const projects = [
  {
    title: 'Samsthi Group of Schools',
    image: '/SamasthiIcon.png',
    description: 'A seamless bridge for communication between schools and parents, with real-time updates.',
  },
  {
    title: 'Pista House',
    image: '/pistahouse.png',
    description: 'A food ordering platform with live order tracking and location-based delivery.',
  },
  {
    title: 'Love Hurts',
    image: '/lovehurtsIcon.png',
    description: 'An educational platform empowering users to address sexual health and social needs.',
  },
];

const cardVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const imageVariants: any = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 10,
      duration: 0.4,
    },
  },
};

const Projects = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="projects" className="p-8">
      <motion.h2
        className="text-3xl font-bold mb-10 text-white text-center flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.span
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
        >
          <BriefcaseBusiness className="w-8 h-8 text-white" />
        </motion.span>
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group"
          >
            <Card className="bg-[#1F1F1F] px-6 hover:scale-[1.03] transition-transform shadow-lg border border-white/15 flex flex-col items-center text-center rounded-2xl">
              {/* Smaller Circular Image */}
              <motion.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                className="w-10 h-10 rounded-full overflow-hidden border border-white/10 shadow-sm"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              <CardContent className="p-0">
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">{project.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
>>>>>>> e010bd2adef4df0fba066fdad713a4b521654769
    </section>
  );
});

<<<<<<< HEAD
Projects.displayName = 'Projects';
=======
Projects.displayName = 'Projects'; // ✅ needed for forwardRef in Next.js
>>>>>>> e010bd2adef4df0fba066fdad713a4b521654769

export default Projects;
