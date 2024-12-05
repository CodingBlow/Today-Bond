import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

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
  {
    id: 4,
    name: "Ravi Verma",
    role: "Construction Manager",
    content: "I rely on Today Bond for my construction projects. The adhesion is phenomenal and consistent.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Customer Success Stories
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm">
            Discover why professionals and enthusiasts trust our products
          </p>
        </div>

        {/* Swiper for Automatic Sliding */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2} // Show 2 testimonials at once
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          centeredSlides={true}
          className="swiper-container"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 max-w-md mx-auto">
                <div className="relative">
                  <Quote className="absolute top-0 left-0 h-6 w-6 text-blue-100 dark:text-blue-900 -translate-x-2 -translate-y-2" />
                  <div className="flex items-center mb-4">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5 shadow-lg">
                        <div className="bg-green-500 w-2.5 h-2.5 rounded-full"></div>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-200 dark:text-gray-700"}`}
                      fill="currentColor"
                    />
                  ))}
                </div>

                <blockquote className="text-xs text-gray-600 dark:text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </blockquote>

                <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Verified Customer</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
