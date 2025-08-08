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
import { ReactElement } from "react";

interface Technology {
  name: string;
  icon: ReactElement;
  category: TechnologyCategory;
  proficiency: number;
}

type TechnologyCategory = "Frontend" | "Backend" | "Design" | "Tools";

interface CategoryData {
  [key: string]: Technology[];
}

const TECHNOLOGIES: readonly Technology[] = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500" />,
    category: "Frontend",
    proficiency: 95,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500" />,
    category: "Frontend",
    proficiency: 90,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400" />,
    category: "Frontend",
    proficiency: 85,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    category: "Frontend",
    proficiency: 80,
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-500" />,
    category: "Frontend",
    proficiency: 88,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white" />,
    category: "Frontend",
    proficiency: 82,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400" />,
    category: "Frontend",
    proficiency: 90,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-500" />,
    category: "Backend",
    proficiency: 75,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-700" />,
    category: "Backend",
    proficiency: 70,
  },
  {
    name: "Git & GitHub",
    icon: <FaGithub className="text-gray-300" />,
    category: "Tools",
    proficiency: 85,
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-pink-500" />,
    category: "Design",
    proficiency: 80,
  },
] as const;

const categorizeTechnologies = (
  technologies: readonly Technology[]
): CategoryData => {
  return technologies.reduce<CategoryData>((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {});
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  },
} as const;

const categoryVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

interface SkillsPageProps {
  className?: string;
}

const SkillsPage: React.FC<SkillsPageProps> = ({ className = "" }) => {
  const categories = categorizeTechnologies(TECHNOLOGIES);

  return (
    <section
      id="skills"
      className={`py-20 px-4 sm:px-8 lg:px-16 relative z-10 min-h-screen ${className}`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-r from-[#8d4ea4]/20 to-[#C19A6B]/20 blur-xl"
          aria-hidden="true"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-32 left-20 w-40 h-40 rounded-full bg-gradient-to-r from-[#8B5CF6]/20 to-[#8d4ea4]/20 blur-xl"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} // Added viewport config
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl text-white font-bold leading-tight mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8d4ea4] to-[#C19A6B]">
              Technical
            </span>{" "}
            Arsenal
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Tech stacks and frameworks I use professionally.
          </motion.p>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-[#8d4ea4] to-[#C19A6B] mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.6 }}
            aria-hidden="true"
          />
        </motion.header>
        <main className="space-y-16">
          {Object.entries(categories).map(([categoryName, techs]) => (
            <motion.section
              key={categoryName}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2, margin: "-50px" }} // Improved viewport config
              className="relative"
            >
              <div className="flex items-center mb-8">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-white mr-6"
                  whileHover={{ scale: 1.05 }}
                >
                  {categoryName}
                </motion.h2>
                <motion.div
                  className="flex-1 h-px bg-gradient-to-r from-[#8d4ea4] to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true, amount: 0.5 }}
                  aria-hidden="true"
                />
              </div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1, margin: "0px" }} // Better viewport for grid
                role="list"
                aria-label={`${categoryName} technologies`}
              >
                {techs.map((tech, index) => {
                  const proficiencyPercentage = `${tech.proficiency}%`;

                  return (
                    <motion.div
                      key={tech.name}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.08,
                        y: -5,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a]/80 to-[#2a2b2c]/60 backdrop-blur-sm border border-[#2a2b2c] hover:border-[#8d4ea4]/60 transition-all duration-300 overflow-hidden"
                      role="listitem"
                    >
                      {/* Hover overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#8d4ea4]/10 to-[#C19A6B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                        aria-hidden="true"
                      />

                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <motion.div
                          className="text-5xl mb-4 drop-shadow-lg"
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                          aria-hidden="true"
                        >
                          {tech.icon}
                        </motion.div>

                        <h3 className="font-bold text-white text-lg mb-3 group-hover:text-[#8d4ea4] transition-colors duration-300">
                          {tech.name}
                        </h3>

                        {/* Proficiency Bar */}
                        <div
                          className="w-full"
                          role="progressbar"
                          aria-valuenow={tech.proficiency}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${tech.name} proficiency: ${proficiencyPercentage}`}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-400">
                              Proficiency
                            </span>
                            <span className="text-sm font-semibold text-[#8d4ea4]">
                              {proficiencyPercentage}
                            </span>
                          </div>
                          <div className="w-full bg-[#2a2b2c] rounded-full h-2 overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-[#8d4ea4] to-[#C19A6B] rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: proficiencyPercentage }}
                              transition={{
                                duration: 1,
                                delay: 0.5 + index * 0.1,
                              }}
                              viewport={{ once: true, amount: 0.3 }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Animated corner accent */}
                      <motion.div
                        className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#8d4ea4]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                        aria-hidden="true"
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.section>
          ))}
        </main>
      </div>
    </section>
  );
};

export default SkillsPage;
