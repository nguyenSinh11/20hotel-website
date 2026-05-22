import React from 'react';
import { Users, LayoutGrid } from 'lucide-react';
import BookingCard from './BookingCard';

const FamilyLayout = ({ property }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold font-serif text-luxury-emerald mb-4">{property.name}</h1>
        <p className="text-lg text-luxury-emerald/70">{property.hotel}</p>
      </div>

      {/* Masonry-like grid for family */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden group">
          <img src={property.images[0]} alt="Gia đình" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center text-sm font-bold text-luxury-emerald">
            <Users className="w-4 h-4 mr-2" /> Gia đình & Hội nhóm
          </div>
        </div>
        <div className="col-span-1 rounded-xl overflow-hidden">
          <img src={property.images[1]} alt="Không gian chung" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 rounded-xl overflow-hidden">
          <img src={property.images[2]} alt="Tiện ích" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-2 bg-luxury-emerald/5 rounded-xl p-6 flex flex-col justify-center items-center text-center">
          <LayoutGrid className="w-10 h-10 text-luxury-brass mb-4" />
          <h3 className="text-xl font-bold font-serif mb-2 text-luxury-emerald">Không gian gắn kết</h3>
          <p className="text-luxury-emerald/70">Thiết kế rộng rãi {property.area}m², tạo không gian thoải mái cho mọi thành viên trong kỳ nghỉ.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold font-serif text-luxury-emerald mb-6">Mô tả chi tiết</h2>
            <p className="text-lg text-luxury-emerald/80 leading-relaxed mb-8">
              {property.description}
            </p>
            
            <h3 className="font-bold text-luxury-emerald mb-4 text-xl">Dành cho gia đình</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {property.amenities.map((item, idx) => (
                <li key={idx} className="flex items-center text-luxury-emerald/80 bg-gray-50 p-3 rounded-lg">
                  <span className="w-2 h-2 bg-luxury-brass rounded-full mr-3 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:col-span-1">
          <BookingCard price={`${property.price} đ`} className="!rounded-xl border-none shadow-2xl shadow-luxury-emerald/10" />
        </div>
      </div>
    </div>
  );
};

export default FamilyLayout;
