import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiDocumentText,
} from "react-icons/hi";
import logo from "../assets/Logo-Today1.png";
import img1 from "../assets/Product_images/img1.jpg";
import img2 from "../assets/Product_images/img1.jpg";
import img3 from "../assets/Product_images/img1.jpg";
import img4 from "../assets/Product_images/img1.jpg";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/TodayBond/",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/todaybond",
      label: "Instagram",
    },
    {
      icon: <FaYoutube />,
      url: "https://www.youtube.com/@todaybond",
      label: "YouTube",
    },
  ];

  const companyLinks = [
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Terms & Conditions", url: "/terms-and-conditions" },
    { name: "Returns & Refunds", url: "/returns-and-refunds" },
    { name: "Shipping & Delivery", url: "/shipping-and-delivery" },
    { name: "Admin Login", url: "/admin-login" },
  ];

  const instagramImages = [
    { src: img1, url: "https://instagram.com/post1" },
    { src: img2, url: "https://instagram.com/post2" },
    { src: img3, url: "https://instagram.com/post3" },
    { src: img4, url: "https://instagram.com/post4" },
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Company Logo" className="w-40 mb-4" />
            <p className="text-white text-sm mt-4 mb-6">
              We offer the fastest bonding agent available on the market,
              designed to save you time and money while enabling you to achieve
              superior results more efficiently.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="text-white hover:text-yellow-400 transition-colors"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <HiLocationMarker className="mt-1 flex-shrink-0 text-yellow-400" />
                <span>
                  C/10, G.F., DLF, Dilshad Extension 2, Uttar Pradesh 201005
                  (India)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <HiPhone className="flex-shrink-0 text-yellow-400" />
                <a
                  href="tel:+919910829792"
                  className="hover:text-white transition-colors"
                >
                  +91-9910829792
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <HiPhone className="flex-shrink-0 text-yellow-400" />
                <a
                  href="tel:+919582976062"
                  className="hover:text-white transition-colors"
                >
                  +91-9582976062
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <HiMail className="flex-shrink-0 text-yellow-400" />
                <a
                  href="mailto:todaybondproduct@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  todaybondproduct@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <HiDocumentText className="flex-shrink-0 text-yellow-400" />
                <span>09LGDPK7641B1ZA</span>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Company Info
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {companyLinks.map((link, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Instagram Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Follow Us on Instagram
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {instagramImages.map((image, index) => (
                <a
                  key={index}
                  href={image.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={image.src}
                    alt={`Instagram ${index + 1}`}
                    className="w-full h-24 object-cover rounded-md hover:opacity-90 transition-opacity"
                  />
                </a>
              ))}
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-center bg-yellow-400 text-white hover:bg-white hover:text-yellow-400 font-medium transition-colors py-2 px-6 rounded"
            >
              Visit our Instagram
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Today Bond. All rights reserved.</p>
            <p>
              Developed by{" "}
              <a
                href="https://zuridox.com/"
                className="text-blue-400 hover:text-blue-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zuridox
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
