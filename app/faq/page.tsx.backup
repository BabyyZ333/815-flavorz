const GOLD = "#D4AF37";

const faqs = [
  {
    question: "What is 815 Flavorz?",
    answer: "815 Flavorz is an up-and-coming brand built from the ground up with a clear vision, a passion for creativity, and a commitment to developing a distinctive identity. We are focused on originality, thoughtful presentation, and building a strong connection with our community as we continue to grow. This is only the beginning of our journey.",
  },
  {
    question: "Can I order directly through the website?",
    answer: "No. 815 Flavorz is currently a brand showcase, not an online store. Purchases and payments cannot be made through this website. Our site is designed to introduce our brand, showcase our collections, and share information as we continue to grow.",
  },
  {
    question: "Will the website be updated?",
    answer: "Yes! As 815 FLAVORZ continues to grow, we plan to update the website with new brand information and announcements. Check back to see what's new as our journey continues.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black px-5 py-12 text-white">
      
<nav className="mb-10 flex flex-wrap justify-center gap-6 text-sm font-bold"
  style={{ color: GOLD }}>
  <a href="/" className="hover:underline">HOME</a>
  <a href="/about" className="hover:underline">ABOUT US</a>
  <a href="/faq" className="hover:underline">FAQ</a>
</nav>

      <section className="mx-auto max-w-3xl">
        <h1 className="text-center text-3xl font-black" style={{ color: GOLD }}>
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question}
              className="overflow-hidden rounded-xl border"
              style={{ borderColor: GOLD, backgroundColor: "#0B0B0B" }}>
              <summary className="cursor-pointer p-4 font-bold leading-6"
                style={{ color: GOLD }}>
                {faq.question}
              </summary>
              <p className="px-4 pb-5 leading-6 text-white">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
