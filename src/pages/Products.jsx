import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Maximize2, Heart, PlusCircle, BedDouble, Bath, Car, Ruler, Phone, Mail, MessageCircle } from 'lucide-react';

const MOCK_ROOMS = [
  {
    id: 1,
    hotel: "KHÁCH SẠN HAI M.I",
    name: "Phòng đôi hạng sang nhìn ra thành phố.",
    price: "720.000",
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    beds: "1-2",
    baths: "1",
    cars: "0",
    area: "25",
    featured: true
  },
  {
    id: 2,
    hotel: "KHÁCH SẠN 20",
    name: "Phòng đôi/phòng giường đơn cao cấp",
    price: "950.000",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    beds: "1-2",
    baths: "1",
    cars: "1",
    area: "35",
    featured: true
  },
  {
    id: 3,
    hotel: "KHÁCH SẠN 20",
    name: "Phòng Junior Suite nhìn ra thành phố",
    price: "1.100.000",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55dd1217e42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    beds: "1-2",
    baths: "1",
    cars: "1",
    area: "38",
    featured: true
  },
  {
    id: 4,
    hotel: "KHÁCH SẠN 20",
    name: "Phòng Junior Suite có ban công",
    price: "1.350.000",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542314831-c6a4d14b83cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    beds: "1-2",
    baths: "1",
    cars: "1",
    area: "40",
    featured: true
  },
  {
    id: 5,
    hotel: "KHÁCH SẠN 20",
    name: "Gia đình hạng sang",
    price: "1.350.000",
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    beds: "3-4",
    baths: "1",
    cars: "1",
    area: "45",
    featured: true
  },
  {
    id: 6,
    hotel: "KHÁCH SẠN 20",
    name: "Căn hộ áp mái",
    price: "1.450.000",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542314831-c6a4d14b83cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    beds: "3-4",
    baths: "1",
    cars: "1",
    area: "48",
    featured: true
  }
];

const RoomCard = ({ room }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));
  };

  return (
    <div className="bg-white border border-gray-200 flex flex-col h-full font-sans rounded-sm hover:shadow-lg transition-shadow">
      
      {/* Khung Ảnh */}
      <div className="relative h-60 overflow-hidden bg-gray-100 group">
        <img 
          src={room.images[currentImageIndex] || "/api/placeholder/400/300"} 
          alt={room.name} 
          className="object-cover w-full h-full transition-all duration-300"
        />
        
        {/* Badge Nổi Bật */}
        {room.featured && (
          <div className="absolute top-3 left-3 bg-[#65c02b] text-white text-xs font-bold px-2 py-1 uppercase rounded-sm z-10 shadow-sm">
            Nổi bật
          </div>
        )}

        {/* Image Indicators (Dots) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
          {room.images.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>

        {/* Carousel Arrows (Hiển thị khi hover) */}
        <button 
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-white/90 hover:text-white z-10 drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-8 h-8 stroke-[2]" />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white/90 hover:text-white z-10 drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-8 h-8 stroke-[2]" />
        </button>

        {/* Bottom Right Icons */}
        <div className="absolute bottom-3 right-3 flex space-x-1.5 z-10">
          <button className="w-9 h-9 bg-black/60 hover:bg-black/80 rounded flex items-center justify-center text-white transition-colors">
            <Maximize2 className="w-5 h-5 stroke-[2]" />
          </button>
          <button className="w-9 h-9 bg-black/60 hover:bg-black/80 rounded flex items-center justify-center text-white transition-colors">
            <Heart className="w-5 h-5 stroke-[2]" />
          </button>
          <button className="w-9 h-9 bg-black/60 hover:bg-black/80 rounded flex items-center justify-center text-white transition-colors">
            <PlusCircle className="w-5 h-5 stroke-[2]" />
          </button>
        </div>
      </div>

      {/* Nội dung Card */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Tên KS */}
        <div className="text-[13px] text-gray-900 font-bold uppercase mb-2 tracking-wide">
          {room.hotel}
        </div>
        
        {/* Giá */}
        <div className="text-xl font-extrabold text-black mb-3">
          {room.price} VNĐ/Đêm
        </div>
        
        {/* Tên Phòng */}
        <h3 className="text-base font-semibold text-black mb-5 leading-snug">
          {room.name}
        </h3>

        {/* Thông số phòng */}
        <div className="flex items-center gap-4 text-sm text-black mt-auto font-semibold">
          <div className="flex items-center gap-1.5">
            <BedDouble className="w-[18px] h-[18px] text-black stroke-[2]" /> 
            <span>{room.beds}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-[18px] h-[18px] text-black stroke-[2]" /> 
            <span>{room.baths}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Car className="w-[18px] h-[18px] text-black stroke-[2]" /> 
            <span>{room.cars}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Ruler className="w-[18px] h-[18px] text-black stroke-[2]" /> 
            <span className="flex items-baseline">
              {room.area} <span className="text-gray-700 text-xs ml-1 font-medium">m2</span>
            </span>
          </div>
        </div>
      </div>

      {/* Nút bấm Liên Hệ */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <button className="flex-1 flex items-center justify-center py-2 border border-[#43a047] text-[#43a047] rounded hover:bg-[#43a047]/10 transition-colors text-sm font-bold">
            <Phone className="w-4 h-4 mr-1.5 stroke-[2]" />
            Gọi
          </button>
          <button className="flex-1 flex items-center justify-center py-2 border border-[#43a047] text-[#43a047] rounded hover:bg-[#43a047]/10 transition-colors text-sm font-bold">
            <Mail className="w-4 h-4 mr-1.5 stroke-[2]" />
            E-mail
          </button>
          <button className="flex-1 flex items-center justify-center py-2 border border-[#43a047] text-[#43a047] rounded hover:bg-[#43a047]/10 transition-colors text-sm font-bold">
            <MessageCircle className="w-4 h-4 mr-1.5 stroke-[2]" />
            WhatsApp
          </button>
        </div>
      </div>
      
    </div>
  );
};

const Products = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredRooms = MOCK_ROOMS.filter(room => {
    // 1. Lọc theo Tab (Khách sạn)
    if (activeTab === 'HOTEL20' && room.hotel !== 'KHÁCH SẠN 20') return false;
    if (activeTab === 'HOTELHAI' && room.hotel !== 'KHÁCH SẠN HAI M.I') return false;

    // 2. Lọc theo Search Query (Tên phòng, tên KS)
    if (searchQuery) {
      const matchName = room.name.toLowerCase().includes(searchQuery);
      const matchHotel = room.hotel.toLowerCase().includes(searchQuery);
      if (!matchName && !matchHotel) return false;
    }

    return true;
  });

  return (
    <div className="bg-white min-h-screen pb-24 font-sans text-black">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center mb-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Phòng nghỉ" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-emerald/60 mix-blend-multiply"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4" data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold text-luxury-ivory mb-4 font-serif">Phòng nghỉ</h1>
          <p className="text-luxury-brass text-lg md:text-xl font-semibold tracking-[0.3em] uppercase">
            20 HOTEL & APARTMENT
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tabs & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-300">
          <div className="flex space-x-8 text-[15px] uppercase tracking-wider mb-4 md:mb-0">
            <button 
              onClick={() => setActiveTab('ALL')}
              className={`pb-4 border-b-2 transition-colors font-bold ${activeTab === 'ALL' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black'}`}
            >
              Tất cả
            </button>
            <button 
              onClick={() => setActiveTab('HOTEL20')}
              className={`pb-4 border-b-2 transition-colors font-bold ${activeTab === 'HOTEL20' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black'}`}
            >
              Khách sạn 20
            </button>
            <button 
              onClick={() => setActiveTab('HOTELHAI')}
              className={`pb-4 border-b-2 transition-colors font-bold ${activeTab === 'HOTELHAI' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black'}`}
            >
              Khách sạn Hai M.I
            </button>
          </div>
          
          <div className="flex items-center text-[15px] pb-4">
            <span className="mr-2 font-bold text-black">Tìm phòng:</span>
            <select className="bg-transparent border-none focus:ring-0 cursor-pointer text-black font-bold outline-none">
              <option>Thứ tự mặc định</option>
              <option>Giá từ thấp đến cao</option>
              <option>Giá từ cao đến thấp</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Products;
