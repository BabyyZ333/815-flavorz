
"use client";

import { useEffect, useState } from "react";
import ShootingStar from "../ShootingStar";
import GoldParticles from "../GoldParticles";

const GOLD = "#D4AF37";

const categories = [
  { name: "Pre-Rolls", number: "01", description: "Discover the collection" },
  { name: "Flower", number: "02", description: "Originals & Exotics" },
  { name: "Disposables", number: "03", description: "Explore what's ahead" },
  { name: "Edibles", number: "04", description: "Discover the collection" },
  { name: "Moonrocks", number: "05", description: "Collection details" },
  { name: "Snowcaps", number: "06", description: "Collection details" },
];

const flowerPrices = {
  Originals: [
    ["3.5g", "$20"],
    ["7g", "$40"],
    ["14g", "$60"],
    ["28g ZIP", "$100"],
  ],
  Exotics: [
    ["3.5g", "$30"],
    ["7g", "$50"],
    ["14g", "$80"],
    ["28g ZIP", "$130"],
  ],
};

const otherPrices: Record<string, string[][]> = {
  Snowcaps: [
    ["3.5g", "$30"],
    ["7g", "$60"],
    ["14g", "$80"],
    ["Zip (28g)", "$130"],
  ],
  Moonrocks: [
    ["3.5g", "$40"],
    ["7g", "$65"],
    ["14g", "$85"],
    ["Zip (28g)", "$140"],
  ],
};

type FlowerType = keyof typeof flowerPrices;

export default function CollectionPage() {
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [ageChecked, setAgeChecked] = useState(false);
  const [selected, setSelected] = useState("");
  const [flowerType, setFlowerType] = useState<FlowerType | null>(null);

  useEffect(() => {
    setAgeConfirmed(
      sessionStorage.getItem("815-age-verified") === "yes"
    );
    setAgeChecked(true);
  }, []);

  if (!ageChecked) {
    return <main className="min-h-screen bg-[#050a16]" />;
  }

  if (!ageConfirmed) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050a16] p-5 text-center text-white">
        <ShootingStar />

        <div className="age-gate-panel relative z-10 w-full max-w-md rounded-3xl border border-[#d4af37] bg-[#08172d] p-8 shadow-2xl">
          <h1 className="age-gate-logo text-4xl font-black tracking-wider text-[#f3d477]">
            815 FLAVORZ
          </h1>

          <div className="mx-auto my-7 h-px w-32 bg-[#d4af37]" />

          <h2 className="text-xl font-black tracking-widest text-[#f3d477]">
            AGE VERIFICATION
          </h2>

          <p className="mt-5 leading-7 text-gray-300">
            This website is intended for adults 21 years of age or older.
          </p>

          <button
            type="button"
            onClick={() => {
              sessionStorage.setItem("815-age-verified", "yes");
              setAgeConfirmed(true);
            }}
            className="mt-8 w-full rounded-xl bg-[#d4af37] p-4 font-black text-black transition hover:brightness-110"
          >
            I AM 21 OR OLDER
          </button>

          <button
            type="button"
            onClick={() => {
              window.location.href = "https://www.google.com";
            }}
            className="mt-3 w-full rounded-xl border border-[#d4af37] p-4 font-bold text-white transition hover:bg-white/10"
          >
            I AM UNDER 21
          </button>

          <p className="mt-6 text-xs text-gray-400">
            Age confirmation is not proof of identity.
          </p>
        </div>
      </main>
    );
  }

  const prices =
    selected === "Flower" && flowerType
      ? flowerPrices[flowerType]
      : otherPrices[selected];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#050a16] via-[#102a50] to-[#050a16] px-4 pb-32 pt-12 text-white">
      <GoldParticles />

      <details className="fixed right-4 top-4 z-50">
        <summary
          aria-label="Open menu"
          className="cursor-pointer list-none rounded-xl border border-[#d4af37] bg-[#08172d] px-4 py-2 text-2xl font-bold text-[#f3d477] shadow-lg"
        >
          ☰
        </summary>

        <nav
          aria-label="Site navigation"
          className="mt-2 flex min-w-44 flex-col gap-1 rounded-xl border border-[#d4af37] bg-[#08172d] p-2 shadow-xl"
        >
          <a href="/" className="rounded-lg px-4 py-3 hover:bg-white/10">
            Home
          </a>
          <a href="/about" className="rounded-lg px-4 py-3 hover:bg-white/10">
            About Us
          </a>
          <a href="/faq" className="rounded-lg px-4 py-3 hover:bg-white/10">
            FAQ
          </a>
        </nav>
      </details>

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <header className="mb-12 px-2 pt-10 text-center">
          <p className="mb-4 text-xs font-bold tracking-[0.3em] text-[#d4af37]">
            THE 815 EXPERIENCE
          </p>

          <h1
            className="text-4xl font-black tracking-wider text-[#f3d477] sm:text-6xl"
            style={{
              textShadow: "0 0 15px rgba(255,215,0,0.4)",
            }}
          >
            815 FLAVORZ
          </h1>

          <p className="mt-5 text-sm font-bold tracking-widest text-gray-200">
            EXCLUSIVE COLLECTIONS
          </p>

          <div className="mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-gray-300">
            A vision built from the ground up.
            Explore our collection categories and follow
            the journey as 815 FLAVORZ continues to grow.
          </p>
        </header>

        <div className="mb-8 flex items-center justify-between gap-3 border-b border-[#d4af37]/30 pb-4">
          <h2 className="text-lg font-black tracking-wider text-[#f3d477]">
            EXPLORE CATEGORIES
          </h2>
          <span className="text-xs font-bold text-gray-400">
            06 COLLECTIONS
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {categories.map((category) => {
            const active = selected === category.name;

            return (
              <button
                type="button"
                key={category.name}
                aria-pressed={active}
                onClick={() => {
                  setSelected(category.name);
                  setFlowerType(null);
                }}
                className={`gold-shine-box group relative flex min-h-48 flex-col items-center justify-center overflow-hidden rounded-2xl border p-4 text-center shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:min-h-56 sm:p-7 ${
                  active
                    ? "border-[#f3d477] bg-[#17375a]"
                    : "border-[#d4af37]/50 bg-[#08172d]/90 hover:border-[#f3d477]"
                }`}
              >
                <span className="relative z-10 mb-5 text-xs font-bold tracking-widest text-[#d4af37]">
                  COLLECTION {category.number}
                </span>

                <h3 className="relative z-10 break-words text-lg font-black text-[#f3d477] sm:text-2xl">
                  {category.name}
                </h3>

                <p className="relative z-10 mt-3 text-xs leading-5 text-gray-300">
                  {category.description}
                </p>

                <span className="relative z-10 mt-5 rounded-full border border-[#d4af37]/50 px-3 py-1 text-[10px] font-bold tracking-wider text-[#f3d477]">
                  COMING SOON
                </span>

                <span className="relative z-10 mt-4 text-xs font-bold text-[#d4af37]">
                  VIEW DETAILS ↓
                </span>
              </button>
            );
          })}
        </div>

        {selected && (
          <section
            id="collection-details"
            aria-live="polite"
            className="mt-10 rounded-3xl border border-[#d4af37] bg-[#08172d]/90 px-5 py-10 text-center shadow-2xl sm:px-10"
          >
            <p className="text-xs font-bold tracking-[0.3em] text-[#d4af37]">
              COLLECTION DETAILS
            </p>

            <h2 className="mt-4 text-3xl font-black text-[#f3d477]">
              {selected}
            </h2>

            <div className="mx-auto my-7 h-px w-32 bg-[#d4af37]/60" />

            {selected === "Flower" && (
              <div className="mx-auto grid max-w-lg grid-cols-2 gap-4">
                {(["Originals", "Exotics"] as FlowerType[]).map(
                  (name) => (
                    <button
                      type="button"
                      key={name}
                      onClick={() => setFlowerType(name)}
                      className={`rounded-2xl border p-5 transition hover:brightness-125 ${
                        flowerType === name
                          ? "border-[#f3d477] bg-[#17375a]"
                          : "border-[#d4af37]/50 bg-[#050a16]"
                      }`}
                    >
                      <h3 className="text-lg font-black text-[#f3d477]">
                        {name}
                      </h3>
                      <p className="mt-3 text-xs font-bold tracking-wider text-gray-300">
                        VIEW DETAILS
                      </p>
                    </button>
                  )
                )}
              </div>
            )}

            {prices && (
              <div className="mx-auto mt-7 max-w-lg rounded-2xl border border-[#d4af37]/40 bg-[#050a16]/80 p-5">
                <h3 className="mb-5 text-lg font-black text-[#f3d477]">
                  {flowerType && selected === "Flower"
                    ? flowerType
                    : selected}
                </h3>

                <div className="space-y-4">
                  {prices.map(([amount, price]) => (
                    <div
                      key={amount}
                      className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 text-sm"
                    >
                      <span className="font-bold text-white">
                        {amount}
                      </span>
                      <span className="font-black text-[#f3d477]">
                        {price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!prices && (
              <div className="mt-7 rounded-2xl border border-[#d4af37]/40 bg-[#050a16]/80 px-5 py-9">
                <p className="text-xl font-black tracking-widest text-[#f3d477]">
                  COMING SOON
                </p>
                <p className="mt-4 text-sm leading-7 text-gray-300">
                  We're continuing to build our collection.
                  Stay tuned for future updates.
                </p>
              </div>
            )}

            <p className="mt-7 text-xs leading-6 text-gray-400">
              Collection information is for display only.
              Online ordering is not available.
              Availability is not guaranteed.
            </p>

            <button
              type="button"
              onClick={() => {
                setSelected("");
                setFlowerType(null);
              }}
              className="mt-8 rounded-xl bg-[#d4af37] px-8 py-3 text-sm font-black tracking-widest text-black transition hover:brightness-110"
            >
              ← BACK TO COLLECTIONS
            </button>
          </section>
        )}

        <div className="mt-16 rounded-3xl border border-[#d4af37]/50 bg-[#08172d]/80 px-6 py-10 text-center">
          <p className="text-xs font-bold tracking-widest text-[#d4af37]">
            THE JOURNEY CONTINUES
          </p>

          <h2 className="mt-4 text-2xl font-black text-[#f3d477]">
            MORE THAN A COLLECTION.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-300">
            Every great brand starts somewhere.
            We're creating our own identity, one chapter at a time.
          </p>

          <a
            href="/about"
            className="mt-7 inline-block rounded-xl border border-[#d4af37] px-7 py-3 text-sm font-bold text-[#f3d477] transition hover:bg-[#d4af37]/10"
          >
            DISCOVER OUR STORY →
          </a>
        </div>

        <footer className="mt-14 text-center">
          <p className="text-sm font-black tracking-widest text-[#f3d477]">
            815 FLAVORZ
          </p>

          <p className="mt-3 text-xs text-gray-400">
            © 2026 815 FLAVORZ. All rights reserved.
          </p>

          <p className="mt-3 text-xs text-gray-500">
            For adults 21+ where permitted by law.
          </p>
        </footer>
      </div>
    </main>
  );
}
