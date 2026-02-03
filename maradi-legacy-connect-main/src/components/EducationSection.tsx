import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users, Award, Star } from "lucide-react";
import schoolClassroom from "@/assets/school-classroom.jpg";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: BookOpen,
    title: "CBSE Curriculum",
    description: "Modern, nationally recognized curriculum with a focus on holistic development and values.",
    stat: "50+ Years",
    statLabel: "of excellence",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Dedicated teachers who nurture both academic excellence and character building.",
    stat: "500+",
    statLabel: "Students",
  },
  {
    icon: Award,
    title: "Facilities",
    description: "Well-equipped classrooms, labs, and sports facilities for a complete learning experience.",
    stat: "Full",
    statLabel: "Infrastructure",
  },
  {
    icon: Star,
    title: "Admissions",
    description: "Join our community. Admissions open for the academic year. Limited seats available.",
    stat: "Open",
    statLabel: "Now",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 0.5], ["0%", "15%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  useEffect(() => {
    if (reduceMotion) return;
    const cardsEl = sectionRef.current?.querySelectorAll("[data-edu-card]");
    if (!cardsEl?.length) return;
    cardsEl.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: i * 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            end: "top 55%",
            scrub: 0.5,
          },
        }
      );
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative overflow-hidden bg-gradient-to-b from-[hsl(40,20%,98%)] to-[hsl(172,18%,96%)] py-24 md:py-32"
    >
      {/* Parallax background */}
      {!reduceMotion && (
        <motion.div
          ref={parallaxRef}
          className="absolute inset-0 opacity-[0.06]"
          style={{ y: bgY }}
          aria-hidden
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{ backgroundImage: `url(${schoolClassroom})` }}
          />
        </motion.div>
      )}

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-teal-600">
            Sri Maradi Subbaya Vidya Kendra
          </p>
          <h2 className="font-serif text-4xl font-bold text-[hsl(175,35%,14%)] md:text-5xl lg:text-6xl">
            Education
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-amber-500" />
          <p className="mt-6 font-sans text-lg leading-relaxed text-muted-foreground">
            Quality CBSE education that nurtures mind and character. Excellence since 1972.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              data-edu-card
              className="group relative rounded-2xl border border-[hsl(172,18%,88%)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/10 md:p-8"
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={i}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/15 text-teal-700 transition-colors group-hover:bg-amber-500/20 group-hover:text-amber-700">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[hsl(175,35%,14%)] md:text-2xl">
                {card.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-serif text-2xl font-bold text-teal-600">{card.stat}</span>
                <span className="text-sm text-muted-foreground">{card.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button asChild size="lg" className="rounded-xl bg-teal-600 px-8 py-4 font-semibold text-white hover:bg-teal-700">
            <Link to="/contact">Learn About Admissions</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
