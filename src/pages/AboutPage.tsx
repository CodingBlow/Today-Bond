import { Award, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import aboutimage from "../assets/aboutimage1.jpg"

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
  return (
    <div className="py-15 bg-white dark:bg-gray-900 transition-colors duration-200">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          {/* <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Today Bond
          </h1> */}
          {/* <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leading the industry in innovative adhesive solutions since 1970
          </p> */}
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
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
              className="absolute inset-0 w-full h-full object-fit rounded-lg shadow-lg"
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
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the difference of professional-grade adhesive solutions
            backed by decades of expertise.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-200"
          >
            Explore Our Products
          </Link>
        </div>
      </div>
    </div>
  );
}
