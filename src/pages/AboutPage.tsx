import { Award, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import aboutimage from "../assets/slider/4.jpg";
import { useThemeContext } from "../providers/ThemeProvider";

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Our products undergo rigorous testing to ensure consistent performance and durability.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We use only the finest materials and advanced formulations to create superior adhesive solutions.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Your satisfaction drives our innovation. We listen, adapt, and deliver solutions that meet your needs.",
  },
];

export default function AboutPage() {
  const { theme } = useThemeContext(); // Access theme from context

  // Define theme-specific classes for the CTA section
  const ctaBgClass =
    theme === "dark" ? "bg-gray-800 text-white" : "bg-yellow-200 text-gray-900";
  const ctaButtonClass =
    theme === "dark"
      ? "bg-gray-700 text-yellow-400 hover:bg-gray-600"
      : "bg-white text-yellow-600 hover:bg-gray-100";

  return (
    <div className="py-15 bg-white dark:bg-gray-900 transition-colors duration-200">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Today Bond began with a simple mission: to create the strongest,
                most reliable adhesive solutions for every need. What started in
                a small laboratory has grown into a global leader in bonding
                technology.
              </p>
              <p>
                Over five decades, we've continuously innovated and improved our
                formulations, working closely with professionals and DIY
                enthusiasts to understand their needs and challenges.
              </p>
              <p>
                Our commitment to quality and innovation has made us the trusted
                choice for millions of customers worldwide, from craftsmen to
                industrial manufacturers.
              </p>
            </div>
          </div>
          <div className="relative h-96">
            <img
              src={aboutimage}
              alt="Today Bond Laboratory"
              className="absolute inset-0 w-full h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 dark:bg-gray-800 hover:bg-yellow-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400 text-white mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`rounded-2xl p-12 text-center mb-8 transition-all duration-300 ${ctaBgClass}`}
        >
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the difference of professional-grade adhesive solutions
            backed by decades of expertise.
          </p>
          <Link
            to="/shop"
            className={`inline-block px-8 py-3 rounded-full font-semibold transition duration-200 ${ctaButtonClass}`}
          >
            Explore Our Products
          </Link>
        </div>
      </div>
    </div>
  );
}
