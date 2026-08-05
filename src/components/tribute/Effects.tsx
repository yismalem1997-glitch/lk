import { useEffect, useMemo, useState } from "react";

const CONFETTI_COLORS = [
  "var(--accent-pink)",
  "var(--accent-gold)",
  "var(--accent-purple)",
  "var(--accent-mint)",
  "var(--accent-rose)",
];

export function Confetti({ count = 60 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const rand = (seed: number) => {
          const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
          return x - Math.floor(x);
        };
        return {
          left: rand(1) * 100,
          delay: -rand(2) * 14,
          duration: 9 + rand(3) * 10,
          size: 5 + rand(4) * 7,
          drift: (rand(5) - 0.5) * 160,
          color: CONFETTI_COLORS[Math.floor(rand(6) * CONFETTI_COLORS.length)],
          round: rand(7) > 0.7,
        };
      }),
    [count],
  );

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden" aria-hidden="true">
      {pieces.map((p, i) => (
        <span
          key={i}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.6}px`,
            background: p.color,
            borderRadius: p.round ? "999px" : "2px",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            ["--drift" as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}

export function Sparkles({ count = 26 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const rand = (seed: number) => {
          const x = Math.sin(i * 33.17 + seed * 91.7) * 12345.678;
          return x - Math.floor(x);
        };
        return {
          left: 10 + rand(1) * 80,
          top: 10 + rand(2) * 70,
          delay: rand(3) * 3,
          size: 2 + rand(4) * 4,
        };
      }),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {dots.map((d, i) => (
        <span
          key={i}
          className="spark"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
      <span className="firework" style={{ left: "50%", top: "38%" }} />
      <span className="firework" style={{ left: "30%", top: "28%", animationDelay: "1.2s" }} />
      <span className="firework" style={{ left: "70%", top: "46%", animationDelay: "2.1s" }} />
    </div>
  );
}

export function BackgroundPhotos({ images, active }: { images: string[]; active: number }) {
  return (
    <div className="bg-stage" aria-hidden="true">
      {images.map((src, i) => (
        <div
          key={i}
          className="bg-layer"
          data-active={i === active % images.length}
          style={{ backgroundImage: `url(${src})`,
          backgroundSize: "contain", 
            backgroundPosition: "center", 
            backgroundRepeat: "repeat",  
           animationDelay: `${i * -6}s` }}
        />
      ))}
      <div className="bg-veil" style={{ opacity: 0.3 }}/>
    </div>
  );
}

type Polaroid = { src: string; caption: string; style: React.CSSProperties };


export function PolaroidField({ items }: { items: Polaroid[] }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden md:block" aria-hidden="true">
      {items.map((p, i) => (
        <figure key={i} className="polaroid polaroid--ghost" style={p.style}>
          <img src={p.src} alt="" loading="lazy" width={768} height={960} />
          <figcaption>{p.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
