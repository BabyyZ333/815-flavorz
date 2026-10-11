
"use client";

import { useState } from "react";

const categories = [
  "Pre-Rolls",
  "Flower",
  "Disposables",
  "Edibles",
  "Moonrocks",
  "Snowcaps",
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

type FlowerType = keyof typeof flowerPrices;

export default function Home() {
  const [selected, setSelected] = useState("");
  const [flowerType, setFlowerType] = useState<FlowerType | null>(null);

  const chooseCategory = (category: string) => {
    setSelected(category);
    setFlowerType(null);
    document.getElementById("details")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-black px-5 py-6 text-white">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between border-b border-[#30291B] pb-5">
          <span className="text-xl font-black tracking-wider text-[#D4AF37]">
            815 FLAVORZ
          </span>
          <a href="#collections" className="text-sm text-[#D4AF37]">
            COLLECTIONS ↗
          </a>
        </header>

        <section className="mt-8 rounded-2xl bg-[#111111] px-6 py-16 text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-[#D4AF37]">
            THE 815 COLLECTION
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-[#F2D884] md:text-6xl">
            A DIFFERENT STANDARD.
          </h1>

          <p className="mt-5 text-gray-300">
            Explore the collections.
          </p>

          <a
            href="#collections"
            className="mt-8 inline-block rounded-lg bg-[#D4AF37] px-7 py-3 font-black text-black"
          >
            EXPLORE COLLECTIONS
          </a>
        </section>

        <section id="collections" className="mt-14 scroll-mt-8">
          <h2 className="mb-6 text-2xl font-black text-[#F2D884]">
            Our Collections
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => chooseCategory(category)}
                className="rounded-xl border-2 border-[#FFD700] bg-[#D4AF37] p-5 text-left transition hover:brightness-110"
              >
                <h3
                  className="text-lg font-black"
                  style={{ color: "#000000" }}
                >
                  {category}
                </h3>

                <div className="mt-7 flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    Explore
                  </span>
                  <span className="text-xl text-[#D4AF37]">
                    ↗
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {selected && (
          <section
            id="details"
            className="mt-10 scroll-mt-8 rounded-2xl border border-[#8B7025] bg-[#101010] p-6"
          >
            <h2 className="text-3xl font-black text-[#F2D884]">
              {selected}
            </h2>

            {selected === "Flower" ? (
              <>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {(["Originals", "Exotics"] as FlowerType[]).map(
                    (name) => (
                      <button
                        key={name}
                        onClick={() => setFlowerType(name)}
                        className="rounded-xl bg-[#D4AF37] p-5 text-center transition hover:brightness-110"
                      >
                        <h3
                          className="text-lg font-black"
                          style={{ color: "#000000" }}
                        >
                          {name}
                        </h3>
                        <p className="mt-2 text-xs font-bold text-black">
                          VIEW PRICES
                        </p>
                      </button>
                    )
                  )}
                </div>

                {flowerType && (
                  <div className="mt-6 rounded-xl bg-[#191919] p-5">
                    <h3 className="text-2xl font-black text-[#F2D884]">
                      {flowerType}
                    </h3>

                    <div className="mt-5 space-y-4">
                      {flowerPrices[flowerType].map(
                        ([amount, price]) => (
                          <div
                            key={amount}
                            className="flex justify-between border-b border-[#30291B] pb-3"
                          >
                            <span className="font-semibold text-white">
                              {amount}
                            </span>
                            <span className="font-black text-[#F2D884]">
                              {price}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <p className="mt-6 text-gray-300">
                COMING SOON
              </p>
            )}

            <button
              onClick={() => {
                setSelected("");
                setFlowerType(null);
              }}
              className="mt-7 rounded-lg border border-[#8B7025] px-6 py-3 font-bold text-[#F2D884]"
            >
              ← BACK
            </button>
          </section>
        )}

        <footer className="mt-20 border-t border-[#30291B] py-8 text-center text-sm text-gray-400">
          815 FLAVORZ © 2026
        </footer>
      </div>
    </main>
  );
}
