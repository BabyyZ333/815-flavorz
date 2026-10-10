const GOLD = "#D4AF37";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-5 py-12 text-white">
      
<nav className="mb-10 flex flex-wrap justify-center gap-6 text-sm font-bold"
  style={{ color: GOLD }}>
  <a href="/" className="hover:underline">HOME</a>
  <a href="/about" className="hover:underline">ABOUT US</a>
  <a href="/faq" className="hover:underline">FAQ</a>
</nav>

      <section className="mx-auto max-w-3xl rounded-2xl border p-6 md:p-10"
        style={{ borderColor: GOLD, backgroundColor: "#0B0B0B" }}>
        <div className="text-center">
          <h1 className="text-3xl font-black" style={{ color: GOLD }}>OUR STORY</h1>
          <p className="mt-3 text-sm font-bold tracking-widest" style={{ color: GOLD }}>
            A VISION TURNED INTO SOMETHING REAL.
          </p>
        </div>
        <div className="mt-6 space-y-4 text-center leading-7 text-white">
          <p>
            815 FLAVORZ started with an idea and the ambition to build something
            different. What began as a vision is growing into a brand with its
            own identity, its own style, and its own direction.
          </p>
          <p>
            Built on creativity, driven by determination, and focused on what’s
            ahead, we’re creating something we can call our own. Every step is
            part of the journey, every detail matters, and this is only the beginning.
          </p>
        </div>
        <p className="mt-8 text-center font-bold tracking-widest" style={{ color: GOLD }}>
          WE’RE JUST GETTING STARTED.
        </p>
      </section>
    </main>
  );
}
