import { ArrowDownToLine, ArrowUpRight, ChevronDown, Folder, Mail } from 'lucide-react'
import { GlobalContactMap } from '@/components/global-contact-map'

const GITHUB_URL = 'https://github.com/nibruad16'
const LINKEDIN_URL = 'https://linkedin.com/in/nibru-kefyalew-558470310'
const LEETCODE_URL = 'https://leetcode.com/u/nibruad21/'
const CODEFORCES_URL = 'https://codeforces.com/profile/nibruad21'
const EMAIL = 'nibruad16@gmail.com'
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

const facts = [
  ['4 years', 'Building software', 'Backend · front end · data'],
  ['500+', 'Problems solved', 'LeetCode / Codeforces'],
  ['7th place', 'EtCPC City Cup', 'Competitive programming, 2024'],
]

const nowBuilding: { status: string; title: string; body: string; tags: string[] }[] = [
  { status: 'Built · private repo', title: 'LeadHunter: B2B lead extraction engine', body: 'Type "tour operators in Addis Ababa" and it collects matching businesses, audits each website for booking, payments, CRM, and chat signals, scores their digital maturity, and recommends which system to pitch. Leads stream to a dashboard in real time and export to CSV.', tags: ['Next.js', 'NestJS', 'Redis queues', 'Python + Playwright', 'PostgreSQL'] },
  { status: 'Early stage', title: 'AI SaaS for e-commerce brands & creative teams', body: 'Next up: a product that helps online brands and creative teams earn more and save time. I am talking to brands first to pick one painful workflow, then building it with LLM features backed by evaluations.', tags: ['TypeScript', 'LLM APIs', 'Evals', 'E-commerce APIs'] },
]

const projects: { title: string; body: string; tags: string[]; url?: string }[] = [
  { title: 'RoastFlow API', body: 'E-commerce backend for a coffee roastery: catalog, cart, checkout, inventory, coupons, and payment gateway integrations.', tags: ['FastAPI', 'SQLAlchemy', 'Pydantic', 'Postgres'] },
  { title: 'Solar radiation data analysis', body: 'Cleaning and analysis pipeline for meteorological data from Benin, Sierra Leone, and Togo: EDA, outlier handling, correlations, and visual reports.', tags: ['Python', 'Pandas', 'NumPy', 'SciPy'], url: 'https://github.com/nibruad16/MoonLight-Energy-Solutions' },
  { title: 'Digital health care management system', body: 'Front end for a health care management system at EagleLion Systems, plus the project documentation.', tags: ['Next.js', 'React', 'Documentation'] },
  { title: 'Competitive programming', body: '500+ solved problems on LeetCode and Codeforces across graphs, dynamic programming, and trees, optimized for time and space.', tags: ['Python', 'C++', 'Algorithms'], url: 'https://github.com/nibruad16/Problem-solving' },
]

const experience: { period: string; company: string; role: string; body: string }[] = [
  { period: 'Nov 2024 → now', company: 'Intertechub', role: 'Backend Developer', body: 'Designing and building APIs with Node.js, Express, and MongoDB, and optimizing database performance.' },
  { period: 'Freelance', company: 'AfterQuery & Revelo', role: 'AI Code Evaluator', body: 'Debugging and evaluating AI-generated Python, JavaScript, and C++ for model training, and writing gold-standard solutions and rationales.' },
  { period: 'Jul → Sep 2024', company: 'EagleLion Systems', role: 'Front-end Developer', body: 'Built a digital health care management system in Next.js and wrote its technical documentation.' },
  { period: 'Apr 2024 → 2025', company: 'Africa to Silicon Valley', role: 'A2SV Fellow', body: '500+ algorithm problems solved and peer mentoring in DP, graphs, and trees. 7th place in the EtCPC City Cup (May 2024).' },
  { period: '2022 → now', company: 'Adama Science and Technology University', role: 'BSc Software Engineering', body: 'Coursework in full-stack web development, algorithms and data structures, and object-oriented programming.' },
]

const skills = {
  Engineering: ['Python', 'TypeScript', 'JavaScript', 'Node.js', 'Express', 'NestJS', 'Next.js', 'FastAPI', 'SQL'],
  'Data & infrastructure': ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Playwright', 'Pandas', 'NumPy'],
  'AI & LLMs': ['LLM code evaluation', 'Prompt engineering', 'RLHF / SFT data'],
  'Learning now': ['GTM engineering', 'LLM agents', 'CRM integrations'],
}

const navItems = [
  ['overview', '01 Intro'],
  ['about', '02 About'],
  ['work', '03 Work'],
  ['evaluation', '04 Evals'],
  ['experience', '05 Experience'],
  ['skills', '06 Skills'],
  ['contact', '07 Contact'],
]

const footerGroups: { heading: string; links: [string, string, boolean?][] }[] = [
  { heading: 'Profiles', links: [['GitHub', GITHUB_URL, true], ['LinkedIn', LINKEDIN_URL, true], ['LeetCode', LEETCODE_URL, true], ['Codeforces', CODEFORCES_URL, true]] },
  { heading: 'Contact', links: [['Email', `mailto:${EMAIL}`], ['Resume (PDF)', RESUME_PATH]] },
  { heading: 'Sections', links: [['About', '#about'], ['Work', '#work'], ['Evals', '#evaluation'], ['Experience', '#experience'], ['Skills', '#skills']] },
]

const container = 'mx-auto w-full max-w-[1280px] px-4 tab:px-6'

function TitleBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="retro-titlebar">
      <span className="min-w-0 truncate">{children}</span>
      <span className="retro-titlebar-ornament" aria-hidden="true"><i /><i /><i /></span>
    </div>
  )
}

function SectionHeading({ id, number, title, intro }: { id: string; number: string; title: string; intro?: string }) {
  return (
    <div className="mb-8 inline-block max-w-2xl border-2 border-ink bg-white px-5 py-3 shadow-[5px_5px_0_#000]">
      <p className="font-mono text-xs uppercase tracking-[0.12em]">{number}</p>
      <h2 id={id} className="font-display text-3xl font-extrabold tracking-[-0.02em] tab:text-4xl">{title}</h2>
      {intro && <p className="mt-1 text-[15px]">{intro}</p>}
    </div>
  )
}

function CodeWindow({ title, status, pass, code, tags }: { title: string; status: string; pass: boolean; code: string; tags: string[] }) {
  return (
    <div className="retro-window flex min-w-0 flex-col">
      <TitleBar>{title}</TitleBar>
      <p className={`mt-1 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wide ${pass ? 'bg-desktop text-white' : 'bg-emphasis text-ink'}`}>{status}</p>
      <pre className="retro-well mt-1 min-h-[300px] flex-1 overflow-x-auto p-4 font-mono text-[13px] leading-[1.6]"><code>{code}</code></pre>
      <ul className="flex flex-wrap gap-1.5 px-1 pb-1 pt-2" aria-label={`${title} findings`}>
        {tags.map((tag) => <li key={tag} className="retro-tag">{tag}</li>)}
      </ul>
    </div>
  )
}

const code = (text: string) => <code className="bg-window px-1 font-mono text-[14px]">{text}</code>

const rationale: { title: string; body: React.ReactNode }[] = [
  { title: 'The bug', body: <>The response stores each value in {code('seen')} before looking up its complement, so an element can pair with itself. {code('find_pair([3, 2, 4], 6)')} returns {code('[0, 0]')} instead of {code('[1, 2]')}. It looks right on most inputs, which is why it&apos;s easy to approve.</> },
  { title: 'The fix', body: <>Look up the complement first, then record the current value. That&apos;s a one-line reorder: complexity stays O(N) time and O(N) space, and duplicates like {code('[3, 3], 6')} now return {code('[0, 1]')}.</> },
  { title: 'Tests', body: <>Target equal to twice an element {code('[3, 2, 4] → 6')}, duplicates {code('[3, 3] → 6')}, no solution {code('[1, 2] → 7')}, empty input, and negatives {code('[-1, 4] → 3')}. The original fails the first two.</> },
]

export default function Page() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b-2 border-ink bg-window shadow-[inset_0_2px_0_#fff]">
        <nav aria-label="Primary navigation" className={`${container} flex items-center justify-between gap-3 py-2`}>
          <a href="#overview" className="retro-key min-h-9! px-3! font-mono" aria-label="Nibru, home"><span className="text-titlebar">NIBRU</span><span aria-hidden="true">/</span>ENG</a>
          <ul className="hidden items-center gap-0.5 wide:flex">
            {navItems.map(([id, label]) => <li key={id}><a href={`#${id}`} className="block px-2 py-1.5 font-mono text-xs uppercase tracking-wide no-underline hover:bg-titlebar hover:text-white">{label}</a></li>)}
          </ul>
          <a href="#work" className="retro-key retro-key-primary min-h-9! whitespace-nowrap">See my work <ArrowUpRight className="size-4" aria-hidden="true" /></a>
        </nav>
      </header>

      <main>
        <section id="overview" aria-labelledby="hero-title" className="scroll-mt-20 pb-12 pt-8 tab:pt-12">
          <div className={`${container} grid grid-cols-1 gap-6 tab:grid-cols-12 tab:gap-x-5`}>
            <div className="retro-window max-tab:mr-3 tab:col-span-8">
              <TitleBar>Nibru Kefyalew Tessema — Software Engineer</TitleBar>
              <div className="mt-1 bg-highlight px-5 py-7 xs:px-8 wide:px-10 wide:py-10">
                <p className="font-mono text-xs uppercase tracking-[0.12em]">Nibru Kefyalew Tessema · Software Engineer</p>
                <h1 id="hero-title" className="mt-4 font-display text-[clamp(40px,10.5vw,62px)] font-extrabold uppercase leading-[0.92] tracking-[-0.035em] wide:text-[94px]">I build automation and AI <span className="text-accent">that helps companies grow.</span></h1>
                <p className="mt-6 max-w-[58ch] text-[17px] leading-[1.45]">Backend developer and AI code evaluator. I build <strong>APIs and data pipelines</strong>, I know where <strong>LLM output</strong> breaks, and I&apos;m now building the <strong>lead generation and AI tools</strong> that take products to market.</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="#work" className="retro-key retro-key-primary">See my work <ArrowUpRight className="size-4" aria-hidden="true" /></a>
                  <a href={RESUME_PATH} download className="retro-key"><ArrowDownToLine className="size-4" aria-hidden="true" /> Download resume</a>
                </div>
              </div>
            </div>

            <div className="retro-window self-start max-tab:ml-3 tab:col-span-4 tab:mt-14">
              <TitleBar>Quick facts</TitleBar>
              <div className="p-2">
                <dl className="retro-well grid grid-cols-2 gap-x-4 gap-y-5 bg-black! px-4 py-5 text-white tab:grid-cols-1">
                  {facts.map(([value, label, sub]) => <div key={label} className="flex flex-col"><dt className="order-2 mt-1 text-sm">{label}</dt><dd className="order-1 font-display text-3xl font-extrabold text-highlight">{value}</dd><dd className="order-3 font-mono text-xs text-[#c8c8c8]">{sub}</dd></div>)}
                </dl>
                <p className="mt-2 flex items-center justify-between px-1 font-mono text-xs"><span>Adama, Ethiopia</span><span>remote-ready</span></p>
              </div>
            </div>

            <p className="retro-pattern-pink flex items-center gap-3 border-2 border-ink px-4 py-3 font-mono text-sm font-medium uppercase tracking-wide shadow-[5px_5px_0_#000] tab:col-span-11 tab:col-start-2">
              <span className="retro-ticker-arrow" aria-hidden="true">►</span>
              <span className="bg-emphasis px-1">Open to AI &amp; GTM engineering roles · Jan 2027</span>
            </p>
          </div>
        </section>

        <section id="about" aria-labelledby="about-title" className="scroll-mt-20 py-12">
          <div className={`${container} grid grid-cols-1 gap-6 tab:grid-cols-12`}>
            <div className="retro-window max-tab:mr-3 tab:col-span-8 tab:row-start-1 wide:col-start-2">
              <TitleBar>About — README.txt</TitleBar>
              <div className="retro-well mt-1 px-5 py-6 xs:px-8">
                <p className="font-mono text-xs uppercase tracking-[0.12em]">02 · About</p>
                <h2 id="about-title" className="mt-2 max-w-[22ch] font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] tab:text-[40px]">Engineer first. Now learning to build for growth.</h2>
                <p className="mt-4 max-w-[60ch]">I study Software Engineering at Adama Science and Technology University and work as a backend developer at Intertechub. Through A2SV I solved 500+ algorithm problems and mentored peers, and as a freelancer I evaluate AI-generated code for model training. Now I&apos;m learning GTM engineering by building it: LeadHunter finds and qualifies B2B leads, and next is an AI product for e-commerce brands.</p>
              </div>
            </div>
            <div className="retro-window z-10 self-start max-tab:ml-3 tab:col-span-4 tab:col-start-9 tab:row-start-1 tab:mt-28">
              <TitleBar>How I work</TitleBar>
              <ol className="grid gap-1 p-1">
                {[['Build', 'APIs, data pipelines, LLM features'], ['Measure', 'Evals and metrics, not vibes'], ['Grow', 'Automation that drives revenue']].map(([title, body], index) => <li key={title} className="retro-well flex items-start gap-3 px-3 py-3"><span className="flex size-8 shrink-0 items-center justify-center bg-titlebar font-mono text-sm font-medium text-white">0{index + 1}</span><span><span className="block font-bold">{title}</span><span className="block text-[15px]">{body}</span></span></li>)}
              </ol>
            </div>
          </div>
        </section>

        <section id="work" aria-labelledby="work-title" className="scroll-mt-20 pt-12">
          <div className={container}>
            <SectionHeading id="work-title" number="03 · Work" title="What I’m building" intro="Learning GTM engineering by building real tools, then the product they will sell." />
            <div className="grid grid-cols-1 gap-8 tab:grid-cols-12">
              {nowBuilding.map(({ status, title, body, tags }, index) => (
                <article key={title} className={`retro-window ${index === 0 ? 'max-tab:mr-3 tab:col-span-11 wide:col-span-9' : 'max-tab:ml-3 tab:col-span-10 tab:col-start-3 wide:col-span-8 wide:col-start-5'}`}>
                  <TitleBar>{index === 0 ? 'Featured project' : 'Next project'}</TitleBar>
                  <div className="mt-1 grid gap-1 wide:grid-cols-[1fr_250px]">
                    <div className="retro-well px-5 py-5">
                      <p className={`inline-block px-2 py-0.5 font-mono text-xs font-medium uppercase tracking-wide ${index === 0 ? 'bg-desktop text-white' : 'bg-accent text-white'}`}>{status}</p>
                      <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-[-0.01em]">{title}</h3>
                      <p className="mt-3 max-w-[62ch]">{body}</p>
                    </div>
                    <div className="px-3 py-3">
                      <h4 className="font-mono text-xs font-medium uppercase tracking-wide">Stack</h4>
                      <ul className="mt-2 flex flex-wrap gap-1.5">{tags.map(tag => <li key={tag} className="retro-tag">{tag}</li>)}</ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div id="projects" className="mt-14 scroll-mt-20 border-y-2 border-ink bg-desktop py-10">
            <div className={container}>
              <h3 className="inline-block border-2 border-ink bg-white px-3 py-1 font-mono text-sm font-medium uppercase tracking-wide shadow-[4px_4px_0_#000]">Other projects</h3>
              <div className="mt-6 grid gap-6 xs:grid-cols-2 wide:grid-cols-4">
                {projects.map(({ title, body, tags, url }, index) => (
                  <article key={title} className="retro-window flex flex-col">
                    <TitleBar>{`Project ${String(index + 1).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')}`}</TitleBar>
                    <div className="retro-well mt-1 flex flex-1 flex-col px-4 py-4">
                      <h4 className="font-display text-lg font-extrabold leading-snug">{title}</h4>
                      <p className="mt-2 flex-1 text-[15px]">{body}</p>
                      <ul className="mt-4 flex flex-wrap gap-1.5">{tags.map(tag => <li key={tag} className="retro-tag">{tag}</li>)}</ul>
                    </div>
                    <div className="px-1 pb-1 pt-2">
                      {url
                        ? <a href={url} target="_blank" rel="noreferrer" className="retro-key min-h-9! w-full">View repo<span className="sr-only">: {title} (opens in a new tab)</span> <ArrowUpRight className="size-4" aria-hidden="true" /></a>
                        : <p className="px-2 py-2 text-center font-mono text-xs uppercase tracking-wide">Private repo</p>}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="evaluation" aria-labelledby="eval-title" className="scroll-mt-20 py-12 tab:py-16">
          <div className={container}>
            <SectionHeading id="eval-title" number="04 · Evals" title="How I evaluate LLM-generated code" intro="A typical review: find the bug, prove it with a failing test, then write the fix and the rationale." />
            <div className="retro-window">
              <TitleBar>Code review — two_sum.py</TitleBar>
              <p className="retro-well mt-1 px-4 py-3 font-mono text-[13px]"><strong>Task:</strong> Return the indices of two different elements that sum to target, in O(N).</p>
              <div className="grid grid-cols-1 gap-6 p-3 wide:grid-cols-2">
                <CodeWindow title="model_response.py" status="Fail · 3/5 tests" pass={false} code={failedCode} tags={['Element pairs with itself', '[3, 2, 4], 6 → [0, 0]', 'Order-of-operations bug']} />
                <CodeWindow title="corrected.py" status="Pass · 5/5 tests" pass code={goldCode} tags={['O(N) time, O(N) space', 'Type hints', 'Handles duplicates']} />
              </div>
              <details className="group m-1 mt-0" open>
                <summary className="retro-key w-full cursor-pointer list-none justify-between! [&::-webkit-details-marker]:hidden">Rationale <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden="true" /></summary>
                <ol className="mt-1 grid gap-3 p-2 wide:grid-cols-3">
                  {rationale.map(({ title, body }, index) => (
                    <li key={title} className="retro-well px-4 py-4">
                      <div className="flex items-center gap-3"><span className="flex size-8 shrink-0 items-center justify-center bg-titlebar font-mono text-sm font-medium text-white">0{index + 1}</span><h3 className="font-bold">{title}</h3></div>
                      <div className="retro-progress retro-well mt-3" aria-hidden="true">{[0, 1, 2].map(step => <span key={step} data-off={step > index ? '' : undefined} />)}</div>
                      <p className="mt-3 text-[15px]">{body}</p>
                    </li>
                  ))}
                </ol>
              </details>
            </div>
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-title" className="scroll-mt-20 py-12">
          <div className={container}>
            <SectionHeading id="experience-title" number="05 · Experience" title="Where I’ve worked" />
            <div className="retro-window">
              <TitleBar>Experience &amp; education</TitleBar>
              <ul className="mt-1 grid gap-1">
                {experience.map(({ period, company, role, body }) => (
                  <li key={company} className="retro-well grid gap-x-6 gap-y-1 px-4 py-4 wide:grid-cols-[150px_280px_1fr] wide:items-baseline">
                    <span className="font-mono text-xs uppercase tracking-wide">{period}</span>
                    <div><h3 className="font-display text-xl font-extrabold leading-tight">{company}</h3><p className="font-mono text-xs font-medium uppercase tracking-wide text-accent">{role}</p></div>
                    <p className="mt-1 text-[15px] wide:mt-0">{body}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 tab:grid-cols-12">
              <div className="retro-window max-tab:mr-3 tab:col-span-7">
                <TitleBar>Where I work from</TitleBar>
                <div className="mt-1"><GlobalContactMap /></div>
              </div>
              <div className="retro-window self-start max-tab:ml-3 tab:col-span-5 tab:mt-10">
                <TitleBar>Remote work</TitleBar>
                <div className="px-4 py-4">
                  <h3 className="font-display text-2xl font-extrabold leading-tight">One desk. Every timezone.</h3>
                  <p className="mt-2 text-[15px]">Comfortable working async with distributed teams: clear written updates, overlap where it matters, and work that doesn&apos;t wait on meetings.</p>
                  <dl className="mt-4 grid grid-cols-2 gap-2">
                    <div className="retro-well px-3 py-2"><dt className="font-mono text-xs uppercase">Base</dt><dd className="font-bold">Adama, ET</dd></div>
                    <div className="retro-well px-3 py-2"><dt className="font-mono text-xs uppercase">Coverage</dt><dd className="font-bold">UTC−08 → UTC+09</dd></div>
                  </dl>
                  <p className="mt-4 font-mono text-xs font-medium uppercase tracking-wide">● Open to remote roles</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-title" className="scroll-mt-20 border-y-2 border-ink bg-highlight py-12">
          <div className={container}>
            <SectionHeading id="skills-title" number="06 · Skills" title="What I work with" />
            <div className="grid gap-6 xs:grid-cols-2 wide:grid-cols-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="retro-window">
                  <TitleBar><h3>{category}</h3></TitleBar>
                  <ul className="flex flex-wrap gap-1.5 px-2 py-3">{items.map(skill => <li key={skill} className="retro-tag">{skill}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 py-16">
          <div className={`${container} grid grid-cols-1 tab:grid-cols-12`}>
            <div className="retro-window tab:col-span-10 tab:col-start-2 wide:col-span-7 wide:col-start-3">
              <TitleBar>Contact</TitleBar>
              <div className="px-5 py-6 xs:px-7">
                <p className="font-mono text-xs uppercase tracking-[0.12em]">07 · Contact</p>
                <h2 id="contact-title" className="mt-2 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] tab:text-[40px]">Building AI or GTM systems? Let&apos;s talk.</h2>
                <p className="mt-3 max-w-[60ch] text-[15px]">I&apos;m looking for AI engineering and GTM engineering roles starting January 2027. Based in Adama, Ethiopia; remote-first and comfortable across timezones.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={`mailto:${EMAIL}`} className="retro-key retro-key-primary"><Mail className="size-4" aria-hidden="true" /> {EMAIL}</a>
                  <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="retro-key">GitHub</a>
                  <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="retro-key">LinkedIn</a>
                  <a href={LEETCODE_URL} target="_blank" rel="noreferrer" className="retro-key">LeetCode</a>
                  <a href={CODEFORCES_URL} target="_blank" rel="noreferrer" className="retro-key">Codeforces</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-ink bg-window shadow-[inset_0_2px_0_#fff]">
        <div className={`${container} grid grid-cols-2 gap-x-6 gap-y-8 py-10 tab:grid-cols-4`}>
          {footerGroups.map(({ heading, links }) => (
            <nav key={heading} aria-label={heading}>
              <h2 className="flex items-center gap-2 font-bold"><Folder className="size-5 fill-highlight" aria-hidden="true" /> {heading}</h2>
              <ul className="mt-2 grid pl-7 text-[15px]">
                {links.map(([label, href, external]) => <li key={label}><a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} {...(href === RESUME_PATH ? { download: true } : {})} className="inline-block py-1.5 underline underline-offset-2">{label}</a></li>)}
              </ul>
            </nav>
          ))}
          <div className="col-span-2 font-mono text-xs leading-relaxed tab:col-span-1">
            <p>© 2026 Nibru Kefyalew Tessema</p>
            <p className="mt-1">Built with Next.js · hosted on GitHub Pages</p>
          </div>
        </div>
      </footer>
    </>
  )
}
