import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, MapPin, Users, BedDouble, ArrowLeft, ArrowRight } from 'lucide-react';

// Giả lập dữ liệu cho từng Category
const CATEGORY_DATA = {
  'khach-san': {
    title: 'Khách sạn',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    properties: [
      { id: 101, name: 'Khách sạn Phố Cổ 20', price: '950.000', location: 'Hoàn Kiếm, HN', rating: 4.9, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 102, name: '20 Hotel Boutique', price: '1.200.000', location: 'Ba Đình, HN', rating: 4.8, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 103, name: 'Khách sạn Thương Mại', price: '850.000', location: 'Cầu Giấy, HN', rating: 4.7, image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
    ]
  },
  'can-ho': {
    title: 'Căn hộ',
    heroImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    properties: [
      { id: 201, name: 'Căn hộ Dịch vụ Studio', price: '600.000', location: 'Ba Đình, HN', rating: 4.8, image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 202, name: 'Apartment 2 Ngủ', price: '1.500.000', location: 'Tây Hồ, HN', rating: 4.9, image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 203, name: 'Penthouse View Hồ', price: '3.500.000', location: 'Tây Hồ, HN', rating: 5.0, image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
    ]
  },
  'resort': {
    title: 'Resort nghỉ dưỡng',
    heroImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    properties: [
      { id: 301, name: 'Resort Bản Xôi', price: '2.100.000', location: 'Ba Vì, HN', rating: 4.9, image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 302, name: 'Resort Đồi Thông', price: '1.800.000', location: 'Sóc Sơn, HN', rating: 4.8, image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 303, name: 'Khu sinh thái Ao Vua', price: '1.500.000', location: 'Ba Vì, HN', rating: 4.7, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
    ]
  },
  'biet-thu': {
    title: 'Biệt thự cao cấp',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    properties: [
      { id: 401, name: 'Villa Bể Bơi Vô Cực', price: '5.000.000', location: 'Sóc Sơn, HN', rating: 4.9, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 402, name: 'Biệt Thự Vườn Hồng', price: '4.200.000', location: 'Sơn Tây, HN', rating: 4.8, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
    ]
  },
  'bungalow': {
    title: 'Nhà gỗ truyền thống',
    heroImage: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    properties: [
      { id: 501, name: 'Nhà Gỗ Mũi Rừng', price: '850.000', location: 'Ba Vì, HN', rating: 4.8, image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 502, name: 'Bungalow Suối Tiên', price: '700.000', location: 'Thạch Thất, HN', rating: 4.7, image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 503, name: 'Nhà Gỗ Làng Văn Hóa', price: '950.000', location: 'Sơn Tây, HN', rating: 4.9, image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
    ]
  }
};

const PropertyCategory = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = CATEGORY_DATA[categoryId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!category) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center text-gray-800">
        <h1 className="text-3xl font-normal mb-4">Không tìm thấy danh mục này</h1>
        <button onClick={() => navigate('/')} className="text-luxury-emerald hover:underline">
          Về trang chủ
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-24 font-sans text-black">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center mb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src={category.heroImage} 
            alt={category.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-emerald/60 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4" data-aos="fade-up">
          <p className="text-luxury-brass font-bold tracking-widest uppercase text-xs mb-4">Danh Mục Lưu Trú</p>
          <h1 className="text-5xl md:text-7xl font-bold text-luxury-ivory mb-4 font-serif">{category.title}</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button & Title */}
        <div className="mb-12 flex items-center justify-between border-b border-gray-200 pb-4">
          <Link to="/" className="inline-flex items-center text-gray-500 hover:text-luxury-emerald transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Về trang chủ
          </Link>
          <span className="text-gray-500 font-medium">Đang hiển thị {category.properties.length} kết quả</span>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.properties.map((room) => (
            <div key={room.id} className="bg-white border border-gray-200 flex flex-col h-full font-sans rounded-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              
              {/* Ảnh */}
              <div className="relative h-60 overflow-hidden rounded-t-sm">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-sm text-xs font-bold text-luxury-emerald flex items-center shadow-sm">
                  <Star className="w-3 h-3 fill-luxury-brass text-luxury-brass mr-1" />
                  {room.rating}
                </div>
              </div>

              {/* Nội dung */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-black group-hover:text-luxury-emerald transition-colors line-clamp-1">
                    {room.name}
                  </h3>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {room.location}
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6 font-semibold pb-4 border-b border-gray-100">
                  <div className="flex items-center"><Users className="w-4 h-4 mr-1.5" /> 2 Khách</div>
                  <div className="flex items-center"><BedDouble className="w-4 h-4 mr-1.5" /> 1 Giường</div>
                </div>

                {/* Footer thẻ */}
                <div className="mt-auto flex items-center justify-between">
                  <div>
                    <span className="text-xl font-black text-luxury-burgundy">{room.price} VNĐ</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider block">/ Đêm</span>
                  </div>
                  
                  <Link 
                    to={`/property/${room.id}`}
                    className="flex items-center justify-center w-10 h-10 bg-luxury-emerald text-white hover:bg-luxury-brass transition-colors rounded-sm"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PropertyCategory;
