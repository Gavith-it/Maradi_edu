import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote, Heart, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "The education my children received here has shaped them into confident, values-driven individuals. The perfect blend of academics and character building.",
    author: "Priya Sharma",
    role: "Parent, Class of 2023",
  },
  {
    quote:
      "Our wedding at the Kalyana Mantapa was absolutely magical. The traditional architecture and modern amenities made our day perfect.",
    author: "Raj & Meera Patel",
    role: "Wedding Clients",
  },
  {
    quote:
      "Yoga classes at the Kendra brought balance to my life. A true sanctuary in the city with experienced, caring instructors.",
    author: "Anita Krishnan",
    role: "Yoga Student",
  },
  {
    quote:
      "Being part of this trust's cultural programs has helped me stay connected to my roots while embracing modern values.",
    author: "Arjun Kumar",
    role: "Alumni & Volunteer",
  },
  {
    quote:
      "Quality education and character building — that's what makes this institution special. Grateful to be part of this community.",
    author: "Dr. S. Venkatesh",
    role: "Community Member",
  },
];

const trustHighlights = [
  { icon: Heart, label: "Since 1972", sub: "50+ years of service" },
  { icon: Award, label: "Education · Yoga · Community", sub: "Our three pillars" },
];

export default function TrustOrganizationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    if (reduceMotion) return;
    const sticky = stickyRef.current;
    if (!sticky) return;
    gsap.fromTo(
      sticky,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sticky,
          start: "top 85%",
          end: "top 50%",
          scrub: 0.5,
        },
      }
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [reduceMotion]);

  return (
    <motion.section
      ref={sectionRef}
      id="trust"
      className="relative overflow-hidden bg-gradient-to-b from-[hsl(172,20%,96%)] to-[hsl(40,20%,98%)] py-24 md:py-32"
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={reduceMotion ? undefined : { opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container relative z-10 mx-auto px-4">
        {/* Sticky-feel header strip */}
        <div
          ref={stickyRef}
          className="mx-auto mb-16 max-w-4xl text-center md:mb-20"
        >
          <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-teal-600">
            Maradi Subbaiah Trust
          </p>
          <h2 className="font-serif text-4xl font-bold text-[hsl(175,35%,14%)] md:text-5xl lg:text-6xl">
            Trust Organization
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-amber-500" />
          <p className="mt-6 font-sans text-lg leading-relaxed text-muted-foreground">
            Mission-driven service since 1972. Education, yoga, and community at the heart of Bangalore.
          </p>
        </div>

        {/* Trust highlights strip */}
        <div className="mx-auto mb-16 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {trustHighlights.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-2xl border border-[hsl(172,18%,88%)] bg-white px-6 py-4 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/15">
                <item.icon className="h-6 w-6 text-teal-700" />
              </div>
              <div>
                <p className="font-serif font-bold text-[hsl(175,35%,14%)]">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials carousel */}
        <div className="mx-auto max-w-4xl">
          <p className="mb-8 text-center font-sans text-sm font-semibold uppercase tracking-widest text-teal-600">
            Voices from our community
          </p>
          <Carousel
            opts={{
              align: "center",
              loop: true,
              duration: 30,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((t, i) => (
                <CarouselItem
                  key={i}
                  className="pl-2 md:basis-[85%] md:pl-4 lg:basis-[80%]"
                >
                  <motion.div
                    className="rounded-2xl border border-[hsl(172,18%,88%)] bg-white p-8 shadow-sm transition-shadow hover:shadow-md md:p-10"
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Quote className="mb-4 h-10 w-10 text-amber-500/80" />
                    <blockquote className="font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
                      &quot;{t.quote}&quot;
                    </blockquote>
                    <footer className="mt-6 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-teal-500/15 flex items-center justify-center font-serif text-sm font-bold text-teal-700">
                        {t.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-[hsl(175,35%,14%)]">{t.author}</p>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                      </div>
                    </footer>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-2 border-[hsl(172,18%,88%)] bg-white hover:bg-teal-500/10 hover:text-teal-700 md:-left-4" />
            <CarouselNext className="-right-2 border-[hsl(172,18%,88%)] bg-white hover:bg-teal-500/10 hover:text-teal-700 md:-right-4" />
          </Carousel>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="#about-trust"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-teal-600 px-6 py-3 font-semibold text-teal-700 transition-colors hover:bg-teal-500/10"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about-trust")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About the Trust
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
