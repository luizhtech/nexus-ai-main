import { cn } from "@/lib/utils";
import {
  Bot,
  Check,
  Compass,
  FileText,
  GitPullRequest,
  LayoutDashboard,
  ListChecks,
  Search,
  Sparkles,
} from "lucide-react";

export type MockupView = "review" | "docs" | "tasks" | "insights";

const navItems = [
  { icon: LayoutDashboard, label: "Visão geral" },
  { icon: GitPullRequest, label: "Revisões" },
  { icon: FileText, label: "Documentação" },
  { icon: ListChecks, label: "Tarefas" },
  { icon: Compass, label: "Arquitetura" },
];

const activeByView: Record<MockupView, string> = {
  review: "Revisões",
  docs: "Documentação",
  tasks: "Tarefas",
  insights: "Visão geral",
};

/**
 * Static, decorative representation of the Nexus product UI.
 * Marked aria-hidden: all information shown here is also present as real text.
 */
export function Mockup({ view = "review", className }: { view?: MockupView; className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "overflow-hidden rounded-2xl border border-ink-border bg-ink text-ink-foreground shadow-ink",
        className,
      )}
      style={{ boxShadow: "var(--shadow-ink)" }}
    >
      <div className="flex items-center gap-3 border-b border-ink-border bg-white/[0.03] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
        </div>
        <div className="ml-2 flex flex-1 items-center gap-2 rounded-md border border-ink-border bg-black/20 px-3 py-1.5">
          <Search className="size-3 text-ink-muted" />
          <span className="font-mono text-[0.65rem] text-ink-muted">
            nexus.app / northline / platform-core
          </span>
        </div>
        <span className="hidden rounded-full bg-mint/15 px-2 py-0.5 font-mono text-[0.6rem] text-mint sm:inline">
          sync ativo
        </span>
      </div>

      <div className="grid grid-cols-[auto_1fr] md:grid-cols-[188px_1fr]">
        <aside className="hidden flex-col gap-1 border-r border-ink-border p-3 md:flex">
          <div className="mb-3 flex items-center gap-2 px-2">
            <span className="grid size-6 place-items-center rounded-md bg-[image:var(--gradient-signal)] text-[0.6rem] font-bold text-ink">
              N
            </span>
            <span className="text-xs font-medium tracking-tight">Northline</span>
          </div>
          {navItems.map((item) => {
            const active = item.label === activeByView[view];
            return (
              <span
                key={item.label}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-2.5 py-2 text-[0.72rem]",
                  active ? "bg-white/[0.07] text-ink-foreground" : "text-ink-muted",
                )}
              >
                <item.icon className={cn("size-3.5", active && "text-signal")} />
                {item.label}
              </span>
            );
          })}
          <div className="mt-auto rounded-lg border border-ink-border bg-white/[0.03] p-2.5">
            <p className="font-mono text-[0.6rem] text-ink-muted">índice</p>
            <p className="mt-1 text-[0.68rem]">1.284 arquivos · 41 serviços</p>
          </div>
        </aside>

        <div className="min-h-[320px] p-4 md:p-5">{renderView(view)}</div>
      </div>
    </div>
  );
}

function renderView(view: MockupView) {
  if (view === "docs") return <DocsView />;
  if (view === "tasks") return <TasksView />;
  if (view === "insights") return <InsightsView />;
  return <ReviewView />;
}

function Header({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
      <div>
        <p className="text-sm font-medium tracking-tight">{title}</p>
        <p className="font-mono text-[0.62rem] text-ink-muted">{meta}</p>
      </div>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-signal/30 bg-signal/10 px-2.5 py-1 font-mono text-[0.6rem] text-signal">
        <Sparkles className="size-3" /> nexus agent
      </span>
    </div>
  );
}

function ReviewView() {
  return (
    <div>
      <Header title="PR #2841 · Refatorar billing gateway" meta="4 arquivos · +182 −96 · aberto há 6 min" />
      <div className="grid gap-3 lg:grid-cols-[1.15fr_1fr]">
        <div className="rounded-xl border border-ink-border bg-black/25 p-3 font-mono text-[0.62rem] leading-relaxed">
          <p className="text-ink-muted">services/billing/gateway.ts</p>
          <pre className="mt-2 whitespace-pre-wrap text-ink-foreground/85">
{`- const charge = await stripe.charge(order)
+ const charge = await gateway.charge(order, {
+   idempotencyKey: order.id,
+ })`}
          </pre>
          <div className="mt-3 rounded-lg border border-signal/25 bg-signal/[0.07] p-2.5">
            <p className="flex items-center gap-1.5 text-signal">
              <Bot className="size-3" /> impacto detectado
            </p>
            <p className="mt-1 text-ink-muted">
              3 consumidores de `charge()` em checkout-api e ledger-worker
            </p>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { label: "Convenções do repositório", ok: true },
            { label: "Cobertura de testes", ok: false },
            { label: "Contratos entre serviços", ok: true },
            { label: "Risco de regressão: baixo", ok: true },
          ].map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between rounded-lg border border-ink-border bg-white/[0.03] px-3 py-2 text-[0.68rem]"
            >
              <span className="text-ink-muted">{row.label}</span>
              <span
                className={cn(
                  "grid size-4 place-items-center rounded-full",
                  row.ok ? "bg-mint/20 text-mint" : "bg-white/10 text-ink-muted",
                )}
              >
                <Check className="size-2.5" />
              </span>
            </div>
          ))}
          <div className="rounded-lg border border-ink-border bg-white/[0.03] px-3 py-2.5 text-[0.68rem] text-ink-muted">
            Sugestão: adicionar caso de teste para retry idempotente em
            <span className="text-ink-foreground"> ledger-worker</span>.
          </div>
        </div>
      </div>
    </div>
  );
}

function DocsView() {
  return (
    <div>
      <Header title="Como o billing processa reembolsos?" meta="resposta gerada · 3 fontes citadas" />
      <div className="grid gap-3 lg:grid-cols-[1fr_170px]">
        <div className="rounded-xl border border-ink-border bg-white/[0.03] p-4 text-[0.72rem] leading-relaxed text-ink-muted">
          <p>
            O fluxo começa em <span className="text-ink-foreground">refund.controller.ts</span>, que valida a
            janela de 90 dias antes de emitir o evento <span className="font-mono text-signal">refund.requested</span>.
          </p>
          <p className="mt-3">
            O <span className="text-ink-foreground">ledger-worker</span> consome o evento, escreve a contrapartida
            e só então o gateway externo é acionado.
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[0.58rem]">
            {["refund.controller.ts:42", "ADR-017", "ledger-worker/consumer.ts"].map((s) => (
              <span key={s} className="rounded-md border border-ink-border px-2 py-1 text-signal">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          {["Visão geral", "Contratos", "Decisões (ADR)", "Runbooks"].map((t, i) => (
            <div
              key={t}
              className={cn(
                "rounded-lg border px-3 py-2 text-[0.68rem]",
                i === 2
                  ? "border-signal/30 bg-signal/10 text-signal"
                  : "border-ink-border bg-white/[0.02] text-ink-muted",
              )}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TasksView() {
  const columns = [
    { name: "Triagem", items: ["Latência no checkout", "Migrar cron de faturas"] },
    { name: "Em progresso", items: ["Idempotência no gateway", "Novo contrato de ledger"] },
    { name: "Em revisão", items: ["Rate limit por tenant"] },
  ];
  return (
    <div>
      <Header title="Squad Plataforma · Sprint 24" meta="18 tarefas · 6 com contexto anexado" />
      <div className="grid gap-3 sm:grid-cols-3">
        {columns.map((col) => (
          <div key={col.name} className="rounded-xl border border-ink-border bg-white/[0.02] p-2.5">
            <p className="mb-2 font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted">{col.name}</p>
            <div className="space-y-2">
              {col.items.map((item) => (
                <div key={item} className="rounded-lg border border-ink-border bg-ink-elevated/70 p-2.5">
                  <p className="text-[0.7rem] leading-snug">{item}</p>
                  <div className="mt-2 flex items-center gap-1.5 font-mono text-[0.55rem] text-ink-muted">
                    <span className="rounded bg-white/8 px-1.5 py-0.5">billing</span>
                    <span className="rounded bg-signal/15 px-1.5 py-0.5 text-signal">ctx</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InsightsView() {
  const bars = [38, 52, 44, 66, 58, 74, 81, 69, 88, 92, 84, 96];
  return (
    <div>
      <Header title="Saúde da entrega" meta="últimos 90 dias · squad Plataforma" />
      <div className="grid gap-3 lg:grid-cols-[1fr_200px]">
        <div className="rounded-xl border border-ink-border bg-white/[0.03] p-4">
          <div className="flex h-32 items-end gap-1.5">
            {bars.map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-t-sm bg-[image:var(--gradient-signal)] opacity-80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <p className="mt-3 font-mono text-[0.6rem] text-ink-muted">throughput de review por semana</p>
        </div>
        <div className="space-y-2">
          {[
            { k: "Lead time", v: "1.4d" },
            { k: "Tempo de review", v: "3h 12m" },
            { k: "Falha em deploy", v: "0.8%" },
          ].map((m) => (
            <div key={m.k} className="rounded-lg border border-ink-border bg-white/[0.03] px-3 py-2.5">
              <p className="font-mono text-[0.58rem] uppercase tracking-widest text-ink-muted">{m.k}</p>
              <p className="mt-1 text-lg tracking-tight">{m.v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
