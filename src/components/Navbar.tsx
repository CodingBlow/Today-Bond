import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  LogOut,
  ChevronDown,
  Sun,
  Moon,
} from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { useAuthStore } from "../store/authStore";
import { useThemeContext } from "../providers/ThemeProvider";
import Logo from "../assets/Logo-Today1.png";

// Navigation links array for reusability
const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Shop", path: "/shop" },
  { name: "Contact", path: "/contact" },
  { name: "How to Use", path: "/HOW-TO-USE" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.items);
  const cartItemsCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const { isAuthenticated, user, logout } = useAuthStore();
  const { theme, toggleTheme } = useThemeContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
    setSearchQuery("");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav
    className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-yellow-500/80 shadow-lg"
        : "bg-white/90 backdrop-blur-sm"
    }`}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link
            to="/"
            className="transform hover:scale-105 transition-transform duration-200"
          >
            <img
              src={Logo}
              alt="Today Bond Logo"
              className="h-20 w-auto"
            />
          </Link>
        </div>
  
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-gray-800 font-semibold transition-colors duration-200 relative group ${
                isScrolled ? "hover:text-white" : "hover:text-green-600"
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 w-full h-1 ${
                  isScrolled ? "bg-white" : "bg-green-600"
                } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200`}
              />
            </Link>
          ))}
        </div>
  
        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-200 ${
              isScrolled ? "hover:bg-gray-800" : "hover:bg-green-100"
            }`}
          >
            {theme === "dark" ? (
              <Sun
                className={`h-6 w-6 ${
                  isScrolled ? "text-white" : "text-yellow-400"
                }`}
              />
            ) : (
              <Moon className="h-6 w-6 text-gray-800" />
            )}
          </button>
  
          {/* Cart */}
          <Link
            to="/cart"
            className={`relative p-2 rounded-full transition-colors duration-200 ${
              isScrolled ? "hover:bg-gray-800" : "hover:bg-yellow-100"
            }`}
          >
            <ShoppingCart
              className={`h-6 w-6 ${
                isScrolled ? "text-white" : "text-gray-800"
              }`}
            />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                {cartItemsCount}
              </span>
            )}
          </Link>
  
          {/* User Menu */}
          {isAuthenticated ? (
            <div className="relative group">
              <button
                className={`flex items-center space-x-2 p-2 rounded-full transition-colors duration-200 ${
                  isScrolled ? "hover:bg-gray-800" : "hover:bg-green-100"
                }`}
              >
                <User
                  className={`h-6 w-6 ${
                    isScrolled ? "text-white" : "text-gray-800"
                  }`}
                />
                <span
                  className={`text-sm hidden md:block ${
                    isScrolled ? "text-white" : "text-gray-700"
                  }`}
                >
                  {user?.name}
                </span>
                <ChevronDown
                  className={`h-4 w-4 ${
                    isScrolled ? "text-white" : "text-gray-800"
                  }`}
                />
              </button>
              <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-lg shadow-xl border border-gray-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <button
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign out
                </button>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className={`flex items-center space-x-2 p-2 rounded-full transition-colors duration-200 ${
                isScrolled ? "hover:bg-gray-800" : "hover:bg-green-100"
              }`}
            >
              <User
                className={`h-6 w-6 ${
                  isScrolled ? "text-white" : "text-gray-800"
                }`}
              />
              <span
                className={`hidden md:block ${
                  isScrolled ? "text-white" : "text-gray-800"
                }`}
              >
                Sign in
              </span>
            </Link>
          )}
  
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-full transition-colors duration-200 ${
              isScrolled ? "hover:bg-gray-800" : "hover:bg-green-100"
            }`}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-white" : "text-gray-800"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-white" : "text-gray-800"}`} />
            )}
          </button>
        </div>
      </div>
    </div>
  </nav>
  

  );
}
