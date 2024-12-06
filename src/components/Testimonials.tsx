import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "Sunil Kumar",
    role: "DIY Enthusiast",
    content:
      "Today Bond has been a game-changer for my craft projects. The strength and reliability are unmatched!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    id: 2,
    name: "Ajay Sharma",
    role: "Professional Carpenter",
    content:
      "Today Bond has been a game-changer for my craft projects. The strength and reliability are unmatched!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Interior Designer",
    content:
      "The versatility of Today Bond products makes them essential for both quick fixes and permanent installations.",
    rating: 3,
    image: "https://randomuser.me/api/portraits/women/84.jpg",
  },
  {
    id: 4,
    name: "Ravi Verma",
    role: "Construction Manager",
    content:
      "I rely on Today Bond for my construction projects. The adhesion is phenomenal and consistent.",
    rating: 5,
    image:
      "https://img.freepik.com/free-photo/indian-man-city-male-traditional-turban-hinduist-summer-city_1157-41030.jpg?t=st=1733499334~exp=1733502934~hmac=74f2da97f4d52bb436711eae2322c0efd79a1ea17f797689ee09f0730b35c201&w=360",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r text-yellow-500 bg-clip-text text-transparent">
            Customer Success Stories
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
            Discover why professionals and enthusiasts trust our products
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="swiper-container"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 max-w-md mx-auto">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full rounded-full object-cover border-2 border-blue-500"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-700"
                      }`}
                      fill="currentColor"
                    />
                  ))}
                </div>

                <blockquote className="text-sm text-gray-600 dark:text-gray-300 mb-4 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                <div className="text-right">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Verified Customer
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
