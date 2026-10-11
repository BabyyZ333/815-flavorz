
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#071329] via-[#102d58] to-[#071329] px-4 py-10 pb-28 text-white">
      <div className="mx-auto w-full max-w-3xl">

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

        <article className="rounded-3xl border border-[#d4af37] bg-[#08172d]/80 px-5 py-10 text-center shadow-2xl sm:px-10">

          <p className="mb-3 text-xs font-bold tracking-[0.3em] text-[#d4af37]">
            815 FLAVORZ
          </p>

          <h1 className="text-4xl font-black tracking-wider text-[#f3d477] sm:text-5xl">
            OUR STORY
          </h1>

          <p className="mt-4 text-sm font-bold uppercase tracking-wider text-[#e7c76b]">
            Built from the ground up. Created with purpose.
          </p>

          <div className="mt-10 space-y-7 text-base leading-8 text-gray-200">

            <p className="text-xl font-bold text-white">
              Every empire starts somewhere. This is where ours begins.
            </p>

            <p>
              815 FLAVORZ was born from a vision to create something
              bigger than ourselves. What started as an idea became
              a goal, and that goal is slowly becoming reality.
              We didn't start with everything figured out, unlimited
              resources, or a clear path to success. We started with
              ambition, determination, and the belief that we could
              build something extraordinary from the ground up.
            </p>

            <p>
              Our journey isn't about overnight success. It's about
              the late nights, the sacrifices, the lessons, and the
              dedication it takes to turn a dream into something real.
              Every step matters, every setback teaches us something,
              and every accomplishment brings us closer to the future
              we're working toward.
            </p>

            <h2 className="pt-6 text-2xl font-black text-[#f3d477]">
              MORE THAN A NAME. IT'S AN IDENTITY.
            </h2>

            <p>
              815 FLAVORZ represents originality, quality, ambition,
              and the courage to create our own lane. We're not
              interested in following everybody else's path.
              We're focused on building our own, setting our own
              standards, and creating an experience that stands apart.
            </p>

            <p>
              Our vision goes beyond where we are today. We want
              to build a brand that represents where we came from,
              the work we've put in, and everything we're striving
              to become.
            </p>

            <h2 className="pt-6 text-2xl font-black text-[#f3d477]">
              THE VISION IS BIGGER THAN THE BEGINNING.
            </h2>

            <p>
              We know that building something meaningful takes time.
              Nothing worth having comes easy, and we're prepared
              to earn every milestone along the way.
            </p>

            <p>
              One day, we'll look back at these early chapters and
              remember when everything was just an idea, when the
              dream seemed bigger than the resources we had, and
              when all we could do was believe in what we were building.
            </p>

            <p>
              And when that day comes, we'll know that every sacrifice,
              every challenge, and every step was worth it.
            </p>

            <h2 className="pt-6 text-xl font-black uppercase text-[#f3d477]">
              This isn't just about building a business.
              It's about building a legacy.
            </h2>

            <p>
              We're not where we want to be yet, but we're a lot
              closer than we were yesterday.
            </p>
          </div>

          <div className="mt-12 border-t border-[#d4af37]/40 pt-8">
            <h2 className="text-3xl font-black tracking-widest text-[#f3d477]">
              815 FLAVORZ
            </h2>

            <p className="mt-3 italic text-gray-300">
              From the ground up. Beyond the ordinary.
            </p>

            <p className="mt-7 text-lg font-black tracking-widest text-[#f3d477]">
              THIS IS ONLY CHAPTER ONE.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}

