"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiTool } from "react-icons/fi";
import { RiArticleLine } from "react-icons/ri";
import { VscFolderLibrary } from "react-icons/vsc";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const Links = [
  {
    name: "Home",
    link: "/",
    icon: (isActive: boolean) => (
      <div
        className={`group relative h-10 w-10 sm:w-5 sm:h-5 md:w-12 md:h-12 lg:w-12 lg:h-12 overflow-hidden rounded flex items-center justify-center transition-all duration-300 ${
          isActive ? "bg-[#C19A6B]" : ""
        }`}
      >
        <span
          className={`absolute bottom-0 left-0 top-0 z-0 h-full w-0 bg-[#C19A6B] transition-all duration-500 group-hover:w-full ${
            isActive ? "w-full" : ""
          }`}
        />
        <FiHome
          className={`relative z-10 w-5 h-5 ${
            isActive ? "text-white" : "text-[#C19A6B]"
          } group-hover:text-white transition duration-300`}
        />
      </div>
    ),
  },
  {
    name: "Article",
    link: "/article",
    icon: (isActive: boolean) => (
      <div
        className={`group relative h-10 w-10 sm:w-5 sm:h-5 md:w-10 md:h-10 lg:w-12 lg:h-12 overflow-hidden rounded flex items-center justify-center transition-all duration-300 ${
          isActive ? "bg-[#C19A6B]" : ""
        }`}
      >
        <span
          className={`absolute bottom-0 left-0 top-0 z-0 h-full w-0 bg-[#C19A6B] transition-all duration-500 group-hover:w-full ${
            isActive ? "w-full" : ""
          }`}
        />
        <RiArticleLine
          className={`relative z-10 w-5 h-5 ${
            isActive ? "text-white" : "text-[#C19A6B]"
          } group-hover:text-white transition duration-300`}
        />
      </div>
    ),
  },
  {
    name: "Projects",
    link: "/projects",
    icon: (isActive: boolean) => (
      <div
        className={`group relative h-10 w-10 sm:w-5 sm:h-5 md:w-10 md:h-10 lg:w-12 lg:h-12 overflow-hidden rounded flex items-center justify-center transition-all duration-300 ${
          isActive ? "bg-[#C19A6B]" : ""
        }`}
      >
        <span
          className={`absolute bottom-0 left-0 top-0 z-0 h-full w-0 bg-[#C19A6B] transition-all duration-500 group-hover:w-full ${
            isActive ? "w-full" : ""
          }`}
        />
        <VscFolderLibrary
          className={`relative z-10 w-5 h-5 ${
            isActive ? "text-white" : "text-[#C19A6B]"
          } group-hover:text-white transition duration-300`}
        />
      </div>
    ),
  },
  {
    name: "Skills",
    link: "/skills",
    icon: (isActive: boolean) => (
      <div
        className={`group relative h-10 w-10 sm:w-5 sm:h-5 md:w-9 md:h-9 lg:w-10 lg:h-10 overflow-hidden rounded flex items-center justify-center transition-all duration-300 ${
          isActive ? "bg-[#C19A6B]" : ""
        }`}
      >
        <span
          className={`absolute bottom-0 left-0 top-0 z-0 h-full w-0 bg-[#C19A6B] transition-all duration-500 group-hover:w-full ${
            isActive ? "w-full" : ""
          }`}
        />
        <FiTool
          className={`relative z-10 w-5 h-5 ${
            isActive ? "text-white" : "text-[#C19A6B]"
          } group-hover:text-white transition duration-300`}
        />
      </div>
    ),
  },
  {
    name: "Contact",
    link: "/contact",
    icon: (isActive: boolean) => (
      <div
        className={`group relative h-10 w-10 sm:w-5 sm:h-5 md:w-10 md:h-10 lg:w-12 lg:h-12 overflow-hidden rounded flex items-center justify-center transition-all duration-300 ${
          isActive ? "bg-[#C19A6B]" : ""
        }`}
      >
        <span
          className={`absolute bottom-0 left-0 top-0 z-0 h-full w-0 bg-[#C19A6B] transition-all duration-500 group-hover:w-full ${
            isActive ? "w-full" : ""
          }`}
        />
        <IoChatbubbleEllipsesOutline
          className={`relative z-10 w-5 h-5 ${
            isActive ? "text-white" : "text-[#C19A6B]"
          } group-hover:text-white transition duration-300`}
        />
      </div>
    ),
  },
];

export default function Navigation() {
  const pathname = usePathname(); // Get current route

  return (
    <header className="shadow-md w-full sticky top-0 left-0 z-50">
      <nav className="flex items-center justify-between p-4 bg-transparent backdrop-blur-sm">
        <div className="w-70 cursor-pointer hidden md:block">
          <Image
            className="w-full h-full object-cover rounded"
            src="/img/DTD main full logo on blk no bg v1@4x.png"
            width={150}
            height={100}
            alt="Logo"
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-4 md:gap-4 lg:gap-3">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-4 md:gap-8 lg:gap-16">
              {Links.map((item) => {
                const isActive = pathname === item.link;
                return (
                  <Link
                    key={item.name}
                    href={item.link}
                    className="group transition duration-300"
                  >
                    <div className="flex flex-col items-center justify-center bg-transparent transition duration-300">
                      {item.icon(isActive)}
                    </div>
                    <span
                      className={`text-xs mt-2 transition duration-300 ${
                        isActive
                          ? "text-white opacity-100"
                          : "text-transparent opacity-100 sm:text-transparent sm:group-hover:text-white"
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
