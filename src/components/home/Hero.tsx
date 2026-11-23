import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import clsx from "clsx";
import { createPortal } from "react-dom";
import banner1 from "../../assets/images/bn4.jpg";
import banner3 from "../../assets/images/bn2.png";
import banner2 from "../../assets/images/bn1.png";
import mountain from "../../assets/images/mountain.png";

interface Slide {
  image: string;
  title: string;
  highlight: string;
  tagline: string;
}

const slides: Slide[] = [
  {
    image: banner1,
    title: "Your Journey of",
    highlight: "Faith Begins Here.",
    tagline: "A journey of faith, accompanied by a sense of belonging!",
  },
  {
    image: banner2,
    title: "Explore the Sacred",
    highlight: "Jyotirlinga Yatra.",
    tagline: "Comfortable and well-planned group journeys from Mumbai.",
  },
  {
    image: banner3,
    title: "Caring Travel for",
    highlight: "Every Devotee.",
    tagline: "Special support for senior citizens, every step of the way.",
  },
];

const INTERVAL = 5000; // ms between slides

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isReelOpen, setIsReelOpen] = useState(false);

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  // Auto-scroll. The timer restarts whenever the slide changes (also on manual click)
  useEffect(() => {
    if (paused || isReelOpen) return;
    const id = setTimeout(next, INTERVAL);
    return () => clearTimeout(id);
  }, [current, paused, isReelOpen]);

  useEffect(() => {
    if (!isReelOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsReelOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isReelOpen]);

  return (
    <section
      className="relative h-[calc(100svh-4.5rem)] min-h-[520px] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => {
        const active = i === current;
        return (
          <div
            key={i}
            aria-hidden={!active}
            className={clsx(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none",
              active ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0",
            )}
          >
            {/* Background image with slow zoom */}
            <img
              src={slide.image}
              alt=""
              className={clsx(
                "absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[6000ms] ease-out",
                active ? "scale-100" : "scale-110",
              )}
            />
            <div
              className="absolute inset-y-0 left-0 w-full md:w-[65%] lg:w-[58%] bg-gradient-to-r from-ivory via-ivory/90 to-transparent"
            />

            {/* Content */}
            <div className="relative mx-auto flex h-full max-w-7xl items-center px-4">
              <div
                className={clsx(
                  "max-w-xl transition-all duration-1000 delay-300",
                  active
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0",
                )}
              >
                <img src={mountain} alt="" className="mb-2 w-32 opacity-75" />

                <h1 className="text-4xl font-bold leading-tight text-neutral-700 md:text-5xl lg:text-6xl">
                  {slide.title}
                  <span className="block text-saffron">{slide.highlight}</span>
                </h1>

                <p className="mt-4 inline-block border-l-4 border-saffron px-4 py-2 text-xl font-bold">
                  {slide.tagline}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#trips"
                    className="flex items-center gap-2 rounded-full bg-saffron px-6 py-3 font-semibold text-white hover:bg-saffron-dark"
                  >
                    Explore Upcoming Trips <ArrowRight size={18} />
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsReelOpen(true)}
                    className="flex items-center gap-2 rounded-full border border-maroon bg-white/70 px-6 py-3 font-semibold text-maroon hover:bg-white/90"
                  >
                    <Play size={16} className="fill-maroon text-maroon" /> Our
                    Journey
                  </button>
              
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/70 p-2 shadow hover:bg-white md:block"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/70 p-2 shadow hover:bg-white md:block"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={clsx(
              "h-2.5 rounded-full transition-all duration-300",
              i === current
                ? "w-8 bg-saffron"
                : "w-2.5 bg-white/80 hover:bg-white",
            )}
          />
        ))}
      </div>
      {isReelOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Our Journey Instagram Reel"
            onClick={() => setIsReelOpen(false)}
          >
            <div
              className="relative h-[min(85vh,760px)] w-full max-w-[420px] overflow-hidden rounded-2xl bg-black shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsReelOpen(false)}
                aria-label="Close video"
                className="absolute right-3 top-3 z-10 rounded-full bg-black/70 p-2 text-white hover:bg-black"
              >
                <X size={20} />
              </button>
              <iframe
                src="https://www.instagram.com/reel/Dd1StgcoFYa/embed"
                title="Our Journey Instagram Reel"
                className="h-full w-full border-0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
