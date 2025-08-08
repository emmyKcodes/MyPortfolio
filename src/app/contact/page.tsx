import ContactLayout from "@/components/ContactLayout";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div
        className="noise-bg fixed inset-0 w-full h-full z-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg className="w-full h-full">
          <filter id="noise-bg-fx">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.6"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect
            width="100%"
            height="100%"
            filter="url(#noise-bg-fx)"
            opacity="0.05"
          />
        </svg>
      </div>

      <div className="relative z-10">
        <main className="p-0 md:p-3">
          <ContactLayout />
        </main>
      </div>
      <footer className="bg-[#2a2b2c] text-white text-sm py-6 text-center mt-20 rounded-t-2xl shadow-inner">
        <p>&copy; 2025 Kehinde Emmanuel Oladapo. All rights reserved.</p>
        <p className="mt-1 italic text-white">
          Crafted with love and clean code 💻✨
        </p>
      </footer>
    </div>
  );
}
