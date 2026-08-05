import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { AudioButton } from "@/components/tribute/AudioButton";
import { useAmbientMusic } from "@/components/tribute/useAmbientMusic";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CalendarDays,
  Camera,
  ChevronLeft,
  ChevronRight,
  Heart,
  Images,
  Sparkles as SparkleIcon,
  X,
} from "lucide-react";
import { BackgroundPhotos, Confetti, PolaroidField, Sparkles } from "@/components/tribute/Effects";
import { GlassCard } from "@/components/tribute/GlassCard";
import memory1 from "@/assets/Screenshot 2026-08-04 051931.png";
import memory2 from "@/assets/Screenshot 2026-08-04 052039.png";
import memory3 from "@/assets/Screenshot 2026-08-04 052548.png";
import memory4 from "@/assets/Screenshot 2026-08-04 052633.png";
import memory5 from "@/assets/Screenshot 2026-08-04 053224.png";
import memory6 from "@/assets/Screenshot 2026-08-04 053646.png";
import memory7 from "@/assets/Screenshot 2026-08-04 054045.png";
import memory8 from "@/assets/Screenshot 2026-08-04 054120.png";
import photo1 from "@/assets/photo_1_2026-08-05_22-41-36.jpg";
import photo2 from "@/assets/photo_1_2026-08-05_22-42-32.jpg";
import photo3 from "@/assets/photo_2_2026-08-05_22-41-36.jpg";
import photo4 from "@/assets/photo_2_2026-08-05_22-42-32.jpg";
import photo5 from "@/assets/photo_3_2026-08-05_22-41-36.jpg";
import photo6 from "@/assets/photo_3_2026-08-05_22-42-32.jpg";
import photo7 from "@/assets/photo_4_2026-08-05_22-41-36.jpg";
import photo8 from "@/assets/photo_4_2026-08-05_22-42-32.jpg";
import photo9 from "@/assets/photo_5_2026-08-05_22-41-37.jpg";
import photo10 from "@/assets/photo_5_2026-08-05_22-42-32.jpg";
import photo11 from "@/assets/photo_6_2026-08-05_22-41-37.jpg";
import photo12 from "@/assets/photo_6_2026-08-05_22-42-32.jpg";
import photo13 from "@/assets/photo_7_2026-08-05_22-41-37.jpg";
import photo14 from "@/assets/photo_7_2026-08-05_22-42-32.jpg";
import photo15 from "@/assets/photo_8_2026-08-05_22-41-37.jpg";
import photo16 from "@/assets/photo_8_2026-08-05_22-42-32.jpg";
import photo17 from "@/assets/photo_9_2026-08-05_22-41-37.jpg";
import photo18 from "@/assets/photo_9_2026-08-05_22-42-32.jpg";
import photo19 from "@/assets/photo_10_2026-08-05_22-41-37.jpg";
import photo20 from "@/assets/photo_10_2026-08-05_22-42-32.jpg";
import photo21 from "@/assets/photo_11_2026-08-05_22-41-37.jpg";
import giftbox from "@/assets/images.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday" },
      {
        name: "description",
        content:
          "An interactive birthday tribute for ድንክ: a gift box to unwrap, fireworks, memories, polaroids and a closing chapter dated August 11, 2026.",
      },
      { property: "og:title", content: "Happy Birthday ድንክ — A Tribute from yismualem" },
      {
        property: "og:description",
        content: "Unwrap the gift, read the wishes and wander through our memories.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Tribute,
});

const RECIPIENT = "ድንክ";
const SENDER = "ይስሙአለም";
const SPECIAL_DATE = "August 11, 2026";

const PHOTOS = [
  { src: photo1, caption: "golden hour" },
  { src: photo10, caption: "sparkler night" },
  { src: photo11, caption: "cake o'clock" },
  { src: photo12, caption: "that laugh" },
  { src: photo13, caption: "late nights" },
  { src: photo14, caption: "make a wish" },
  { src: memory7, caption: "park days" },
  { src: memory8, caption: "little fires" },
  { src: memory4, caption: "one more slice" },
  { src: memory5, caption: "us, again" },
];

const FLOATING = [
  { src: photo2, caption: "hahahah", style: { top: "8%", left: "4%", ["--tilt" as string]: "rotate(-8deg)", transform: "rotate(-8deg)" } },
  { src: photo16, caption: "huhuhuh", style: { top: "12%", right: "5%", ["--tilt" as string]: "rotate(7deg)", transform: "rotate(7deg)", animationDelay: "1.4s" } },
  { src: photo7, caption: "hihihih", style: { bottom: "8%", left: "6%", ["--tilt" as string]: "rotate(6deg)", transform: "rotate(6deg)", animationDelay: "2.6s" } },
  { src: photo7, caption: "hahahahah", style: { bottom: "10%", right: "4%", ["--tilt" as string]: "rotate(-6deg)", transform: "rotate(-6deg)", animationDelay: "0.7s" } },
];

const TOTAL = 9;

const AUTO_MS = 5000;
const RESUME_MS = 10000;


function Tribute() {
  const [slide, setSlide] = useState(0);
  const [gallery, setGallery] = useState(false);
  const [moment, setMoment] = useState(0);
  //  const [hovering, setHovering] = useState(false);
  // const [manualAt, setManualAt] = useState(0);
  // const music = useAmbientMusic();
    const [hovering, setHovering] = useState(false);
  const [manualAt, setManualAt] = useState(0);
  const music = useAmbientMusic();

  // const nudge = useCallback(() => setManualAt(Date.now()), []);

  // const go = useCallback(
  //   (n: number) => {
  //     nudge();
  //     setSlide((s) => Math.min(TOTAL - 1, Math.max(0, s + n)));
  //   },
  //   [nudge],
  // );

  const nudge = useCallback(() => setManualAt(Date.now()), []);

  // const go = useCallback((n: number) => {
  //   setSlide((s) => Math.min(TOTAL - 1, Math.max(0, s + n)));
  // }, []);

   const go = useCallback(
    (n: number) => {
      nudge();
      setSlide((s) => Math.min(TOTAL - 1, Math.max(0, s + n)));
    },
    [nudge],
  );

  // const jump = useCallback(
  //   (i: number) => {
  //     nudge();
  //     setSlide(i);
  //   },
  //   [nudge],
  // );
  const jump = useCallback(
    (i: number) => {
      nudge();
      setSlide(i);
    },
    [nudge],
  );


  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

    // Start the music once the gift is opened (first user gesture).
  // const open = useCallback(() => {
  //   music.play();
  //   setSlide(1);
  // }, [music]);

  // // Auto-advance every 5s, paused on slide 1, on hover, while the gallery
  // // modal is open, and briefly after any manual navigation.
  // useEffect(() => {
  //   if (slide === 0 || slide >= TOTAL - 1 || hovering || gallery) return;
  //   const sinceManual = Date.now() - manualAt;
  //   const delay = sinceManual < RESUME_MS ? RESUME_MS - sinceManual : AUTO_MS;
  //   const t = window.setTimeout(() => setSlide((s) => Math.min(TOTAL - 1, s + 1)), delay);
  //   return () => window.clearTimeout(t);
  // }, [slide, hovering, gallery, manualAt]);
  // Start the music once the gift is opened (first user gesture).
  const open = useCallback(() => {
    music.play();
    setSlide(1);
  }, [music]);

  // Auto-advance every 5s, paused on slide 1, on hover, while the gallery
  // modal is open, and briefly after any manual navigation.
  useEffect(() => {
    if (slide === 0 || slide >= TOTAL - 1 || hovering || gallery) return;
    const sinceManual = Date.now() - manualAt;
    const delay = sinceManual < RESUME_MS ? RESUME_MS - sinceManual : AUTO_MS;
    const t = window.setTimeout(() => setSlide((s) => Math.min(TOTAL - 1, s + 1)), delay);
    return () => window.clearTimeout(t);
  }, [slide, hovering, gallery, manualAt]);



  return (
    // <main className="relative min-h-screen overflow-hidden" data-slide={slide}>
    //    <main
    //   className="relative min-h-screen overflow-hidden"
    //   data-slide={slide}
    //   onMouseEnter={undefined}
    // >
      <main className="relative min-h-screen overflow-hidden" data-slide={slide}>

      {slide > 0 && <BackgroundPhotos images={[memory1, memory2, memory3,memory4,memory5,memory6,memory7,memory8]} active={slide} />}
      <PolaroidField items={slide === 0 ? [] : FLOATING} />
      <Confetti />

            <AudioButton playing={music.playing} onToggle={music.toggle} />


      {/* progress dots */}
      <nav
        aria-label="Slide progress"
        className="fixed left-1/2 top-5 z-30 flex -translate-x-1/2 items-center gap-2 sm:gap-3"
      >
        {Array.from({ length: TOTAL }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === slide}
            // onClick={() => setSlide(i)}
              onClick={() => jump(i)}
            className={
              i === slide
                ? "h-4 w-4 rounded-full border border-accent-pink bg-accent-pink shadow-[0_0_18px_var(--accent-pink)] transition-all"
                : "h-3 w-3 rounded-full border border-foreground/40 transition-all hover:border-foreground"
            }
          />
        ))}
      </nav>

      {/* arrows */}
      {slide > 0 && (
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className="glass-chip fixed left-2 top-1/2 z-30 grid h-11 w-11 -translate-y-1/2 place-items-center sm:left-6 sm:h-12 sm:w-12"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}
      {slide < TOTAL - 1 && (
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(1)}
          className="glass-chip fixed right-2 top-1/2 z-30 grid h-11 w-11 -translate-y-1/2 place-items-center sm:right-6 sm:h-12 sm:w-12"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      <section
        key={slide}
        //  onMouseEnter={() => setHovering(true)}
        // onMouseLeave={() => setHovering(false)}
  onMouseOver={(e) =>
          setHovering(
            !!(e.target as HTMLElement).closest(".glass-card, .glass-chip, .polaroid, figure"),
          )
        }
        onMouseOut={() => setHovering(false)}


        className="animate-rise relative z-20 grid min-h-screen place-items-center px-4 py-24 sm:px-16"
      >
        {/* {slide === 0 && <SlideGift onOpen={() => setSlide(1)} />}
        {slide === 1 && <SlideWelcome onContinue={() => setSlide(2)} />} */}
         {slide === 0 && <SlideGift onOpen={open} />}
        {slide === 1 && <SlideWelcome onContinue={() => jump(2)} />}
        {slide === 2 && <SlideWish />}
        {slide === 3 && (
          <GlassCard icon={<Heart className="h-5 w-5" />} title="What I love most about you">
            The way you make an ordinary Tuesday feel like a small festival — your laugh arrives
            before the joke lands, and somehow everyone in the room feels invited.
          </GlassCard>
        )}
        {slide === 4 && (
          <GlassCard icon={<BookOpen className="h-5 w-5" />} title="Our Story">
            <ol className="space-y-3 not-italic">
              <li>a &rarr; a hallway, a borrowed pen, a conversation that ran too long.</li>
              <li>b &rarr; the first trip, the wrong bus, the best afternoon.</li>
              <li>c &rarr; every year since, quietly becoming the good part of the story.</li>
            </ol>
          </GlassCard>
        )}
        {slide === 5 && (
          <GlassCard icon={<SparkleIcon className="h-5 w-5" />} title="Shared Dreams">
            A small kitchen with too many plants. A passport with tired pages. Mornings that are
            never in a hurry. And this — us, still laughing at nothing at all.
          </GlassCard>
        )}
        {slide === 6 && <SlideGallery onOpen={() => setGallery(true)} />}
        {slide === 7 && <SlideMoments index={moment} setIndex={setMoment} />}
        {slide === 8 && <SlideChapter />}
      </section>

      {gallery && <GalleryModal onClose={() => setGallery(false)} />}
    </main>
  );
}

function SlideGift({ onOpen }: { onOpen: () => void }) {
  return (
    <button type="button" onClick={onOpen} className="group text-center">
       <div
        
      >
        
        {/* <span
          className="absolute inset-y-0 left-1/2 w-[9%] -translate-x-1/2"
          style={{ background: "linear-gradient(90deg, oklch(0.55 0.2 351), oklch(0.75 0.24 351), oklch(0.55 0.2 351))" }}
        /> */}
        <img src={giftbox} alt="dfghj" className="gift-box relative mx-auto aspect-[4/3] w-[min(88vw,560px)] rounded-lg"
        style={{
          background:
            "radial-gradient(120% 120% at 30% 20%, oklch(0.28 0.09 350 / 90%), oklch(0.18 0.03 40)), repeating-conic-gradient(oklch(1 0 0 / 6%) 0% 25%, transparent 0% 50%) 0 0 / 22px 22px",
          boxShadow: "var(--glow-pink), var(--shadow-glass)",
        }} />
        {/* <span
          className="absolute inset-x-0 top-1/2 h-[13%] -translate-y-1/2"
          style={{ background: "linear-gradient(180deg, oklch(0.72 0.23 351), oklch(0.52 0.2 351))" }}
        /> */}
       <span className="absolute left-1/2 top-1/2 grid h-[18%] w-[38%] -translate-x-1/2 -translate-y-1/2 place-items-center">
          {/* <span
            className="block h-full w-full rounded-full"
            style={{
              background: "radial-gradient(60% 90% at 50% 40%, oklch(0.82 0.22 351), oklch(0.55 0.2 351))",
              clipPath:
                "polygon(0% 20%, 22% 0%, 40% 42%, 60% 42%, 78% 0%, 100% 20%, 100% 80%, 78% 100%, 60% 58%, 40% 58%, 22% 100%, 0% 80%)",
            }}
          /> */}
        </span>
      </div> 

      <p className="mt-8 text-xs font-semibold tracking-[0.4em] text-muted-foreground">TO</p>
      <p className="font-script text-4xl text-foreground sm:text-5xl">{RECIPIENT}</p>
      <p className="mt-2 text-xs font-semibold tracking-[0.3em] text-muted-foreground">
        FROM <span className="font-script text-xl tracking-normal text-foreground">{SENDER}</span>
      </p>
      <p className="animate-pulse-soft mt-4 text-xs font-semibold tracking-[0.35em] text-muted-foreground">
        ^ TAP TO OPEN
      </p>
    </button>
  );
}

function SlideWelcome({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="relative w-full max-w-3xl text-center">
      <Sparkles />
      <p className="relative text-sm font-bold tracking-[0.35em] text-accent-gold">HAPPY BIRTHDAY!</p>
      <h1 className="text-fest relative mt-4 font-serif text-6xl font-black leading-none sm:text-8xl">
        {RECIPIENT}
      </h1>
      <button
        type="button"
        onClick={onContinue}
        className="btn-fest relative mt-10 inline-flex items-center gap-2 px-8 py-3 text-base"
      >
        Continue <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function SlideWish() {
  return (
    <div className="w-full max-w-2xl text-center">
      <div className="animate-pulse-soft text-7xl sm:text-8xl" aria-hidden="true">
        🎂
      </div>
      <p className="mt-4 font-serif text-sm italic text-muted-foreground">{SPECIAL_DATE}</p>
      <p className="mt-10 font-serif text-2xl italic leading-relaxed text-foreground sm:text-4xl">
        “May this year be softer than the last, louder where it counts, and full of the kind of
        days you'd choose again.”
      </p>
      <p className="mt-10 font-serif italic text-muted-foreground">— {SENDER}</p>
    </div>
  );
}

function SlideGallery({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="w-full max-w-5xl">
      <div className="glass-chip mx-auto flex w-fit items-center gap-3 px-5 py-3">
        <Camera className="h-5 w-5 text-accent-pink" />
        <span className="font-display text-lg font-bold sm:text-2xl">Our Memories</span>
        <span className="rounded-full bg-foreground/10 px-3 py-1 text-xs font-semibold">
          {PHOTOS.length} photos
        </span>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {PHOTOS.slice(0, 2).map((p, i) => (
          <figure key={i} className="glass-card relative overflow-hidden p-0">
            <img
              src={p.src}
              alt={p.caption}
              loading="lazy"
              width={768}
              height={960}
              className={`h-[300px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[420px] ${
                i === 0 ? "grayscale" : ""
              }`}
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-4 text-center text-sm font-bold">
              {p.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button type="button" onClick={onOpen} className="glass-chip inline-flex items-center gap-2 px-6 py-3">
          <Images className="h-4 w-4 text-accent-pink" />
          Open +{PHOTOS.length - 2} photos
        </button>
      </div>
    </div>
  );
}

function SlideMoments({ index, setIndex }: { index: number; setIndex: (n: number) => void }) {
  const photo = PHOTOS[index] ?? PHOTOS[0]!;
  return (
    <div className="w-full max-w-xl text-center">
      <div className="glass-chip mx-auto flex w-fit items-center gap-3 px-5 py-3">
        <Camera className="h-5 w-5 text-accent-pink" />
        <span className="font-display text-lg font-bold sm:text-2xl">Moments</span>
        <span className="rounded-full bg-foreground/10 px-3 py-1 text-xs font-semibold">
          {index + 1}/{PHOTOS.length}
        </span>
      </div>

      <div className="mx-auto mt-4 flex w-fit gap-1.5">
        {PHOTOS.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-7 bg-accent-pink" : "w-4 bg-foreground/20"
            }`}
          />
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-4 sm:gap-8">
        <button
          type="button"
          aria-label="Previous moment"
          onClick={() => setIndex((index - 1 + PHOTOS.length) % PHOTOS.length)}
          className="glass-chip grid h-10 w-10 shrink-0 place-items-center"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <figure key={index} className="polaroid animate-rise relative !static w-[220px]">
          <img src={photo.src} alt={photo.caption} loading="lazy" width={768} height={960} />
          <figcaption>{photo.caption}</figcaption>
        </figure>

        <button
          type="button"
          aria-label="Next moment"
          onClick={() => setIndex((index + 1) % PHOTOS.length)}
          className="glass-chip grid h-10 w-10 shrink-0 place-items-center"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <p className="glass-card mx-auto mt-10 w-full max-w-md px-6 py-5 text-lg font-bold">
        {photo.caption}
      </p>
    </div>
  );
}

function SlideChapter() {
  return (
    <article className="glass-card animate-rise w-full max-w-2xl p-8 sm:p-12">
      <header className="flex items-center gap-4">
        <span className="glass-icon shrink-0">
          <SparkleIcon className="h-5 w-5" />
        </span>
        <h2 className="min-w-0 truncate font-display text-3xl font-bold sm:text-5xl">Our Chapter</h2>
      </header>
      <div className="mt-10 flex items-center gap-4">
        <span className="glass-icon shrink-0">
          <CalendarDays className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground">SPECIAL DATE</p>
          <p className="truncate font-display text-xl font-bold sm:text-3xl">{SPECIAL_DATE}</p>
        </div>
      </div>
    </article>
  );
}

function GalleryModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-background/85 p-4 backdrop-blur-xl sm:p-10">
      <div className="mx-auto max-w-6xl">
        <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <h2 className="flex min-w-0 items-center gap-3 font-display text-2xl font-bold">
            <Calendar className="h-5 w-5 shrink-0 text-accent-pink" />
            <span className="truncate">All Memories</span>
          </h2>
          <button
            type="button"
            aria-label="Close gallery"
            onClick={onClose}
            className="glass-chip grid h-10 w-10 shrink-0 place-items-center"
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {PHOTOS.map((p, i) => (
            <figure key={i} className="glass-card animate-rise overflow-hidden p-0">
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                width={768}
                height={960}
                className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <figcaption className="p-3 text-center text-sm font-semibold">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
