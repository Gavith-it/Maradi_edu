import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import heroCampusImage from "@/assets/hero-campus.jpg";
import siteLogo from "@/assets/WhatsApp Image 2026-02-01 at 12.45.21.jpeg";

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const meshRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const rightScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);
  const meshOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const noMotion = !!prefersReducedMotion;

  useEffect(() => {
    if (noMotion) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", delay: 0.4 }
      );
      gsap.fromTo(
        titleRef.current?.querySelectorAll("span") || [],
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out", delay: 0.5 }
      );
      if (meshRef.current) {
        gsap.fromTo(
          meshRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.3 }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, [noMotion]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col lg:flex-row items-stretch overflow-hidden bg-[hsl(175,35%,14%)]"
    >
      {/* Animated gradient mesh background */}
      <div
        ref={meshRef}
        className="absolute inset-0 opacity-90"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, hsl(38 92% 50% / 0.18) 0%, transparent 50%),
            radial-gradient(ellipse 60% 80% at 80% 20%, hsl(172 42% 35% / 0.25) 0%, transparent 45%),
            radial-gradient(ellipse 50% 50% at 70% 80%, hsl(12 55% 38% / 0.12) 0%, transparent 50%),
            linear-gradient(180deg, hsl(175 35% 14%) 0%, hsl(172 42% 18%) 100%)
          `,
        }}
        aria-hidden
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={noMotion ? undefined : { opacity: meshOpacity }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-[hsl(175,35%,14%)]" />
      </motion.div>

      {/* Left: Content - split layout */}
      <motion.div
        ref={leftRef}
        className="relative z-10 flex flex-col justify-center px-6 py-20 lg:px-16 xl:px-24 lg:w-[55%]"
        style={noMotion ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-xl lg:max-w-2xl space-y-8">
          {/* Logo + badge row */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-white/95 p-2 shadow-xl border border-amber-400/30">
              <img src={siteLogo} alt="Maradi Subbaiah Trust" className="w-full h-full object-contain" />
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm font-medium text-white/90">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Since 1972 · Education · Yoga · Community
            </span>
          </div>

          <h1 ref={titleRef} className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-white">
            <span className="block">Empowering</span>
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
              Generations
            </span>
            <span className="block mt-1">Through Education & Service</span>
          </h1>

          <p className="text-lg text-white/80 font-light max-w-md">
            Quality education, yoga & wellness, and community service in Bangalore for over five decades.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="gold"
              size="lg"
              className="px-8 py-4 text-base font-semibold rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900"
              onClick={() => document.getElementById("vidya-kendra")?.scrollIntoView({ behavior: "smooth", block: "center" })}
            >
              Our Schools
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-base font-semibold rounded-xl border-2 border-amber-400/60 text-amber-400 hover:bg-amber-400/20"
              onClick={() => document.getElementById("yoga-kendra")?.scrollIntoView({ behavior: "smooth", block: "center" })}
            >
              Yoga Centre
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="px-8 py-4 text-base font-semibold rounded-xl text-white/90 hover:bg-white/10"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "center" })}
            >
              Contact
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Right: Image panel - scroll parallax */}
      <motion.div
        ref={rightRef}
        className="relative z-10 hidden lg:flex lg:w-[45%] items-center justify-center p-8 xl:p-12"
        style={noMotion ? undefined : { scale: rightScale }}
      >
        <div className="relative w-full max-w-lg aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-2 ring-white/10 ring-offset-2 ring-offset-[hsl(175,35%,14%)]">
          <img
            src={heroCampusImage}
            alt="Maradi Subbaiah Trust - Education and Community"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(175,35%,14%)]/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="font-serif text-xl font-semibold">50+ Years of Excellence</p>
            <p className="text-sm text-white/80">Bangalore · Since 1972</p>
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-[1]" />
    </section>
  );
};

export default HeroSection;
