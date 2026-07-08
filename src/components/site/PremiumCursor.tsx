import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "hover" | "button" | "project" | "image" | "text";

export function PremiumCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<CursorMode>("default");
  const [label, setLabel] = useState<string>("");
  const [visible, setVisible] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Skip on touch/coarse devices
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let dx = mx, dy = my;
    let rx = mx, ry = my;
    // Spring state for ring
    let vx = 0, vy = 0;
    let raf = 0;
    let magnetX = 0, magnetY = 0;
    let angle = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visibleRef.current) setVisibleTrue();
    };

    // Avoid setState in RAF: track visible via ref
    const visibleRef = { current: false };
    const setVisibleTrue = () => {
      visibleRef.current = true;
      setVisible(true);
    };

    const loop = () => {
      // Dot: very responsive
      dx += (mx + magnetX - dx) * 0.35;
      dy += (my + magnetY - dy) * 0.35;
      // Ring: spring physics with delay
      const stiffness = 0.14;
      const damping = 0.72;
      const ax = (mx + magnetX - rx) * stiffness;
      const ay = (my + magnetY - ry) * stiffness;
      vx = (vx + ax) * damping;
      vy = (vy + ay) * damping;
      rx += vx;
      ry += vy;

      dot.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;

      // Rotation angle based on velocity for label tilt
      const speed = Math.hypot(vx, vy);
      if (speed > 0.2) {
        const target = Math.atan2(vy, vx) * (180 / Math.PI);
        // Ease angle
        const diff = ((target - angle + 540) % 360) - 180;
        angle += diff * 0.08;
      }

      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      if (labelRef.current) {
        labelRef.current.style.transform = `rotate(${angle * 0.15}deg)`;
      }

      raf = requestAnimationFrame(loop);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const el =
        target.closest<HTMLElement>(
          "[data-cursor], a, button, [role='button'], input, textarea, select, label"
        );

      if (!el) {
        // Heading text hover
        const heading = target.closest<HTMLElement>("h1, h2, h3");
        if (heading) {
          setMode("text");
          setLabel("");
          magnetX = 0; magnetY = 0;
          return;
        }
        setMode("default");
        setLabel("");
        magnetX = 0; magnetY = 0;
        return;
      }

      const type = el.dataset.cursor;
      if (type === "project") {
        setMode("project");
        setLabel("Explore →");
      } else if (type === "image") {
        setMode("image");
        setLabel("View Case Study →");
      } else if (el.tagName === "BUTTON" || type === "button" || el.getAttribute("role") === "button") {
        setMode("button");
        setLabel("");
        // magnetic attraction
        attachMagnet(el);
        return;
      } else {
        setMode("hover");
        setLabel("");
      }
      magnetX = 0; magnetY = 0;
    };

    const attachMagnet = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dxm = cx - mx;
      const dym = cy - my;
      const dist = Math.hypot(dxm, dym);
      const max = Math.max(rect.width, rect.height) * 0.6;
      if (dist < max) {
        magnetX = dxm * 0.25;
        magnetY = dym * 0.25;
      } else {
        magnetX = 0; magnetY = 0;
      }
    };

    const onMoveMagnet = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const btn = t?.closest<HTMLElement>("button, [data-cursor='button']");
      if (btn) attachMagnet(btn);
    };

    const onLeave = () => {
      visibleRef.current = false;
      setVisible(false);
    };
    const onEnter = () => setVisibleTrue();

    let scrollTimer: ReturnType<typeof setTimeout> | null = null;
    const onScroll = () => {
      setScrolling(true);
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => setScrolling(false), 180);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousemove", onMoveMagnet, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    window.addEventListener("scroll", onScroll, { passive: true });

    document.documentElement.classList.add("has-premium-cursor");
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", onMoveMagnet);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.classList.remove("has-premium-cursor");
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, []);

  // Ring sizing per mode
  const ringSize =
    mode === "image" ? 80 :
    mode === "project" ? 72 :
    mode === "hover" || mode === "button" ? 40 :
    mode === "text" ? 28 : 24;

  const ringScale = scrolling ? 0.75 : mode === "button" ? 0.85 : 1;

  const ringStyle: React.CSSProperties = {
    width: ringSize,
    height: ringSize,
    borderWidth: mode === "text" ? 1 : 1.5,
    borderStyle: "solid",
    borderColor:
      mode === "text" ? "rgba(139,92,246,0.22)" :
      mode === "default" ? "rgba(139,92,246,0.45)" :
      "rgba(139,92,246,0.9)",
    background:
      mode === "image"
        ? "rgba(17,24,39,0.55)"
        : mode === "project"
        ? "rgba(139,92,246,0.16)"
        : "rgba(139,92,246,0.08)",
    boxShadow:
      mode === "text"
        ? "0 0 8px rgba(139,92,246,0.12)"
        : mode === "default"
        ? "0 0 10px rgba(139,92,246,0.18)"
        : "0 0 24px rgba(139,92,246,0.35), 0 0 8px rgba(139,92,246,0.25) inset",
    backdropFilter: "blur(8px) saturate(140%)",
    opacity: visible ? 1 : 0,
    transition:
      "width 260ms cubic-bezier(.22,1,.36,1), height 260ms cubic-bezier(.22,1,.36,1), border-color 200ms, background 200ms, box-shadow 200ms, opacity 200ms",
  };

  return (
    <>
      {/* Outer ring */}
      <div
        ref={ringRef}
        aria-hidden
        className="premium-cursor-ring pointer-events-none fixed left-0 top-0 z-[9999] rounded-full flex items-center justify-center will-change-transform hidden md:flex"
        style={{ ...ringStyle, transform: `translate3d(-100px,-100px,0) scale(${ringScale})` }}
      >
        <div
          ref={labelRef}
          className="text-[10px] font-medium tracking-wide text-white/90 whitespace-nowrap select-none"
          style={{
            opacity: label ? 1 : 0,
            transition: "opacity 200ms ease",
          }}
        >
          {label}
        </div>
      </div>
      {/* Inner dot */}
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full will-change-transform hidden md:block"
        style={{
          width: 5,
          height: 5,
          background: "#ffffff",
          boxShadow: "0 0 8px rgba(139,92,246,0.7), 0 0 16px rgba(139,92,246,0.4)",
          opacity: visible && mode !== "image" ? 1 : 0,
          transition: "opacity 200ms ease",
        }}
      />
    </>
  );
}