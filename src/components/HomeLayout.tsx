"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

export default function HomeLayout() {
  const [text, setText] = useState("");
  const fullText =
    "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(typingInterval);
    }, 30);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen bg-transparent flex items-start justify-center p-5 mx-4 md:mx-8 lg:mx-12">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8">
        {/* Profile Card */}
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[30%] mx-auto lg:mx-0 rounded-4xl bg-[#2a2b2c] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:p-4 py-6 min-h-[calc(100vh-40px)]">
          <div className="w-full flex justify-center mb-4 mt-2 sm:mt-6 md:mt-8 lg:mt-10">
            <div className="relative w-[276px] h-[326px] overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/img/E_Profile.png"
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent rounded-3xl"></div>
            </div>
          </div>

          <p className="text-center text-white text-lg font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Kehinde Emmanuel Oladapo
            <br />
            <br />
            <span className="text-2xl text-gray-300">Front End Developer</span>
          </p>

          {/* Social Icons - Bigger on mobile/tablet */}
          <div className="flex justify-center gap-6 sm:gap-5 md:gap-4 mt-6">
            <Link
              href="https://github.com/emmyKcodes"
              target="_blank"
              className="text-white hover:text-[#8B5CF6] transition duration-200 transform hover:scale-110"
            >
              <FaGithub className="text-3xl sm:text-3xl md:text-2xl lg:text-2xl" />
            </Link>
            <Link
              href="https://www.instagram.com/ekehinde12345/"
              target="_blank"
              className="text-white hover:text-[#8B5CF6] transition duration-200 transform hover:scale-110"
            >
              <FaInstagram className="text-3xl sm:text-3xl md:text-2xl lg:text-2xl" />
            </Link>
            <Link
              href="https://x.com/k_k39777886"
              target="_blank"
              className="text-white hover:text-[#8B5CF6] transition duration-200 transform hover:scale-110"
            >
              <FaTwitter className="text-3xl sm:text-3xl md:text-2xl lg:text-2xl" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/emmanuel-kehinde-9b6438266/"
              target="_blank"
              className="text-white hover:text-[#8B5CF6] transition duration-200 transform hover:scale-110"
            >
              <FaLinkedin className="text-3xl sm:text-3xl md:text-2xl lg:text-2xl" />
            </Link>
          </div>

          <button className="bg-[#8B5CF6] cursor-pointer text-white px-5 py-2 text-base rounded-lg hover:bg-[#7C3AED] mt-6 font-bold flex items-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
            <Link
              href="https://api.whatsapp.com/send?phone=2349161336710&text=Hi%20Emmanuel!%20%F0%9F%91%8B%20I%20just%20visited%20your%20portfolio%20and%20I%E2%80%99m%20really%20impressed.%20I%E2%80%99d%20love%20to%20connect%20and%20possibly%20collaborate!%20%F0%9F%9A%80%F0%9F%92%A1"
              target="blank"
            >
              Let&apos;s Talk
            </Link>
            <FaWhatsapp className="text-lg text-white" />
          </button>
        </div>

        {/* Main Content */}
        <div className="lg:w-[70%] w-full bg-transparent shadow flex flex-col items-center justify-center gap-8 min-h-[calc(100vh-40px)] p-6 text-center bg-transparent">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight">
              Transforming Your Ideas into
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                &nbsp; Reality
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-300 mb-8 min-h-[60px]">
              {text}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 justify-center items-center mb-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2">
                3+
              </div>
              <div className="text-sm md:text-base lg:text-lg text-white font-semibold tracking-wider">
                YEARS OF
                <br />
                EXPERIENCE
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2">
                +10
              </div>
              <div className="text-sm md:text-base lg:text-lg text-white font-semibold tracking-wider">
                PROJECTS
                <br />
                COMPLETED
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            <button className="group relative overflow-hidden bg-[#8B5CF6] cursor-pointer text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-500 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <Link href="/contact" className="relative z-10">
                Let&apos;s Talk
              </Link>
            </button>

            <button className="group relative overflow-hidden border border-purple-500 bg-transparent px-8 py-4 text-lg font-semibold text-white rounded-lg cursor-pointer transition-all duration-300 hover:border-purple-400">
              <Link
                href="/projects"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span>My Work</span>
                <FaArrowRight className="text-sm transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
