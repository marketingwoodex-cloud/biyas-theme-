import Link from "next/link";
import { Btn } from "@/components/ui/Btn";
import { services } from "@/lib/content/services";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[86svh] items-center bg-ink">
      <div className="shell-wide py-32">
        <p className="t-label text-bronze">Error 404</p>
        <h1 className="t-display mt-6 max-w-[14ch] text-bone">
          This room doesn&apos;t <span className="t-aside">exist</span>.
        </h1>
        <p className="t-lede mt-8 max-w-[46ch] text-clay">
          The page has moved or was never built. Here are the doors that do open.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Btn href="/" variant="solid">Back to the studio</Btn>
          <Btn href="/portfolio" variant="ghost">See the work</Btn>
        </div>

        <div className="mt-16 grid gap-x-8 border-t border-[var(--hairline-dark)] pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              data-cursor="link"
              className="group flex items-baseline gap-3 border-b border-[var(--hairline-dark)] py-4 transition-[padding] duration-500 hover:pl-2"
            >
              <span className="t-meta text-bronze/60">{s.index}</span>
              <span className="font-medium text-lg text-bone transition-colors group-hover:text-bronze-light">
                {s.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
