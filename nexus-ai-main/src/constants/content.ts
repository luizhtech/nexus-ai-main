import {
  Boxes,
  Bug,
  Cable,
  ClipboardList,
  Compass,
  FileSearch,
  GitPullRequest,
  Gauge,
  LayoutDashboard,
  MessagesSquare,
  Radar,
  ShieldCheck,
  Sparkles,
  Timer,
  Workflow,
} from "lucide-react";

export const nav = [
  { label: "Produto", href: "#produto" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Arquitetura", href: "#arquitetura" },
  { label: "Integrações", href: "#integracoes" },
  { label: "Resultados", href: "#resultados" },
  { label: "FAQ", href: "#faq" },
];

export const companies = [
  "Vantiq",
  "Northline",
  "Aurora Labs",
  "Kernelly",
  "Ottoscale",
  "Meridian",
  "Fluxo",
  "Basalt",
];

export const problems = [
  {
    icon: FileSearch,
    title: "O conhecimento evapora",
    body: "A decisão importante foi tomada numa thread do Slack em março. Ninguém encontra mais. A documentação envelheceu no mesmo dia em que foi escrita.",
  },
  {
    icon: GitPullRequest,
    title: "A revisão vira gargalo",
    body: "Pull requests esperam dois dias por um olhar humano. Quando chegam, o contexto já se perdeu e o review vira caça a vírgulas.",
  },
  {
    icon: Boxes,
    title: "O trabalho fica espalhado",
    body: "Tarefa no Jira, discussão no Slack, código no GitHub, deploy na Vercel. Quatro verdades diferentes sobre o mesmo projeto.",
  },
  {
    icon: Radar,
    title: "Ninguém enxerga o sistema",
    body: "A arquitetura real só existe na cabeça de três pessoas — e uma delas sai da empresa no mês que vem.",
  },
];

export const solutionPillars = [
  {
    title: "Um único grafo de contexto",
    body: "Nexus lê seus repositórios, tickets e conversas e constrói um grafo vivo do seu sistema — atualizado a cada commit.",
  },
  {
    title: "IA que entende seu código",
    body: "Revisões, respostas e sugestões baseadas na sua arquitetura real, nas suas convenções e nas decisões que seu time já tomou.",
  },
  {
    title: "Fluxo sem trocas de ferramenta",
    body: "Documentação, tarefas, revisão e deploy vivem na mesma superfície. O contexto viaja com o trabalho.",
  },
];

export const demoTabs = [
  {
    id: "review",
    label: "Revisão de código",
    title: "Reviews em minutos, não em dias",
    body: "Nexus abre a PR com uma análise completa: impacto arquitetural, riscos de regressão, cobertura ausente e sugestões aplicáveis com um clique.",
    bullets: ["Análise de impacto entre serviços", "Sugestões aplicáveis inline", "Política de qualidade por repositório"],
  },
  {
    id: "docs",
    label: "Documentação viva",
    title: "Documentação que nunca fica velha",
    body: "Cada merge atualiza as páginas afetadas. Perguntas em linguagem natural respondem com citações diretas do código e das decisões registradas.",
    bullets: ["Sincronização a cada commit", "Respostas com citação de origem", "Registro de decisões técnicas"],
  },
  {
    id: "tasks",
    label: "Tarefas e fluxo",
    title: "O trabalho organizado sozinho",
    body: "Tickets nascem enriquecidos com arquivos prováveis, especialistas do time e estimativa de complexidade calculada sobre histórico real.",
    bullets: ["Roteamento por especialidade", "Estimativa sobre histórico real", "Sincronia bidirecional com Jira"],
  },
  {
    id: "insights",
    label: "Dashboards",
    title: "Sinais reais de entrega",
    body: "Lead time, throughput de review e saúde de dependências em painéis que os líderes usam de verdade — sem transformar métrica em vigilância.",
    bullets: ["DORA sem planilha", "Alertas de gargalo", "Recortes por squad ou serviço"],
  },
];

export const features = [
  {
    icon: Sparkles,
    title: "Documentação inteligente",
    body: "Páginas geradas e mantidas a partir do código, com citações rastreáveis até a linha exata.",
  },
  {
    icon: GitPullRequest,
    title: "Revisão por IA",
    body: "Análise de impacto, riscos e convenções internas antes do primeiro olhar humano.",
  },
  {
    icon: ClipboardList,
    title: "Gestão de tarefas",
    body: "Backlog enriquecido com contexto técnico e roteamento automático por especialidade.",
  },
  {
    icon: MessagesSquare,
    title: "Colaboração contextual",
    body: "Discussões ancoradas em arquivos, serviços e decisões — não em canais efêmeros.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards de engenharia",
    body: "Métricas DORA, saúde de review e capacidade do time em tempo real.",
  },
  {
    icon: Compass,
    title: "Arquitetura visual",
    body: "Mapa interativo de serviços, contratos e dependências, derivado do código real.",
  },
  {
    icon: Workflow,
    title: "Automações",
    body: "Regras que disparam em eventos de repositório, ticket ou deploy, sem manter YAML frágil.",
  },
  {
    icon: ShieldCheck,
    title: "Governança e segurança",
    body: "SSO, SCIM, logs de auditoria e isolamento por workspace desde o primeiro dia.",
  },
];

export const steps = [
  {
    step: "01",
    title: "Conecte suas fontes",
    body: "GitHub, Jira, Slack e Vercel em poucos minutos, com escopo de permissão mínimo e revogável.",
  },
  {
    step: "02",
    title: "Nexus indexa o contexto",
    body: "O grafo de código, decisões e histórico de entrega é construído e mantido continuamente.",
  },
  {
    step: "03",
    title: "A IA entra no fluxo",
    body: "Reviews, documentação e triagem passam a acontecer dentro das ferramentas que o time já usa.",
  },
  {
    step: "04",
    title: "O time mede e ajusta",
    body: "Painéis mostram onde a entrega trava e quais automações devolveram tempo à engenharia.",
  },
];

export const benefits = [
  { icon: Timer, title: "Menos espera", body: "Ciclos de review encurtam porque o contexto chega antes da pergunta." },
  { icon: Bug, title: "Menos regressão", body: "Riscos de mudança aparecem na PR, não no incidente de sexta à noite." },
  { icon: Gauge, title: "Onboarding curto", body: "Pessoas novas navegam o sistema por perguntas, não por arqueologia." },
  { icon: Cable, title: "Menos ferramentas", body: "Uma superfície de contexto no lugar de quatro fontes divergentes." },
];

export const architectureLayers = [
  {
    tag: "Camada de ingestão",
    title: "Conectores e eventos",
    body: "Webhooks e sincronização incremental de repositórios, tickets, threads e deploys.",
    items: ["GitHub", "Jira", "Slack", "Vercel"],
  },
  {
    tag: "Camada de contexto",
    title: "Grafo de conhecimento",
    body: "Símbolos, serviços, contratos, autoria e decisões conectados em um índice consultável.",
    items: ["Índice semântico", "Grafo de dependências", "Registro de decisões"],
  },
  {
    tag: "Camada de raciocínio",
    title: "Agentes especializados",
    body: "Agentes de revisão, documentação e triagem operando com políticas definidas pelo time.",
    items: ["Review", "Docs", "Triagem", "Automação"],
  },
  {
    tag: "Camada de superfície",
    title: "Onde o time trabalha",
    body: "Web app, comentários em PR, comandos no Slack e API pública para fluxos próprios.",
    items: ["Web", "PR", "Slack", "API"],
  },
];

export const integrations = [
  { name: "GitHub", body: "Reviews, checks e sincronização de repositórios." },
  { name: "Jira", body: "Tarefas bidirecionais com contexto técnico anexado." },
  { name: "Slack", body: "Perguntas, alertas e aprovações sem trocar de aba." },
  { name: "Vercel", body: "Deploys, previews e correlação com incidentes." },
];

export const metrics = [
  { value: "62%", label: "menos tempo em review", detail: "mediana nas 90 primeiras equipes" },
  { value: "4.1×", label: "mais rápido para responder", detail: "perguntas técnicas de onboarding" },
  { value: "18h", label: "devolvidas por dev/mês", detail: "média em times de 20+ pessoas" },
  { value: "99.98%", label: "uptime nos últimos 12 meses", detail: "medido em três regiões" },
];

export const testimonials = [
  {
    quote:
      "Trocamos três rituais semanais por um painel. O review deixou de ser o gargalo e virou a parte previsível da nossa semana.",
    name: "Helena Braga",
    role: "VP de Engenharia, Northline",
  },
  {
    quote:
      "A documentação sempre foi dívida técnica aqui. Hoje ela se mantém sozinha e as respostas vêm com o trecho de código junto.",
    name: "Rafael Okuda",
    role: "Staff Engineer, Aurora Labs",
  },
  {
    quote:
      "Uma pessoa nova abre uma PR relevante na primeira semana. Antes disso levava um mês e meio de leitura de código.",
    name: "Marina Costa",
    role: "Head de Plataforma, Ottoscale",
  },
];

export const faqs = [
  {
    q: "O Nexus treina modelos com o nosso código?",
    a: "Não. Seu código é usado apenas para construir o índice do seu próprio workspace, isolado por tenant, e nunca alimenta treinamento de modelos compartilhados.",
  },
  {
    q: "Quanto tempo leva a implantação?",
    a: "A conexão inicial leva minutos. A indexação completa de um monorepo grande costuma terminar em algumas horas, e o time já pode usar durante o processo.",
  },
  {
    q: "Precisamos abandonar Jira ou Slack?",
    a: "Não. O Nexus assume o papel de camada de contexto sobre as ferramentas existentes, com sincronia bidirecional onde faz sentido.",
  },
  {
    q: "Como funciona a revisão por IA na prática?",
    a: "Assim que a PR abre, o agente publica uma análise com impacto arquitetural, riscos e sugestões aplicáveis. As regras de bloqueio são definidas por repositório pelo próprio time.",
  },
  {
    q: "Existe opção self-hosted?",
    a: "Sim, para os planos Enterprise, com implantação em VPC própria, SSO, SCIM e logs de auditoria exportáveis.",
  },
  {
    q: "Como é a cobrança?",
    a: "Por desenvolvedor ativo no mês, sem cobrança por assentos ociosos e sem taxa por repositório conectado.",
  },
];
