
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-emerald-900 font-bold text-xl">C2C</span>
              </div>
              <div>
                <div className="text-xl font-bold">C2C Core</div>
                <div className="text-sm text-emerald-300">Create to Critique</div>
              </div>
            </div>
            <p className="text-emerald-200 mb-4">
              Empowering businesses through innovative products and comprehensive project management solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-emerald-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-emerald-200 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-emerald-200 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/projects" className="text-emerald-200 hover:text-white transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Our Divisions</h3>
            <ul className="space-y-2 text-emerald-200">
              <li>Product Development</li>
              <li>Software Solutions</li>
              <li>Project Management</li>
              <li>Real Estate</li>
              <li>Corporate Events</li>
              <li>Wedding Planning</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <a href="mailto:contact@createtocritiquecore.com" className="text-emerald-200 hover:text-white transition-colors">
                  contact@createtocritiquecore.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <a href="tel:+918072862654" className="text-emerald-200 hover:text-white transition-colors">
                  +91-807-286-2654
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-1" />
                <div className="text-emerald-200">
                  <div>Headquarters: Coimbatore, India</div>
                  <div className="text-sm mt-1">Also in: Chennai, Bengaluru, Dubai, Singapore</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-emerald-300 text-sm">
            © 2024 C2C Core. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-emerald-300 text-sm">Follow us:</span>
            <div className="flex items-center space-x-2">
              <Linkedin className="h-5 w-5 text-emerald-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
