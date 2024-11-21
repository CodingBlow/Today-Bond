import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  const slides = [
    {
      image: "https://images.pexels.com/photos/1999263/pexels-photo-1999263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Premium Grade Adhesives",
      description: "Engineered for superior bonding performance",
    },
    {
      image: "https://images.pexels.com/photos/326080/pexels-photo-326080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Multi-Surface Solutions",
      description: "Advanced formulations for diverse applications",
    },
    {
      image: "https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Rapid-Set Technology",
      description: "Optimized for maximum efficiency",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-neutral-900 to-neutral-800 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Text Section */}
          <div className="md:w-1/2 text-white text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight bg-gradient-to-r from-red-500 to-amber-500 text-transparent bg-clip-text">
              Innovative Adhesive Solutions
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 mb-6 md:mb-10 leading-relaxed">
              Experience unparalleled bonding performance with our cutting-edge industrial adhesives, meticulously engineered for excellence.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Superior molecular adhesion technology",
                "Advanced rapid-cure formulation",
                "Universal substrate compatibility",
              ].map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 justify-center md:justify-start"
                >
                  <span className="text-red-500 text-2xl">•</span>
                  <p className="text-md md:text-lg font-medium text-neutral-200">
                    {point}
                  </p>
                </div>
              ))}
            </div>
            <button className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold text-sm md:text-lg transition-transform duration-300 transform hover:scale-105 shadow-lg">
              Discover Our Range
            </button>
          </div>

          {/* Right Swiper Section */}
          <div className="md:w-1/2 w-full">
            <Swiper
              spaceBetween={20}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={1000}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 1.2,
                },
                1024: {
                  slidesPerView: 1.5,
                },
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              {slides.map((slide, index) => (
                <SwiperSlide
                  key={index}
                  className="w-full max-w-sm mx-auto h-72 md:h-96 relative"
                >
                  <div className="relative h-full overflow-hidden rounded-xl shadow-2xl group">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:opacity-90 transition-opacity duration-500">
                      <div className="absolute bottom-0 p-4 md:p-6 text-white">
                        <h3 className="text-xl md:text-2xl font-bold mb-1 bg-gradient-to-r from-red-400 to-amber-500 text-transparent bg-clip-text">
                          {slide.title}
                        </h3>
                        <p className="text-sm md:text-base text-neutral-300 font-medium">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply pointer-events-none"></div>
    </section>
  );
};

export default Hero;