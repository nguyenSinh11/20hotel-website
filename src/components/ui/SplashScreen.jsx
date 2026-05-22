import React, { useEffect, useState } from 'react';
import { Crown } from 'lucide-react';

const SplashScreen = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';

    // Start fade out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2000);

    // Complete after fade out duration (2.5s total)
    const completeTimer = setTimeout(() => {
      document.body.style.overflow = 'auto';
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
      document.body.style.overflow = 'auto';
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ease-in-out ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <Crown className="w-16 h-16 text-luxury-brass mb-6 animate-pulse" />
      <h1 
        className="text-6xl md:text-8xl font-serif font-bold tracking-widest text-transparent bg-clip-text animate-text-shimmer"
        style={{
          backgroundImage: 'linear-gradient(90deg, #C19A6B, #FDF5E6, #C19A6B)',
          backgroundSize: '200% auto'
        }}
      >
        20HOTEL
      </h1>
      <p className="text-luxury-brass/70 mt-4 tracking-[0.3em] uppercase text-sm font-light">
        A Masterpiece of Luxury
      </p>
    </div>
  );
};

export default SplashScreen;
