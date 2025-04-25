"use client";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Departmental Portal",
    description: "Manage Documents and Access Resources",
    link: "https://departmental-portal-s.vercel.app/",
    image: "/img/Dept_Portal.png",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
  },
  {
    title: "Worldwise",
    description: "Document and Keep track of your adventures",
    link: "https://worldwise-gold.vercel.app/",
    image: "/img/Worldwise.png",
    tags: ["React", "Mapbox", "Context API"],
  },
  {
    title: "Glowing",
    description:
      "Beautiful and well crafted landing page showcasing design skills",
    link: "https://glowing-e-commece.vercel.app/",
    image: "/img/Glowing.png",
    tags: ["UI/UX", "GSAP", "Responsive Design"],
  },
  {
    title: "Armint",
    description: "A tracker for financial transactions",
    link: "#",
    image: "/img/Armint.jpg",
    tags: ["React", "Chart.js", "Firebase"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Projects() {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Recent Projects &<br />
            <span className="text-[#C19A6B]">Achievements</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Below are some of the projects I&apos;ve crafted with care. Each one
            represents my journey in web development, blending functionality
            with elegant design.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-[0_20px_50px_rgba(193,154,107,0.1)] bg-[#1a1a1a]/70 backdrop-blur-sm border border-[#2a2b2c]"
            >
              <a
                href={project.link}
                className="block h-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags?.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-[#C19A6B]/20 text-[#C19A6B] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[#1a1a1a]/50">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#C19A6B] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <FiExternalLink className="text-gray-400 group-hover:text-[#C19A6B] transition-colors duration-300" />
                  </div>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </a>
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
            href="#contact"
            className="inline-block px-8 py-3 bg-transparent border-2 border-[#C19A6B] text-[#C19A6B] rounded-full font-medium hover:bg-[#C19A6B] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#C19A6B]/30"
          >
            View More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
