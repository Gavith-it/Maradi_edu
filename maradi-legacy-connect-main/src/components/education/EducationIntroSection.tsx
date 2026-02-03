import { motion, useReducedMotion } from "framer-motion";
import introImage from "@/assets/WhatsApp Image 2026-02-01 at 12.56.33.jpeg";

/**
 * Intro section: founder image on the left, quote + paragraphs on the right.
 * Tighter max-width and two-column layout to reduce excess whitespace.
 */
export default function EducationIntroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className="education-intro-section min-h-0 bg-[hsl(40,20%,98%)] py-12 md:py-16"
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={reduceMotion ? undefined : { opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-5xl px-4 md:px-6 grid grid-cols-1 md:grid-cols-[minmax(280px,380px)_1fr] gap-8 md:gap-12 items-start">
        {/* Portrait – left side */}
        <div className="education-intro-founder order-2 md:order-1 flex justify-center md:justify-end">
          <img
            src={introImage}
            alt="Sri Maradi Subbaiah"
            className="w-full max-w-[280px] md:max-w-[360px] h-auto rounded-xl shadow-lg object-cover object-top"
          />
        </div>

        {/* Quote + paragraphs – right side */}
        <div className="order-1 md:order-2 min-w-0">
          <blockquote className="education-intro-quote relative pl-5 md:pl-6">
            {/* Small decorative dots + short line – stays above paragraphs, no overlap */}
            <div className="education-intro-quote-deco absolute left-0 top-0 flex flex-col items-center gap-0.5 w-4" aria-hidden>
              <span className="block h-3 w-3 rounded-full bg-amber-500/90 shrink-0" />
              <span className="block h-3 w-3 rounded-full bg-amber-500/90 shrink-0" />
              <span className="education-intro-quote-line mt-0.5 block w-0.5 flex-shrink-0 rounded-full bg-amber-500" />
            </div>
            <p className="font-serif text-xl font-semibold italic text-[hsl(175,35%,14%)] md:text-2xl">
              Every child has a right to education.
            </p>
            <cite className="mt-2 block font-sans text-sm font-medium text-muted-foreground not-italic">
              — Sri Maradi Subbaiah
            </cite>
          </blockquote>

          <div className="mt-8 space-y-5 font-sans text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Founded under the esteemed Maradi Subbaiah Trust (established in 1972), Sri Maradi Subbaiah Vidya Kendra was started in 1983 with just 5 students, inspired by the vision and motto of Sri Maradi Subbaiah.
            </p>
            <p>
              For over four decades, the school has been a cornerstone of the Hanumantha Nagar community in South Bengaluru, providing quality, value-based education at a nominal cost, accessible to children of all communities irrespective of caste or religion.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
