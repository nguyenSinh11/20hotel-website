import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';

const PROPERTIES = [
  { id: 'khach-san', name: 'Khách sạn', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'can-ho', name: 'Căn hộ', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'resort', name: 'Resort nghỉ dưỡng', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'biet-thu', name: 'Biệt thự cao cấp', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'bungalow', name: 'Nhà gỗ truyền thống', image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
];

const PropertyTypes = () => {
  return (
    <section className="py-32 bg-luxury-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 relative z-10" data-aos="fade-up">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-emerald mb-6 font-serif">
              Không Gian Lưu Trú <span className="text-luxury-burgundy">Đẳng Cấp</span>
            </h2>
            <p className="text-luxury-emerald/70 leading-relaxed">
              Khám phá và tận hưởng sự xa hoa bậc nhất theo từng loại hình mong muốn. Trải nghiệm từ những căn biệt thự lộng lẫy, resort biệt lập ven biển, đến những ngôi nhà gỗ truyền thống thanh bình, được tinh tuyển riêng cho giới thượng lưu.
            </p>
          </div>
          
          {/* Faint Background Text */}
          <div className="absolute top-0 right-0 hidden lg:block opacity-[0.03] select-none pointer-events-none translate-x-12 translate-y-12" data-aos="fade-left" data-aos-duration="1500">
            <span className="text-8xl font-black text-luxury-emerald font-serif">HERITAGE</span>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1.5}
            breakpoints={{
              640: { slidesPerView: 2.5 },
              768: { slidesPerView: 3.5 },
              1024: { slidesPerView: 5 },
            }}
            className="w-full pb-8"
          >
            {PROPERTIES.map((property, index) => (
              <SwiperSlide key={index}>
                <Link to={`/category/${property.id}`} className="flex flex-col group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-center font-bold text-luxury-emerald mb-4 transition-colors group-hover:text-luxury-burgundy font-serif">
                    {property.name}
                  </h3>
                  <div className="aspect-[9/16] rounded-sm overflow-hidden shadow-md shadow-black/5 group-hover:shadow-xl group-hover:shadow-black/10 transition-all duration-300 border border-luxury-emerald/5">
                    <img 
                      src={property.image} 
                      alt={property.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </div>
    </section>
  );
};

export default PropertyTypes;
