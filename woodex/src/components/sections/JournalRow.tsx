import Link from "next/link";
import { journal } from "@/lib/content/site";
import { Parallax } from "@/components/ui/Parallax";
import Reveal from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { Btn, Eyebrow } from "@/components/ui/Btn";

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

export default function JournalRow() {
  return (
    <section className="bg-bone text-ink">
      <div className="shell-wide act">
        <Reveal className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow tone="clay">Journal</Eyebrow>
            <SplitLines
              as="h2"
              className="t-h1 mt-6"
              lines={[<>Notes from the</>, <>workshop <span className="t-aside !text-bronze">floor</span>.</>]}
            />
          </div>
          <div className="fade-up flex lg:col-span-4 lg:col-start-9 lg:justify-end" style={{ transitionDelay: "200ms" }}>
            <Btn href="/about" variant="light">
              Read the studio notes
            </Btn>
          </div>
        </Reveal>

        <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
          {journal.map((a, i) => (
            <Reveal key={a.slug} delay={i * 100}>
              <article className="group">
                <Link href="/about" className="block" data-cursor="view" data-cursor-label="Read">
                  <Parallax
                    src={a.image}
                    alt={a.title}
                    className="wipe aspect-[3/2] w-full"
                    sizes="(max-width: 768px) 100vw, 32vw"
                    distance={6}
                    imgClassName="transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                  <div className="mt-5 flex items-center gap-3">
                    <span className="t-label text-bronze">{a.category}</span>
                    <span className="h-px w-4 bg-sand" aria-hidden />
                    <time className="t-meta text-clay" dateTime={a.date}>
                      {fmt(a.date)}
                    </time>
                    <span className="t-meta text-clay/60">· {a.readTime}</span>
                  </div>
                  <h3 className="t-h3 mt-3 max-w-[24ch] transition-colors duration-500 group-hover:text-bronze">
                    {a.title}
                  </h3>
                  <p className="t-body mt-3 max-w-[42ch] text-clay">{a.excerpt}</p>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
