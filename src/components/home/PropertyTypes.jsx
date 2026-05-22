import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';

const PROPERTIES = [
  { id: 'khach-san', name: 'Khách sạn', name_en: 'Hotel', price: '2,500,000', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'can-ho', name: 'Căn hộ', name_en: 'Apartment', price: '1,800,000', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'resort', name: 'Resort nghỉ dưỡng', name_en: 'Resort', price: '4,500,000', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'biet-thu', name: 'Biệt thự cao cấp', name_en: 'Luxury Villa', price: '8,000,000', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'bungalow', name: 'Nhà gỗ truyền thống', name_en: 'Traditional Bungalow', price: '3,200,000', image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
];

const PropertyTypes = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language.startsWith('en');

  return (
    <section className="py-32 bg-luxury-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 relative z-10" data-aos="fade-up">
          <div className="mb-12 lg:mb-0 lg:max-w-lg relative z-10">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-[1px] bg-luxury-brass"></div>
              <span className="text-luxury-brass font-bold tracking-[0.2em] uppercase text-sm">{t('home_rooms.subtitle')}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-luxury-emerald dark:text-luxury-ivory leading-tight">
              {t('home_rooms.title1')} <br/>
              <span className="text-luxury-brass italic font-light">{t('home_rooms.title2')}</span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              {t('home_rooms.desc')}
            </p>
          </div>
          
          {/* Faint Background Text */}
          <div className="absolute top-0 right-0 hidden lg:block opacity-[0.03] select-none pointer-events-none translate-x-12 translate-y-12" data-aos="fade-left" data-aos-duration="1500">
            <span className="text-8xl font-black text-luxury-emerald font-serif">{t('home_rooms.heritage')}</span>
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
                  <div className="mb-4">
                    <h3 className="text-xl font-bold font-serif text-luxury-emerald dark:text-luxury-ivory mb-2 line-clamp-1 group-hover:text-luxury-brass transition-colors">
                      {isEn ? (property.name_en || property.name) : property.name}
                    </h3>
                    <p className="text-luxury-brass font-bold text-lg">
                      {property.price} {isEn ? 'VND' : 'đ'}<span className="text-sm text-gray-500 font-normal">/{isEn ? 'night' : 'Đêm'}</span>
                    </p>
                  </div>
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
