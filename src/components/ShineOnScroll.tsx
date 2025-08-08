"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ShineOnScrollProps {
  children: ReactNode;
}

export default function ShineOnScroll({ children }: ShineOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible
          ? "animate-shine bg-gradient-to-r from-white/10 via-white/20 to-white/10 bg-[length:300%_100%] bg-clip-text text-transparent"
          : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
