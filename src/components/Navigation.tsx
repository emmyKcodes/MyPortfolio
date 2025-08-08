"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  DocumentTextIcon,
  FolderIcon,
  WrenchScrewdriverIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const Links = [
  {
    name: "Home",
    link: "/",
    icon: (isActive: boolean) => (
      <div
        className={`group relative h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 overflow-hidden rounded flex items-center justify-center transition-all duration-300 ${
          isActive ? "bg-[#8d4aea]" : ""
        }`}
      >
        <span
          className={`absolute inset-0 z-0 bg-[#8d4aea] transition-all duration-500 scale-0 group-hover:scale-100 rounded ${
            isActive ? "scale-100" : ""
          }`}
        />
        <HomeIcon
          className={`relative z-10 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ${
            isActive ? "text-white" : "text-[#8d4aea]"
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
        className={`group relative h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 overflow-hidden rounded flex items-center justify-center transition-all duration-300 ${
          isActive ? "bg-[#8d4aea]" : ""
        }`}
      >
        <span
          className={`absolute inset-0 z-0 bg-[#8d4aea] transition-all duration-500 scale-0 group-hover:scale-100 rounded ${
            isActive ? "scale-100" : ""
          }`}
        />
        <DocumentTextIcon
          className={`relative z-10 w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 ${
            isActive ? "text-white" : "text-[#8d4aea]"
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
        className={`group relative h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 overflow-hidden rounded flex items-center justify-center transition-all duration-300 ${
          isActive ? "bg-[#8d4aea]" : ""
        }`}
      >
        <span
          className={`absolute inset-0 z-0 bg-[#8d4aea] transition-all duration-500 scale-0 group-hover:scale-100 rounded ${
            isActive ? "scale-100" : ""
          }`}
        />
        <FolderIcon
          className={`relative z-10 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${
            isActive ? "text-white" : "text-[#8d4aea]"
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
        className={`group relative h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 overflow-hidden rounded flex items-center justify-center transition-all duration-300 ${
          isActive ? "bg-[#8d4aea]" : ""
        }`}
      >
        <span
          className={`absolute inset-0 z-0 bg-[#8d4aea] transition-all duration-500 scale-0 group-hover:scale-100 rounded ${
            isActive ? "scale-100" : ""
          }`}
        />
        <WrenchScrewdriverIcon
          className={`relative z-10 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 ${
            isActive ? "text-white" : "text-[#8d4aea]"
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
        className={`group relative h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 overflow-hidden rounded flex items-center justify-center transition-all duration-300 ${
          isActive ? "bg-[#8d4aea]" : ""
        }`}
      >
        <span
          className={`absolute inset-0 z-0 bg-[#8d4aea] transition-all duration-500 scale-0 group-hover:scale-100 rounded ${
            isActive ? "scale-100" : ""
          }`}
        />
        <ChatBubbleLeftRightIcon
          className={`relative z-10 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 ${
            isActive ? "text-white" : "text-[#8d4aea]"
          } group-hover:text-white transition duration-300`}
        />
      </div>
    ),
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="top-0 left-0 z-50 flex justify-center w-full">
      <nav className="inline-flex items-center justify-center bg-[#272829] backdrop-blur-sm rounded-2xl mt-6   py-2 px-12 sm:px-4  md:px-8 ">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-4">
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
                  className={`text-xs mt-1 sm:mt-2 transition duration-300 block text-center ${
                    isActive
                      ? "text-white opacity-100"
                      : "text-gray-400 opacity-70 group-hover:text-white group-hover:opacity-100"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
