
"use client";

import { useState } from "react";

const sections = [
  {
    title: "ABOUT 815 FLAVORZ",
    questions: [
      {
        q: "What is 815 FLAVORZ?",
        a: "815 FLAVORZ is an independent brand built from the ground up. Our vision is to create something original, meaningful, and memorable.",
      },
      {
        q: "How did 815 FLAVORZ start?",
        a: "It started with an idea, ambition, and the determination to build something from nothing. Every step is part of our journey.",
      },
      {
        q: "What does 815 FLAVORZ stand for?",
        a: "Originality, quality, dedication, and the courage to create our own lane.",
      },
      {
        q: "Is 815 FLAVORZ still growing?",
        a: "Absolutely! We're just getting started. Our brand and website will continue evolving.",
      },
    ],
  },
  {
    title: "COLLECTION & UPDATES",
    questions: [
      {
        q: "What can I find in the collection?",
        a: "Our collection showcases Flower, Pre-Rolls, Edibles, and Disposables. Listings and availability may change.",
      },
      {
        q: "Can I order directly through the website?",
        a: "No. 815 FLAVORZ is currently a brand showcase. Online ordering is not available.",
      },
      {
        q: "Why do some items say Coming Soon?",
        a: "We're still developing parts of our collection. More updates are planned.",
      },
      {
        q: "Will new items be added?",
        a: "We plan to continue updating our collection as the brand grows.",
      },
      {
        q: "Are product photos final?",
        a: "Not always. Some photos may be placeholders while the website is being developed.",
      },
    ],
  },
  {
    title: "WEBSITE & ACCESS",
    questions: [
      {
        q: "Does the website work on phones?",
        a: "Yes! Our website is designed for phones, tablets, laptops, and desktop computers.",
      },
      {
        q: "Why is there a password page?",
        a: "Certain areas may have restricted access while the website is being developed.",
      },
      {
        q: "What if a page isn't loading?",
        a: "Try refreshing your browser, checking your internet connection, or reopening the website.",
      },
      {
        q: "Will the website be updated?",
        a: "Yes! We're continuously working to improve the design, features, and overall experience.",
      },
    ],
  },
  {
    title: "SAFETY & RESPONSIBILITY",
    questions: [
      {
        q: "Are all products available to everyone?",
        a: "No. Age restrictions and applicable laws may limit access to certain products.",
      },
      {
        q: "Does a listing guarantee availability?",
        a: "No. Website listings are informational and do not guarantee product availability.",
      },
      {
        q: "Where can I find product information?",
        a: "Review available labeling, ingredients, warnings, and applicable legal requirements.",
      },
    ],
  },
  {
    title: "OUR FUTURE",
    questions: [
      {
        q: "What are the goals of 815 FLAVORZ?",
        a: "To continue building our identity, improving the experience, and creating a brand people recognize.",
      },
      {
        q: "What makes 815 FLAVORZ different?",
        a: "We're creating our own identity and building something meaningful from the ground up.",
      },
      {
        q: "Is this just the beginning?",
        a: "Absolutely. Every great brand has a beginning. This is only Chapter One.",
      },
    ],
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#071329] via-[#102d58] to-[#071329] px-4 py-10 text-white">
      <div className="mx-auto max-w-3xl">

        <nav className="mb-10 flex flex-wrap justify-center gap-6 text-xs font-bold tracking-widest text-[#f3d477]">
          <a href="/" className="hover:underline">
            HOME
          </a>
          <a href="/about" className="hover:underline">
            ABOUT US
          </a>
          <a href="/faq" className="hover:underline">
            FAQ
          </a>
        </nav>

        <header className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.3em] text-[#d4af37]">
            815 FLAVORZ
          </p>

          <h1 className="text-4xl font-black tracking-wider text-[#f3d477] sm:text-5xl">
            FAQ
          </h1>

          <p className="mt-3 text-sm font-semibold tracking-widest">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-300">
            Everything you need to know about our brand,
            our collection, and the journey ahead.
          </p>
        </header>

        <div className="space-y-10">
          {sections.map((section, si) => (
            <section key={section.title}>
              <h2 className="mb-5 text-center text-xl font-black tracking-wider text-[#f3d477]">
                {section.title}
              </h2>

              <div className="space-y-3">
                {section.questions.map((item, qi) => {
                  const id = `${si}-${qi}`;
                  const expanded = open === id;

                  return (
                    <div
                      key={id}
                      className="overflow-hidden rounded-2xl border border-[#d4af37]/50 bg-[#08172d]/80 shadow-lg transition-colors hover:border-[#f3d477]"
                    >
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-controls={`answer-${id}`}
                        onClick={() =>
                          setOpen(expanded ? null : id)
                        }
                        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                      >
                        <span className="text-sm font-bold sm:text-base">
                          {item.q}
                        </span>

                        <span
                          aria-hidden="true"
                          className={`shrink-0 text-2xl text-[#f3d477] transition-transform duration-300 ${
                            expanded ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      </button>

                      <div
                        id={`answer-${id}`}
                        hidden={!expanded}
                        className="border-t border-[#d4af37]/20 px-5 pb-5 pt-4 text-sm leading-7 text-gray-300"
                      >
                        {item.a}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-14 rounded-3xl border border-[#d4af37] bg-[#08172d]/80 px-6 py-10 text-center">
          <h2 className="text-2xl font-black text-[#f3d477]">
            MORE THAN A BRAND.
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-300">
            We're building something from the ground up.
            Every chapter of our journey matters.
            Thank you for being part of the beginning.
          </p>

          <a
            href="/about"
            className="mt-7 inline-block rounded-full border border-[#d4af37] px-7 py-3 text-sm font-bold text-[#f3d477] hover:bg-[#d4af37] hover:text-[#071329]"
          >
            READ OUR STORY →
          </a>

          <p className="mt-8 text-xs font-bold tracking-widest text-[#f3d477]">
            815 FLAVORZ — THIS IS ONLY CHAPTER ONE.
          </p>
        </footer>
      </div>
    </main>
  );
}

