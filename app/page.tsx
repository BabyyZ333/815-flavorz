
"use client";

import { useState } from "react";

const GOLD = "#D4AF37";

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

const faqs = [
  {
    question: "What is 815 Flavorz?",
    answer:
      "815 Flavorz is an up-and-coming brand built from the ground up with a clear vision, a passion for creativity, and a commitment to developing a distinctive identity. We are focused on originality, thoughtful presentation, and building a strong connection with our community as we continue to grow. This is only the beginning of our journey.",
  },
  {
    question: "Can I order directly through the website?",
    answer:
      "No. 815 Flavorz is currently a brand showcase, not an online store. Purchases and payments cannot be made through this website. Our site is designed to introduce our brand, showcase our collections, and share information as we continue to grow.",
  },
];

export default function Home() {
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [selected, setSelected] = useState("");
  const [flowerType, setFlowerType] = useState<FlowerType | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!ageConfirmed) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black p-6 text-center text-white">
        <div
          className="w-full max-w-md rounded-2xl border p-8"
          style={{ borderColor: GOLD }}
        >
          <h1
            className="text-4xl font-black"
            style={{ color: GOLD }}
          >
            815 FLAVORZ
          </h1>

          <p className="mt-6 text-xl font-bold text-white">
            AGE VERIFICATION
          </p>

          <p className="mt-4 text-gray-300">
            This website is intended for adults 21 years of age or older.
          </p>

          <button
            onClick={() => setAgeConfirmed(true)}
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
      <div className="mx-auto max-w-5xl text-center">

        <h1
          className="text-5xl font-black tracking-widest"
          style={{ color: GOLD }}
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

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelected(category);
                setFlowerType(null);
              }}
              className="rounded-xl p-6 transition hover:brightness-110"
              style={{
                backgroundColor: GOLD,
                color: "#000000",
              }}
            >
              <h2
                className="text-lg font-black"
                style={{ color: "#000000" }}
              >
                {category}
              </h2>

              <p className="mt-3 text-xs font-bold tracking-widest">
                COMING SOON
              </p>
            </button>
          ))}
        </div>

        {selected && (
          <section
            className="mt-10 rounded-xl border p-8"
            style={{ borderColor: GOLD }}
          >
            <h2
              className="text-2xl font-black"
              style={{ color: GOLD }}
            >
              {selected}
            </h2>

            {selected === "Flower" ? (
              <div className="mt-6">
                <div className="grid grid-cols-2 gap-4">
                  {(["Originals", "Exotics"] as FlowerType[]).map(
                    (name) => (
                      <button
                        key={name}
                        onClick={() => setFlowerType(name)}
                        className="rounded-xl p-5"
                        style={{
                          backgroundColor: GOLD,
                          color: "#000000",
                        }}
                      >
                        <h3
                          className="text-xl font-black"
                          style={{ color: "#000000" }}
                        >
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
            ) : (
              <p className="mt-4 text-white">
                COMING SOON
              </p>
            )}

            <button
              onClick={() => {
                setSelected("");
                setFlowerType(null);
              }}
              className="mt-6 rounded-lg px-5 py-2 font-bold"
              style={{
                backgroundColor: GOLD,
                color: "#000000",
              }}
            >
              BACK
            </button>
          </section>
        )}

        <section className="mt-16">
          <h2
            className="text-3xl font-black"
            style={{ color: GOLD }}
          >
            NEW DROPS
          </h2>

          <p className="mt-3 text-gray-300">
            Stay tuned for collection announcements.
          </p>

          <div
            className="mt-6 rounded-xl border p-8"
            style={{ borderColor: GOLD }}
          >
            <p
              className="text-xl font-black"
              style={{ color: GOLD }}
            >
              COMING SOON
            </p>
            <p className="mt-3 text-sm text-gray-300">
              New announcements will appear here.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-2xl">
          <h2
            className="text-3xl font-black"
            style={{ color: GOLD }}
          >
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="mt-6 space-y-3 text-left">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border"
                style={{ borderColor: GOLD }}
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold"
                  style={{
                    backgroundColor: "#000000",
                    color: GOLD,
                  }}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.question}</span>
                  <span>{openFaq === index ? "−" : "+"}</span>
                </button>

                {openFaq === index && (
                  <p className="px-5 pb-5 text-sm text-white">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

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
