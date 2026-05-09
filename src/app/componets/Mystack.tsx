// components/MyStack.tsx
import { BsAndroid2 } from "react-icons/bs";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiSupabase, SiTypescript, SiXcode, SiExpress } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";

const techStack = [
  { icon: <TbBrandReactNative />, label: "React Native", color: "text-sky-400" },
  { icon: <BsAndroid2 />,         label: "Android",      color: "text-green-600" },
  { icon: <SiXcode />,            label: "Xcode",        color: "text-indigo-400" },
    { icon: <IoLogoJavascript />,   label: "JavaScript",   color: "text-yellow-400" },
  { icon: <FaReact />,            label: "React JS",     color: "text-cyan-400" },
  { icon: <RiNextjsFill />,       label: "Next.js",      color: "text-white" },

  { icon: <SiTypescript />,       label: "TypeScript",   color: "text-blue-400" },
  { icon: <RiTailwindCssFill />,  label: "Tailwind",     color: "text-teal-400" },
    { icon: <FaNodeJs />,           label: "Node.js",      color: "text-green-500" },
  { icon: <SiExpress />,          label: "Express.js",   color: "text-white/80" },
  { icon: <IoLogoFirebase />,     label: "Firebase",     color: "text-orange-400" },
  { icon: <SiSupabase />,         label: "Supabase",     color: "text-green-400" },
];

export default function MyStack() {
  return (
    <section className="py-16 md:px-20 text-white">
      <motion.h2
        className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Tech Stack
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center text-5xl opacity-70 hover:opacity-100 transition duration-300 ${tech.color}`}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {tech.icon}
            <span className="mt-2 text-sm text-white/70">{tech.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
