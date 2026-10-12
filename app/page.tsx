
"use client";

import ShootingStar from "./ShootingStar";
import { useState } from "react";
import GoldParticles from "./GoldParticles";

const GOLD = "#D4AF37";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-5 text-center text-white">
      <ShootingStar />
      <GoldParticles />

      <div className="absolute right-5 top-5 z-30">
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-[#D4AF37] bg-black px-4 py-2 text-xl font-bold text-[#D4AF37]"
        >
          ☰
        </button>

        {menuOpen && (
          <nav className="absolute right-0 top-14 flex w-44 flex-col rounded-xl border border-[#D4AF37] bg-black p-2 text-left text-sm text-white shadow-xl">
            <a href="/" className="rounded-lg px-3 py-3 hover:bg-[#222]">
              Home
            </a>
            <a href="/about" className="rounded-lg px-3 py-3 hover:bg-[#222]">
              About Us
            </a>
            <a href="/faq" className="rounded-lg px-3 py-3 hover:bg-[#222]">
              FAQ
            </a>
            <a href="/contact" className="rounded-lg px-3 py-3 hover:bg-[#222]">
              Contact Us
            </a>
          </nav>
        )}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h1
          className="text-4xl font-black tracking-widest sm:text-6xl"
          style={{
            color: GOLD,
            textShadow: "0 0 10px #FFD700, 0 0 25px rgba(255,215,0,0.7)",
          }}
        >
          815 FLAVORZ
        </h1>

        <p className="mt-6 text-lg italic tracking-wide text-[#E3CB95] sm:text-xl">
          The Flavor Speaks for Itself.
        </p>

        <a
          href="/collection"
          className="mt-10 rounded-xl px-8 py-4 text-sm font-black tracking-widest transition hover:brightness-125"
          style={{ backgroundColor: GOLD, color: "#000000" }}
        >
          VIEW COLLECTION →
        </a>
      </div>

      <p className="absolute bottom-8 text-xs tracking-widest text-gray-500">
        EXCLUSIVE COLLECTIONS
      </p>
    </main>
  );
}
