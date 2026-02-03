import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  MapPin,
  Star,
  Users,
  Building,
  Clock,
  Flower,
} from "lucide-react";
import weddingHallImage from "@/assets/wedding-hall.jpg";
import TiltCard from "@/components/TiltCard";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const OurInstitutions = () => {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.section
      className="py-32 bg-background"
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-24"
          variants={fadeInUp}
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-heritage-green mb-8">
            Our Institutions
          </h2>
          <div className="w-24 h-1.5 bg-heritage-gold rounded-full mx-auto mb-8" />
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            Discover our world-class educational and community facilities that have been the
            cornerstone of excellence in Bangalore for over five decades.
          </p>
        </motion.div>

        {/* School Section - TiltCard */}
        <motion.div id="vidya-kendra" className="max-w-6xl mx-auto mb-20" variants={fadeInUp}>
          <TiltCard className="p-12 rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-heritage-green/10 rounded-2xl flex items-center justify-center">
                    <GraduationCap className="w-10 h-10 text-heritage-green" />
                  </div>
                  <div>
                    <h3 className="font-serif text-4xl font-bold text-heritage-maroon mb-2">
                      Sri Maradi Subbaya Vidya Kendra
                    </h3>
                    <p className="text-heritage-green font-medium text-lg">
                      Excellence in Education Since 1972
                    </p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our premier educational institution combines academic rigor with character
                  development, nurturing well-rounded individuals who excel academically while
                  staying rooted in values and cultural heritage.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-heritage-green/5 rounded-xl border border-heritage-green/10">
                    <Star className="w-6 h-6 text-heritage-gold mb-2" />
                    <div className="font-semibold text-heritage-green mb-1">CBSE Curriculum</div>
                    <div className="text-sm text-muted-foreground">Modern Education Standards</div>
                  </div>
                  <div className="p-4 bg-heritage-green/5 rounded-xl border border-heritage-green/10">
                    <Users className="w-6 h-6 text-heritage-gold mb-2" />
                    <div className="font-semibold text-heritage-green mb-1">500+ Students</div>
                    <div className="text-sm text-muted-foreground">Growing Community</div>
                  </div>
                </div>

                <Button variant="heritage" size="lg" className="w-full lg:w-auto px-8 py-4 text-lg">
                  Learn About Admissions
                </Button>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-heritage-green/5 border border-heritage-green/10">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 bg-heritage-green/10 rounded-full flex items-center justify-center mx-auto">
                        <GraduationCap className="w-12 h-12 text-heritage-green" />
                      </div>
                      <p className="text-muted-foreground">School Campus Image</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Wedding Halls Section - TiltCard */}
        <motion.div className="max-w-6xl mx-auto mb-20" variants={fadeInUp}>
          <TiltCard className="p-12 rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-heritage-maroon/10 rounded-2xl flex items-center justify-center">
                    <Building className="w-10 h-10 text-heritage-maroon" />
                  </div>
                  <div>
                    <h3 className="font-serif text-4xl font-bold text-heritage-maroon mb-2">
                      Kalyana Mantapa Venues
                    </h3>
                    <p className="text-heritage-green font-medium text-lg">
                      Traditional Elegance for Your Special Day
                    </p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Experience the perfect blend of traditional architecture and modern amenities. Our
                  beautifully designed mantapas provide an elegant backdrop for weddings, cultural
                  ceremonies, and community celebrations.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-heritage-maroon/5 rounded-xl border border-heritage-maroon/10">
                    <MapPin className="w-6 h-6 text-heritage-gold mb-2" />
                    <div className="font-semibold text-heritage-green mb-1">Hanumantha Nagar</div>
                    <div className="text-sm text-muted-foreground">200-300 guests capacity</div>
                  </div>
                  <div className="p-4 bg-heritage-maroon/5 rounded-xl border border-heritage-maroon/10">
                    <Clock className="w-6 h-6 text-heritage-gold mb-2" />
                    <div className="font-semibold text-heritage-green mb-1">Full Day Events</div>
                    <div className="text-sm text-muted-foreground">Flexible timing options</div>
                  </div>
                </div>

                <Button variant="gold" size="lg" className="w-full lg:w-auto px-8 py-4 text-lg">
                  Book Your Event
                </Button>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={weddingHallImage}
                    alt="Traditional Wedding Hall"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Yoga Kendra Section - TiltCard */}
        <motion.div id="yoga-kendra" className="max-w-6xl mx-auto" variants={fadeInUp}>
          <TiltCard className="p-12 rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-heritage-gold/10 rounded-2xl flex items-center justify-center">
                    <Flower className="w-10 h-10 text-heritage-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-4xl font-bold text-heritage-maroon mb-2">
                      Maradi Subbaiah Yoga Kendra
                    </h3>
                    <p className="text-heritage-green font-medium text-lg">
                      Holistic Wellness & Spiritual Growth
                    </p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Traditional yoga and meditation programs promoting physical health, mental clarity,
                  and spiritual growth through ancient wisdom guided by experienced instructors in a
                  peaceful, traditional setting.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-heritage-gold/5 rounded-xl border border-heritage-gold/10">
                    <Clock className="w-6 h-6 text-heritage-gold mb-2" />
                    <div className="font-semibold text-heritage-green mb-1">Daily Classes</div>
                    <div className="text-sm text-muted-foreground">Morning & Evening sessions</div>
                  </div>
                  <div className="p-4 bg-heritage-gold/5 rounded-xl border border-heritage-gold/10">
                    <Users className="w-6 h-6 text-heritage-gold mb-2" />
                    <div className="font-semibold text-heritage-green mb-1">All Ages Welcome</div>
                    <div className="text-sm text-muted-foreground">Beginner to Advanced</div>
                  </div>
                </div>

                <Button variant="gold" size="lg" className="w-full lg:w-auto px-8 py-4 text-lg">
                  Join Yoga Classes
                </Button>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-heritage-gold/5 border border-heritage-gold/10">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 bg-heritage-gold/10 rounded-full flex items-center justify-center mx-auto">
                        <Flower className="w-12 h-12 text-heritage-gold" />
                      </div>
                      <p className="text-muted-foreground">Yoga Center Image</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurInstitutions;
