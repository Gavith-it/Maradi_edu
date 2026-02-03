import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, GraduationCap, Flower } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    id: "trust",
    icon: Heart,
    title: "Trust & Legacy",
    subtitle: "Since 1972",
    description: "Over five decades of community service, cultural preservation, and social impact in Bangalore.",
    color: "from-teal-600 to-teal-800",
    bg: "bg-teal-600/10",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education",
    subtitle: "Vidya Kendra",
    description: "Quality CBSE education that nurtures mind and character. Excellence in academics and values.",
    color: "from-amber-500 to-amber-700",
    bg: "bg-amber-500/10",
  },
  {
    id: "yoga",
    icon: Flower,
    title: "Yoga & Wellness",
    subtitle: "Yoga Kendra",
    description: "Traditional yoga and meditation for physical health, mental clarity, and spiritual growth.",
    color: "from-rose-600 to-rose-800",
    bg: "bg-rose-600/10",
  },
];

export default function StickyScrollSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const slidesEl = slidesRef.current;
    if (!section || !sticky || !slidesEl) return;

    const panels = slidesEl.querySelectorAll("[data-panel]");
    gsap.set(panels[1], { opacity: 0, y: 80, scale: 0.95 });
    gsap.set(panels[2], { opacity: 0, y: 80, scale: 0.95 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    tl.to(panels[0], { opacity: 0, y: -80, scale: 0.95 }, 0.15)
      .fromTo(panels[1], { opacity: 0, y: 80, scale: 0.95 }, { opacity: 1, y: 0, scale: 1 }, 0.15)
      .to(panels[1], { opacity: 0, y: -80, scale: 0.95 }, 0.5)
      .fromTo(panels[2], { opacity: 0, y: 80, scale: 0.95 }, { opacity: 1, y: 0, scale: 1 }, 0.5)
      .to(panels[2], { opacity: 0, y: -80, scale: 0.95 }, 0.85);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[400vh]">
      <div
        ref={stickyRef}
        className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-[hsl(40,20%,98%)]"
      >
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-teal-600">
            Our Three Pillars
          </p>
          <h2 className="font-serif text-4xl font-bold text-[hsl(175,35%,14%)] md:text-5xl lg:text-6xl">
            Scroll to explore
          </h2>
        </div>

        <div
          ref={slidesRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              data-panel
              className="absolute flex flex-col items-center justify-center px-6 max-w-2xl"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <div
                className={`mb-8 flex h-24 w-24 items-center justify-center rounded-2xl ${slide.bg}`}
              >
                <slide.icon className="h-12 w-12 text-[hsl(175,35%,14%)]" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-[hsl(175,35%,14%)] md:text-4xl">
                {slide.title}
              </h3>
              <p className="mt-2 font-sans text-lg font-medium text-amber-600">{slide.subtitle}</p>
              <p className="mt-6 font-sans text-lg leading-relaxed text-muted-foreground">
                {slide.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
