import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import schoolClassroom from "@/assets/school-classroom.jpg";
import heroCampus from "@/assets/hero-campus.jpg";
import weddingHall from "@/assets/wedding-hall.jpg";

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

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const reduceMotion = useReducedMotion() ?? false;

  const galleryItems = [
    {
      image: schoolClassroom,
      title: "Excellence in Education",
      description:
        "Modern classrooms fostering academic excellence and character development",
      category: "Education",
    },
    {
      image: weddingHall,
      title: "Traditional Wedding Venues",
      description: "Elegant mantapas perfect for your special celebrations",
      category: "Venues",
    },
    {
      image: heroCampus,
      title: "Cultural Preservation",
      description: "Keeping our rich heritage alive through traditional ceremonies",
      category: "Culture",
    },
  ];

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
        "Being part of this trust's cultural programs has helped me stay connected to my roots while embracing modern values.",
      author: "Arjun Kumar",
      role: "Alumni & Volunteer",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [galleryItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <motion.section
      className="py-24 bg-background"
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
            Our Legacy in Pictures
          </h2>
          <div className="w-24 h-1.5 bg-heritage-gold rounded-full mx-auto mb-8" />
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            Explore moments that define our journey of education, celebration, and community
            service.
          </p>
        </motion.div>

        {/* Image Gallery Carousel */}
        <motion.div className="relative max-w-6xl mx-auto mb-20" variants={fadeInUp}>
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={galleryItems[currentSlide].image}
              alt={galleryItems[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-heritage-dark/80 via-heritage-dark/20 to-transparent" />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="max-w-2xl">
                <span className="inline-block bg-heritage-gold/20 backdrop-blur-sm border border-heritage-gold/30 rounded-full px-4 py-2 text-sm font-medium text-heritage-gold mb-4">
                  {galleryItems[currentSlide].category}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  {galleryItems[currentSlide].title}
                </h3>
                <p className="text-lg text-gray-100 font-light">
                  {galleryItems[currentSlide].description}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-heritage-gold" : "bg-heritage-green/30"
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h3 className="font-serif text-4xl font-bold text-heritage-green mb-4">
              Voices from Our Community
            </h3>
            <p className="text-lg text-muted-foreground font-light">
              Hear from those whose lives we&apos;ve touched
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="heritage-card border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <Quote className="w-8 h-8 text-heritage-gold mb-6" />
                    <p className="text-muted-foreground leading-relaxed mb-6 font-light italic">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div>
                      <p className="font-semibold text-heritage-green">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery;
