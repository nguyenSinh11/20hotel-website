import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Star, Heart, Bed, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HOTELS = [
  {
    id: 'biet-thu-rung-thong',
    name: "Biệt thự Rừng Thông, Sóc Sơn",
    price: "1.250.000đ",
    rating: 4.93,
    bedrooms: 2,
    area: 214,
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'homestay-ho-tay',
    name: "Homestay Hồ Tây",
    price: "850.000đ",
    rating: 4.93,
    bedrooms: 5,
    area: 214,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'resort-ban-xoi',
    name: "Resort Bản Xôi, Ba Vì",
    price: "2.100.000đ",
    rating: 4.98,
    bedrooms: 4,
    area: 300,
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'nha-go-ba-vi',
    name: "Nhà Gỗ Ba Vì",
    price: "550.000đ",
    rating: 4.85,
    bedrooms: 1,
    area: 80,
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'khach-san-pho-co',
    name: "Khách sạn Phố Cổ",
    price: "950.000đ",
    rating: 4.90,
    bedrooms: 2,
    area: 120,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const HotelCarousel = () => {
  return (
    <section className="py-32 bg-luxury-ivory overflow-hidden border-t border-luxury-brass/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center text-luxury-emerald font-serif">
          Gợi Ý Nơi Lưu Trú <span className="text-luxury-burgundy">Độc Quyền</span>
        </h2>
      </div>

      <div className="w-full relative px-0 md:px-12" data-aos="fade-up" data-aos-delay="200">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full max-w-6xl !py-12"
        >
          {HOTELS.map((hotel) => (
            <SwiperSlide key={hotel.id} className="max-w-[320px] md:max-w-[400px]">
              <Link to={`/property/${hotel.id}`} className="block bg-white rounded-md p-4 shadow-lg shadow-black/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-luxury-emerald/5">
                <div className="relative h-[400px] w-full rounded-sm overflow-hidden group">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-sm flex items-center text-luxury-emerald text-sm font-semibold border border-luxury-ivory">
                    <Star className="w-4 h-4 fill-luxury-brass text-luxury-brass mr-1" />
                    {hotel.rating}
                  </div>
                  
                  <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md rounded-sm text-luxury-emerald hover:bg-luxury-burgundy hover:text-white transition-colors border border-luxury-ivory" onClick={(e) => e.preventDefault()}>
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Info */}
                <div className="pt-6 pb-2 px-2">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-luxury-emerald pr-4 font-serif leading-snug">{hotel.name}</h3>
                    <div className="text-right whitespace-nowrap">
                      <span className="text-xl font-bold text-luxury-burgundy font-serif">{hotel.price}</span>
                      <p className="text-xs text-luxury-emerald/60 uppercase tracking-wider mt-1">mỗi đêm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-luxury-emerald/70 text-sm space-x-4 border-t border-luxury-emerald/10 pt-4 mt-2">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-2 text-luxury-brass" />
                      {hotel.bedrooms} phòng
                    </div>
                    <div className="flex items-center">
                      <Maximize className="w-4 h-4 mr-2 text-luxury-brass" />
                      {hotel.area}m²
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination !relative !bottom-0 mt-8"></div>
      </div>
    </section>
  );
};

export default HotelCarousel;
