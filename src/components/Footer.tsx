import { Home, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-navy-deep" />
              </div>
              <span className="text-2xl font-bold">LuxeEstate</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Your trusted partner in finding the perfect luxury property. 
              We specialize in premium real estate solutions that exceed expectations.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold-primary hover:text-navy-deep transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold-primary hover:text-navy-deep transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold-primary hover:text-navy-deep transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold-primary hover:text-navy-deep transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gold-primary">Quick Links</h3>
            <nav className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "Properties", href: "#properties" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Contact", href: "#contact" },
                { name: "Blog", href: "#blog" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-white/80 hover:text-gold-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gold-primary">Our Services</h3>
            <nav className="space-y-2">
              {[
                "Property Sales",
                "Property Rentals",
                "Investment Consulting",
                "Property Management",
                "Market Analysis",
                "Legal Assistance",
              ].map((service) => (
                <span
                  key={service}
                  className="block text-white/80 hover:text-gold-primary transition-colors duration-200 cursor-pointer"
                >
                  {service}
                </span>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gold-primary">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-primary mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  123 Luxury Avenue<br />
                  Manhattan, NY 10001<br />
                  United States
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-primary flex-shrink-0" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-primary flex-shrink-0" />
                <span className="text-white/80">info@luxeestate.com</span>
              </div>
            </div>

            {/* Business Hours */}
            <div className="pt-4">
              <h4 className="font-semibold text-gold-primary mb-2">Business Hours</h4>
              <div className="text-white/80 text-sm space-y-1">
                <div>Monday - Friday: 9:00 AM - 7:00 PM</div>
                <div>Saturday: 10:00 AM - 5:00 PM</div>
                <div>Sunday: 12:00 PM - 4:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-white/80 mb-6">
              Subscribe to our newsletter for the latest property listings and market insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gold-primary"
              />
              <button className="px-6 py-3 bg-gradient-gold text-navy-deep font-semibold rounded-lg hover:shadow-gold transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 LuxeEstate. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-gold-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-gold-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-gold-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};