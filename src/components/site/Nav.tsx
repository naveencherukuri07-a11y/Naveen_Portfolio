import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", hash: "home" },
  { label: "Projects", hash: "projects" },
  { label: "About", hash: "about" },
  { label: "Experience", hash: "experience" },
  { label: "Achievements", hash: "achievements" },
  { label: "Certifications", hash: "certifications" },
  { label: "Contact", hash: "contact" },
];

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 160);
      lastY = y;
      setScrolled(y > 24);

      // active section detection
      const ids = links.map((l) => l.hash).filter(Boolean);
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container-editorial pt-5">
        <nav
          className={`flex items-center justify-between gap-3 rounded-full px-3 py-2 glass-panel transition-all duration-500 ${
            scrolled
              ? "bg-white/[0.05] border-white/15 shadow-[0_18px_60px_-20px_rgba(0,0,0,0.55)]"
              : ""
          }`}
          style={{
            backdropFilter: scrolled ? "blur(20px) saturate(160%)" : undefined,
            WebkitBackdropFilter: scrolled ? "blur(20px) saturate(160%)" : undefined,
          }}
        >
          <Link to="/" className="flex items-center gap-2 pl-2 group">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-primary)] text-white font-display text-sm shadow-[0_8px_20px_-8px_rgba(109,93,251,0.6)]">N</span>
            <span className="font-display text-lg tracking-tight">Naveen<span className="text-[var(--color-primary)]">.</span></span>
          </Link>
          <ul className="hidden lg:flex items-center gap-0.5 text-sm">
            {links.map((l) => {
              const isActive = active === l.hash;
              return (
                <li key={l.label}>
                  <a
                    href={`/#${l.hash}`}
                    className={`relative px-3.5 py-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "text-[var(--ink)]"
                        : "text-[var(--color-subtle)] hover:text-[var(--ink)]"
                    }`}
                  >
                    {isActive && (
                      <span
                        aria-hidden
                        className="absolute inset-0 rounded-full bg-white/[0.06] shadow-[0_0_0_1px_rgba(255,255,255,0.6),0_10px_30px_-10px_rgba(109,93,251,0.35)]"
                      />
                    )}
                    <span className="relative">{l.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href="mailto:naveencherukuri07@gmail.com"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm text-white hover:shadow-[0_10px_30px_-8px_rgba(109,93,251,0.55)] transition-shadow"
            >
              Let's talk
              <span aria-hidden>→</span>
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="lg:hidden grid h-9 w-9 place-items-center rounded-full glass-chip"
            >
              <span className="sr-only">Menu</span>
              <div className="flex flex-col gap-1">
                <span className={`h-px w-4 bg-[var(--color-primary)] transition ${open ? "translate-y-[3px] rotate-45" : ""}`} />
                <span className={`h-px w-4 bg-[var(--color-primary)] transition ${open ? "-translate-y-[2px] -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </nav>
        {open && (
          <div className="lg:hidden mt-2 glass-panel rounded-3xl p-3 animate-reveal-up">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    onClick={() => setOpen(false)}
                    href={`/#${l.hash}`}
                    className="block rounded-2xl px-4 py-3 text-sm hover:bg-white/10/[0.05]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="mailto:naveencherukuri07@gmail.com" className="block rounded-2xl px-4 py-3 text-sm bg-[var(--color-primary)] text-white text-center">
                  Let's talk
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] transition-[width] duration-100"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}