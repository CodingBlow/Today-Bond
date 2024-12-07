import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import banner1 from "../assets/1st Herobanner1.jpg";
import banner2 from "../assets/2nd herobanner2a.jpg";
import banner3 from "../assets/Herobannershort3.jpg";
import { useThemeContext } from "../providers/ThemeProvider";

const Hero = () => {
  const { theme } = useThemeContext(); // Access theme

  // Define theme-based classes
  const textColorClass = theme === "dark" ? "text-white" : "text-yellow-800";
  const buttonClass =
    theme === "dark"
      ? "bg-yellow-500 hover:bg-yellow-600 text-gray-900"
      : "bg-yellow-600 hover:bg-yellow-700 text-white";
  const socialHoverColors =
    theme === "dark" ? "hover:text-gray-900" : "hover:text-yellow-600";

  const slides = [
    {
      image: banner1,
      title: "Premium Grade Adhesives",
      description: "Engineered for superior bonding performance",
    },
    {
      image: banner2,
      title: "Multi-Surface Solutions",
      description: "Advanced formulations for diverse applications",
    },
    {
      image: banner3,
      title: "Rapid-Set Technology",
      description: "Optimized for maximum efficiency",
    },
  ];

  return (
    <section className={`py-4 md:py-9 lg:py-14`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content Section */}
          <div
            className={`lg:w-1/2 ${textColorClass} text-center lg:text-left`}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-8 leading-tight bg-gradient-to-r from-yellow-500 to-yellow-300 text-transparent bg-clip-text">
              About Today Bond
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Experience unparalleled bonding performance with our cutting-edge
              industrial adhesives, meticulously engineered for excellence.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Superior molecular adhesion technology",
                "Advanced rapid-cure formulation",
                "Universal substrate compatibility",
              ].map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 justify-center lg:justify-start"
                >
                  <span className="text-yellow-500 text-xl">•</span>
                  <p className="text-sm md:text-base lg:text-lg font-medium">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <Link to="/shop">
              <button
                className={`${buttonClass} px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg`}
              >
                Shop Now
              </button>
            </Link>

            {/* Social Media Links */}
            <div className="flex justify-center lg:justify-start gap-6 mt-4">
              {[
                {
                  Icon: FaFacebookF,
                  url: "https://facebook.com/todaybond",
                },
                {
                  Icon: FaInstagram,
                  url: "https://instagram.com/todaybond",
                },
                {
                  Icon: FaYoutube,
                  url: "https://youtube.com/@todaybond",
                },
              ].map(({ Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 hover:scale-110 ${socialHoverColors}`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Slider Section */}
          <div className="lg:w-1/2 w-full mt-4 lg:mt-0">
            <Swiper
              spaceBetween={0}
              effect="fade"
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={1000}
              grabCursor={true}
              loop={true}
              navigation={true}
              modules={[Autoplay, Navigation, EffectFade]}
              className="w-full h-[60vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh] rounded-xl overflow-hidden shadow-2xl"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <div className="absolute bottom-0 p-4 md:p-6 w-full">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
                          {slide.title}
                        </h3>
                        <p className="text-sm md:text-base text-neutral-200">
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

      <div className="absolute inset-0 bg-yellow-500/10 mix-blend-multiply pointer-events-none"></div>
    </section>
  );
};

export default Hero;
