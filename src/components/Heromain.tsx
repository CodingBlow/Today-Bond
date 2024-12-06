import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Import images (assuming they're in src/assets/slider)
import banner1 from "../assets/slider/1ab.jpg";
import banner2 from "../assets/slider/2ab.jpg";
import banner3 from "../assets/slider/3ab.jpg";

const Hero = () => {
  const slides = [
    { image: banner1 },
    { image: banner2 },
    { image: banner3 },
  ];

  return (
    <section className="relative max-w-[1440px] mx-auto bg-gray-50 dark:bg-gray-900">
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
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative h-[400px] md:h-[600px] overflow-hidden">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
