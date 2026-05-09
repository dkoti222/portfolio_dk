<<<<<<< HEAD
'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

const contactItems = [
  {
    icon: <Mail size={18} />,
    label: 'dkoti22222@gmail.com',
    href: 'mailto:dkoti22222@gmail.com',
  },
  {
    icon: <Phone size={18} />,
    label: '+91-9032223634',
    href: 'tel:+919032223634',
  },
  {
    icon: <ArrowUpRight size={18} />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/duddu-koti-41902b287',
  },
];

export default function Connect() {
  return (
    <footer className="bg-[#1A1A1A]">

      {/* Main section */}
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-24">
        <div className="flex flex-col md:flex-row items-start justify-between gap-20">

          {/* Left */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tight leading-none mb-4">
              Let's Talk.
            </h2>
            <p className="text-white/40 text-base font-medium">
              Got an idea? Let's build it together.
            </p>
          </motion.div>

          {/* Right — contact rows */}
          <motion.div
            className="w-full md:max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center justify-between py-5 border-b border-white/10 group last:border-b-0"
              >
                <span className="flex items-center gap-4 text-white/60 text-sm md:text-base font-medium group-hover:text-white transition-colors duration-200">
                  <span className="text-white/30 group-hover:text-white/60 transition-colors duration-200 flex-shrink-0">
                    {item.icon}
                  </span>
                  {item.label}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-white/20 group-hover:text-white/70 transition-colors duration-200 flex-shrink-0 ml-4"
                />
              </a>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Bottom bar */}
     

    </footer>
=======
// 'use client';

// import { motion } from 'framer-motion';
// import { FaLinkedin } from 'react-icons/fa';

// const footerVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: 'spring',
//       stiffness: 60,
//       damping: 15,
//       duration: 0.6,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.5,
//     },
//   }),
// };

// export default function Connect() {
//   return (
//     <motion.footer
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={footerVariants}
//       className="text-white px-8 py-16 md:px-24"
//     >
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">

//         {/* Left Section - Heading */}
//         <motion.div
//           variants={itemVariants}
//           custom={0}
//           className="text-center md:text-left"
//         >
//           <h2 className="text-2xl md:text-7xl font-extrabold tracking-tight leading-tight">
//             LETS <br /> CONNECT
//           </h2>
//         </motion.div>

//         {/* Right Section - Contact + Social */}
//         <div className="text-sm md:text-lg justify-center items-center mt-12 space-y-6">

//           <motion.div
//             variants={itemVariants}
//             custom={1}
//             className="flex items-center gap-3"
//           >
//             <span>+91 9032223634</span>
//           </motion.div>

//           <motion.div
//             variants={itemVariants}
//             custom={2}
//           >
//             <a
//               href="https://linkedin.com/in/duddu-koti-41902b287"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//               className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-transparent hover:text-cyan-400 transition"
//             >
//               <FaLinkedin className="text-xl md:text-2xl text-white" />
//             </a>

//           </motion.div>
//         </div>
//       </div>
//     </motion.footer>
//   );
// }
'use client';

import { motion, Variants } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

// Typed footerVariants using Variants
const footerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 15,
      duration: 0.6,
    },
  },
};

// Typed itemVariants to return a Variant object based on index
const itemVariants:any = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number): Variants['visible'] => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

export default function Connect() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="text-white px-8 py-16 md:px-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">

        {/* Left Section - Heading */}
        <motion.div
          variants={itemVariants}
          custom={0}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl md:text-7xl font-extrabold tracking-tight leading-tight">
            LETS <br /> CONNECT
          </h2>
        </motion.div>

        {/* Right Section - Contact + Social */}
        <div className="text-sm md:text-lg justify-center items-center mt-12 space-y-6">

          <motion.div
            variants={itemVariants}
            custom={1}
            className="flex items-center gap-3"
          >
            <span>+91 9032223634</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            custom={2}
          >
            <a
              href="https://linkedin.com/in/duddu-koti-41902b287"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-transparent hover:text-cyan-400 transition"
            >
              <FaLinkedin className="text-xl md:text-2xl text-white" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
>>>>>>> e010bd2adef4df0fba066fdad713a4b521654769
  );
}
