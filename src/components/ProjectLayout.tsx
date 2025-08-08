"use client";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
  techStack: string[];
  githubLink: string;
}

const projects: Project[] = [
  {
    title: "Departmental Portal",
    description: "Manage Documents and Access Resources",
    link: "https://departmental-portal-s.vercel.app/",
    image: "/img/Dept_Portal.png",
    tags: ["Next.js", "Django", "Tailwind CSS"],
    techStack: ["Next.js 14", "Typescript", "Django", "Tailwind CSS", "Redux"],
    githubLink: "https://github.com/emmyKcodes/Departmental-website",
  },
  {
    title: "Worldwise",
    description: "Keep track of your various adventures",
    link: "https://worldwise-gold.vercel.app/",
    image: "/img/Worldwise.png",
    tags: ["React", "Sass"],
    techStack: ["React ", " Context api", "Sass", "React Hook Form"],
    githubLink: "https://github.com/emmyKcodes/Worldwise",
  },
  {
    title: "Glowing",
    description: "Reveal the beauty of skin care",
    link: "https://glowing-e-commece.vercel.app/",
    image: "/img/Glowing.png",
    tags: ["HTML", "CSS", "Javascript"],
    techStack: ["HTML", "CSS", "JAVASCRIPT"],
    githubLink: "https://github.com/emmyKcodes/Glowing_E-commece",
  },
  {
    title: "The-Wild-Oasis",
    description: "A Company's website to manage employee's Check-ins",
    link: "https://the-wild-oasis-1-gold.vercel.app/",
    image: "/img/the-wild-oasis.png",
    tags: ["Next.js", "Supabase", "Tailwind CSS"],
    techStack: [
      "Next.js 14",
      "Supabase Authentication",
      "Supabase Database",
      "Tailwind CSS",
      "Context Api",
    ],
    githubLink: "https://github.com/emmyKcodes/The-Wild-Oasis",
  },
  {
    title: "Quibbles",
    description: "Online news feed for community timelines",
    link: "https://quibbles-gamma.vercel.app/",
    image: "/img/Quibbles.png",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    techStack: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/emmyKcodes/Quibbles",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 relative z-10">
      <div className="max-w-8xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
            Recent Projects &<br />
            <span className="text-[#8e4beb]">Achievements</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Some projects I have added to the tech community. Each one
            represents my journey in web development. So do well to check it
            out, If any one catches your eye.
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
              key={`${project.title}-${index}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-[0_20px_50px_rgba(142,75,235,0.1)] bg-[#1a1a1a]/70 backdrop-blur-sm border border-[#2a2b2c]"
            >
              <div
                className="block h-full cursor-pointer"
                onClick={() => openModal(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openModal(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={`${tag}-${i}`}
                          className="text-xs px-2 py-1 bg-[#8e4beb]/20 text-[#8e4beb] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[#1a1a1a]/50">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#8e4beb] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <FiExternalLink className="text-gray-400 group-hover:text-[#8e4beb] transition-colors duration-300" />
                  </div>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        ></motion.div>
      </div>

      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Escape" && closeModal()}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative z-10 w-full max-w-4xl bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#2a2b2c]"
          >
            <div className="relative h-64 md:h-80 w-full">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <p className="text-gray-300 mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#8e4beb]/10 text-[#8e4beb] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#8e4beb] text-white rounded-lg hover:bg-[#7d3aed] transition-colors"
                >
                  <FiExternalLink />
                  Live Demo
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-transparent border border-[#8e4beb] text-[#8e4beb] rounded-lg hover:bg-[#8e4beb]/10 transition-colors"
                >
                  <FiExternalLink />
                  View Code
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
