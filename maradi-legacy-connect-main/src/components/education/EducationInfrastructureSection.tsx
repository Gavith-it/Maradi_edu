import { motion, useReducedMotion } from "framer-motion";
import { Building2, Play, Camera, Droplets, Calendar } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";
import schoolClassroom from "@/assets/school-classroom.jpg";

const items = [
  {
    icon: Building2,
    title: "Well-equipped classrooms",
    paragraph:
      "Spacious, ventilated rooms with natural light and age-appropriate furniture for focused learning.",
  },
  {
    icon: Play,
    title: "Play area with play equipment",
    paragraph:
      "Safe outdoor and indoor play spaces with equipment that supports physical development and fun.",
  },
  {
    icon: Camera,
    title: "CC cameras and fire extinguishers",
    paragraph:
      "Round-the-clock surveillance and fire safety measures to ensure a secure campus for all.",
  },
  {
    icon: Droplets,
    title: "Hygienic washrooms",
    paragraph:
      "Clean, well-maintained washrooms with regular sanitisation for student health and comfort.",
  },
  {
    icon: Calendar,
    title: "Access to Trust facilities for large-scale cultural programs and events",
    paragraph:
      "Students benefit from the Trust’s halls and grounds for annual events, celebrations, and cultural programs.",
  },
];

interface EducationInfrastructureSectionProps {
  imageSrc?: string;
  imageAlt?: string;
}

export default function EducationInfrastructureSection({
  imageSrc = heroCampus,
  imageAlt = "Sri Maradi Subbaiah Vidya Kendra – campus and facilities",
}: EducationInfrastructureSectionProps) {
  const reduceMotion = useReducedMotion();

  const ImageBlock = ({
    src,
    alt,
    className = "",
  }: {
    src: string;
    alt: string;
    className?: string;
  }) => (
    <motion.div
      className={`relative overflow-hidden rounded-2xl shadow-lg ${className}`}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={src}
        alt={alt}
        className="h-[240px] w-full object-cover md:h-[280px]"
      />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" aria-hidden />
    </motion.div>
  );

  const CardRow = ({
    item,
    iconLeft,
    delay = 0,
  }: {
    item: (typeof items)[0];
    iconLeft: boolean;
    delay?: number;
  }) => (
    <motion.div
      className="flex gap-4 rounded-2xl border border-[hsl(172,18%,88%)] bg-white p-5 shadow-sm transition-colors hover:border-amber-300/50 hover:bg-amber-50/40"
      initial={reduceMotion ? false : { opacity: 0, x: iconLeft ? -32 : 32 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay }}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-500/15 text-teal-700">
        <item.icon className="h-6 w-6" />
      </div>
      <div className="min-w-0">
        <h3 className="font-serif text-lg font-bold text-[hsl(175,35%,14%)] md:text-xl">
          {item.title}
        </h3>
        <p className="mt-1.5 font-sans text-sm leading-relaxed text-muted-foreground">
          {item.paragraph}
        </p>
      </div>
    </motion.div>
  );

  return (
    <motion.section
      id="infrastructure"
      className="relative bg-[hsl(40,20%,98%)] py-20 md:py-28"
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={reduceMotion ? undefined : { opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <p className="mb-2 text-center font-sans text-sm font-semibold uppercase tracking-widest text-teal-600">
          Campus & Facilities
        </p>
        <h2 className="text-center font-serif text-3xl font-bold text-[hsl(175,35%,14%)] md:text-4xl">
          Infrastructure
        </h2>
        <div className="mx-auto mt-4 mb-14 h-1 w-16 rounded-full bg-amber-500" />

        <div className="mx-auto max-w-5xl space-y-12 md:space-y-16">
          {/* Row 1: Image LEFT, content RIGHT (intro + first 2 cards) */}
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <ImageBlock src={imageSrc} alt={imageAlt} />
            </div>
            <div className="order-1 space-y-6 lg:order-2">
              <motion.p
                className="font-sans text-muted-foreground leading-relaxed md:text-lg"
                initial={reduceMotion ? false : { opacity: 0, x: 32 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our campus is designed for safety, comfort, and learning. From well-equipped classrooms to play areas and modern facilities, we provide an environment where every child can thrive.
              </motion.p>
              <div className="space-y-4">
                <CardRow item={items[0]} iconLeft={false} delay={0.08} />
                <CardRow item={items[1]} iconLeft={false} delay={0.14} />
              </div>
            </div>
          </div>

          {/* Row 2: Content LEFT, image RIGHT (cards 3 & 4) */}
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <CardRow item={items[2]} iconLeft={true} delay={0} />
              <CardRow item={items[3]} iconLeft={true} delay={0.06} />
            </div>
            <div>
              <ImageBlock src={schoolClassroom} alt="Classrooms and facilities" />
            </div>
          </div>

          {/* Row 3: Image LEFT, content RIGHT (last card) */}
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <ImageBlock src={imageSrc} alt={imageAlt} />
            </div>
            <div className="space-y-4">
              <CardRow item={items[4]} iconLeft={false} delay={0} />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
