import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import banner1 from "../assets/1st HeroBanner.png";
import banner2 from "../assets/2nd HeroBanner2.png";
import banner3 from "../assets/Herobannershort3.jpg";

const styles = `
  .swiper-button-next,
  .swiper-button-prev {
    color: white !important;
    background: rgba(0, 0, 0, 0.3);
    width: 40px !important;
    height: 40px !important;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 20px !important;
  }

  .swiper {
    --swiper-navigation-size: 20px;
  }

  .swiper-slide img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

// Add style tag to document head
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const Hero = () => {
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
    <section className="relative bg-gradient-to-b from-neutral-900 to-neutral-800 py-8 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content Section */}
          <div className="lg:w-1/2 text-white text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-8 leading-tight bg-gradient-to-r from-red-500 to-amber-500 text-transparent bg-clip-text">
              About Today Bond
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-neutral-300 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
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
                  <span className="text-red-500 text-xl">•</span>
                  <p className="text-sm md:text-base lg:text-lg font-medium text-neutral-200">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <Link to="/shop">
              <button className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg">
                Shop Now
              </button>
            </Link>

            {/* Social Media Links */}
            <div className="flex justify-center lg:justify-start gap-6 mt-8">
              {[
                {
                  Icon: FaFacebookF,
                  url: "https://facebook.com/todaybond",
                  hoverColor: "hover:text-blue-600",
                },
                {
                  Icon: FaInstagram,
                  url: "https://instagram.com/todaybond",
                  hoverColor: "hover:text-pink-600",
                },
                {
                  Icon: FaYoutube,
                  url: "https://youtube.com/@todaybond",
                  hoverColor: "hover:text-red-600",
                },
              ].map(({ Icon, url, hoverColor }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white ${hoverColor} transition-all duration-300 hover:scale-110`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Slider Section */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <Swiper
              spaceBetween={0}
              effect="fade"
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              speed={1000}
              grabCursor={true}
              loop={true}
              navigation={true}
              modules={[Autoplay, Navigation, EffectFade]}
              className="w-full h-[350px] md:h-[450px] lg:h-[550px] rounded-xl overflow-hidden shadow-2xl"
            >
              {slides.map((slide, index) => (
               <SwiperSlide key={index}>
               <div className="relative w-full h-full">
                 <img
                   src={slide.image}
                   alt={slide.title}
                   className="w-full h-full object-contain object-center"  // Changed from object-cover to object-contain
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

      <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply pointer-events-none"></div>
    </section>
  );
};

export default Hero;
