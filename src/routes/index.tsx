import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, ScrollProgress } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CursorGlow } from "@/components/site/CursorGlow";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import apostrophe from "@/assets/apostrophe.png.asset.json";
import grapevine from "@/assets/grapevine.png.asset.json";
import portrait from "@/assets/naveen-portrait.png.asset.json";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative overflow-x-clip bg-[var(--color-background)] text-[var(--ink)]">
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Philosophy />
      <Skills />
      <Tools />
      <Experience />
      <Achievements />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

function Hero() {
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 });
  useEffect(() => {
    const onMove = (e: MouseEvent) =>
      setPos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home" className="relative pt-36 md:pt-44 pb-24 md:pb-32">
      {/* Ambient light rays + soft mesh */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-[8%] -left-32 h-[560px] w-[560px] rounded-full blur-3xl opacity-70 animate-float-slow"
          style={{ background: "radial-gradient(closest-side, rgba(109,93,251,0.28), transparent 70%)" }}
        />
        <div
          className="absolute top-[35%] right-[-140px] h-[500px] w-[500px] rounded-full blur-3xl opacity-70 animate-float-slower"
          style={{ background: "radial-gradient(closest-side, rgba(139,92,246,0.22), transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-120px] left-[35%] h-[420px] w-[420px] rounded-full blur-3xl opacity-50 animate-float-slow"
          style={{ background: "radial-gradient(closest-side, rgba(167,139,250,0.22), transparent 70%)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(600px circle at ${pos.x * 100}% ${pos.y * 100}%, rgba(109,93,251,0.07), transparent 40%)`,
            transition: "background 300ms ease-out",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left — editorial */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full glass-chip px-4 py-2 text-xs text-[var(--color-subtle)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for Full-time Opportunities
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 font-display font-medium tracking-[-0.03em] text-[clamp(2.6rem,6.4vw,5rem)] leading-[0.98] text-balance">
                Designing meaningful{" "}
                <span className="italic text-[var(--color-primary)]">digital</span> experiences{" "}
                <span className="block">that people love.</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-[17px] md:text-[18px] text-[var(--color-subtle)] leading-[1.7]">
                I design intuitive digital products through research, strategy, interaction design
                and visual storytelling — creating simple experiences for complex problems.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <MagneticButton href="#projects">
                  View Projects
                  <span aria-hidden>→</span>
                </MagneticButton>
                <MagneticButton
                  href="/Naveen_Cherukuri_Resume.pdf"
                  download="Naveen_Cherukuri_Resume.pdf"
                >
                  Download Resume
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M12 3v12" />
                    <path d="m7 10 5 5 5-5" />
                    <path d="M5 21h14" />
                  </svg>
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={460}>
              <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {[
                  { k: "2+", v: "Years crafting" },
                  { k: "10+", v: "Products shipped" },
                  { k: "6+", v: "Case studies" },
                  { k: "100%", v: "User-first" },
                ].map((s) => (
                  <div key={s.v} className="border-t border-[color-mix(in_oklab,var(--ink)_10%,transparent)] pt-4">
                    <div className="font-display text-3xl md:text-4xl">{s.k}</div>
                    <div className="text-[13px] text-[var(--color-subtle)] mt-1">{s.v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — portrait composition */}
          <div className="lg:col-span-5">
            <HeroPortrait />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroPortrait() {
  return (
    <Reveal delay={160}>
      <div className="relative mx-auto w-full max-w-[440px] aspect-[3/4]">
        {/* Glow behind */}
        <div
          aria-hidden
          className="absolute -inset-10 rounded-[48px] blur-3xl opacity-80"
          style={{
            background:
              "conic-gradient(from 140deg at 50% 50%, rgba(109,93,251,0.35), rgba(139,92,246,0.15), rgba(167,139,250,0.3), rgba(109,93,251,0.35))",
          }}
        />
        {/* Portrait card */}
        <div className="absolute inset-0 rounded-[36px] overflow-hidden border border-white/10 shadow-[0_40px_120px_-40px_rgba(17,24,39,0.35)]">
          <img
            src={portrait.url}
            alt="Naveen Cherukuri portrait"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </Reveal>
  );
}

function Marquee() {
  const words = ["Research", "Strategy", "Interaction", "Systems", "Prototype", "Craft", "Storytelling", "Ship"];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.04] backdrop-blur-md py-6 mt-16 md:mt-24">
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {[...words, ...words, ...words].map((w, i) => (
          <span key={i} className="font-display italic text-3xl md:text-5xl text-[var(--ink)]/80">
            {w} <span className="text-[var(--color-primary)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
}) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--color-subtle)]">
          <span className="h-px w-8 bg-[var(--color-primary)]" />
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.02] tracking-[-0.02em] text-balance">
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={160}>
          <p className="mt-5 text-lg text-[var(--color-subtle)] max-w-2xl">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}

function Projects() {
  const projects = [
    {
      slug: "grapevine",
      number: "01",
      title: "Grapevine",
      kicker: "Fashion E-commerce Website",
      description:
        "A premium fashion e-commerce experience focused on improving product discovery, user confidence and seamless shopping for women's fashion accessories.",
      duration: "6 Weeks",
      role: "UI/UX Designer",
      tools: ["Figma", "FigJam", "Photoshop"],
      cover: grapevine.url,
      accent: "from-violet-100 to-purple-100",
    },
    {
      slug: "apostrophe-co",
      number: "02",
      title: "Apostrophe Co.",
      kicker: "Travel Booking Mobile App",
      description:
        "A mobile-first travel booking experience that simplifies travel discovery, booking and trip planning through user-centered design.",
      duration: "4 Weeks",
      role: "UI/UX Designer",
      tools: ["Figma", "FigJam"],
      cover: apostrophe.url,
      accent: "from-rose-100 to-red-100",
    },
  ];
  return (
    <section id="projects" className="container-editorial pt-28 md:pt-40">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Featured <span className="italic text-[var(--color-primary)]">case studies</span>.
            </>
          }
          lead="A closer look at recent projects — from research and strategy to systems and shipped interfaces."
        />
        <Reveal delay={120}>
          <a
            href="https://www.behance.net/NaveenCherukuri"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[var(--color-subtle)] hover:text-[var(--ink)] inline-flex items-center gap-2"
          >
            All work on Behance <span aria-hidden>↗</span>
          </a>
        </Reveal>
      </div>

      <div className="mt-16 space-y-24">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 80}>
            <Link
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group block"
              data-cursor="project"
            >
              <article className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className={`md:col-span-7 order-2 md:order-${i % 2 === 0 ? 1 : 2}`}>
                  <div data-cursor="image" className={`relative overflow-hidden rounded-[32px] bg-gradient-to-br ${p.accent} border border-white/10 transition-all duration-300 ease-out will-change-transform group-hover:-translate-y-1.5 group-hover:shadow-[0_40px_100px_-30px_rgba(139,92,246,0.45)] shadow-[0_20px_80px_-40px_rgba(17,24,39,0.18)]`}>
                    <div className="flex items-center justify-center rounded-[32px] p-4 sm:p-6 md:p-8 min-h-[280px] sm:min-h-[360px] md:min-h-[440px]">
                      <img
                        src={p.cover}
                        alt={`${p.title} — ${p.kicker}`}
                        className="max-h-full max-w-full h-auto w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute top-4 left-4 rounded-full glass-chip px-3 py-1 text-xs font-medium">
                      Case Study · {p.number}
                    </div>
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.6)" }}
                    />
                  </div>
                </div>
                <div className={`md:col-span-5 order-1 md:order-${i % 2 === 0 ? 2 : 1}`}>
                  <div className="text-xs text-[var(--color-subtle)] tracking-widest uppercase">
                    {p.kicker}
                  </div>
                  <h3 className="mt-3 font-display text-4xl md:text-6xl leading-[1] tracking-[-0.02em]">
                    {p.title}
                  </h3>
                  <p className="mt-5 text-[var(--color-subtle)] leading-relaxed">
                    {p.description}
                  </p>
                  <dl className="mt-8 grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <dt className="text-[var(--color-subtle)] text-xs uppercase tracking-widest">Duration</dt>
                      <dd className="mt-1">{p.duration}</dd>
                    </div>
                    <div>
                      <dt className="text-[var(--color-subtle)] text-xs uppercase tracking-widest">Role</dt>
                      <dd className="mt-1">{p.role}</dd>
                    </div>
                    <div>
                      <dt className="text-[var(--color-subtle)] text-xs uppercase tracking-widest">Tools</dt>
                      <dd className="mt-1">{p.tools.join(", ")}</dd>
                    </div>
                  </dl>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)]">
                    <span className="relative">
                      Read case study
                      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[var(--color-primary)] transition-transform duration-500 group-hover:scale-x-100" />
                    </span>
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </article>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="container-editorial pt-32 md:pt-48">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <SectionHeading eyebrow="About" title={<>Hello, I'm <br /><span className="italic text-[var(--color-primary)]">Naveen</span>.</>} />
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <Reveal>
            <p className="font-display text-2xl md:text-3xl leading-[1.35] text-balance">
              I'm a UI/UX Designer passionate about solving real-world problems through
              user-centered design.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-[var(--color-subtle)] text-lg leading-relaxed max-w-xl">
              I enjoy transforming ideas into intuitive digital experiences by combining research,
              strategy, interaction design and beautiful interfaces.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                {
                  k: "India",
                  v: "Based in",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  ),
                },
                {
                  k: "Product & UX",
                  v: "Focus",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>
                  ),
                },
                {
                  k: "Full-time",
                  v: "Open to",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                  ),
                },
              ].map((s) => (
                <div key={s.v} className="glass-card rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-20px_rgba(109,93,251,0.35)]">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/[0.06] border border-white/10 text-[var(--color-primary)]">
                      {s.icon}
                    </span>
                    <div className="text-[11px] uppercase tracking-widest text-[var(--color-subtle)]">{s.v}</div>
                  </div>
                  <div className="mt-3 font-display text-lg md:text-xl text-[var(--ink)]">{s.k}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="container-editorial pt-28 md:pt-40">
      <Reveal>
        <div className="relative rounded-[32px] glass-card p-10 md:p-20 overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-60"
            style={{ background: "radial-gradient(closest-side, rgba(109,93,251,0.28), transparent 70%)" }}
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full blur-3xl opacity-50"
            style={{ background: "radial-gradient(closest-side, rgba(139,92,246,0.24), transparent 70%)" }}
          />
          <div className="relative text-xs uppercase tracking-[0.2em] text-[var(--color-subtle)]">
            Design Philosophy
          </div>
          <p className="relative mt-6 font-display text-3xl md:text-6xl leading-[1.05] tracking-[-0.02em] text-balance">
            Good design is not decoration. It is{" "}
            <span className="italic text-[var(--color-primary)]">clarity</span>. Every interface
            should reduce friction, increase confidence and create memorable experiences.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function Skills() {
  const skills = [
    "UX Research", "User Interviews", "Competitive Analysis", "Information Architecture",
    "User Flows", "Wireframing", "Interaction Design", "Visual Design", "Design Systems",
    "Responsive Design", "Accessibility", "Usability Testing", "Design Thinking", "Problem Solving",
  ];
  return (
    <section className="container-editorial pt-28 md:pt-40">
      <SectionHeading eyebrow="Craft" title={<>Skills & <span className="italic text-[var(--color-primary)]">disciplines</span>.</>} />
      <div className="mt-10 flex flex-wrap gap-2.5">
        {skills.map((s, i) => (
          <Reveal key={s} delay={i * 30}>
            <span className="group relative inline-flex rounded-full glass-chip px-4 py-2 text-sm text-[var(--ink)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-16px_rgba(109,93,251,0.45)] cursor-default overflow-hidden">
              <span
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(120deg, rgba(109,93,251,0.14), rgba(139,92,246,0.10))" }}
              />
              <span className="relative">{s}</span>
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Tools() {
  const tools: { name: string; icon: string }[] = [
    { name: "Figma", icon: "◈" },
    { name: "FigJam", icon: "✎" },
    { name: "Photoshop", icon: "Ps" },
    { name: "Illustrator", icon: "Ai" },
    { name: "Canva", icon: "▲" },
    { name: "Framer", icon: "F" },
    { name: "HTML", icon: "</>" },
    { name: "CSS", icon: "#" },
    { name: "JavaScript", icon: "JS" },
    { name: "Power BI", icon: "◉" },
    { name: "Tableau", icon: "▨" },
  ];
  return (
    <section className="container-editorial pt-20">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--color-subtle)]">
        <span className="h-px w-8 bg-[var(--color-primary)]" /> Tools
      </div>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {tools.map((t, i) => (
          <Reveal key={t.name} delay={i * 40}>
            <div className="group glass-card rounded-2xl px-4 py-5 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(109,93,251,0.4)]">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.06] font-display text-base text-[var(--ink)] shadow-sm group-hover:text-[var(--color-primary)] transition-colors">
                {t.icon}
              </span>
              <span className="font-display text-lg text-[var(--ink)]">{t.name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const exp = [
    {
      role: "Data Visualization Intern",
      period: "Internship",
      bullets: ["Power BI dashboards", "Dashboard design systems", "Data analysis & reporting"],
    },
    {
      role: "Digital Marketing Intern",
      period: "Internship",
      bullets: ["SEO fundamentals", "Content strategy", "Social media campaigns"],
    },
  ];
  return (
    <section id="experience" className="container-editorial pt-28 md:pt-40">
      <SectionHeading eyebrow="Experience" title={<>A short <span className="italic text-[var(--color-primary)]">journey</span>, so far.</>} />
      <div className="relative mt-14 pl-6 md:pl-10">
        {/* Clean timeline line */}
        <div
          aria-hidden
          className="absolute left-1.5 md:left-3 top-2 bottom-2 w-px bg-white/10"
        />
        <div className="space-y-5">
          {exp.map((e, i) => (
            <Reveal key={e.role} delay={i * 80}>
              <div className="relative">
                {/* Minimal node */}
                <span
                  aria-hidden
                  className="absolute -left-[calc(1.5rem+1px)] md:-left-[calc(2.5rem+1px)] top-9 h-2 w-2 rounded-full bg-[var(--color-primary)]"
                />
                <div className="glass-card rounded-3xl p-6 md:p-8 group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_80px_-30px_rgba(17,24,39,0.2)]">
                  <div className="grid md:grid-cols-12 gap-4 items-start">
                    <div className="md:col-span-3">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1 text-[11px] uppercase tracking-widest text-[var(--color-subtle)] border border-white/10">
                        {e.period}
                      </div>
                    </div>
                    <div className="md:col-span-4">
                      <div className="flex items-center gap-3">
                        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/[0.06] border border-white/10 font-display text-lg text-[var(--ink)]">
                          {e.role.charAt(0)}
                        </span>
                        <h3 className="font-display text-xl md:text-2xl tracking-tight">{e.role}</h3>
                      </div>
                    </div>
                    <ul className="md:col-span-5 space-y-1.5 text-[var(--color-subtle)] text-[15px]">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 rounded-full bg-[var(--color-primary)]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const items = [
    { t: "Tableau Workshop", d: "Achievers Award", year: "2024", icon: "🏆" },
    { t: "Overall Score Competition", d: "Top Position", year: "2024", icon: "🥇" },
    { t: "Presentation Competition", d: "Top 4 Finalist", year: "2023", icon: "🎤" },
  ];
  return (
    <section id="achievements" className="container-editorial pt-28 md:pt-40">
      <SectionHeading eyebrow="Achievements" title={<>Small <span className="italic text-[var(--color-primary)]">wins</span>, quietly kept.</>} />
      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <Reveal key={it.t} delay={i * 80}>
            <div className="relative group h-full glass-card rounded-3xl p-9 md:p-10 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_80px_-25px_rgba(109,93,251,0.35)]">
              <div
                aria-hidden
                className="absolute -top-16 -right-10 h-40 w-40 rounded-full blur-3xl opacity-0 group-hover:opacity-90 transition-opacity duration-500"
                style={{ background: "radial-gradient(closest-side, rgba(109,93,251,0.35), transparent 70%)" }}
              />
              <div className="relative flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/[0.06] border border-white/10 text-2xl shadow-sm">
                  {it.icon}
                </span>
                <span className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-subtle)]">{it.year}</span>
              </div>
              <h3 className="relative mt-8 font-display text-2xl md:text-[26px] leading-tight tracking-[-0.01em]">{it.t}</h3>
              <p className="relative mt-3 text-[var(--color-subtle)] text-[15px] leading-relaxed">{it.d}</p>
              <div className="relative mt-8 flex items-center gap-2 text-xs text-[var(--color-subtle)]">
                <span className="font-display text-3xl text-[var(--color-primary)]/25 group-hover:text-[var(--color-primary)]/50 transition-colors">0{i + 1}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  const items = [
    { t: "Power BI Internship", org: "Data Visualization", date: "2024" },
    { t: "Digital Marketing Internship", org: "Marketing", date: "2024" },
    { t: "Tableau Workshop", org: "Data Analytics", date: "2024" },
    { t: "Tableau Achievers Award", org: "Recognition", date: "2024" },
    { t: "Code Spark India 2025", org: "National Program", date: "2025" },
  ];
  return (
    <section id="certifications" className="container-editorial pt-28 md:pt-40">
      <SectionHeading eyebrow="Certifications" title={<>Continuous <span className="italic text-[var(--color-primary)]">learning</span>.</>} />
      <div className="mt-12 grid md:grid-cols-2 gap-4">
        {items.map((it, i) => (
          <Reveal key={it.t} delay={i * 60}>
            <div className="group relative block glass-card rounded-3xl p-6 md:p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_-25px_rgba(109,93,251,0.35)]">
              <div
                aria-hidden
                className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full blur-3xl opacity-0 group-hover:opacity-80 transition-opacity duration-500"
                style={{ background: "radial-gradient(closest-side, rgba(109,93,251,0.30), transparent 70%)" }}
              />
              <div className="relative flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/[0.06] border border-white/10 shadow-sm">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                    <circle cx="12" cy="9" r="6" />
                    <path d="M8.5 14.5L7 22l5-3 5 3-1.5-7.5" />
                  </svg>
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-[var(--color-subtle)]">
                    <span>{it.org}</span>
                    <span aria-hidden>·</span>
                    <span>{it.date}</span>
                  </div>
                  <h3 className="mt-1.5 font-display text-xl md:text-2xl leading-tight">{it.t}</h3>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="container-editorial pt-28 md:pt-40">
      <SectionHeading eyebrow="Education" title={<>Foundations.</>} />
      <Reveal>
        <div className="mt-10 glass-card rounded-3xl p-8 md:p-12">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl md:text-4xl">Bachelor of Commerce — Computer Applications</h3>
              <p className="mt-2 text-[var(--color-subtle)]">Nalanda Degree College & PG Centre</p>
            </div>
            <div className="text-sm text-[var(--color-subtle)]">Undergraduate</div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="container-editorial pt-32 md:pt-48">
      <Reveal>
        <div className="relative overflow-hidden rounded-[32px] bg-[var(--color-primary)] text-white p-10 md:p-20">
          <div
            aria-hidden
            className="absolute -top-32 -left-24 h-[500px] w-[500px] rounded-full blur-3xl opacity-40"
            style={{ background: "radial-gradient(closest-side, #6D5DFB, transparent 70%)" }}
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -right-24 h-[500px] w-[500px] rounded-full blur-3xl opacity-40"
            style={{ background: "radial-gradient(closest-side, #8B5CF6, transparent 70%)" }}
          />
          <div className="relative grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6">
              <div className="text-xs uppercase tracking-[0.2em] text-white/60">Contact</div>
              <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.98] tracking-[-0.02em] text-balance">
                Let's build something{" "}
                <span className="italic text-[color-mix(in_oklab,#6D5DFB_60%,white)]">meaningful</span>.
              </h2>
              <p className="mt-6 max-w-xl text-white/70 text-lg leading-relaxed">
                I'm currently open to full-time product design opportunities and thoughtful
                collaborations. Say hello — I reply to every message.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="mailto:naveencherukuri07@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] text-[var(--ink)] px-6 py-3.5 text-sm font-medium hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.4)] transition-shadow"
                >
                  naveencherukuri07@gmail.com <span aria-hidden>→</span>
                </a>
                <a
                  href="tel:+919381137147"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-6 py-3.5 text-sm text-white hover:bg-white/10/10 transition-colors"
                >
                  +91 93811 37147
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                {[
                  { l: "LinkedIn", h: "https://www.linkedin.com/in/naveen-cherukuri-20695a244" },
                  { l: "Behance", h: "https://www.behance.net/NaveenCherukuri" },
                  { l: "Resume", h: "/Naveen_Cherukuri_Resume.pdf" },
                ].map((s) => (
                  <a
                    key={s.l}
                    href={s.h}
                    target={s.h.startsWith("http") || s.h.endsWith(".pdf") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 backdrop-blur px-5 py-4 hover:bg-white/10/12 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span>{s.l}</span>
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">↗</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Glass contact form */}
            <div className="lg:col-span-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  const name = String(data.get("name") || "");
                  const email = String(data.get("email") || "");
                  const msg = String(data.get("message") || "");
                  const body = encodeURIComponent(`Hi Naveen,\n\n${msg}\n\n— ${name} (${email})`);
                  window.location.href = `mailto:naveencherukuri07@gmail.com?subject=${encodeURIComponent(
                    `Hello from ${name}`,
                  )}&body=${body}`;
                }}
                className="relative rounded-3xl border border-white/20 bg-white/[0.06] backdrop-blur-xl p-6 md:p-8 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.5)]"
              >
                <div className="text-[11px] uppercase tracking-widest text-white/60">Say hello</div>
                <div className="mt-4 space-y-3">
                  <div>
                    <label htmlFor="c-name" className="sr-only">Name</label>
                    <input
                      id="c-name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:bg-white/10 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="sr-only">Email</label>
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      required
                      placeholder="Your email"
                      className="w-full rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:bg-white/10 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-msg" className="sr-only">Message</label>
                    <textarea
                      id="c-msg"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project…"
                      className="w-full rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:bg-white/10 transition resize-none"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-white/[0.04] text-[var(--ink)] px-6 py-3.5 text-sm font-medium hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.4)] transition-shadow"
                >
                  Send message <span aria-hidden>→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
