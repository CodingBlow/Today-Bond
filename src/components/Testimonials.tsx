import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sunil Kumar",
    role: "DIY Enthusiast",
    content: "Today Bond has been a game-changer for my craft projects. The strength and reliability are unmatched!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Ajay Sharma",
    role: "Professional Carpenter",
    content: "Today Bond has been a game-changer for my craft projects. The strength and reliability are unmatched!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Interior Designer",
    content: "The versatility of Today Bond products makes them essential for both quick fixes and permanent installations.",
    rating: 3,
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Customer Success Stories
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Discover why professionals and enthusiasts trust our products
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative">
                <Quote className="absolute top-0 left-0 h-8 w-8 text-blue-100 dark:text-blue-900 -translate-x-4 -translate-y-4" />
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg">
                      <div className="bg-green-500 w-4 h-4 rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-200 dark:text-gray-700"
                    }`}
                    fill="currentColor"
                  />
                ))}
              </div>

              <blockquote className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Verified Customer
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
