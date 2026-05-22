import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

const SLIDES = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Hotel resort pool
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Luxury hotel room
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Beautiful hotel exterior
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-luxury-ivory rounded-b-[3rem] overflow-hidden">
      {/* Background Images with Crossfade */}
      {SLIDES.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide})` }}
        >
          {/* Subtle gradient overlay to make text readable but keep images vivid */}
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-emerald/90 via-luxury-emerald/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-emerald/90 via-luxury-emerald/20 to-transparent"></div>
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 pt-32 pb-24 max-w-7xl mx-auto min-h-screen">
        
        {/* Main Heading */}
        <div className="mt-16 mb-12" data-aos="fade-up" data-aos-delay="2500">
          <h1 className="text-5xl md:text-7xl font-bold text-luxury-ivory max-w-4xl leading-tight tracking-tight font-serif">
            Hành Trình Khám Phá <br /> Di Sản Bất Tận
          </h1>
        </div>

        {/* Search Bar */}
        <div className="mb-auto" data-aos="fade-up" data-aos-delay="2700">
          <SearchBar />
        </div>


        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-6 bg-accent' : 'w-2 bg-white/60 hover:bg-white'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
