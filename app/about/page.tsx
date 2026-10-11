
export default function AboutPage() {
  const sections = [
    {
      title: "THE BEGINNING OF SOMETHING GREATER",
      paragraphs: [
        "815 FLAVORZ wasn't created overnight. It started with an idea, a vision, and the determination to turn something small into something extraordinary.",

        "We didn't start with a big company behind us. We didn't have everything handed to us, and we certainly didn't have every step figured out. What we had was ambition, creativity, and the belief that we could create something of our own.",

        "We're building this brand from the ground up. Every decision, every detail, and every step forward is part of something much bigger than what you see today.",

        "This isn't just another name or another website. This is the beginning of a journey that we hope will grow into something unforgettable.",
      ],
    },
    {
      title: "BUILT ON AMBITION. DRIVEN BY PURPOSE.",
      paragraphs: [
        "We understand that success doesn't happen overnight.",

        "Behind every successful brand are countless hours of hard work, challenges, sacrifices, and moments when giving up would have been easier than continuing.",

        "But that's what makes the journey worth it.",

        "We're not afraid of starting small because we know that where you begin doesn't determine how far you can go.",

        "Every obstacle is a lesson. Every accomplishment is motivation. Every day is another opportunity to become better than we were yesterday.",

        "We're not chasing overnight attention. We're focused on building something that lasts.",
      ],
    },
    {
      title: "MORE THAN A NAME. IT'S OUR IDENTITY.",
      paragraphs: [
        "815 FLAVORZ represents more than a brand.",

        "It represents our ambition, our creativity, our dedication, and our determination to build something that truly belongs to us.",

        "We believe in originality. We believe in setting our own standards. We believe that the smallest details can make the biggest difference.",

        "Our goal isn't to become a copy of something that already exists. Our goal is to establish our own identity and create something people will recognize for what makes it different.",

        "We're creating our own path, our own story, and our own future.",
      ],
    },
    {
      title: "THE VISION IS BIGGER THAN THE BEGINNING.",
      paragraphs: [
        "Right now, we're still writing the first chapters of our story.",

        "There are things we haven't accomplished yet, milestones we haven't reached, and dreams we're still working toward.",

        "But that's what makes this moment so important.",

        "One day, we want to look back at where everything started and remember the early days when all we had was an idea and the determination to make it happen.",

        "We want to remember the work, the challenges, the progress, and the people who supported the vision before it became something bigger.",

        "Because the beginning matters just as much as the destination.",
      ],
    },
    {
      title: "WE'RE BUILDING SOMETHING THAT LASTS.",
      paragraphs: [
        "Our vision doesn't stop at creating a website or establishing a name.",

        "We want 815 FLAVORZ to become a brand known for its identity, creativity, quality, and commitment to continuous improvement.",

        "We want every new chapter to represent growth, progress, and the dedication that brought us here.",

        "We're not claiming to have reached the top. We're still climbing, still learning, and still working toward everything we envision.",

        "And that's something we're proud of.",
      ],
    },
    {
      title: "TO EVERYONE WHO BELIEVES IN THE VISION",
      paragraphs: [
        "Whether you've been here since the very beginning or you're just discovering 815 FLAVORZ, we appreciate you being part of our journey.",

        "Every person who supports our growth, recognizes our effort, or believes in what we're trying to create becomes part of our story.",

        "We know there's still a long road ahead.",

        "But we're ready for it.",

        "Because we're not just building for today. We're building for tomorrow, for the future, and for the legacy we hope to leave behind.",
      ],
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#050a16] via-[#102a50] to-[#050a16] px-4 pb-32 pt-10 text-white">
      <div className="mx-auto w-full max-w-3xl">

        {/* Navigation */}
        <nav className="mb-12 flex flex-wrap justify-center gap-6 text-xs font-bold tracking-widest text-[#f3d477]">
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

        {/* Story heading */}
        <header className="mb-12 text-center">
          <p className="mb-4 text-xs font-bold tracking-[0.3em] text-[#d4af37]">
            815 FLAVORZ
          </p>

          <h1 className="text-4xl font-black tracking-wider text-[#f3d477] sm:text-6xl">
            OUR STORY
          </h1>

          <p className="mt-5 text-sm font-bold uppercase tracking-widest text-[#e7c76b]">
            Built from the ground up.
          </p>

          <p className="mx-auto mt-7 max-w-xl text-base italic leading-8 text-gray-200">
            Every empire starts with a dream.
            Every legacy starts with a vision.
            This is where ours begins.
          </p>

          <div className="mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </header>

        {/* Story sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <section
              key={section.title}
              className="rounded-3xl border border-[#d4af37]/50 bg-[#08172d]/85 px-5 py-9 shadow-2xl sm:px-10"
            >
              <p className="mb-4 text-center text-xs font-bold tracking-[0.3em] text-[#d4af37]">
                CHAPTER {String(index + 1).padStart(2, "0")}
              </p>

              <h2 className="mb-8 text-center text-xl font-black leading-relaxed tracking-wide text-[#f3d477] sm:text-2xl">
                {section.title}
              </h2>

              <div className="space-y-5 text-center text-sm leading-8 text-gray-200 sm:text-base">
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Closing message */}
        <footer className="mt-12 rounded-3xl border border-[#d4af37] bg-[#08172d]/90 px-5 py-12 text-center shadow-2xl sm:px-10">
          <p className="mb-5 text-xs font-bold tracking-[0.3em] text-[#d4af37]">
            THE JOURNEY CONTINUES
          </p>

          <h2 className="text-3xl font-black tracking-wider text-[#f3d477] sm:text-4xl">
            815 FLAVORZ
          </h2>

          <p className="mt-4 italic text-gray-300">
            From the ground up. Beyond the ordinary.
          </p>

          <div className="mx-auto my-8 h-px w-32 bg-[#d4af37]/50" />

          <div className="space-y-4 text-sm font-bold tracking-wide text-white sm:text-base">
            <p>WE STARTED WITH A VISION.</p>
            <p>WE'RE BUILDING WITH PURPOSE.</p>
            <p className="text-[#f3d477]">
              AND THIS IS ONLY CHAPTER ONE.
            </p>
          </div>

          <a
            href="/collection"
            className="mt-10 inline-block rounded-xl bg-[#d4af37] px-7 py-4 text-sm font-black tracking-widest text-black transition-all duration-300 hover:scale-105 hover:brightness-110"
          >
            EXPLORE COLLECTION →
          </a>
        </footer>

      </div>
    </main>
  );
}
