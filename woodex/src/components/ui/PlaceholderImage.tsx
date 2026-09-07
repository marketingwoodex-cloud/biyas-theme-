import Image from "next/image";

/**
 * Renders a project image, or an honest panel when the photograph does not
 * exist yet.
 *
 * The rule from the brief: never a broken image, never a stock substitute.
 * A neutral panel at the correct aspect ratio that says "Project photo
 * pending" is more credible than a generic interior photo pretending to be
 * the client's space — and it cannot be mistaken for real work.
 */
export default function PlaceholderImage({
  src,
  alt,
  pending,
  ratio = "4:3",
  sizes = "(max-width: 900px) 100vw, 45vw",
  className = "",
  priority = false,
}: {
  src?: string;
  alt: string;
  pending?: boolean;
  ratio?: "4:3" | "16:9";
  sizes?: string;
  className?: string;
  priority?: boolean;
}) {
  const aspect = ratio === "16:9" ? "aspect-[16/9]" : "aspect-[4/3]";

  if (pending || !src) {
    return (
      <div
        className={`tone tone-flat relative grid place-items-center bg-oat ${aspect} ${className}`}
        role="img"
        aria-label={`${alt} — photograph pending`}
      >
        <div className="flex flex-col items-center gap-3 px-6 text-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="3" y="5" width="18" height="14" stroke="var(--color-clay)" strokeWidth="1.5" />
            <path d="m3 16 5-5 4 4 3-3 6 6" stroke="var(--color-clay)" strokeWidth="1.5" strokeLinecap="square" />
            <circle cx="8.5" cy="9.5" r="1.5" stroke="var(--color-clay)" strokeWidth="1.5" />
          </svg>
          <p className="t-meta text-clay">Project photo pending</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`tone relative overflow-hidden ${aspect} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={78}
        priority={priority}
        className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
      />
    </div>
  );
}
