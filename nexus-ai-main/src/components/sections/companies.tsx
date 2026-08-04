import { companies } from "@/constants/content";
import { Reveal } from "@/components/motion/reveal";

export function Companies() {
  const track = [...companies, ...companies];

  return (
    <section
      aria-label="Empresas que utilizam o Nexus"
      className="surface-ink relative overflow-hidden px-6 pb-28 pt-6 md:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-b from-transparent via-ink to-background"
      />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="text-center font-mono text-[0.64rem] uppercase tracking-[0.28em] text-ink-muted/80">
            Engenharias que já operam sobre o Nexus
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <ul className="marquee-track flex w-max items-center gap-14 motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
              {track.map((name, i) => (
                <li
                  key={`${name}-${i}`}
                  aria-hidden={i >= companies.length}
                  className="shrink-0 font-display text-xl tracking-tight text-ink-foreground/40 transition-colors duration-500 hover:text-ink-foreground"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
