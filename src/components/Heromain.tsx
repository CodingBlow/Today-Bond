import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import banner1Desktop from "../assets/1stHeroBannerDesktop.png";
import banner2Desktop from "../assets/1stHeroBannerDesktop.png";
import banner3Desktop from "../assets/1stHeroBannerDesktop.png";
import banner1Mobile from "../assets/1stHeroBannerDesktop.png";
import banner2Mobile from "../assets/1stHeroBannerMobile.png";
import banner3Mobile from "../assets/1stHeroBannerMobile.png";

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
    <section className="w-screen overflow-hidden relative">
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
            <SwiperSlide key={index} className="w-full relative">
              <div className="w-full h-[500px] lg:h-[600px]">
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
      <div className="block md:hidden w-80% h-90%">
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
            <SwiperSlide key={index} className="w-full relative">
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
