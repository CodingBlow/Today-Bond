// import Hero from '../components/Hero';
import Features from "../components/Features";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import VideoSection from "../components/VideoSection";
import FeaturedProducts from "../components/FearuredProducts";
import HowToUse from "../components/HowtoUse";
import Googlemap from "../components/Googlemap";

import Heromain from "../components/Heromain";
import Lifecycle from "../components/ProductLifecycle";

// import FearuredProducts from '../components/FearuredProducts';

export default function HomePage() {
  return (
    <>
      {/* <Hero /> */}
      <Heromain />
      <Features />

   
      <FeaturedProducts />
      <Lifecycle />
      <VideoSection />
      <HowToUse />
      <Products />
      <Testimonials />
      <Googlemap />
      <br />
      <br />
    </>
  );
}
