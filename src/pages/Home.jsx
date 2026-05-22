import React from 'react';
import Hero from '../components/home/Hero';
import HotelCarousel from '../components/home/HotelCarousel';
import FeaturesBanner from '../components/home/FeaturesBanner';
import PropertyTypes from '../components/home/PropertyTypes';
import Trending from '../components/home/Trending';

const Home = () => {
  return (
    <>
      <Hero />
      <HotelCarousel />
      <FeaturesBanner />
      <PropertyTypes />
      <Trending />
    </>
  );
};

export default Home;
