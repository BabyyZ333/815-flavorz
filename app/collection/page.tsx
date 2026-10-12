
"use client";

import { useEffect, useState } from "react";
import ShootingStar from "../ShootingStar";
import GoldParticles from "../GoldParticles";

const GOLD = "#D4AF37";

const categories = [
  "Pre-Rolls",
  "Flower",
  "Disposables",
  "Edibles",
  "Moonrocks",
  "Snowcaps",
];

const preRollCategories = [
  "Infused Pre-Rolls",
  "Pre-Roll Packs",
  "Single Pre-Rolls",
];

const preRollPrices: Record<string, string> = {
  "Mini Singles": "$5",
  "Classic Singles": "$10",
  "Mini Infused Pre-Rolls": "$6",
  "Classic Infused Pre-Rolls": "$12",
};

const preRollOptions: Record<string, string[]> = {
  "Infused Pre-Rolls": [
    "Classic Infused Pre-Rolls",
    "Mini Infused Pre-Rolls",
  ],
  "Single Pre-Rolls": [
    "Classic Singles",
    "Mini Singles",
  ],
};

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

export default function CollectionPage() {
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [ageChecked, setAgeChecked] = useState(false);
  const [selected, setSelected] = useState("");
  const [flowerType, setFlowerType] = useState<FlowerType | null>(null);
  const [preRollType, setPreRollType] = useState("");
  const [preRollOption, setPreRollOption] = useState("");

  useEffect(() => {
    setAgeConfirmed(
      sessionStorage.getItem("815-age-verified") === "yes"
    );
    setAgeChecked(true);
  }, []);

  if (!ageChecked) return null;

  if (!ageConfirmed) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black p-6 text-center text-white">
        <ShootingStar />

        <div
          className="age-gate-panel w-full max-w-md rounded-2xl border bg-black p-8"
          style={{ borderColor: GOLD }}
        >
          <h1
            className="age-gate-logo text-4xl font-black"
            style={{ color: GOLD }}
          >
            815 FLAVORZ
          </h1>

          <p className="mt-6 text-xl font-bold text-white">
            AGE VERIFICATION
          </p>

          <p className="mt-4 text-gray-300">
            This website is intended for adults 21 years
            of age or older.
          </p>

          <button
            onClick={() => {
              sessionStorage.setItem("815-age-verified", "yes");
              setAgeConfirmed(true);
            }}
            className="mt-8 w-full rounded-xl p-4 font-black"
            style={{
              backgroundColor: GOLD,
              color: "#000000",
            }}
          >
            I AM 21 OR OLDER
          </button>

          <button
            onClick={() => {
              window.location.href = "https://www.google.com";
            }}
            className="mt-3 w-full rounded-xl border p-4 font-bold"
            style={{
              borderColor: GOLD,
              color: "#FFFFFF",
              backgroundColor: "#000000",
            }}
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

  return (
    <main className="min-h-screen bg-black px-5 py-12 text-white">
      <GoldParticles />

      <details className="fixed right-4 top-4 z-50">
        <summary
          aria-label="Open menu"
          className="cursor-pointer list-none rounded-lg border px-4 py-2 text-2xl font-bold shadow-lg"
          style={{
            color: GOLD,
            borderColor: GOLD,
            backgroundColor: "#0B0B0B",
          }}
        >
          ☰
        </summary>

        <nav
          aria-label="Site navigation"
          className="mt-2 flex min-w-40 flex-col gap-1 rounded-xl border p-2 shadow-xl"
          style={{
            borderColor: GOLD,
            backgroundColor: "#0B0B0B",
          }}
        >
          <a href="/" className="rounded px-4 py-3 hover:bg-white/10">
            Home
          </a>
          <a href="/about" className="rounded px-4 py-3 hover:bg-white/10">
            About Us
          </a>
          <a href="/faq" className="rounded px-4 py-3 hover:bg-white/10">
            FAQ
          </a>
        </nav>
      </details>

      <div className="mx-auto max-w-5xl text-center">
        <h1
          className="text-5xl font-black tracking-widest"
          style={{
            color: GOLD,
            textShadow:
              "0 0 10px #FFD700, 0 0 25px rgba(255,215,0,0.7)",
          }}
        >
          815 FLAVORZ
        </h1>

        <p className="mt-4 text-sm tracking-widest text-gray-300">
          EXCLUSIVE COLLECTIONS
        </p>

        <div
          className="my-10 h-px"
          style={{ backgroundColor: GOLD }}
        />

        {/* Main categories */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelected(category);
                setFlowerType(null);
                setPreRollType("");
                setPreRollOption("");
              }}
              className="gold-shine-box rounded-xl border-2 bg-black p-6 transition hover:brightness-110"
              style={{
                borderColor: GOLD,
                color: GOLD,
              }}
            >
              <h2
                className="relative z-10 text-xl font-black tracking-wide sm:text-2xl"
                style={{
                  color: "#FFD700",
                  WebkitTextFillColor: "#FFD700",
                }}
              >
                {category}
              </h2>

              <p className="relative z-10 mt-3 text-xs font-bold tracking-widest">
                COMING SOON
              </p>
            </button>
          ))}
        </div>

        {selected && (
          <section
            className="mt-10 rounded-xl border bg-black p-5 sm:p-8"
            style={{ borderColor: GOLD }}
          >
            <h2
              className="text-2xl font-black"
              style={{ color: GOLD }}
            >
              {selected}
            </h2>

            {/* Pre-Roll categories */}
            {selected === "Pre-Rolls" && (
              <div className="mt-7">
                <p className="mb-6 text-xs font-bold tracking-widest text-gray-300">
                  SELECT A PRE-ROLL CATEGORY
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {preRollCategories.map((name) => (
                    <button
                      key={name}
                      onClick={() => {
                        setPreRollType(name);
                        setPreRollOption("");
                      }}
                      className="rounded-xl border-2 p-6 transition hover:brightness-125"
                      style={{
                        borderColor: GOLD,
                        backgroundColor:
                          preRollType === name
                            ? "#17130A"
                            : "#000000",
                        color: GOLD,
                      }}
                    >
                      <h3 className="text-lg font-black">
                        {name}
                      </h3>

                      <p className="mt-3 text-xs font-bold tracking-widest text-white">
                        VIEW CATEGORY
                      </p>
                    </button>
                  ))}
                </div>

                {/* Subcategories */}
                {preRollType && (
                  <div
                    className="mt-7 rounded-xl border bg-[#0B0B0B] p-5 sm:p-8"
                    style={{ borderColor: GOLD }}
                  >
                    <p className="text-xs font-bold tracking-widest text-gray-400">
                      PRE-ROLL COLLECTION
                    </p>

                    <h3
                      className="mt-3 text-2xl font-black"
                      style={{ color: GOLD }}
                    >
                      {preRollType}
                    </h3>

                    {preRollOptions[preRollType] ? (
                      <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {preRollOptions[preRollType].map((option) => (
                          <button
                            key={option}
                            onClick={() => setPreRollOption(option)}
                            className="rounded-xl border-2 bg-black p-6 transition hover:brightness-125"
                            style={{
                              borderColor: GOLD,
                              color: GOLD,
                            }}
                          >
                            <h4 className="text-lg font-black">
                              {option}
                            </h4>

                            <p className="mt-3 text-xs font-bold tracking-widest text-white">
                              VIEW DETAILS
                            </p>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <p
                        className="mt-7 text-xl font-black tracking-widest"
                        style={{ color: GOLD }}
                      >
                        COMING SOON
                      </p>
                    )}

                    {preRollOption && (
                      <div className="mt-7 rounded-xl border border-[#D4AF37]/50 bg-black p-7">
                        <p className="text-xs font-bold tracking-widest text-gray-400">
                          815 FLAVORZ
                        </p>

                        <h4
                          className="mt-4 text-xl font-black"
                          style={{ color: GOLD }}
                        >
                          {preRollOption}
                        </h4>

<p
  className="mt-5 text-3xl font-black"
  style={{ color: GOLD }}
>
  {preRollPrices[preRollOption]}
</p>

                        <div
                          className="mx-auto my-6 h-px w-24"
                          style={{ backgroundColor: GOLD }}
                        />

                        <p
                          className="text-xl font-black tracking-widest"
                          style={{ color: GOLD }}
                        >
                          COMING SOON
                        </p>

                        <p className="mt-4 text-sm text-gray-300">
                          Stay tuned for collection updates.
                        </p>

                        <button
                          onClick={() => setPreRollOption("")}
                          className="mt-7 rounded-lg border px-5 py-3 text-sm font-bold"
                          style={{
                            borderColor: GOLD,
                            color: GOLD,
                          }}
                        >
                          BACK TO OPTIONS
                        </button>
                      </div>
                    )}

                    <button
                      onClick={() => {
                        setPreRollType("");
                        setPreRollOption("");
                      }}
                      className="mt-8 rounded-lg border px-5 py-3 text-sm font-bold"
                      style={{
                        borderColor: GOLD,
                        color: GOLD,
                      }}
                    >
                      BACK TO PRE-ROLLS
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Flower */}
            {selected === "Flower" && (
              <div className="mt-6">
                <div className="grid grid-cols-2 gap-4">
                  {(["Originals", "Exotics"] as FlowerType[]).map(
                    (name) => (
                      <button
                        key={name}
                        onClick={() => setFlowerType(name)}
                        className="rounded-xl border-2 bg-black p-5"
                        style={{
                          borderColor: GOLD,
                          color: GOLD,
                        }}
                      >
                        <h3 className="text-xl font-black">
                          {name}
                        </h3>

                        <p className="mt-2 text-xs font-bold">
                          VIEW PRICES
                        </p>
                      </button>
                    )
                  )}
                </div>

                {flowerType && (
                  <div
                    className="mt-6 rounded-xl border p-5"
                    style={{ borderColor: GOLD }}
                  >
                    <h3
                      className="text-2xl font-black"
                      style={{ color: GOLD }}
                    >
                      {flowerType}
                    </h3>

                    <div className="mt-5 space-y-3">
                      {flowerPrices[flowerType].map(
                        ([amount, price]) => (
                          <div
                            key={amount}
                            className="flex justify-between border-b border-gray-700 pb-2"
                          >
                            <span className="font-bold text-white">
                              {amount}
                            </span>
                            <span
                              className="font-black"
                              style={{ color: GOLD }}
                            >
                              {price}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Moonrocks and Snowcaps */}
            {["Snowcaps", "Moonrocks"].includes(selected) && (
              <div className="mx-auto mt-6 max-w-md space-y-3">
                {(selected === "Snowcaps"
                  ? [
                      ["3.5g", "$30"],
                      ["7g", "$60"],
                      ["14g", "$80"],
                      ["Zip (28g)", "$130"],
                    ]
                  : [
                      ["3.5g", "$40"],
                      ["7g", "$65"],
                      ["14g", "$85"],
                      ["Zip (28g)", "$140"],
                    ]
                ).map(([amount, price]) => (
                  <div
                    key={amount}
                    className="flex justify-between border-b border-gray-700 pb-2"
                  >
                    <span className="font-bold text-white">
                      {amount}
                    </span>
                    <span
                      className="font-black"
                      style={{ color: GOLD }}
                    >
                      {price}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {["Disposables", "Edibles"].includes(selected) && (
              <p className="mt-6 text-white">
                COMING SOON
              </p>
            )}

            <button
              onClick={() => {
                setSelected("");
                setFlowerType(null);
                setPreRollType("");
                setPreRollOption("");
              }}
              className="mt-8 rounded-lg px-5 py-3 font-bold"
              style={{
                backgroundColor: GOLD,
                color: "#000000",
              }}
            >
              BACK TO COLLECTIONS
            </button>
          </section>
        )}

        <footer
          className="mt-16 text-sm tracking-widest"
          style={{ color: GOLD }}
        >
          815 FLAVORZ © 2026
        </footer>
      </div>
    </main>
  );
}
