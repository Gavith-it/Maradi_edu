import { motion, useReducedMotion } from "framer-motion";
import { Users, Heart, Briefcase, Smile } from "lucide-react";

const stats = [
  { value: "32", label: "Staff members" },
  { value: "16", label: "Women teachers" },
  { value: "16", label: "Women helpers" },
];

const points = [
  "All teachers are from the local neighbourhood and are NTT-qualified",
  "Staff provided with PF and ESI facilities",
  "Friendly, supportive teaching environment with personalized attention",
  "Promoting women empowerment and employment",
];

export default function EducationFacultySection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="faculty"
      className="relative bg-gradient-to-b from-[hsl(172,20%,96%)] to-[hsl(40,20%,98%)] py-20 md:py-28"
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={reduceMotion ? undefined : { opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-widest text-teal-600">
            Our Team
          </p>
          <h2 className="font-serif text-3xl font-bold text-[hsl(175,35%,14%)] md:text-4xl">
            Faculty and Staff
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-amber-500" />
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="rounded-2xl border border-[hsl(172,18%,88%)] bg-white p-6 text-center shadow-sm"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="font-serif text-4xl font-bold text-teal-600">{stat.value}</span>
                <p className="mt-2 font-sans text-sm font-medium text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((point, i) => (
              <motion.div
                key={point}
                className="flex items-start gap-3 rounded-xl bg-white/80 p-4"
                initial={reduceMotion ? false : { opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/15">
                  {i === 0 ? <Briefcase className="h-4 w-4 text-amber-700" /> : i === 3 ? <Heart className="h-4 w-4 text-amber-700" /> : <Smile className="h-4 w-4 text-amber-700" />}
                </div>
                <p className="font-sans text-muted-foreground leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
