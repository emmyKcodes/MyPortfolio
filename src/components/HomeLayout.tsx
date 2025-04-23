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
} from "react-icons/fa";

export default function HomeLayout() {
  const [text, setText] = useState("");
  const fullText =
    "Hi, I'm Kehinde Emmanuel Oladapo,  A Frontend Engineer with a passion for turning ideas into stunning user experiences. I specialize in React  and love building clean, responsive, and impactful interfaces that users enjoy. When I'm not coding, I enjoy listening to music 🎧 or refining  my design-eye for seamless UI/UX. Let's build something amazing together!😄";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(typingInterval);
    }, 20);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen bg-transparent flex items-start justify-center p-5">
      <div className="flex flex-col lg:flex-row w-full gap-8">
        <div className="lg:w-[30%] w-full rounded-4xl bg-[#2a2b2c] flex flex-col items-center justify-center lg:p-4 p-0 min-h-[calc(100vh-40px)]">
          <div className="w-full flex justify-center  mb-4 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
            <div className="relative w-[276px] h-[326px]   overflow-hidden rounded-3xl">
              <Image
                src="/img/E_Profile.png"
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="rounded"
                priority
              />
            </div>
          </div>

          <p className="text-center text-gray-600 text-lg font-bold mb-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Kehinde Emmanuel Oladapo
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Link
              href="https://github.com/emmyKcodes"
              target="
              _blank"
              className="text-white hover:text-[#8a6245] transition duration-200"
            >
              <FaGithub className="text-2xl" />
            </Link>
            <Link
              href="https://www.instagram.com/ekehinde12345/"
              target="_blank"
              className="text-white hover:text-[#8a6245] transition duration-200"
            >
              <FaInstagram className="text-2xl" />
            </Link>
            <Link
              href="https://x.com/k_k39777886"
              target="_blank"
              className="text-white hover:text-[#8a6245] transition duration-200"
            >
              <FaTwitter className="text-2xl" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/emmanuel-kehinde-9b6438266/"
              target="_blank"
              className="text-white hover:text-[#8a6245] transition duration-200"
            >
              <FaLinkedin className="text-2xl" />
            </Link>
          </div>
          <button className="bg-[#6F4E37] cursor-pointer text-white px-5 py-2 text-base rounded hover:bg-[#8a6245] mt-6 font-bold flex items-center gap-2">
            <Link
              href="https://api.whatsapp.com/send?phone=2349161336710&text=Hi%20Emmanuel!%20%F0%9F%91%8B%20I%20just%20visited%20your%20portfolio%20and%20I%E2%80%99m%20really%20impressed.%20I%E2%80%99d%20love%20to%20connect%20and%20possibly%20collaborate!%20%F0%9F%9A%80%F0%9F%92%A1"
              target="blank"
            >
              Let&apos;s Talk
            </Link>
            <FaWhatsapp className="text-lg text-white" />
          </button>
        </div>

        <div className="lg:w-[70%] w-full bg-transparent shadow flex flex-col items-center  justify-center gap-8 min-h-[calc(100vh-40px)] p-6 text-center bg-transparent">
          <div className="max-w-2xl">
            <h2 className="text-lg md:text-xl lg:text-3xl   leading-relaxed sm:text-lg :text-3xl  font-extrabold text-left text-white ">
              {text}
            </h2>
          </div>

          <div className="flex gap-6 flex-wrap justify-center text-xl font-bold text-[#6F4E37]">
            <span className="bg-transparent px-6 py-3 rounded text-lg md:text-xl lg:text-3xl "></span>
          </div>

          <div className="flex flex-wrap gap-6 justify-center ">
            <button className="bg-transparent border border-[#6F4E37] cursor-pointer text-[#6F4E37] px-8 py-4 text-lg font-semibold rounded hover:bg-[#6F4E37] hover:text-white transition-all">
              <Link href="/contact">Let&apos;s Talk</Link>
            </button>

            <button
              className="group relative overflow-hidden border border-gray-400 bg-transparent px-4 py-2 text-lg font-semibold text-[#6F4E37] rounded cursor-pointer transition-all hover:text-white
                    before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-[#6F4E37] before:duration-500
  after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-[#6F4E37] after:duration-500
    hover:before:h-full hover:after:h-full"
            >
              <span className="relative z-10">
                <Link href="/projects" rel="noopener noreferrer">
                  My Work --&gt;
                </Link>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
