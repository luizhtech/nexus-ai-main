import { nav } from "@/constants/content";

const columns = [
  {
    title: "Produto",
    links: ["Visão geral", "Revisão por IA", "Documentação", "Arquitetura", "Automações"],
  },
  { title: "Recursos", links: ["Documentação técnica", "Changelog", "Status", "Segurança"] },
  { title: "Empresa", links: ["Sobre", "Carreiras", "Contato", "Imprensa"] },
];

export function Footer() {
  return (
    <footer className="surface-ink border-t border-ink-border px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.4fr_2fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid size-7 place-items-center rounded-lg bg-[image:var(--gradient-signal)] text-sm font-bold text-ink">
              N
            </span>
            <span className="font-display text-base font-semibold tracking-tight">Nexus</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            A camada de contexto para equipes de engenharia de software. Documentação, revisão e
            entrega em uma única superfície.
          </p>
          <nav aria-label="Navegação do rodapé" className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs text-ink-muted transition-colors hover:text-ink-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-muted">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#topo"
                      className="text-sm text-ink-foreground/80 transition-colors hover:text-signal"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col gap-3 border-t border-ink-border pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Nexus Systems. Todos os direitos reservados.</p>
        <p className="font-mono">SOC 2 Type II · GDPR · LGPD</p>
      </div>
    </footer>
  );
}
