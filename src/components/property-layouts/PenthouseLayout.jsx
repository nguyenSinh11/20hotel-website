import React from 'react';
import { Crown } from 'lucide-react';
import BookingCard from './BookingCard';

const PenthouseLayout = ({ property }) => {
  return (
    <div className="bg-gradient-to-b from-[#0f2a20] to-[#050505] text-white">
      {/* Full width immersive header */}
      <div className="h-screen w-full relative">
        <img src={property.images[0]} alt="Penthouse" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <Crown className="w-16 h-16 text-luxury-brass mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 tracking-wide">{property.name}</h1>
          <p className="text-xl text-gray-300 uppercase tracking-[0.3em]">{property.hotel}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl font-serif font-bold text-luxury-brass mb-8 drop-shadow-md">Trải nghiệm<br />Độc bản</h2>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              {property.description}
            </p>
            {property.specialFeature && (
              <p className="mt-8 text-luxury-brass text-lg italic border-l-4 border-luxury-brass pl-4">
                "{property.specialFeature}"
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={property.images[1]} alt="View 1" className="w-full h-80 object-cover rounded-sm" />
            <img src={property.images[2]} alt="View 2" className="w-full h-80 object-cover rounded-sm mt-12" />
          </div>
        </div>

        <div className="border-t border-white/10 pt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold font-serif mb-8 text-luxury-brass">Đặc quyền thượng đỉnh</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {property.amenities.map((item, idx) => (
                <div key={idx} className="text-center p-6 bg-white/5 rounded-sm hover:bg-white/10 transition border border-white/5 hover:border-luxury-brass/40 shadow-lg hover:shadow-luxury-brass/20">
                  <p className="text-sm font-medium tracking-wider">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <BookingCard price={`${property.price} đ`} className="!bg-[#151515]/80 !backdrop-blur-md !text-white !border-luxury-brass/30 !shadow-2xl !shadow-luxury-brass/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PenthouseLayout;
