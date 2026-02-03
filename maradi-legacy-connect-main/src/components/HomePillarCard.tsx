import { useRef } from "react";
import { motion, useInView, useReducedMotion, type LucideIcon } from "framer-motion";
import { Link } from "react-router-dom";

interface HomePillarCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  to: string;
  accentClass: string;
  delay?: number;
}

export default function HomePillarCard({
  icon: Icon,
  title,
  subtitle,
  description,
  to,
  accentClass,
  delay = 0,
}: HomePillarCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 48, rotateX: -12 }}
      animate={inView && !reduceMotion ? { opacity: 1, y: 0, rotateX: 0 } : undefined}
      transition={{
        duration: 0.7,
        delay: reduceMotion ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{ perspective: 800 }}
      className="group"
    >
      <Link
        to={to}
        className="block h-full rounded-2xl border border-[hsl(172,18%,88%)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/15 md:p-8"
      >
        <div
          className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl ${accentClass} transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className="h-7 w-7 text-[hsl(175,35%,14%)]" />
        </div>
        <h3 className="font-serif text-xl font-bold text-[hsl(175,35%,14%)] md:text-2xl">
          {title}
        </h3>
        <p className="mt-1 text-sm font-semibold text-teal-600">{subtitle}</p>
        <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 group-hover:gap-3 transition-all">
          Explore →
        </span>
      </Link>
    </motion.div>
  );
}
