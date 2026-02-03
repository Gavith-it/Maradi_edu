import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion } from "framer-motion";
import { Heart, BookOpen, Users, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const values = [
  { icon: Heart, title: "Service", description: "Dedicated to serving our community with compassion and commitment." },
  { icon: BookOpen, title: "Education", description: "Providing quality education that nurtures both mind and character." },
  { icon: Users, title: "Community", description: "Building stronger bonds through cultural preservation and unity." },
  { icon: Award, title: "Excellence", description: "Maintaining the highest standards in all our endeavors." },
];

export default function AboutTrust() {
  const reduceMotion = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement>(null);
  const zigzag1Ref = useRef<HTMLDivElement>(null);
  const zigzag2Ref = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) return;
    const triggers = [
      { ref: zigzag1Ref, x: -60 },
      { ref: zigzag2Ref, x: 60 },
      { ref: valuesRef, y: 40 },
    ];
    const ctx = gsap.context(() => {
      triggers.forEach(({ ref, x, y }) => {
        const el = ref.current;
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, ...(x !== undefined ? { x } : { y: y ?? 40 }) },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 82%", end: "top 55%", scrub: 0.6 },
          }
        );
      });
    }, sectionRef);
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [reduceMotion]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-[hsl(172,20%,96%)] to-[hsl(40,20%,98%)]"
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto mb-20 max-w-3xl text-center"
          variants={sectionVariants}
        >
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-teal-600 mb-4">
            About us
          </p>
          <h2 className="font-serif text-4xl font-bold text-[hsl(175,35%,14%)] md:text-5xl lg:text-6xl">
            About Maradi Subbaiah Trust
          </h2>
          <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-amber-500" />
          <p className="mt-8 font-sans text-lg leading-relaxed text-muted-foreground">
            Since 1972, we have been committed to empowering our community through education,
            cultural preservation, and social service in Bangalore.
          </p>
        </motion.div>

        {/* Zigzag: Mission (left) / Vision (right) */}
        <div className="mx-auto max-w-6xl space-y-16">
          <div
            ref={zigzag1Ref}
            className="grid items-center gap-12 md:grid-cols-2 md:gap-16"
          >
            <div className="rounded-2xl border border-[hsl(172,18%,88%)] bg-white p-8 shadow-sm md:p-10">
              <h3 className="font-serif text-2xl font-bold text-[hsl(175,35%,14%)] md:text-3xl">
                Our Mission
              </h3>
              <p className="mt-4 font-sans text-lg leading-relaxed text-muted-foreground">
                To provide quality education, preserve cultural heritage, and serve our community
                through various social initiatives that create lasting positive impact.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-teal-500/15">
                <Heart className="h-12 w-12 text-teal-700" />
              </div>
            </div>
          </div>

          <div
            ref={zigzag2Ref}
            className="grid items-center gap-12 md:grid-cols-2 md:gap-16"
          >
            <div className="order-2 flex justify-center md:order-1 md:justify-start">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-amber-500/15">
                <BookOpen className="h-12 w-12 text-amber-700" />
              </div>
            </div>
            <div className="order-1 rounded-2xl border border-[hsl(172,18%,88%)] bg-white p-8 shadow-sm md:order-2 md:p-10">
              <h3 className="font-serif text-2xl font-bold text-[hsl(175,35%,14%)] md:text-3xl">
                Our Vision
              </h3>
              <p className="mt-4 font-sans text-lg leading-relaxed text-muted-foreground">
                To be a beacon of educational excellence and cultural preservation, fostering
                generations of responsible citizens who contribute to society&apos;s progress.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values - 2x2 grid */}
        <div ref={valuesRef} className="mx-auto mt-24 max-w-6xl">
          <h3 className="font-serif text-2xl font-bold text-center text-[hsl(175,35%,14%)] mb-12 md:text-3xl">
            Our Core Values
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="rounded-2xl border border-[hsl(172,18%,88%)] bg-white p-6 text-center shadow-sm transition-all hover:shadow-md hover:border-amber-400/30"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-500/10">
                  <value.icon className="h-7 w-7 text-teal-700" />
                </div>
                <h4 className="font-serif text-xl font-semibold text-[hsl(175,35%,14%)]">
                  {value.title}
                </h4>
                <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          variants={sectionVariants}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-white px-6 py-3 shadow-sm">
            <Award className="h-5 w-5 text-amber-600" />
            <span className="font-semibold text-[hsl(175,35%,14%)]">Since 1972 — 50+ Years of Excellence</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
