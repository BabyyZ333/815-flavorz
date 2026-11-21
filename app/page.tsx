"use client";

import { useState } from "react";
import { Bungee } from "next/font/google";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");

  function enterSite() {
    if (password === "815flavorz") {
      setUnlocked(true);
      setError("");
    } else {
      setError("Wrong password");
    }
  }

  if (!unlocked) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="w-full max-w-sm rounded-3xl border border-blue-500/30 bg-blue-950/20 p-8 text-center shadow-[0_0_60px_rgba(59,130,246,0.18)]">

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.45em] text-blue-400">
            Private Access
          </p>

          <h1 className={`${bungee.className} text-5xl tracking-tight`}>
            815 <span className="text-blue-500">FLAVORZ</span>
          </h1>

          <p className="mt-3 text-xs uppercase tracking-[0.25em] text-gray-400">
            Exclusive • Exotic • Premium
          </p>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && enterSite()}
            className="mt-8 w-full rounded-2xl border border-blue-500/40 bg-black/70 px-4 py-3 text-white outline-none focus:border-blue-400"
          />

          <button
            onClick={enterSite}
            className={`${bungee.className} mt-4 w-full rounded-2xl bg-blue-600 px-4 py-3 text-white shadow-[0_0_25px_rgba(37,99,235,0.5)] transition hover:bg-blue-500`}
          >
            ENTER
          </button>

          {error && (
            <p className="mt-4 text-blue-300">
              {error}
            </p>
          )}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white">

      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 border-b border-blue-500/30 bg-black/85 px-6 py-5 backdrop-blur-xl">

        <h1 className={`${bungee.className} text-2xl tracking-tight`}>
          815 <span className="text-blue-500">FLAVORZ</span>
        </h1>

        <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider sm:text-sm">
          <a className="transition hover:text-blue-400" href="#">
            Home
          </a>

          <a className="transition hover:text-blue-400" href="#flower">
            Flower
          </a>

          <a className="transition hover:text-blue-400" href="#prerolls">
            Pre-Rolls
          </a>

          <a className="transition hover:text-blue-400" href="#edibles">
            Edibles
          </a>

          <a className="transition hover:text-blue-400" href="#disposables">
            Disposables
          </a>
        </div>
      </nav>

      {/* MAIN HERO */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 text-center">

        <div className="absolute h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative z-10">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.45em] text-blue-400">
            Welcome To
          </p>

          <h2 className={`${bungee.className} text-6xl tracking-tighter sm:text-8xl`}>
            815
            <span className="block text-blue-500 drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]">
              FLAVORZ
            </span>
          </h2>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-gray-300">
            Exclusive • Exotic • Premium
          </p>

          <a
            href="#flower"
            className={`${bungee.className} mt-10 inline-block rounded-full border border-blue-400 bg-blue-600 px-8 py-3 shadow-[0_0_30px_rgba(37,99,235,0.5)] transition hover:scale-105 hover:bg-blue-500`}
          >
            EXPLORE
          </a>

        </div>
      </section>

      {/* FLOWER */}
      <section
        id="flower"
        className="border-t border-blue-500/20 px-6 py-24 text-center"
      >
        <div className="mx-auto max-w-3xl rounded-3xl border border-blue-500/20 bg-blue-950/20 p-10 shadow-[0_0_40px_rgba(59,130,246,0.08)]">

          <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-400">
            Collection
          </p>

          <h2 className={`${bungee.className} mt-3 text-4xl`}>
            FLOWER
          </h2>

          <p className={`${bungee.className} mt-6 text-2xl tracking-[0.15em] text-blue-400`}>
            COMING SOON
          </p>

        </div>
      </section>

      {/* PRE-ROLLS */}
      <section
        id="prerolls"
        className="border-t border-blue-500/20 px-6 py-24 text-center"
      >
        <div className="mx-auto max-w-3xl rounded-3xl border border-blue-500/20 bg-black/30 p-10 shadow-[0_0_40px_rgba(59,130,246,0.08)]">

          <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-400">
            Collection
          </p>

          <h2 className={`${bungee.className} mt-3 text-4xl`}>
            PRE-ROLLS
          </h2>

          <p className={`${bungee.className} mt-6 text-2xl tracking-[0.15em] text-blue-400`}>
            COMING SOON
          </p>

        </div>
      </section>

      {/* EDIBLES */}
      <section
        id="edibles"
        className="border-t border-blue-500/20 px-6 py-24 text-center"
      >
        <div className="mx-auto max-w-3xl rounded-3xl border border-blue-500/20 bg-blue-950/20 p-10 shadow-[0_0_40px_rgba(59,130,246,0.08)]">

          <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-400">
            Collection
          </p>

          <h2 className={`${bungee.className} mt-3 text-4xl`}>
            EDIBLES
          </h2>

          <p className={`${bungee.className} mt-6 text-2xl tracking-[0.15em] text-blue-400`}>
            COMING SOON
          </p>

        </div>
      </section>

      {/* DISPOSABLES */}
      <section
        id="disposables"
        className="border-t border-blue-500/20 px-6 py-24 text-center"
      >
        <div className="mx-auto max-w-3xl rounded-3xl border border-blue-500/20 bg-black/30 p-10 shadow-[0_0_40px_rgba(59,130,246,0.08)]">

          <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-400">
            Collection
          </p>

          <h2 className={`${bungee.className} mt-3 text-4xl`}>
            DISPOSABLES
          </h2>

          <p className={`${bungee.className} mt-6 text-2xl tracking-[0.15em] text-blue-400`}>
            COMING SOON
          </p>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-blue-500/20 px-6 py-10 text-center">

        <p className={`${bungee.className} text-sm tracking-widest text-gray-400`}>
          815 <span className="text-blue-500">FLAVORZ</span>
        </p>

      </footer>

    </main>
  );
}
