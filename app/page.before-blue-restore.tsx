
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

        
      </div>

      
{/* 815 HOMEPAGE LUXURY SECTIONS */}
<div className="relative z-10 mx-auto mt-16 w-full max-w-5xl space-y-6 px-4 pb-24 sm:px-6">

  {/* COLLECTIONS */}
  <section
    className="rounded-2xl border p-6 text-center sm:p-9"
    style={{
      borderColor: "#D4AF37",
      background:
        "linear-gradient(125deg,#211B12,#101010,#292115)",
      boxShadow:
        "0 8px 28px rgba(0,0,0,0.55)",
    }}
  >
    <p className="text-xs font-black tracking-[0.2em] text-[#D4AF37]">
      WELCOME TO THE EXPERIENCE
    </p>

    <h2 className="mt-4 text-2xl font-black tracking-wide text-[#FFE5A0] sm:text-3xl">
      EXCLUSIVE COLLECTIONS
    </h2>

    <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#D8C9A7]">
      Explore the world of 815 FLAVORZ.
      Discover our collections and see what is coming next.
    </p>

    <a
      href="/collection"
      className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl px-7 py-3 text-sm font-black tracking-wide transition hover:brightness-110"
      style={{
        background:
          "linear-gradient(135deg,#F1D788,#D4AF37,#A98331)",
        color: "#090909",
        boxShadow:
          "0 0 18px rgba(212,175,55,0.22)",
      }}
    >
      EXPLORE COLLECTIONS →
    </a>
  </section>

  {/* BRAND VALUES */}
  <div className="grid grid-cols-2 gap-3">
    <div className="rounded-xl border border-[#9C7C30] bg-[#15130F] p-5 text-center">
      <span className="text-2xl text-[#D4AF37]" aria-hidden="true">
        ✦
      </span>
      <h3 className="mt-2 text-sm font-black tracking-wide text-[#FFE5A0]">
        EXCLUSIVE
      </h3>
    </div>

    <div className="rounded-xl border border-[#9C7C30] bg-[#15130F] p-5 text-center">
      <span className="text-2xl text-[#D4AF37]" aria-hidden="true">
        ◆
      </span>
      <h3 className="mt-2 text-sm font-black tracking-wide text-[#FFE5A0]">
        PREMIUM STYLE
      </h3>
    </div>
  </div>

  {/* OUR STORY */}
  <section
    className="rounded-2xl border p-6 text-center sm:p-9"
    style={{
      borderColor: "#B99542",
      background:
        "linear-gradient(115deg,#171510,#292216,#101010)",
    }}
  >
    <div className="text-3xl text-[#D4AF37]" aria-hidden="true">
      ✦
    </div>

    <h2 className="mt-3 text-2xl font-black text-[#FFE5A0]">
      OUR STORY
    </h2>

    <div className="mx-auto mt-4 h-px w-28 bg-[#D4AF37]" />

    <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#D8C9A7]">
      Built from the ground up with a vision
      to create something different.
      815 FLAVORZ is a brand focused on
      growth, identity, and building
      something of our own.
    </p>

    <a
      href="/about"
      className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4AF37] px-6 py-3 text-sm font-black text-black transition hover:brightness-110"
    >
      READ OUR STORY →
    </a>
  </section>

  {/* FAQ */}
  <section
    className="rounded-2xl border p-6 sm:p-9"
    style={{
      borderColor: "#B99542",
      background:
        "linear-gradient(120deg,#13120F,#231D13,#101010)",
    }}
  >
    <div className="text-center">
      <div className="text-3xl font-bold text-[#D4AF37]" aria-hidden="true">
        ?
      </div>

      <h2 className="mt-3 text-2xl font-black text-[#FFE5A0]">
        FREQUENTLY ASKED QUESTIONS
      </h2>

      <p className="mt-3 text-sm text-[#D8C9A7]">
        Everything you need to know about 815 FLAVORZ.
      </p>
    </div>

    <div className="mt-7 space-y-3">
      <details className="group rounded-xl border border-[#8B7137] bg-[#0C0C0C] p-4">
        <summary className="cursor-pointer font-bold text-[#FFE5A0]">
          What is 815 FLAVORZ?
        </summary>
        <p className="mt-3 text-sm leading-6 text-[#D8C9A7]">
          815 FLAVORZ is an up-and-coming brand
          showcasing our collections and brand identity.
        </p>
      </details>

      <details className="group rounded-xl border border-[#8B7137] bg-[#0C0C0C] p-4">
        <summary className="cursor-pointer font-bold text-[#FFE5A0]">
          Can I purchase directly through the website?
        </summary>
        <p className="mt-3 text-sm leading-6 text-[#D8C9A7]">
          No. Our website is currently for
          showcasing our brand and collections.
        </p>
      </details>

      <details className="group rounded-xl border border-[#8B7137] bg-[#0C0C0C] p-4">
        <summary className="cursor-pointer font-bold text-[#FFE5A0]">
          Where can I find more information?
        </summary>
        <p className="mt-3 text-sm leading-6 text-[#D8C9A7]">
          Visit our FAQ and Contact pages
          for more information and updates.
        </p>
      </details>
    </div>

    <div className="mt-7 text-center">
      <a
        href="/faq"
        className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4AF37] px-6 py-3 text-sm font-black text-black transition hover:brightness-110"
      >
        VIEW ALL FAQ →
      </a>
    </div>
  </section>

  {/* CONTACT */}
  <section
    className="rounded-2xl border p-6 text-center sm:p-9"
    style={{
      borderColor: "#D4AF37",
      background:
        "linear-gradient(120deg,#19160F,#101010,#2B2315)",
    }}
  >
    <div className="text-3xl text-[#D4AF37]" aria-hidden="true">
      ✉
    </div>

    <h2 className="mt-3 text-2xl font-black text-[#FFE5A0]">
      CONTACT US
    </h2>

    <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#D8C9A7]">
      Have a question or want to learn
      more about 815 FLAVORZ?
      Visit our contact page.
    </p>

    <a
      href="/contact"
      className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4AF37] px-7 py-3 text-sm font-black text-black transition hover:brightness-110"
    >
      GET IN TOUCH →
    </a>
  </section>

  <div className="pt-5 text-center">
    <p className="text-xs font-bold tracking-[0.2em] text-[#D4AF37]">
      EXOTICS & ALWAYS FRESH
    </p>
    <p className="mt-3 text-xs tracking-wide text-gray-400">
      815 FLAVORZ © 2026
    </p>
  </div>

</div>

<p className="relative z-10 mt-4 pb-24 text-xs tracking-widest text-gray-500">
        EXCLUSIVE COLLECTIONS
      </p>
    </main>
  );
}
