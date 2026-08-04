import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/nexus/navbar";
import { Footer } from "@/components/nexus/footer";
import { Hero } from "@/components/sections/hero";
import { Companies } from "@/components/sections/companies";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { Demo } from "@/components/sections/demo";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Benefits } from "@/components/sections/benefits";
import { Architecture } from "@/components/sections/architecture";
import { Integrations } from "@/components/sections/integrations";
import { Metrics } from "@/components/sections/metrics";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

const title = "Nexus — Inteligência artificial para equipes de engenharia";
const description =
  "Nexus centraliza documentação inteligente, revisão de código por IA, tarefas e dashboards em uma única camada de contexto para times de software.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#produto"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main>
        <Hero />
        <Companies />
        <Problem />
        <Solution />
        <Demo />
        <Features />
        <HowItWorks />
        <Benefits />
        <Architecture />
        <Integrations />
        <Metrics />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
