"use client";

import Image from "next/image";

const projects = [
  {
    title: "Departmental Portal",
    description: "Manage Documents and Access Resources",
    link: "https://departmental-portal-s.vercel.app/",
    image: "/img/Dept_Portal.png",
  },
  {
    title: "Worldwise",
    description: "Document and Keep track of your adventures",
    link: "https://worldwise-gold.vercel.app/",
    image: "/img/Worldwise.png",
  },
  {
    title: "Glowing",
    description:
      "Beautiful and well crafted landing page showcasing design skill",
    link: "https://glowing-e-commece.vercel.app/",
    image: "/img/Glowing.png",
  },
  {
    title: "Armint",
    description: "A  tracker for finaacial transactions",
    link: "#",
    image: "/img/Armint.jpg",
  },
];

export default function Projects() {
  return (
    <section className="p-8 text-center ">
      <div className="border-b-4 border-[#2a2b2c]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight p-8">
          Recent Projects and{" "}
          <span className="text-[#6F4E37]">Achievements</span>
        </h1>

        <p className="text-xl font-bold text-left mb-8 ">
          Below are some of the projects I have worked on. Each project
          demonstrates my skills in web development, from front-end to back-end,
          and my passion for creating user-friendly, dynamic web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group w-[450px] h-[387px] max-w-full transform transition-all duration-300 bg-transparent rounded-lg shadow-md overflow-hidden"
          >
            <a
              href={project.link}
              className="block w-full h-full "
              target="_blank"
            >
              <div className="relative w-full h-[70%] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fill transition-transform duration-500 scale-140 group-hover:scale-180"
                  width={450}
                  height={270}
                />
              </div>

              <div className="bg-[#2a2b2c] text-white p-4 h-[30%] flex flex-col justify-center items-center">
                <h3 className="text-xl font-semibold mb-2 text-white transition-colors duration-300 group-hover:text-[#4B3621] text-center">
                  {project.title}
                </h3>
                <p className="text-white text-center">{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
