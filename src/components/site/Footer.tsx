export function Footer() {
  return (
    <footer className="relative mt-40">
      <div aria-hidden className="mx-auto h-px max-w-[1280px] bg-gradient-to-r from-transparent via-[color-mix(in_oklab,var(--ink)_18%,transparent)] to-transparent" />
      <div className="container-editorial py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <p className="font-display text-3xl md:text-5xl leading-[0.95] tracking-tight">
              Naveen Cherukuri<span className="text-[var(--color-primary)]">.</span>
            </p>
            <p className="mt-4 text-[var(--color-subtle)] max-w-sm text-[15px] leading-relaxed">
              UI/UX &amp; Product Designer based in India.
              <br />
              Designing meaningful digital experiences.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
            {[
              { label: "Email", href: "mailto:naveencherukuri07@gmail.com" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/naveen-cherukuri-20695a244" },
              { label: "Behance", href: "https://www.behance.net/NaveenCherukuri" },
              { label: "Resume", href: "/Naveen_Cherukuri_Resume.pdf" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") || l.href.endsWith(".pdf") ? "_blank" : undefined}
                rel="noreferrer"
                {...(l.label === "Resume" ? { download: "Naveen_Cherukuri_Resume.pdf" } : {})}
                className="group inline-flex items-center gap-2 text-[var(--color-subtle)] hover:text-[var(--ink)] transition-colors"
              >
                <span className="relative">
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[var(--color-primary)] transition-transform duration-500 group-hover:scale-x-100" />
                </span>
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">↗</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-[var(--color-subtle)]">
          <p>© 2026 Naveen Cherukuri. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}