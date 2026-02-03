import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Heart,
  Users,
  Award,
  Target,
  Lightbulb,
  Flower,
} from "lucide-react";
import TiltCard from "@/components/TiltCard";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const colorClasses = {
  "heritage-green": {
    bg: "bg-heritage-green/10",
    bgHover: "group-hover:bg-heritage-green/20",
    icon: "text-heritage-green",
    dot: "bg-heritage-green",
    border: "border-heritage-green",
    button: "border-heritage-green text-heritage-green hover:bg-heritage-green hover:text-white",
  },
  "heritage-maroon": {
    bg: "bg-heritage-maroon/10",
    bgHover: "group-hover:bg-heritage-maroon/20",
    icon: "text-heritage-maroon",
    dot: "bg-heritage-maroon",
    border: "border-heritage-maroon",
    button: "border-heritage-maroon text-heritage-maroon hover:bg-heritage-maroon hover:text-white",
  },
  "heritage-gold": {
    bg: "bg-heritage-gold/10",
    bgHover: "group-hover:bg-heritage-gold/20",
    icon: "text-heritage-gold",
    dot: "bg-heritage-gold",
    border: "border-heritage-gold",
    button: "border-heritage-gold text-heritage-gold hover:bg-heritage-gold hover:text-white",
  },
} as const;

const Services = () => {
  const reduceMotion = useReducedMotion() ?? false;

  const services = [
    {
      icon: BookOpen,
      title: "Quality Education",
      description:
        "Comprehensive CBSE education fostering academic excellence, critical thinking, and character development in a nurturing environment.",
      features: ["CBSE Curriculum", "Expert Faculty", "Modern Labs", "Sports & Arts"],
      color: "heritage-green" as const,
    },
    {
      icon: Heart,
      title: "Community Venues",
      description:
        "Elegant traditional halls perfect for weddings, cultural celebrations, and community gatherings with authentic décor and modern facilities.",
      features: [
        "Wedding Ceremonies",
        "Cultural Events",
        "Corporate Meetings",
        "Social Gatherings",
      ],
      color: "heritage-maroon" as const,
    },
    {
      icon: Flower,
      title: "Yoga & Wellness",
      description:
        "Traditional yoga and meditation programs promoting physical health, mental clarity, and spiritual growth for all age groups.",
      features: ["Hatha Yoga", "Meditation Classes", "Pranayama", "Therapeutic Yoga"],
      color: "heritage-gold" as const,
    },
    {
      icon: Users,
      title: "Cultural Preservation",
      description:
        "Dedicated programs to preserve and promote our rich cultural heritage through traditional arts, ceremonies, and community initiatives.",
      features: [
        "Religious Programs",
        "Traditional Arts",
        "Cultural Education",
        "Heritage Events",
      ],
      color: "heritage-green" as const,
    },
  ];

  return (
    <motion.section
      className="py-24 warm-gradient"
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          variants={fadeInUp}
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-heritage-green mb-8">
            Our Services
          </h2>
          <div className="w-24 h-1.5 bg-heritage-gold rounded-full mx-auto mb-8" />
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            Comprehensive services designed to strengthen our community through education,
            celebration, and cultural preservation.
          </p>
        </motion.div>

        {/* Services Grid - TiltCard */}
        <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => {
            const c = colorClasses[service.color];
            return (
              <motion.div key={index} variants={fadeInUp}>
                <TiltCard className="p-8 rounded-2xl text-center group h-full flex flex-col">
                  <div
                    className={`w-20 h-20 ${c.bg} ${c.bgHover} rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110`}
                  >
                    <service.icon className={`w-10 h-10 ${c.icon}`} />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-heritage-maroon mb-4">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-8 font-light flex-1">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3 text-left"
                      >
                        <div
                          className={`w-2 h-2 ${c.dot} rounded-full flex-shrink-0`}
                        />
                        <span className="text-muted-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className={`${c.button} w-full transition-all duration-300`}>
                    Learn More
                  </Button>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          className="heritage-card p-12 rounded-2xl max-w-6xl mx-auto"
          variants={fadeInUp}
        >
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl font-bold text-heritage-green mb-4">
              Why Choose Maradi Subbaiah Trust?
            </h3>
            <p className="text-lg text-muted-foreground font-light">
              Five decades of proven excellence and community commitment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-heritage-green/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-heritage-green" />
              </div>
              <h4 className="font-serif text-xl font-semibold text-heritage-maroon">
                50+ Years Legacy
              </h4>
              <p className="text-muted-foreground font-light">
                Established reputation for excellence and community service since 1972
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-heritage-maroon/10 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-heritage-maroon" />
              </div>
              <h4 className="font-serif text-xl font-semibold text-heritage-maroon">
                Community Focus
              </h4>
              <p className="text-muted-foreground font-light">
                Dedicated to serving and strengthening our local community bonds
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-heritage-gold/10 rounded-full flex items-center justify-center mx-auto">
                <Lightbulb className="w-8 h-8 text-heritage-gold" />
              </div>
              <h4 className="font-serif text-xl font-semibold text-heritage-maroon">
                Innovation & Tradition
              </h4>
              <p className="text-muted-foreground font-light">
                Perfect balance of modern innovation with timeless traditional values
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div className="text-center mt-16" variants={fadeInUp}>
          <p className="text-xl text-heritage-green font-medium mb-8">
            Ready to be part of our legacy?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="heritage" size="lg" className="px-8 py-4">
              <Link to="/education">School Admissions</Link>
            </Button>
            <Button asChild variant="gold" size="lg" className="px-8 py-4">
              <Link to="/yoga">Join Yoga Classes</Link>
            </Button>
            <Button asChild variant="accent" size="lg" className="px-8 py-4">
              <Link to="/contact">Book Event Space</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
