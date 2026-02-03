import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Users, Gift, Monitor, GraduationCap } from "lucide-react";
import schoolClassroom from "@/assets/school-classroom.jpg";

const items = [
  { icon: GraduationCap, text: "Education offered from Pre-Nursery to UKG" },
  { icon: Users, text: "Currently 450 students enrolled" },
  { icon: Gift, text: "Free and concessional education for poor, helpless, and needy children" },
  { icon: BookOpen, text: "Free textbooks, notebooks, and stationery for all students" },
  { icon: Monitor, text: "All classrooms equipped with Smart Class facilities" },
  { icon: Monitor, text: "Computer education imparted to students" },
];

export default function EducationAcademicSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="academic-profile"
      className="relative bg-[hsl(172,28%,96%)] py-20 md:py-28"
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={reduceMotion ? undefined : { opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:items-start">
          {/* Left: academic image */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg"
            initial={reduceMotion ? false : { opacity: 0, x: -32 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={schoolClassroom}
              alt="Sri Maradi Subbaiah Vidya Kendra – classroom and learning"
              className="h-[280px] w-full object-cover md:h-[340px] lg:h-[420px]"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" aria-hidden />
          </motion.div>

          {/* Right: header + cards – all cards come in from the right */}
          <div className="space-y-6 md:space-y-8">
            <motion.div
              className="text-left"
              initial={reduceMotion ? false : { opacity: 0, x: 48 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-widest text-teal-600">
                Our Offerings
              </p>
              <h2 className="font-serif text-3xl font-bold text-[hsl(175,35%,14%)] md:text-4xl">
                Academic Profile
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-amber-500" />
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((item, i) => (
                <motion.div
                  key={item.text}
                  className="flex items-start gap-4 rounded-2xl border border-teal-200 bg-white/90 p-5 shadow-sm transition-colors hover:border-amber-300 hover:bg-amber-50/60 hover:shadow-md"
                  initial={reduceMotion ? false : { opacity: 0, x: 72 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.07,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-500/20 text-teal-700">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="font-sans text-[hsl(175,25%,22%)] leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
