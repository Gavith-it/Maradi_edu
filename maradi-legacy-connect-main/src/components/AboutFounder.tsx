import { motion, useReducedMotion } from "framer-motion";
import founderPortrait from "@/assets/founder-portrait.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const AboutFounder = () => {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.section
      className="py-24 bg-background"
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Portrait */}
          <motion.div className="relative" variants={fadeInUp}>
            <div className="heritage-card rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={founderPortrait}
                alt="Maradi Subbaiah - Founder"
                className="w-full h-auto transform transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 warm-gradient rounded-full opacity-20 animate-float" />
            <div
              className="absolute -top-4 -left-4 w-20 h-20 bg-heritage-gold/10 rounded-full animate-float"
              style={{ animationDelay: "2s" }}
            />
          </motion.div>

          {/* Content */}
          <div className="space-y-8">
            <motion.div variants={fadeInUp}>
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-heritage-green mb-6 leading-tight">
                About Our Founder
              </h2>
              <div className="w-24 h-1.5 bg-heritage-gold rounded-full" />
            </motion.div>

            <motion.div className="space-y-4" variants={fadeInUp}>
              <h3 className="font-serif text-2xl font-semibold text-heritage-maroon">
                Sri Maradi Subbaiah
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                A visionary educator and philanthropist who established the Maradi Subbaiah Trust in
                1972 with a mission to serve society through quality education and cultural
                preservation.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                His philosophy of blending traditional values with modern education has shaped
                generations of students and continues to guide our institutions today.
              </p>
            </motion.div>

            {/* Timeline Highlights */}
            <motion.div className="pt-6" variants={fadeInUp}>
              <h4 className="font-semibold text-heritage-green mb-4">Legacy Highlights</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-heritage-green/5 transition-colors">
                  <div className="w-3 h-3 bg-heritage-gold rounded-full shadow-lg" />
                  <span className="text-muted-foreground">1972 - Established Maradi Subbaiah Trust</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-heritage-green/5 transition-colors">
                  <div className="w-3 h-3 bg-heritage-gold rounded-full shadow-lg" />
                  <span className="text-muted-foreground">Founded Sri Maradi Subbaya Vidya Kendra</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-heritage-green/5 transition-colors">
                  <div className="w-3 h-3 bg-heritage-gold rounded-full shadow-lg" />
                  <span className="text-muted-foreground">Established community wedding halls</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-heritage-green/5 transition-colors">
                  <div className="w-3 h-3 bg-heritage-gold rounded-full shadow-lg" />
                  <span className="text-muted-foreground">50+ years of continuous service</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutFounder;
