import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "The education my children received here has shaped them into confident, values-driven individuals.",
    author: "Priya Sharma",
    role: "Parent",
  },
  {
    quote: "Our wedding at the Kalyana Mantapa was absolutely magical. Traditional elegance and modern comfort.",
    author: "Raj & Meera Patel",
    role: "Wedding Clients",
  },
  {
    quote: "Yoga classes here brought balance to my life. A true sanctuary in the city.",
    author: "Anita Krishnan",
    role: "Yoga Student",
  },
  {
    quote: "Being part of this trust's cultural programs has kept me connected to my roots.",
    author: "Arjun Kumar",
    role: "Alumni & Volunteer",
  },
  {
    quote: "Quality education and character building — that's what makes this institution special.",
    author: "Dr. S. Venkatesh",
    role: "Community Member",
  },
];

export default function HorizontalScrollStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const getScrollAmount = () => {
      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      return -(trackWidth - viewportWidth);
    };

    const tween = gsap.to(track, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${track.scrollWidth}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[hsl(175,35%,14%)]">
      <div className="flex h-full items-center py-12">
        <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2 px-4">
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
            Voices from our community
          </h2>
          <p className="mt-2 font-sans text-sm text-white/70">Scroll horizontally →</p>
        </div>

        <div
          ref={trackRef}
          className="flex gap-8 pl-[max(1rem,50vw)] pr-8"
          style={{ willChange: "transform" }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="flex w-[min(380px,85vw)] flex-shrink-0 flex-col rounded-2xl bg-white/10 backdrop-blur-sm p-8 border border-white/10"
            >
              <Quote className="mb-4 h-10 w-10 text-amber-400/80" />
              <p className="font-sans text-lg leading-relaxed text-white/90">&quot;{t.quote}&quot;</p>
              <p className="mt-4 font-semibold text-amber-400">{t.author}</p>
              <p className="text-sm text-white/60">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
