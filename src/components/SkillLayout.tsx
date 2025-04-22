import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiFigma,
  SiFirebase,
} from "react-icons/si";
import { ReactElement } from "react";

type SkillProps = {
  icon: ReactElement;
  name: string;
};

const Skill: React.FC<SkillProps> = ({ icon, name }) => (
  <div className="flex items-center gap-3 text-lg">
    <div className="text-3xl">{icon}</div>
    <span>{name}</span>
  </div>
);

export default function SkillsPage() {
  return (
    <div className="min-h-screen px-6 py-12 bg-transparent text-white ">
      <div className="max-w-4xl mx-auto">
        <div className="border-b-4 border-[#2a2b2c]">
          <h1 className="text-3xl font-bold mb-4">My Technical Skills</h1>
          <p className="text-lg mb-10">
            Here&apos;s a breakdown of the tools and technologies I&apos;m
            comfortable working with. I enjoy working across the stack, from
            building clean UIs to managing back-end logic.
          </p>
        </div>

        <section className="mb-10 border-b-4 border-[#2a2b2c] p-4">
          <h2 className="text-2xl font-semibold mb-4">Languages</h2>
          <div className="flex flex-wrap gap-6">
            <Skill
              icon={<FaHtml5 className="text-orange-500" />}
              name="HTML5"
            />
            <Skill icon={<FaCss3Alt className="text-blue-500" />} name="CSS3" />
            <Skill
              icon={<FaJs className="text-yellow-400" />}
              name="JavaScript"
            />
            <Skill
              icon={<SiTypescript className="text-blue-600" />}
              name="TypeScript"
            />
            <Skill
              icon={<FaPython className="text-blue-400" />}
              name="Python"
            />
          </div>
        </section>

        <section className="mb-10 border-b-4 border-[#2a2b2c] p-4">
          <h2 className="text-2xl font-semibold mb-4">
            Frameworks & Libraries
          </h2>
          <div className="flex flex-wrap gap-6">
            <Skill
              icon={<FaReact className="text-cyan-500" />}
              name="React.js"
            />
            <Skill
              icon={<FaNodeJs className="text-green-600" />}
              name="Next.js"
            />
            <Skill
              icon={<SiTailwindcss className="text-teal-400" />}
              name="Tailwind CSS"
            />
            <Skill
              icon={<SiDjango className="text-green-800" />}
              name="Django"
            />
            <Skill
              icon={<SiFirebase className="text-yellow-500" />}
              name="Firebase"
            />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 p-4">Other Tools</h2>
          <div className="flex flex-wrap gap-6">
            <Skill
              icon={<FaGithub className="text-black" />}
              name="Git & GitHub"
            />
            <Skill
              icon={<SiPostgresql className="text-blue-700" />}
              name="PostgreSQL"
            />
            <Skill icon={<SiFigma className="text-pink-500" />} name="Figma" />
          </div>
        </section>

        {/* <div className="mt-12 text-center">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <button className="bg-[#6F4E37] cursor-pointer text-white px-5 py-2 text-base rounded hover:bg-[#8a6245] mt-6 font-bold">
              Check my Resume
            </button>
          </a>
        </div> */}
      </div>
    </div>
  );
}
