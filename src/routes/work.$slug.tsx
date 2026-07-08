import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { Nav, ScrollProgress } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import apostrophe from "@/assets/apostrophe.png.asset.json";
import grapevine from "@/assets/grapevine.png.asset.json";

type Section = { heading: string; body: string };
type Case = {
  slug: string;
  number: string;
  title: string;
  kicker: string;
  description: string;
  cover: string;
  duration: string;
  role: string;
  tools: string[];
  overview: string;
  problem: string;
  goals: string[];
  sections: Section[];
  challenges: string;
  solutions: string;
  learnings: string;
  reflection: string;
  behance: string;
  next: { slug: string; title: string };
  accent: string;
};

const cases: Record<string, Case> = {
  grapevine: {
    slug: "grapevine",
    number: "01",
    title: "Grapevine",
    kicker: "Fashion E-commerce Website",
    description:
      "A premium fashion e-commerce experience focused on improving product discovery, user confidence and seamless shopping for women's fashion accessories.",
    cover: grapevine.url,
    duration: "6 Weeks",
    role: "UI/UX Designer",
    tools: ["Figma", "FigJam", "Photoshop"],
    overview:
      "Grapevine is a modern fashion e-commerce concept designed for a boutique headwear brand. The goal was to elevate the browsing experience with editorial storytelling, refined product discovery and a checkout that respects the user's time.",
    problem:
      "Users struggled with cluttered category pages, unclear sizing, low product confidence and a checkout that felt transactional rather than considered.",
    goals: [
      "Improve product discovery through clean IA and filters",
      "Increase confidence with rich product storytelling",
      "Reduce checkout friction on desktop and mobile",
      "Establish a scalable, modular design system",
    ],
    sections: [
      { heading: "Research", body: "Interviews with 6 shoppers and analysis of 4 competing fashion e-commerce brands to map expectations, pain points and delight opportunities." },
      { heading: "Competitive Analysis", body: "Benchmarked patterns across mid-to-premium brands to identify a gap: editorial-first storytelling combined with utilitarian shopping." },
      { heading: "User Persona", body: "Anchored decisions around a primary persona — a design-conscious woman, 24–35, who values curation, quality and story over volume." },
      { heading: "Empathy Map", body: "Mapped what users say, think, do and feel across discovery, evaluation and purchase to surface real motivations." },
      { heading: "Journey Map", body: "Charted a five-stage journey to expose emotional highs and lows across awareness, consideration, decision, checkout and post-purchase." },
      { heading: "Information Architecture", body: "Restructured navigation into Products, Story, Manufacturing and Packaging — reducing cognitive load and giving the brand voice room to breathe." },
      { heading: "User Flow", body: "Streamlined the flow from homepage to checkout in under five deliberate steps, with progressive disclosure of details." },
      { heading: "Low Fidelity Wireframes", body: "Explored composition, hierarchy and content density across every core template." },
      { heading: "High Fidelity UI", body: "Editorial layouts, generous whitespace, considered typography and refined product cards create a premium, unhurried feel." },
      { heading: "Design System", body: "Tokens for color, type, spacing and radii. Components built for scale — buttons, cards, forms, navigation and hero patterns." },
      { heading: "Responsive Design", body: "Layouts tuned across desktop, tablet and mobile with attention to touch targets and reading rhythm." },
      { heading: "Prototype", body: "A clickable Figma prototype validated key flows: browse → product → cart → checkout." },
    ],
    challenges:
      "Balancing editorial storytelling with utilitarian shopping requirements without either overwhelming the other.",
    solutions:
      "Introduced modular sections that let curators lead with story on category pages while keeping product cards clean, scannable and consistent.",
    learnings:
      "Great e-commerce design isn't just about pretty products — it is about designing confidence. Micro-interactions, trust markers and rhythm compound into a decisive experience.",
    reflection:
      "If I had more time, I would validate the checkout with usability testing and add saved-for-later, size-fit guides and reviews to further raise confidence.",
    behance: "https://www.behance.net/gallery/250123441/Grapevine-Fashion-E-commerce-UIUX-Case-Study",
    next: { slug: "apostrophe-co", title: "Apostrophe Co." },
    accent: "from-violet-100 to-purple-100",
  },
  "apostrophe-co": {
    slug: "apostrophe-co",
    number: "02",
    title: "Apostrophe Co.",
    kicker: "Travel Booking Mobile App",
    description:
      "A mobile-first travel booking experience that simplifies travel discovery, booking and trip planning through user-centered design.",
    cover: apostrophe.url,
    duration: "4 Weeks",
    role: "UI/UX Designer",
    tools: ["Figma", "FigJam"],
    overview:
      "Apostrophe Co. is a travel booking concept built for explorers who want fewer taps between inspiration and booking. The design prioritizes calm, confidence and clarity.",
    problem:
      "Travel apps often overwhelm with dense information, unclear pricing and fragmented flows across stays, experiences and flights.",
    goals: [
      "Simplify discovery across stays, experiences and flights",
      "Reduce booking friction to under a minute",
      "Build trust with clear pricing and social proof",
      "Deliver a distinctive, warm visual identity",
    ],
    sections: [
      { heading: "Research", body: "Interviewed 5 frequent leisure travelers to understand friction points in discovery, planning and booking." },
      { heading: "Competitive Analysis", body: "Analyzed leading travel apps to identify overload patterns and opportunities for restraint." },
      { heading: "User Persona", body: "Designed around a primary persona — a young explorer, 22–30, who values curation, price transparency and speed." },
      { heading: "Journey Map", body: "Mapped the arc from inspiration to booking to trip day to reveal moments to delight and moments to remove." },
      { heading: "Information Architecture", body: "Four clear tabs — Home, Explore, Bookings, Profile — with a hero home experience that leads with intent." },
      { heading: "User Flow", body: "A three-step booking flow: pick where and when → confirm details → pay. Everything else supports these three." },
      { heading: "Wireframes", body: "Low-fidelity screens explored density, tab structure and the on-screen keyboard experience." },
      { heading: "Design System", body: "Warm red accent, soft neutrals, rounded cards and consistent iconography establish a friendly, confident tone." },
      { heading: "UI Showcase", body: "Editorial hero, category chips, featured stays, deals and a persistent bottom nav — designed for one-thumb use." },
      { heading: "Prototype", body: "Clickable Figma prototype covering the primary discovery and booking flows." },
    ],
    challenges:
      "Fitting rich travel information onto a small screen without losing the calm, editorial tone.",
    solutions:
      "Progressive disclosure, generous negative space and a strong color hierarchy keep the interface breathable while surfacing what matters.",
    learnings:
      "For mobile-first products, restraint is the design. Every visible element must earn its space.",
    reflection:
      "Next iteration would include saved trips, group booking, and a live itinerary view for trip day.",
    behance: "https://www.behance.net/gallery/251428237/Apostrophe-Co-Travel-Booking-App-UIUX-Case-Study",
    next: { slug: "grapevine", title: "Grapevine" },
    accent: "from-rose-100 to-red-100",
  },
};

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const c = cases[params.slug];
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.title} — ${loaderData.kicker} · Naveen Cherukuri` },
            { name: "description", content: loaderData.description },
            { property: "og:title", content: `${loaderData.title} — Case Study` },
            { property: "og:description", content: loaderData.description },
            { property: "og:type", content: "article" },
            { property: "og:image", content: loaderData.cover },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:image", content: loaderData.cover },
          ],
        }
      : {},
  component: CasePage,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center">
        <p className="font-display text-3xl">Case study not found</p>
        <Link to="/" className="mt-4 inline-block text-[var(--color-primary)] underline">Back home</Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => {
    const r = useRouter();
    return (
      <div className="min-h-screen grid place-items-center">
        <button
          onClick={() => { r.invalidate(); reset(); }}
          className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-white"
        >
          Try again
        </button>
      </div>
    );
  },
});

function CasePage() {
  const c = Route.useLoaderData();
  return (
    <div className="relative bg-[var(--color-background)] text-[var(--ink)]">
      <ScrollProgress />
      <Nav />

      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-12">
        <div className="container-editorial">
          <Reveal>
            <Link to="/" className="text-sm text-[var(--color-subtle)] hover:text-[var(--ink)] inline-flex items-center gap-2">
              <span aria-hidden>←</span> Back to work
            </Link>
          </Reveal>
          <Reveal delay={60}>
            <div className="mt-8 text-xs uppercase tracking-[0.2em] text-[var(--color-subtle)]">
              Case Study · {c.number} · {c.kicker}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-4 font-display text-6xl md:text-9xl leading-[0.92] tracking-[-0.03em] text-balance">
              {c.title}<span className="text-[var(--color-primary)]">.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg text-[var(--color-subtle)] leading-relaxed">
              {c.description}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[var(--color-border)] pt-8">
              <Meta label="Duration" value={c.duration} />
              <Meta label="Role" value={c.role} />
              <Meta label="Tools" value={c.tools.join(", ")} />
              <Meta label="Year" value="2025" />
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Cover */}
      <section className="container-editorial">
        <Reveal>
          <div className={`rounded-[32px] border border-[var(--color-border)] bg-gradient-to-br ${c.accent} flex items-center justify-center p-4 sm:p-8 md:p-12`}>
            <img
              src={c.cover}
              alt={`${c.title} cover`}
              className="max-w-full h-auto object-contain"
            />
          </div>
        </Reveal>
      </section>

      {/* Overview / Problem / Goals */}
      <section className="container-editorial pt-20 md:pt-32">
        <div className="grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-subtle)]">Overview</div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight">The context.</h2>
          </Reveal>
          <div className="md:col-span-7 md:col-start-6 space-y-10">
            <Reveal>
              <p className="text-lg text-[var(--color-subtle)] leading-relaxed">{c.overview}</p>
            </Reveal>
            <Reveal delay={80}>
              <div>
                <h3 className="font-display text-2xl">Problem</h3>
                <p className="mt-3 text-[var(--color-subtle)] leading-relaxed">{c.problem}</p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div>
                <h3 className="font-display text-2xl">Goals</h3>
                <ul className="mt-4 space-y-2">
                  {c.goals.map((g: string, i: number) => (
                    <li key={g} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                      <span className="text-[var(--color-subtle)]"><span className="text-[var(--ink)] tabular-nums mr-2">0{i + 1}</span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process sections */}
      <section className="container-editorial pt-24 md:pt-32">
        <Reveal>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--color-subtle)]">
            <span className="h-px w-8 bg-[var(--color-primary)]" /> Process
          </div>
          <h2 className="mt-5 font-display text-4xl md:text-6xl tracking-[-0.02em]">
            From <span className="italic text-[var(--color-primary)]">insight</span> to interface.
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-[var(--color-border)]">
          {c.sections.map((s: Section, i: number) => (
            <Reveal key={s.heading} delay={i * 40}>
              <div className="grid md:grid-cols-12 gap-6 py-8">
                <div className="md:col-span-2 text-sm tabular-nums text-[var(--color-subtle)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl md:text-3xl">{s.heading}</h3>
                </div>
                <p className="md:col-span-6 text-[var(--color-subtle)] leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Challenges / Solutions / Learnings / Reflection */}
      <section className="container-editorial pt-24 md:pt-32">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { t: "Challenges", d: c.challenges },
            { t: "Solutions", d: c.solutions },
            { t: "Key Learnings", d: c.learnings },
            { t: "Reflection", d: c.reflection },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 60}>
              <div className="h-full rounded-3xl border border-[var(--color-border)] bg-white/[0.04] p-8 md:p-10 hover-lift">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)]">{b.t}</div>
                <p className="mt-4 font-display text-xl md:text-2xl leading-snug">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* External case study */}
      <section className="container-editorial pt-20">
        <Reveal>
          <a
            href={c.behance}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-3xl border border-[var(--color-border)] bg-white/[0.04] p-8 md:p-10 hover-lift"
          >
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-subtle)]">View on Behance</div>
              <p className="mt-3 font-display text-2xl md:text-3xl">Full case study, images and prototype</p>
            </div>
            <span aria-hidden className="text-2xl transition-transform group-hover:translate-x-1">↗</span>
          </a>
        </Reveal>
      </section>

      {/* Next project */}
      <section className="container-editorial pt-24 md:pt-32">
        <Reveal>
          <Link to="/work/$slug" params={{ slug: c.next.slug }} className="group block">
            <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-primary)] text-white p-10 md:p-16">
              <div className="text-xs uppercase tracking-[0.2em] text-white/60">Next project</div>
              <div className="mt-4 flex items-baseline justify-between gap-8 flex-wrap">
                <h3 className="font-display text-5xl md:text-7xl tracking-[-0.02em]">{c.next.title}</h3>
                <span aria-hidden className="text-3xl transition-transform group-hover:translate-x-2">→</span>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widest text-[var(--color-subtle)]">{label}</dt>
      <dd className="mt-1.5 text-sm">{value}</dd>
    </div>
  );
}