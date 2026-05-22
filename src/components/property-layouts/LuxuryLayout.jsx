import React from 'react';
import { Star, Sparkles } from 'lucide-react';
import BookingCard from './BookingCard';

const LuxuryLayout = ({ property }) => {
  return (
    <div className="bg-[#fcfaf8]">
      {/* Hero Header with Background Image */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img src={property.images[0]} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
            <div className="inline-block px-3 py-1 bg-luxury-brass text-white text-xs font-bold uppercase tracking-widest mb-4">
              Premium Collection
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-white">{property.name}</h1>
            <div className="flex items-center text-white/80">
              <Star className="w-5 h-5 fill-luxury-brass text-luxury-brass mr-1" />
              <span className="font-bold text-white">4.95</span>
              <span className="mx-2">•</span>
              <span>{property.hotel}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-6 mb-8 text-luxury-emerald/70 text-sm font-medium border-b border-gray-200 pb-6">
              <div>Diện tích: <span className="text-luxury-emerald font-bold text-lg">{property.area} m²</span></div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div>Giường: <span className="text-luxury-emerald font-bold text-lg">{property.beds}</span></div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div>Bồn tắm: <span className="text-luxury-emerald font-bold text-lg">{property.baths}</span></div>
            </div>

            {property.highlight && (
              <div className="bg-luxury-brass/10 border-l-4 border-luxury-brass p-4 mb-8 flex items-start gap-4 rounded-r-md">
                <Sparkles className="w-6 h-6 text-luxury-brass shrink-0 mt-0.5" />
                <p className="text-luxury-emerald italic font-serif">{property.highlight}</p>
              </div>
            )}

            <p className="text-luxury-emerald leading-loose text-lg mb-12">
              {property.description}
            </p>

            <h2 className="text-2xl font-bold font-serif mb-6 text-luxury-emerald">Đặc quyền cao cấp</h2>
            <div className="grid grid-cols-2 gap-4">
              {property.amenities.map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-100 shadow-sm p-4 rounded flex items-center justify-center text-center font-medium text-luxury-emerald">
                  {item}
                </div>
              ))}
            </div>

            {/* Sub images */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {property.images.slice(1).map((img, idx) => (
                <img key={idx} src={img} alt={`Gallery ${idx}`} className="w-full h-64 object-cover rounded shadow-md" />
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <BookingCard price={`${property.price} đ`} className="!bg-[#f4efe8]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryLayout;
