import { useRef, type AnchorHTMLAttributes, type ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  variant?: "primary" | "ghost" | "glass";
  children: ReactNode;
};

export function MagneticButton({ href, variant = "primary", children, className = "", ...rest }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.25}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };
  const base =
    "group/mb relative inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium will-change-transform overflow-hidden";
  const styles =
    variant === "primary"
      ? "bg-[var(--color-primary)] text-white hover:shadow-[0_20px_60px_-20px_rgba(109,93,251,0.55)]"
      : variant === "glass"
      ? "glass-chip text-[var(--ink)] hover:bg-white/10/[0.06] hover:shadow-[0_20px_60px_-20px_rgba(17,24,39,0.18)]"
      : "border border-[var(--color-border)] bg-white/[0.05] backdrop-blur hover:bg-white/10 text-[var(--ink)] hover:shadow-[0_20px_60px_-20px_rgba(17,24,39,0.18)]";
  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${base} ${styles} ${className}`}
      style={{ transition: "transform 400ms cubic-bezier(0.22,1,0.36,1), background-color 300ms, color 300ms, box-shadow 400ms" }}
      {...(rest as any)}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </a>
  );
}