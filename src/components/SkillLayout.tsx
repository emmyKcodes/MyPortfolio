"use client";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiFigma,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

const technologies = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "Git & GitHub", icon: <FaGithub className="text-gray-300" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function SkillsPage() {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight mb-6">
            My <span className="text-[#C19A6B]">Technical</span> Stack
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-3 p-6 rounded-lg bg-[#1a1a1a]/70 backdrop-blur-sm border border-[#2a2b2c] hover:border-[#C19A6B]/50 transition-all duration-300"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <span className="text-center font-medium text-white">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="/Resume- Emmanuel Kehinde.pdfgit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-transparent border-2 border-[#C19A6B] text-[#C19A6B] rounded-full font-medium hover:bg-[#C19A6B] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#C19A6B]/30"
          >
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
