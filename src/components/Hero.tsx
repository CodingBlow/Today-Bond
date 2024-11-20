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
    <>
      <style>
        {`
          .swiper-slide img {
            transition: transform 0.8s ease, opacity 0.8s ease;
            transform-origin: center center;
          }

          .swiper-slide-prev img,
          .swiper-slide-next img {
            transform: rotateY(-15deg) scale(0.9);
            opacity: 0.8;
          }

          .swiper-slide-active img {
            transform: rotateY(0deg) scale(1);
            opacity: 1;
          }

          .swiper-button-next,
          .swiper-button-prev {
            color: white !important;
            background: rgba(0, 0, 0, 0.5);
            padding: 1.5rem;
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background: rgba(0, 0, 0, 0.7);
            transform: scale(1.05);
          }

          .gradient-heading {
            background: linear-gradient(90deg, red, yellow);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
        `}
      </style>

      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight gradient-heading">
                Innovative Adhesive Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Experience unparalleled bonding performance with our cutting-edge industrial adhesives, meticulously engineered for excellence.
              </p>
              <div className="space-y-2 mb-10">
                <div className="flex items-center gap-4">
                  <span className="text-blue-400 text-2xl">•</span>
                  <p className="text-lg font-medium">Superior molecular adhesion technology</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-blue-400 text-2xl">•</span>
                  <p className="text-lg font-medium">Advanced rapid-cure formulation</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-blue-400 text-2xl">•</span>
                  <p className="text-lg font-medium">Universal substrate compatibility</p>
                </div>
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Discover Our Range
              </button>
            </div>

            <div className="md:w-1/2">
              <Swiper
                spaceBetween={20}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                speed={1000}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index} className="w-72 h-96 relative">
                    <div className="relative h-full overflow-hidden rounded-xl shadow-2xl">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                        <div className="absolute bottom-0 p-6 text-white">
                          <h3 className="text-2xl font-bold mb-2 gradient-heading">
                            {slide.title}
                          </h3>
                          <p className="text-base text-gray-200 font-medium">
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

        <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply pointer-events-none"></div>
      </section>
    </>
  );
};

export default Hero;
