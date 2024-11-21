import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="../src/assets/Logo-Today.png"
                  alt="Today Bond Logo"
                  className="h-14 w-auto hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              We offer the fastest bonding agent available on the market,
              designed to save you time and money while enabling you to achieve
              superior results more efficiently.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "Home",
                "Shop",
                "About Us",
                "Contact",
                "Privacy Policy",
                "Terms & Conditions",
                "Returns & Refunds",
                "Shipping & Delivery",
                "Admin Login",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/&/g, "and")}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3 text-blue-500" />
                <span>Kalindi Kunj, Delhi, India 110044</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3 text-blue-500" />
                <span>+91 9389678954</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3 text-blue-500" />
                <span>info@todaybond.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2 text-gray-400">
            <span>© 2024 Today Bond. All Rights Reserved.</span>
            <span className="hidden md:inline">|</span>
            <span>
              Developed by{" "}
              <a
                href="https://zuridox.vercel.app/"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zuridox
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
