import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import banner1Desktop from "../assets/slider/3ab.jpg";
import banner2Desktop from "../assets/slider/2ab.jpg";
import banner3Desktop from "../assets/slider/1ab.jpg";
import banner1Mobile from "../assets/slider/3ab.jpg";
import banner2Mobile from "../assets/slider/2ab.jpg";
import banner3Mobile from "../assets/slider/1ab.jpg";

const Hero = () => {
  // Desktop slides
  const desktopSlides = [
    { image: banner1Desktop },
    { image: banner2Desktop },
    { image: banner3Desktop },
  ];

  // Mobile slides
  const mobileSlides = [
    { image: banner1Mobile },
    { image: banner2Mobile },
    { image: banner3Mobile },
  ];

  return (
    <section className="w-screen overflow-hidden relative bg-white">
      {/* Desktop Slider */}
      <div className="hidden md:block w-full h-full">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="w-full"
        >
          {desktopSlides.map((slide, index) => (
            <SwiperSlide key={index} className="w-full relative bg-white">
              <div className="w-2170px h-[600px] lg:h-[600px]">
                <img
                  src={slide.image}
                  alt={`Desktop Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile Slider */}
      <div className="block md:hidden w-80% h-90% bg-white">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="w-full"
        >
          {mobileSlides.map((slide, index) => (
            <SwiperSlide key={index} className="w-full relative bg-white">
              <div className="w-full h-48 sm:h-64">
                <img
                  src={slide.image}
                  alt={`Mobile Slide ${index + 1}`}
                  className="w-full h-full object-contain bg-white"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
