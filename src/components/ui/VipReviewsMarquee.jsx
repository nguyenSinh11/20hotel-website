import React from 'react';
import { Star } from 'lucide-react';

const VipReviewsMarquee = ({ reviews }) => {
  if (!reviews || reviews.length === 0) return null;

  return (
    <div className="w-full bg-black border-y border-luxury-brass/20 py-8 overflow-hidden relative">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
      
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Render twice for seamless infinite loop */}
        {[...reviews, ...reviews, ...reviews].map((review, idx) => (
          <div key={idx} className="inline-flex flex-col justify-center items-center px-16 min-w-max border-r border-luxury-brass/10">
            <div className="flex space-x-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-luxury-brass text-luxury-brass" />
              ))}
            </div>
            <p className="text-luxury-brass text-lg italic font-serif mb-2 tracking-wide">
              "{review.content}"
            </p>
            <p className="text-white/60 text-sm font-semibold tracking-widest uppercase">
              {review.name} <span className="mx-2">|</span> <span className="text-luxury-brass/80">{review.role}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VipReviewsMarquee;
