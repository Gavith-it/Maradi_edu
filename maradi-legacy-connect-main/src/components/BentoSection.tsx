import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen, Heart, Flower, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { icon: BookOpen, label: "Education", color: "bg-teal-500/15", text: "CBSE excellence since 1972", span: "col-span-1 row-span-2", to: "/education" },
  { icon: Heart, label: "Community", color: "bg-amber-500/15", text: "Weddings & events", span: "col-span-1 row-span-1", to: "/trust" },
  { icon: Flower, label: "Yoga", color: "bg-rose-500/15", text: "Wellness & meditation", span: "col-span-1 row-span-1", to: "/yoga" },
  { icon: Users, label: "Culture", color: "bg-teal-600/15", text: "Heritage & tradition", span: "col-span-2 row-span-1", to: "/trust" },
];

export default function BentoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean);
    if (!section || cards.length === 0) return;

    cards.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            scrub: 0.5,
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[hsl(40,20%,98%)] to-[hsl(172,20%,96%)] py-24"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-teal-600">
            What we do
          </p>
          <h2 className="font-serif text-4xl font-bold text-[hsl(175,35%,14%)] md:text-5xl">
            Education · Yoga · Community
          </h2>
        </div>

        <div
          ref={gridRef}
          className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:gap-6"
          style={{ gridAutoRows: "minmax(140px, auto)" }}
        >
          {items.map((item, i) => (
            <Link
              key={item.label}
              to={item.to}
              ref={(el) => { cardsRef.current[i] = el; }}
              className={`flex flex-col justify-center rounded-2xl border border-[hsl(172,18%,88%)] bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-amber-400/30 ${item.span}`}
            >
              <div className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}>
                <item.icon className="h-6 w-6 text-[hsl(175,35%,14%)]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[hsl(175,35%,14%)]">{item.label}</h3>
              <p className="mt-1 font-sans text-sm text-muted-foreground">{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
