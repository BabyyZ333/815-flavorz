
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


function MarbleBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#08090b]" />
      <svg
        className="absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 900 1500"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="marble-noise" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.027" numOctaves="5" seed="7" result="noise" />
            <feColorMatrix in="noise" type="saturate" values="0" result="gray" />
            <feComponentTransfer in="gray" result="contrast">
              <feFuncR type="gamma" amplitude="0.36" exponent="3" offset="0" />
              <feFuncG type="gamma" amplitude="0.38" exponent="3" offset="0" />
              <feFuncB type="gamma" amplitude="0.42" exponent="3" offset="0" />
            </feComponentTransfer>
          </filter>
          <linearGradient id="marble-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6b4c1d" stopOpacity="0" />
            <stop offset="40%" stopColor="#b38b45" stopOpacity="0.45" />
            <stop offset="75%" stopColor="#f3d48a" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#6b4c1d" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="900" height="1500" filter="url(#marble-noise)" opacity="0.75" />
        <g fill="none" stroke="#77777b" strokeOpacity="0.17" strokeWidth="3">
          <path d="M-100 300 C130 190 120 480 350 360 S600 210 1000 90" />
          <path d="M-80 900 C180 690 320 1050 520 780 S790 710 1010 510" />
          <path d="M-100 1370 C200 1160 330 1450 590 1190 S780 1020 1010 930" />
        </g>
        <g fill="none" stroke="url(#marble-gold)" strokeWidth="1.8">
          <path d="M-90 340 C140 230 130 510 370 390 S620 250 1010 120" />
          <path d="M-90 950 C170 730 310 1090 540 820 S790 760 1010 560" />
          <path d="M-100 1410 C190 1190 350 1490 600 1230 S800 1070 1010 970" />
        </g>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/65 to-black/80" />
    </div>
  );
}

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
      <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#08090b] p-6 text-center text-white">
        <MarbleBackground />
        <ShootingStar />

        <div
          className="age-gate-panel relative z-10 w-full max-w-md rounded-2xl border bg-[#0b0c10]/95 p-8"
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
    <main className="relative isolate min-h-screen overflow-hidden bg-[#08090b] px-5 py-12 text-white">
      <MarbleBackground />
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
          <a href="/contact" className="rounded px-4 py-3 hover:bg-white/10">
            Contact Us
          </a>
        </nav>
      </details>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
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
              className="rounded-xl border-2 bg-[#0b0c10]/90 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.55)] backdrop-blur-sm transition hover:brightness-125"
              style={{
                borderColor: GOLD,
                color: GOLD,
              }}
            >
              <h2
  className="relative z-10 text-xl font-black tracking-wide sm:text-2xl"
  style={{
    color: "#000000",
    WebkitTextFillColor: "#000000",
    fontWeight: 900,
    WebkitTextStroke: "0.5px #D4AF37",
    textShadow:
      "1px 1px 0 #FFD700, 2px 2px 3px #FFD700, 4px 4px 6px rgba(0,0,0,0.95)",
  }}
>
  {category}
</h2>

              <p
  className="relative z-10 mt-3 text-sm font-black tracking-widest"
  style={{
    color: "#000000",
    WebkitTextFillColor: "#000000",
    fontWeight: 900,
    textShadow: "1px 1px 2px rgba(255,255,255,0.5)",
  }}
>
  COMING SOON
</p>
            </button>
          ))}
        </div>

        {selected && (
          <section
            className="mt-10 rounded-xl border bg-[#0b0c10]/95 p-5 shadow-2xl backdrop-blur-md sm:p-8"
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
                            : "#0c0d10",
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
                    className="mt-7 rounded-xl border bg-[#0b0c10]/95 p-5 sm:p-8"
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
                            className="rounded-xl border-2 bg-[#0c0d10]/95 p-6 transition hover:brightness-125"
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
                      <div className="mt-7 rounded-xl border border-[#D4AF37]/50 bg-[#090a0d]/95 p-7">
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
                        className="rounded-xl border-2 bg-[#0c0d10]/95 p-5"
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
