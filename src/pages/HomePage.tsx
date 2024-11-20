import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import VideoSection from '../components/VideoSection';
import FeaturedProducts from '../components/FearuredProducts';
// import FearuredProducts from '../components/FearuredProducts';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedProducts />
      <VideoSection />
      <Products />
      <Testimonials />
    </>
  );
}