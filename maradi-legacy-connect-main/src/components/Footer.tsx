import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Calendar, Users, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import siteLogo from "@/assets/WhatsApp Image 2026-02-01 at 12.45.21.jpeg";

const Footer = () => {
  return (
    <footer className="bg-heritage-green text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          
          {/* Trust Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-white/95 rounded-full p-2 shadow-lg">
                <img 
                  src={siteLogo} 
                  alt="Sri Maradi Subbiah Trust Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold">Maradi Subbaiah Trust</h3>
            </div>
            
            <p className="text-gray-100 leading-relaxed mb-8 text-lg font-light max-w-md">
              For over five decades, we have been dedicated to serving our community through 
              quality education, cultural preservation, and social service initiatives that 
              create lasting positive impact in Bangalore.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-heritage-gold flex-shrink-0" />
                <span className="text-gray-100">+91 80 2XXX XXXX</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-heritage-gold flex-shrink-0" />
                <span className="text-gray-100">info@maradisubbaiahtrust.org</span>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-heritage-gold mt-1 flex-shrink-0" />
                <span className="text-gray-100">Hanumantha Nagar, Bangalore - 560019</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-heritage-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-100 hover:text-heritage-gold transition-colors duration-300 flex items-center gap-2 group">Home</Link></li>
              <li><Link to="/education" className="text-gray-100 hover:text-heritage-gold transition-colors duration-300 flex items-center gap-2 group">Education</Link></li>
              <li><Link to="/yoga" className="text-gray-100 hover:text-heritage-gold transition-colors duration-300 flex items-center gap-2 group">Yoga Center</Link></li>
              <li><Link to="/trust" className="text-gray-100 hover:text-heritage-gold transition-colors duration-300 flex items-center gap-2 group">
                Trust & About
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link></li>
              <li><Link to="/contact" className="text-gray-100 hover:text-heritage-gold transition-colors duration-300 flex items-center gap-2 group">
                Contact Us
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link></li>
            </ul>
          </div>

          {/* Services & Actions */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-heritage-gold mb-6">Services</h4>
            <ul className="space-y-3 mb-8">
              <li><Link to="/education" className="text-gray-100 hover:text-heritage-gold transition-colors duration-300">School Admissions</Link></li>
              <li><Link to="/yoga" className="text-gray-100 hover:text-heritage-gold transition-colors duration-300">Venue Bookings</Link></li>
              <li><Link to="/contact" className="text-gray-100 hover:text-heritage-gold transition-colors duration-300">Donations</Link></li>
              <li><Link to="/contact" className="text-gray-100 hover:text-heritage-gold transition-colors duration-300">Volunteer</Link></li>
              <li><Link to="/trust" className="text-gray-100 hover:text-heritage-gold transition-colors duration-300">Alumni & Gallery</Link></li>
            </ul>

            {/* CTA Button */}
            <Button asChild variant="accent" className="bg-heritage-gold hover:bg-heritage-gold/90 text-heritage-dark font-semibold">
              <Link to="/contact">Support Our Mission</Link>
            </Button>
          </div>

        </div>

        {/* Stats Section */}
        <div className="border-t border-heritage-dark mt-16 pt-12">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-heritage-gold" />
                <span className="text-3xl font-bold text-heritage-gold">52</span>
              </div>
              <span className="text-gray-100 text-sm">Years of Service</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-heritage-gold" />
                <span className="text-3xl font-bold text-heritage-gold">10K+</span>
              </div>
              <span className="text-gray-100 text-sm">Students Educated</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-heritage-gold" />
                <span className="text-3xl font-bold text-heritage-gold">5K+</span>
              </div>
              <span className="text-gray-100 text-sm">Events Hosted</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-5 h-5 text-heritage-gold" />
                <span className="text-3xl font-bold text-heritage-gold">100%</span>
              </div>
              <span className="text-gray-100 text-sm">Community Focused</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-heritage-dark pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-heritage-gold font-semibold text-lg">Since 1972</span>
                <span className="text-gray-100">•</span>
                <span className="text-gray-100">Trusted Legacy</span>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-gray-100 mb-2">
                © 2024 Maradi Subbaiah Trust. All rights reserved.
              </p>
              <p className="text-gray-300 text-sm">
                Trust Registration: [Registration Number] | Committed to Transparency & Accountability
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;