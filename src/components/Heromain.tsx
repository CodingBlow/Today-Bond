import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Import images (assuming they're in src/assets/slider)
import banner1 from "../assets/slider/d1.jpg";
import banner2 from "../assets/slider/d2.jpg";
import banner3 from "../assets/slider/d3.jpg";

const Hero = () => {
  const slides = [
    { image: banner1 },
    { image: banner2 },
    { image: banner3 },
  ];

  return (
    <section className="relative max-w-[1440px] mx-auto bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={800}
          grabCursor={true}
          loop={true}
          slidesPerView={1}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="w-full hero-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="relative aspect-ratio-container">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="slider-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Add CSS styles within the component */}
      <style>
        {`
          .hero-swiper {
            width: 100%;
            height: 80vh; /* Default height for large screens */
          }

          .aspect-ratio-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          }

          .slider-image {
            width: 100%;
            height: 100%;
            object-fit: cover; /* Default to cover for large screens */
            max-height: 80vh;
          }

          /* Tablet/Intermediate screen styles */
          @media (max-width: 1024px) {
            .hero-swiper {
              height: 40vh; /* Slightly reduced height */
            }

            .slider-image {
              object-fit: contain; /* Ensure no cropping on tablets */
              max-height: 60vh;
            }
          }

          /* Mobile styles */
          @media (max-width: 768px) {
            .hero-swiper {
              height: 25vh; /* Reduced height for smaller screens */
            }

            .slider-image {
              height: 100%;
              object-fit: contain; /* Prevent cropping on smaller screens */
              max-height: 40vh;
            }
          }

          /* Navigation button styles */
          .swiper-button-next,
          .swiper-button-prev {
            color: #ffffff;
            background: rgba(0, 0, 0, 0.5);
            padding: 2rem;
            border-radius: 50%;
            width: 1rem;
            height: 1rem;
          }

          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 1rem;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;

