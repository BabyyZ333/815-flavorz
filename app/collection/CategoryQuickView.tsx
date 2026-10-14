"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const GOLD = "#D4AF37";

const flower = [
  {
    name: "Originals (OG)",
    items: [
      ["3.5g", "$20"],
      ["7g", "$40"],
      ["14g", "$60"],
      ["28g ZIP", "$100"],
    ],
  },
  {
    name: "Exotics",
    items: [
      ["3.5g", "$30"],
      ["7g", "$50"],
      ["14g", "$80"],
      ["28g ZIP", "$130"],
    ],
  },
];

const prerolls = [
  { name: "Mini Singles", price: "$5" },
  { name: "Classic Singles", price: "$10" },
  { name: "Mini Infused Pre-Rolls", price: "$6" },
  { name: "Classic Infused Pre-Rolls", price: "$12" },
];

const moonrocks = [
  ["3.5g", "$40"],
  ["7g", "$65"],
  ["14g", "$85"],
  ["Zip (28g)", "$140"],
];

const snowcaps = [
  ["3.5g", "$30"],
  ["7g", "$60"],
  ["14g", "$80"],
  ["Zip (28g)", "$130"],
];

const icons: Record<string, string> = {
  "Pre-Rolls": "✦",
  Flower: "✿",
  Disposables: "▣",
  Edibles: "◈",
  Moonrocks: "◆",
  Snowcaps: "❄",
};

function PriceTable({
  items,
}: {
  items: string[][];
}) {
  return (
    <div className="space-y-2">
      {items.map(([size, price]) => (
        <div
          key={size}
          className="flex items-center justify-between gap-2 border-b border-[#65532B]/60 py-2 text-sm"
        >
          <span className="font-semibold text-[#F6E8C4]">
            {size}
          </span>
          <span className="font-black text-[#F1C95E]">
            {price}
          </span>
        </div>
      ))}
    </div>
  );
}

function GoldCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-xl border p-4 sm:p-5"
      style={{
        borderColor: "#9F8039",
        background:
          "linear-gradient(135deg,#211B12,#101113 75%)",
        boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
      }}
    >
      {children}
    </div>
  );
}

export default function CategoryQuickView({
  category,
}: {
  category: string;
}) {
  const [ageChecked, setAgeChecked] = useState(false);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    setVerified(
      sessionStorage.getItem("815-age-verified") === "yes"
    );
    setAgeChecked(true);
  }, []);

  if (!ageChecked) {
    return (
      <main className="min-h-screen bg-[#08090b]" />
    );
  }

  if (!verified) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#08090b] p-6 text-center text-white">
        <div className="w-full max-w-sm rounded-2xl border border-[#D4AF37] bg-[#111111] p-7">
          <h1 className="text-3xl font-black text-[#D4AF37]">
            815 FLAVORZ
          </h1>
          <h2 className="mt-5 text-xl font-bold">
            AGE VERIFICATION
          </h2>
          <p className="mt-4 text-sm text-gray-300">
            This website is intended for adults 21 or older.
          </p>
          <button
            onClick={() => {
              sessionStorage.setItem(
                "815-age-verified",
                "yes"
              );
              setVerified(true);
            }}
            className="mt-6 w-full rounded-xl bg-[#D4AF37] p-4 font-black text-black"
          >
            I AM 21 OR OLDER
          </button>
          <button
            onClick={() => {
              window.location.href = "https://www.google.com";
            }}
            className="mt-3 w-full rounded-xl border border-[#D4AF37] p-4 font-bold"
          >
            I AM UNDER 21
          </button>
          <p className="mt-4 text-xs text-gray-400">
            Age confirmation is not proof of identity.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main
      className="relative min-h-screen px-4 pt-7 text-white"
      style={{
        paddingBottom:
          "calc(115px + env(safe-area-inset-bottom))",
        background:
          "radial-gradient(ellipse at 70% 10%,rgba(151,108,37,0.15),transparent 55%), repeating-linear-gradient(132deg,transparent 0px,transparent 115px,rgba(168,137,70,0.045) 117px,transparent 122px),#08090b",
      }}
    >
      <div className="mx-auto max-w-3xl">
        <header className="mb-6">
          <Link
            href="/collection"
            className="inline-flex items-center gap-2 rounded-xl border border-[#D4AF37] bg-[#19160F] px-4 py-3 text-xs font-black tracking-wide text-[#FFE5A0]"
          >
            ← ALL COLLECTIONS
          </Link>

          <div className="mt-6 text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-[#C5A44F]">
              815 FLAVORZ
            </p>
            <div className="mt-3 text-3xl text-[#E8C565]">
              {icons[category]}
            </div>
            <h1 className="mt-2 text-3xl font-black tracking-wide text-[#FFE5A0]">
              {category.toUpperCase()}
            </h1>
            <div className="mx-auto mt-4 h-px w-28 bg-[#D4AF37]" />
          </div>
        </header>

        {category === "Flower" && (
          <div className="grid grid-cols-2 gap-3">
            {flower.map((type) => (
              <GoldCard key={type.name}>
                <h2 className="mb-3 text-center text-sm font-black text-[#FFE5A0] sm:text-lg">
                  {type.name}
                </h2>
                <PriceTable items={type.items} />
              </GoldCard>
            ))}
          </div>
        )}

        {category === "Pre-Rolls" && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {prerolls.map((item) => (
                <GoldCard key={item.name}>
                  <div className="flex min-h-[90px] flex-col items-center justify-center gap-3 text-center">
                    <h2 className="text-xs font-black text-[#FFE5A0] sm:text-base">
                      {item.name}
                    </h2>
                    <p className="text-2xl font-black text-[#E8C565]">
                      {item.price}
                    </p>
                  </div>
                </GoldCard>
              ))}
            </div>
            <GoldCard>
              <div className="text-center">
                <h2 className="font-black text-[#FFE5A0]">
                  Pre-Roll Packs
                </h2>
                <p className="mt-2 text-xs font-bold tracking-widest text-[#D4AF37]">
                  COMING SOON
                </p>
              </div>
            </GoldCard>
          </div>
        )}

        {(category === "Moonrocks" ||
          category === "Snowcaps") && (
          <GoldCard>
            <PriceTable
              items={
                category === "Moonrocks"
                  ? moonrocks
                  : snowcaps
              }
            />
          </GoldCard>
        )}

        {(category === "Disposables" ||
          category === "Edibles") && (
          <GoldCard>
            <div className="py-12 text-center">
              <div className="text-4xl text-[#D4AF37]">
                {icons[category]}
              </div>
              <h2 className="mt-5 text-xl font-black text-[#FFE5A0]">
                COMING SOON
              </h2>
              <p className="mt-3 text-sm text-gray-300">
                Stay tuned for collection updates.
              </p>
            </div>
          </GoldCard>
        )}

        <div className="mt-6 text-center">
          <span className="inline-flex rounded-full border border-[#B18B36] bg-[#19150F] px-5 py-2 text-xs font-black tracking-widest text-[#F2D480]">
            COMING SOON
          </span>
        </div>

        <footer className="mt-10 text-center text-xs tracking-widest text-[#B89B58]">
          815 FLAVORZ © 2026
        </footer>
      </div>
    </main>
  );
}
