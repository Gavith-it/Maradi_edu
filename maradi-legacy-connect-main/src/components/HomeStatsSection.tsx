import { useRef, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Award, Users, Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Calendar, value: "1972", label: "Founded" },
  { icon: Award, value: "50+", label: "Years of Excellence" },
  { icon: Users, value: "10,000+", label: "Lives Touched" },
];

export default function HomeStatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;

  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (reduceMotion || !itemsRef.current) return;
    const els = itemsRef.current.querySelectorAll("[data-stat-item]");
    gsap.fromTo(
      els,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 45%",
          scrub: 0.5,
        },
      }
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [reduceMotion]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative overflow-hidden bg-[hsl(175,35%,14%)] py-16 md:py-20"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={inView ? { opacity: 1 } : undefined}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div ref={itemsRef} className="grid gap-8 md:grid-cols-3 md:gap-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              data-stat-item
              className="flex flex-col items-center text-center text-white"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400">
                <stat.icon className="h-7 w-7" />
              </div>
              <span className="font-serif text-4xl font-bold md:text-5xl">{stat.value}</span>
              <span className="mt-2 font-sans text-sm font-medium text-white/80">{stat.label}</span>
            </div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : undefined}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl border-2 border-amber-400/60 px-8 py-3 font-semibold text-amber-400 transition-colors hover:bg-amber-400/20"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
