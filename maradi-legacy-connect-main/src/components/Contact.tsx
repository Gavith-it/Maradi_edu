import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";

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

const Contact = () => {
  const reduceMotion = useReducedMotion() ?? false;

  const locations = [
    {
      name: "Trust Office & School",
      address: "Hanumantha Nagar, Bangalore - 560019",
      phone: "+91 80 2XXX XXXX",
      email: "info@maradisubbaiahtrust.org",
      timing: "Mon-Fri: 9 AM - 5 PM",
    },
  ];

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
            Contact Us
          </h2>
          <div className="w-24 h-1.5 bg-heritage-gold rounded-full mx-auto mb-8" />
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            We&apos;d love to hear from you. Get in touch for admissions, venue bookings, or to
            learn more about our community services.
          </p>
        </motion.div>

        <div className="grid xl:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="xl:col-span-1 space-y-8">
            <div>
              <h3 className="font-serif text-3xl font-bold text-heritage-maroon mb-8">
                Get in Touch
              </h3>

              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  className="heritage-card p-8 rounded-2xl mb-8 hover:shadow-xl transition-all duration-300"
                  variants={fadeInUp}
                >
                  <h4 className="font-serif text-xl font-semibold text-heritage-green mb-6">
                    {location.name}
                  </h4>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-heritage-gold mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{location.address}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5 text-heritage-gold flex-shrink-0" />
                      <span className="text-muted-foreground">{location.phone}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 text-heritage-gold flex-shrink-0" />
                      <span className="text-muted-foreground">{location.email}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <Clock className="w-5 h-5 text-heritage-gold flex-shrink-0" />
                      <span className="text-muted-foreground">{location.timing}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <motion.div
              className="heritage-card p-8 rounded-2xl bg-heritage-green/5"
              variants={fadeInUp}
            >
              <h4 className="font-serif text-xl font-semibold text-heritage-green mb-6">
                Quick Facts
              </h4>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Established</span>
                  <span className="font-semibold text-heritage-green">1972</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Students Served</span>
                  <span className="font-semibold text-heritage-green">10,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Events Hosted</span>
                  <span className="font-semibold text-heritage-green">5,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Trust Registration</span>
                  <span className="font-semibold text-heritage-green">Active</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div id="contact-form" className="xl:col-span-2" variants={fadeInUp}>
            <div className="heritage-card p-10 rounded-2xl">
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="w-8 h-8 text-heritage-green" />
                <h3
                  id="send-message"
                  className="font-serif text-3xl font-bold text-heritage-maroon"
                >
                  Send us a Message
                </h3>
              </div>

              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-heritage-green font-medium">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Your first name"
                      className="h-12 border-heritage-green/20 focus:border-heritage-green"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-heritage-green font-medium">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Your last name"
                      className="h-12 border-heritage-green/20 focus:border-heritage-green"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-heritage-green font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="h-12 border-heritage-green/20 focus:border-heritage-green"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-heritage-green font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="h-12 border-heritage-green/20 focus:border-heritage-green"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-heritage-green font-medium">
                    Subject *
                  </Label>
                  <Select>
                    <SelectTrigger className="h-12 border-heritage-green/20 focus:border-heritage-green">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admissions">School Admissions</SelectItem>
                      <SelectItem value="venue">Venue Booking</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="donations">Donations & Support</SelectItem>
                      <SelectItem value="alumni">Alumni Network</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-heritage-green font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us how we can help you. Please include any specific details about your inquiry..."
                    className="border-heritage-green/20 focus:border-heritage-green resize-none"
                  />
                </div>

                <Button variant="heritage" size="lg" className="w-full py-4 text-lg font-semibold">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Quick Action Buttons */}
        <motion.div className="text-center mt-20" variants={fadeInUp}>
          <h4 className="font-serif text-2xl font-semibold text-heritage-green mb-8">
            Quick Actions
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="border-heritage-green text-heritage-green hover:bg-heritage-green hover:text-white"
            >
              School Admission Form
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-heritage-maroon text-heritage-maroon hover:bg-heritage-maroon hover:text-white"
            >
              Book Wedding Hall
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-heritage-gold text-heritage-gold hover:bg-heritage-gold hover:text-white"
            >
              Volunteer Registration
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
