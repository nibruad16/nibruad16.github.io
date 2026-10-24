import {
  ArrowDownToLine,
  ArrowUpRight,
  BarChart3,
  ChevronDown,
  Circle,
  Code2,
  Container,
  Database,
  ExternalLink,
  Globe2,
  Mail,
  Network,
  Radio,
  Rocket,
  ShieldCheck,
  Terminal,
  Workflow,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { CursorSignal } from '@/components/cursor-signal'
import { GlobalContactMap } from '@/components/global-contact-map'

// TODO: replace with real profile links and resume file (in /public).
const GITHUB_URL = 'https://github.com'
const LINKEDIN_URL = 'https://linkedin.com'
const RESUME_PATH = '/resume.pdf'

const failedCode = `def find_pair(nums, target):
    seen = {}
    for i, value in enumerate(nums):
        seen[value] = i
        if target - value in seen:
            return [seen[target - value], i]
    return None`

const goldCode = `def find_pair(
    nums: list[int], target: int
) -> list[int] | None:
    """Return two distinct indices summing to target."""
    seen: dict[int, int] = {}
    for i, value in enumerate(nums):
        complement = target - value
        # check first: i must not pair with itself
        if complement in seen:
            return [seen[complement], i]
        seen[value] = i
    return None`

const nowBuilding: { status: string; title: string; body: string; tags: string[]; Icon: LucideIcon }[] = [
  { status: 'Building · Nov 2026', title: 'AI SaaS for e-commerce brands & creative teams', body: 'A product that helps online brands and creative teams earn more and save time, with LLM features backed by evaluations so the output can be trusted.', tags: ['TypeScript', 'LLM APIs', 'Evals', 'E-commerce APIs'], Icon: Rocket },
  { status: 'Next', title: 'GTM automation engine', body: 'The pipeline that finds, enriches, and reaches the first customers for the SaaS, with every step measured from lead to booked call.', tags: ['Data enrichment', 'LLM personalization', 'CRM', 'SQL'], Icon: Workflow },
]

const projects: { title: string; body: string; tags: string[]; Icon: LucideIcon }[] = [
  { title: 'LLM code evaluation harness', body: 'A Python & Docker sandbox that runs model-generated code against unit tests, memory caps, and adversarial edge cases.', tags: ['Python', 'Docker', 'AST parsing', 'JSON benchmarks'], Icon: Container },
  { title: 'Data validation & preprocessing engine', body: 'Automated pipelines for cleaning and curating ground-truth datasets for reliable model fine-tuning.', tags: ['Pandas', 'NumPy', 'SciPy', 'Data curation'], Icon: Zap },
  { title: 'Competitive programming repository', body: 'An organized collection of 500+ optimized solutions across graph theory, dynamic programming, and trees.', tags: ['C++', 'Python', 'Big-O optimization'], Icon: Code2 },
]

const experience: { period: string; company: string; role: string; body: string; Icon: LucideIcon }[] = [
  { period: '2024 → now', company: 'AfterQuery & Revelo', role: 'AI Technical Evaluator', body: 'Evaluating LLM-generated Python, JavaScript, and C++ for model training. Writing multi-turn rationales and curating datasets with Pandas / NumPy.', Icon: BarChart3 },
  { period: '2022 → 2024', company: 'Intertechub', role: 'Backend Engineer', body: 'Built Node.js / Express APIs, optimized database queries, and shipped containerized test suites with Docker.', Icon: Database },
  { period: 'Ongoing', company: 'Africa to Silicon Valley', role: 'Competitive Programming', body: '500+ problems solved. 7th place in the EtCPC City Cup. Mentoring across DP, graphs, trees, and optimization.', Icon: Network },
]

const skills = {
  Engineering: ['Python', 'TypeScript', 'JavaScript', 'Node.js', 'C++', 'SQL', 'REST APIs'],
  'AI & LLMs': ['LLM evaluation', 'Prompt engineering', 'RLHF / SFT data', 'Red-teaming', 'Edge-case testing'],
  'Data & infrastructure': ['Docker', 'Git', 'Linux', 'MongoDB', 'Pandas', 'NumPy'],
}

const navItems = [
  ['overview', '01 / Intro'],
  ['about', '02 / About'],
  ['work', '03 / Work'],
  ['evaluation', '04 / Evals'],
  ['experience', '05 / Experience'],
  ['skills', '06 / Skills'],
  ['contact', '07 / Contact'],
]

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-red-400">
      <span className="text-slate-500">{number}</span>
      <span>{children}</span>
      <span className="h-px w-10 bg-red-500/40" />
    </div>
  )
}

function SystemGraph() {
  const nodes = [
    ['data', 'SIGNALS', 'left-[8%] top-[20%]'],
    ['leads', 'ENRICHMENT', 'left-[21%] top-[65%]'],
    ['llm', 'LLM AGENT', 'left-[47%] top-[13%]'],
    ['evals', 'EVALS', 'right-[15%] top-[31%]'],
    ['crm', 'REVENUE', 'right-[10%] bottom-[16%]'],
  ]

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden bg-[#090d16]">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(248,113,113,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(248,113,113,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute left-1/2 top-1/2 size-[min(60vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-950/30 blur-3xl" />
      <svg className="absolute inset-0 size-full" viewBox="0 0 1000 700" preserveAspectRatio="none">
        <defs><linearGradient id="wire" x1="0" x2="1"><stop stopColor="#fb7185" stopOpacity=".15" /><stop offset=".5" stopColor="#fca5a5" /><stop offset="1" stopColor="#fb7185" stopOpacity=".15" /></linearGradient></defs>
        <path className="teaching-wire" d="M130 160 C260 90, 390 140, 500 110 S700 160, 850 230" stroke="url(#wire)" />
        <path className="teaching-wire teaching-wire-delay" d="M220 480 C320 390, 390 300, 500 350 S700 500, 870 510" stroke="url(#wire)" />
        <path className="teaching-wire teaching-wire-delay-2" d="M220 480 C390 570, 600 570, 870 510" stroke="url(#wire)" />
      </svg>
      <div className="absolute left-1/2 top-1/2 flex size-[min(26vw,300px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-red-300/35 bg-red-950/25 shadow-[0_0_100px_rgba(248,113,113,0.22)]">
        <div className="absolute inset-5 rounded-full border border-dashed border-red-300/30 animate-[spin_22s_linear_infinite]" />
        <div className="absolute inset-12 rounded-full border border-red-400/20 animate-[spin_14s_linear_infinite_reverse]" />
        <div className="absolute size-2 -translate-y-[clamp(90px,9vw,128px)] rounded-full bg-white shadow-[0_0_16px_5px_rgba(254,202,202,.9)] animate-[orbit_7s_linear_infinite]" />
        <div className="text-center font-mono"><div className="text-[clamp(24px,4vw,48px)] font-bold text-red-200">AI</div><div className="mt-1 text-[10px] uppercase tracking-[.28em] text-red-300/70">+ GTM</div></div>
      </div>
      {nodes.map(([key, label, position], index) => <div key={key} className={`absolute ${position} rounded-lg border border-red-300/25 bg-[#11101a]/90 px-3 py-2 shadow-[0_0_25px_rgba(248,113,113,0.1)] backdrop-blur-sm animate-[float_5s_ease-in-out_infinite]`} style={{ animationDelay: `${index * -0.8}s` }}><div className="flex items-center gap-2 font-mono text-[11px] tracking-[.16em] text-red-200"><span className="size-1.5 rounded-full bg-red-400 shadow-[0_0_10px_2px_rgba(248,113,113,.7)]" />{label}</div></div>)}
      <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 rounded-full border border-red-400/20 bg-[#090d16]/90 px-4 py-2 font-mono text-[11px] uppercase tracking-[.2em] text-red-200/70 backdrop-blur">data → model → eval → revenue</div>
    </div>
  )
}

function AboutSignal() {
  return (
    <div aria-hidden="true" className="relative min-h-[25rem] overflow-hidden rounded-2xl border border-red-300/20 bg-[#080d16] p-5 shadow-[0_0_70px_rgba(248,113,113,.08)]">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(248,113,113,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(248,113,113,.06)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_48%,rgba(248,113,113,.17),transparent_35%)]" />
      <div className="relative flex items-center justify-between font-mono text-[11px] uppercase tracking-[.18em] text-red-200/60"><span>nibru / profile</span><span className="flex items-center gap-2 text-red-300"><span className="size-1.5 animate-pulse rounded-full bg-red-300" /> open to work</span></div>
      <div className="relative mx-auto mt-8 flex aspect-square max-w-[19rem] items-center justify-center rounded-full border border-red-300/20">
        <div className="absolute inset-5 rounded-full border border-dashed border-red-300/25 animate-[spin_18s_linear_infinite]" />
        <div className="absolute inset-14 rounded-full border border-red-400/20 animate-[spin_11s_linear_infinite_reverse]" />
        <div className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-red-100 shadow-[0_0_18px_6px_rgba(254,202,202,.8)] animate-[orbit_6s_linear_infinite]" />
        <div className="relative flex size-28 flex-col items-center justify-center rounded-full border border-red-200/35 bg-red-950/50 text-center shadow-[0_0_50px_rgba(248,113,113,.18)]"><div className="font-mono text-3xl font-bold text-red-100">N</div><div className="mt-1 font-mono text-[10px] uppercase tracking-[.24em] text-red-300/70">engineer</div></div>
        {[['backend', 'left-0 top-[24%]'], ['ai / llms', 'right-0 top-[34%]'], ['evals', 'bottom-[14%] left-[12%]'], ['gtm', 'bottom-[10%] right-[12%]']].map(([label, position], index) => <div key={label} className={`absolute ${position} rounded border border-red-300/20 bg-[#0b111c]/90 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-red-200/80 backdrop-blur animate-[float_5s_ease-in-out_infinite]`} style={{ animationDelay: `${index * -.9}s` }}>{label}</div>)}
      </div>
      <div className="relative mt-4 flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[11px] uppercase tracking-wider text-slate-500"><span>Nairobi, KE</span><span className="text-red-200/70">remote-ready</span></div>
    </div>
  )
}

function ContactBeacon() {
  return <div aria-hidden="true" className="relative hidden min-h-72 overflow-hidden rounded-xl border border-red-300/15 bg-[#080d16] p-5 lg:block">
    <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(248,113,113,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(248,113,113,0.07)_1px,transparent_1px)] [background-size:34px_34px]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(248,113,113,.2),transparent_32%)]" />
    <div className="absolute inset-x-5 top-5 flex justify-between font-mono text-[11px] uppercase tracking-[.16em] text-red-200/60"><span>contact</span><span className="flex items-center gap-2 text-red-300"><span className="size-1.5 animate-pulse rounded-full bg-red-300" /> inbox open</span></div>
    <div className="absolute left-1/2 top-1/2 flex size-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-red-300/25 beacon-ring"><div className="absolute inset-3 rounded-full border border-dashed border-red-300/25 animate-[spin_16s_linear_infinite]" /><div className="absolute size-16 rounded-full border border-red-300/30 beacon-ring beacon-ring-delay" /><div className="absolute size-2 rounded-full bg-red-100 shadow-[0_0_28px_10px_rgba(248,113,113,.75)]" /><Radio className="absolute -top-7 size-4 text-red-200 animate-pulse" /></div>
    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[11px] text-slate-500"><span>nibruad16@gmail.com</span><span className="text-red-200/70">remote · async</span></div>
  </div>
}

function CodePanel({ title, status, statusClass, code, tags }: { title: string; status: string; statusClass: string; code: string; tags: string[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b111c]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
          <Circle className="size-2.5 fill-current text-slate-600" />
          <span>{title}</span>
        </div>
        <span className={`rounded-full px-2 py-1 font-mono text-[11px] font-bold uppercase tracking-wider ${statusClass}`}>{status}</span>
      </div>
      <pre className="min-h-[300px] overflow-x-auto p-5 font-mono text-[12px] leading-6 text-slate-300"><code>{code}</code></pre>
      <div className="flex flex-wrap gap-2 border-t border-white/10 px-4 py-3">
        {tags.map((tag) => <span key={tag} className="rounded border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-slate-400">{tag}</span>)}
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090d16] text-slate-100 selection:bg-red-400/30 selection:text-red-100">
      <CursorSignal />
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="site-constellation" aria-hidden="true"><span className="constellation-node constellation-node-a" /><span className="constellation-node constellation-node-b" /><span className="constellation-node constellation-node-c" /><span className="constellation-line constellation-line-a" /><span className="constellation-line constellation-line-b" /></div>

      <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div className="command-dock relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/[0.12] bg-[#0b111c]/80 px-3 py-2 shadow-[0_18px_60px_rgba(0,0,0,.35)] backdrop-blur-2xl lg:px-4">
          <a href="#overview" className="group flex items-center gap-3 rounded-xl px-2 py-1.5 font-mono text-sm font-bold tracking-tight text-white transition hover:bg-white/[0.06]" aria-label="Nibru, home"><span className="flex size-7 items-center justify-center rounded-lg border border-red-300/30 bg-red-400/10 transition group-hover:rotate-12"><span className="size-1.5 rounded-full bg-red-300 shadow-[0_0_12px_3px_rgba(248,113,113,.6)]" /></span><span><span className="text-red-400">NIBRU</span><span className="text-slate-500">/</span><span className="text-slate-300">ENG</span></span></a>
          <div className="hidden items-center gap-0.5 whitespace-nowrap rounded-xl border border-white/[0.08] bg-black/10 p-1 font-mono text-[11px] uppercase tracking-[0.08em] text-slate-400 lg:flex xl:gap-1">
            {navItems.map(([id, label], index) => <a key={id} href={`#${id}`} className={`rounded-lg px-2 py-2 transition hover:bg-red-400/10 hover:text-red-300 xl:px-3 ${index === 0 ? 'bg-white/[0.08] text-slate-200' : ''}`}>{label}</a>)}
          </div>
          <a href="#work" className="flex items-center gap-2 whitespace-nowrap rounded-xl border border-red-300/30 bg-red-400/10 px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-red-200 transition hover:border-red-200/60 hover:bg-red-400/20 sm:px-4"><span className="relative flex size-1.5"><span className="absolute inline-flex size-full animate-ping rounded-full bg-red-300 opacity-75" /><span className="relative inline-flex size-1.5 rounded-full bg-red-300" /></span><span className="hidden sm:inline">See my work</span><Terminal className="size-3.5 sm:hidden" /><ArrowUpRight className="size-3.5" /></a>
        </div>
      </nav>

      <section id="overview" className="relative z-10 flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 lg:px-12 lg:pb-20 lg:pt-40">
        <SystemGraph />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#090d16] via-[#090d16]/85 to-transparent lg:w-[72%]" />
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-400/25 bg-red-400/[0.06] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-red-300"><span className="size-1.5 animate-pulse rounded-full bg-red-400" /> Open to AI & GTM engineering roles</div>
            <p className="font-mono text-sm uppercase tracking-[0.16em] text-slate-400">Nibru Kefyalew Tessema · Software Engineer</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-7xl">I build AI systems <span className="text-red-400">that help companies grow.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">Backend engineer turned AI builder. I ship <span className="text-slate-200">LLM-powered products</span>, the <span className="text-slate-200">evaluations</span> that keep them honest, and the <span className="text-slate-200">automation</span> that takes them to market.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#work" className="pointer-events-auto inline-flex items-center gap-2 rounded-md bg-red-400 px-5 py-3 font-mono text-xs font-bold uppercase tracking-wide text-[#07110f] transition hover:bg-red-300">See my work <ArrowUpRight className="size-4" /></a><a href={RESUME_PATH} download className="pointer-events-auto inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 font-mono text-xs font-bold uppercase tracking-wide text-slate-300 transition hover:border-red-400/50 hover:text-white"><ArrowDownToLine className="size-4" /> Download resume</a></div>
          </div>
          <div className="mt-16 grid max-w-4xl grid-cols-1 border-y border-white/10 sm:grid-cols-3">
            {[['Backend → AI', 'Engineering path', 'APIs · data · LLMs'], ['95%+', 'Task acceptance', 'LLM code evaluation'], ['500+', 'Problems solved', 'LeetCode / Codeforces']].map(([value, label, sub], i) => <div key={value} className={`py-6 sm:px-6 ${i > 0 ? 'border-t border-white/10 sm:border-l sm:border-t-0' : ''}`}><div className="font-mono text-2xl font-bold text-white">{value}</div><div className="mt-2 text-sm text-slate-300">{label}</div><div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-slate-500">{sub}</div></div>)}
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-20 lg:px-8">
        <SectionLabel number="02">About</SectionLabel>
        <div className="grid items-center gap-8 lg:grid-cols-[.82fr_1.18fr]">
          <AboutSignal />
          <div className="lg:pl-8">
            <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-4xl">Engineer first. AI and growth are what I build with it.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">I started on the backend, building APIs, databases, and containerized test suites. Then I spent two years evaluating LLM-generated code for model training, which taught me exactly where AI output breaks. Now I combine both: AI products that are measured properly, and the systems that get them in front of customers.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">{[['01', 'Build', 'APIs, data pipelines, LLM features'], ['02', 'Measure', 'Evals and metrics, not vibes'], ['03', 'Grow', 'Automation that drives revenue']].map(([number, title, body]) => <div key={number} className="border-l border-red-400/40 pl-4"><div className="font-mono text-[11px] text-red-300">{number}</div><div className="mt-2 text-sm font-medium text-white">{title}</div><div className="mt-1 text-sm leading-5 text-slate-400">{body}</div></div>)}</div>
          </div>
        </div>
      </section>

      <section id="work" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-20 lg:px-8">
        <SectionLabel number="03">Work</SectionLabel>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">What I&apos;m building</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">A product, and the go-to-market system that sells it. Built in public.</p>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">{nowBuilding.map(({ status, title, body, tags, Icon }) => <article key={title} className="rounded-2xl border border-red-300/20 bg-gradient-to-br from-red-400/[0.07] to-[#0e1522] p-6 sm:p-7"><div className="flex items-center justify-between"><Icon className="size-5 text-red-300" /><span className="rounded-full border border-red-300/25 bg-red-400/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-red-200">{status}</span></div><h3 className="mt-10 text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{body}</p><div className="mt-6 flex flex-wrap gap-2">{tags.map(tag => <span key={tag} className="rounded bg-white/[0.05] px-2 py-1 font-mono text-[11px] text-slate-400">{tag}</span>)}</div></article>)}</div>
        <h3 id="projects" className="mt-14 scroll-mt-24 font-mono text-xs uppercase tracking-wider text-slate-500">Earlier projects</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">{projects.map(({ title, body, tags, Icon }) => <article key={title} className="group rounded-xl border border-white/10 bg-[#0e1522] p-6"><div className="flex items-start justify-between"><Icon className="size-5 text-red-300" /><ExternalLink className="size-4 text-slate-600 transition group-hover:text-red-400" /></div><h4 className="mt-10 text-lg font-semibold text-white">{title}</h4><p className="mt-3 min-h-20 text-sm leading-6 text-slate-400">{body}</p><div className="mt-6 flex flex-wrap gap-2">{tags.map(tag => <span key={tag} className="rounded bg-white/[0.05] px-2 py-1 font-mono text-[11px] text-slate-400">{tag}</span>)}</div></article>)}</div>
      </section>

      <section id="evaluation" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-20 lg:px-8">
        <SectionLabel number="04">Evals</SectionLabel>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">How I evaluate LLM-generated code</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">A typical review: find the bug, prove it with a failing test, then write the fix and the rationale.</p>
        <div className="mt-9 rounded-2xl border border-white/10 bg-[#0e1522]/80 p-3 shadow-2xl shadow-black/20 sm:p-5">
          <div className="mb-5 flex flex-col gap-2 border-b border-white/10 px-2 pb-4 font-mono text-xs sm:flex-row sm:items-center sm:justify-between"><span className="text-slate-300">Task: <span className="text-slate-400">Return the indices of two different elements that sum to target, in O(N).</span></span><span className="text-slate-500">two_sum.py</span></div>
          <div className="grid gap-4 lg:grid-cols-2"><CodePanel title="model_response.py" status="FAIL · 3/5 tests" statusClass="bg-red-400/10 text-red-300" code={failedCode} tags={['Element pairs with itself', '[3, 2, 4], 6 → [0, 0]', 'Order-of-operations bug']} /><CodePanel title="corrected.py" status="PASS · 5/5 tests" statusClass="bg-emerald-400/10 text-emerald-300" code={goldCode} tags={['O(N) time, O(N) space', 'Type hints', 'Handles duplicates']} /></div>
          <details className="group mt-4 overflow-hidden rounded-xl border border-white/10 bg-[#0b111c]" open>
            <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-mono text-xs text-slate-300"><span className="flex items-center gap-2"><ShieldCheck className="size-4 text-red-400" /> Rationale</span><ChevronDown className="size-4 text-slate-500 transition group-open:rotate-180" /></summary>
            <div className="grid gap-4 border-t border-white/10 p-4 text-sm leading-6 text-slate-400 lg:grid-cols-3">
              <div><p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-red-400">01 / The bug</p>The response stores each value in <code className="font-mono text-slate-200">seen</code> before looking up its complement, so an element can pair with itself. <code className="font-mono text-slate-200">find_pair([3, 2, 4], 6)</code> returns <code className="font-mono text-slate-200">[0, 0]</code> instead of <code className="font-mono text-slate-200">[1, 2]</code>. It looks right on most inputs, which is why it&apos;s easy to approve.</div>
              <div><p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-red-400">02 / The fix</p>Look up the complement first, then record the current value. That&apos;s a one-line reorder: complexity stays <span className="font-mono text-slate-200">O(N)</span> time and <span className="font-mono text-slate-200">O(N)</span> space, and duplicates like <code className="font-mono text-slate-200">[3, 3], 6</code> now return <code className="font-mono text-slate-200">[0, 1]</code>.</div>
              <div><p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-red-400">03 / Tests</p>Target equal to twice an element <code className="font-mono text-slate-200">[3, 2, 4] → 6</code>, duplicates <code className="font-mono text-slate-200">[3, 3] → 6</code>, no solution <code className="font-mono text-slate-200">[1, 2] → 7</code>, empty input, and negatives <code className="font-mono text-slate-200">[-1, 4] → 3</code>. The original fails the first two.</div>
            </div>
          </details>
        </div>
      </section>

      <section id="experience" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-20 lg:px-8">
        <SectionLabel number="05">Experience</SectionLabel>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Where I&apos;ve worked</h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">{experience.map(({ period, company, role, body, Icon }) => <article key={company} className="bg-[#0e1522] p-6 transition hover:bg-[#111b2b]"><div className="flex items-center justify-between"><Icon className="size-5 text-red-400" /><span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">{period}</span></div><h3 className="mt-10 text-lg font-semibold text-white">{company}</h3><p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-red-300">{role}</p><p className="mt-5 text-sm leading-6 text-slate-400">{body}</p></article>)}</div>
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_.85fr]"><GlobalContactMap /><div className="rounded-xl border border-red-300/15 bg-[#0a101b] p-5"><div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[.18em] text-slate-500"><span>remote work</span><Globe2 className="size-4 text-red-300" /></div><h3 className="mt-10 text-2xl font-semibold tracking-tight text-white">One desk. Every timezone.</h3><p className="mt-3 text-sm leading-6 text-slate-400">I&apos;ve worked asynchronously with teams across continents for years: clear written updates, overlap where it matters, and work that doesn&apos;t wait on meetings.</p><div className="mt-8 grid grid-cols-2 gap-3 font-mono text-[11px] uppercase tracking-wider"><div className="rounded-lg border border-white/10 bg-white/[0.03] p-3"><span className="block text-slate-500">base</span><span className="mt-1 block text-red-200">Nairobi, KE</span></div><div className="rounded-lg border border-white/10 bg-white/[0.03] p-3"><span className="block text-slate-500">coverage</span><span className="mt-1 block text-red-200">UTC−08 → UTC+09</span></div></div><div className="mt-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-red-300"><span className="size-1.5 animate-pulse rounded-full bg-red-300" /> open to remote roles</div></div></div>
      </section>

      <section id="skills" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-20 lg:px-8">
        <SectionLabel number="06">Skills</SectionLabel>
        <div className="grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3">{Object.entries(skills).map(([category, items]) => <div key={category}><h3 className="font-mono text-xs uppercase tracking-wider text-slate-400">{category}</h3><div className="mt-4 flex flex-wrap gap-2">{items.map(skill => <span key={skill} className="rounded-md border border-white/10 bg-[#0e1522] px-3 py-2 font-mono text-xs text-slate-300 transition hover:border-red-400/50 hover:text-red-300">{skill}</span>)}</div></div>)}</div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 pb-16 pt-20 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-red-400/20 bg-gradient-to-br from-red-400/[0.12] via-[#0e1522] to-indigo-500/[0.08] p-5 sm:p-8 lg:grid-cols-[1fr_1.15fr] lg:p-10">
          <div className="max-w-2xl p-3 sm:p-4">
            <SectionLabel number="07">Contact</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">Building AI or GTM systems? Let&apos;s talk.</h2>
            <p className="mt-5 text-sm leading-6 text-slate-400">I&apos;m looking for AI engineering and GTM engineering roles starting January 2027. Remote-first, comfortable across timezones.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="mailto:nibruad16@gmail.com" className="inline-flex items-center gap-2 rounded-md bg-red-400 px-4 py-3 font-mono text-xs font-bold text-[#07110f] hover:bg-red-300"><Mail className="size-4" /> nibruad16@gmail.com</a><a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-md border border-white/15 p-3 text-slate-300 hover:border-white/35 hover:text-white"><Code2 className="size-4" /></a><a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-md border border-white/15 p-3 text-slate-300 hover:border-white/35 hover:text-white"><Network className="size-4" /></a></div>
          </div>
          <ContactBeacon />
        </div>
        <footer className="flex flex-col justify-between gap-3 border-t border-white/10 py-7 font-mono text-[11px] uppercase tracking-wider text-slate-500 sm:flex-row"><span>© 2026 Nibru Kefyalew Tessema</span><span>Built with Next.js · hosted on GitHub Pages</span></footer>
      </section>
    </main>
  )
}
