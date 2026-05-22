import React from 'react';
import { Star, MapPin, Wifi, Wind, MonitorPlay } from 'lucide-react';
import BookingCard from './BookingCard';

const StandardLayout = ({ property }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-serif mb-3 text-luxury-emerald">{property.name}</h1>
          <div className="flex items-center text-sm font-medium text-luxury-emerald">
            <Star className="w-4 h-4 fill-luxury-brass text-luxury-brass mr-1" />
            <span>4.8</span>
            <span className="mx-2 text-luxury-emerald/30">•</span>
            <span className="underline cursor-pointer hover:text-luxury-burgundy">102 đánh giá</span>
            <span className="mx-2 text-luxury-emerald/30">•</span>
            <MapPin className="w-4 h-4 mr-1 text-luxury-emerald/70" />
            <span className="underline cursor-pointer hover:text-luxury-burgundy">{property.hotel}</span>
          </div>
        </div>
      </div>

      {/* Standard Gallery: 1 big left, 2 small right */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-12 h-[50vh] min-h-[350px]">
        <div className="md:col-span-3 rounded-l-md overflow-hidden bg-gray-100 group">
          <img src={property.images[0]} alt="Main" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="hidden md:flex flex-col gap-2">
          <div className="flex-1 rounded-tr-md overflow-hidden bg-gray-100 group">
            <img src={property.images[1]} alt="Side 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="flex-1 rounded-br-md overflow-hidden bg-gray-100 group">
            <img src={property.images[2]} alt="Side 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold font-serif mb-4 border-b border-luxury-emerald/10 pb-2 text-luxury-emerald">Đôi nét về nơi lưu trú</h2>
          <p className="text-luxury-emerald/80 leading-relaxed mb-8 text-base">
            {property.description}
          </p>
          
          <h2 className="text-xl font-bold font-serif mb-4 border-b border-luxury-emerald/10 pb-2 text-luxury-emerald">Tiện nghi có sẵn</h2>
          <div className="grid grid-cols-2 gap-y-4 gap-x-4 mb-8">
            {property.amenities.map((item, idx) => (
              <div key={idx} className="flex items-center text-sm text-luxury-emerald/80">
                <div className="w-1.5 h-1.5 bg-luxury-brass rounded-full mr-3"></div>
                {item}
              </div>
            ))}
          </div>

          <div className="bg-luxury-emerald/5 p-4 rounded-md">
            <h3 className="font-bold mb-2">Thông tin phòng:</h3>
            <ul className="text-sm space-y-2">
              <li>Diện tích: {property.area} m²</li>
              <li>Giường: {property.beds} giường</li>
              <li>Phòng tắm: {property.baths}</li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-1">
          <BookingCard price={`${property.price} đ`} />
        </div>
      </div>
    </div>
  );
};

export default StandardLayout;
