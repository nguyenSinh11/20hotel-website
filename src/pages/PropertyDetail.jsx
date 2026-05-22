import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Wifi, Coffee, Wind, MonitorPlay, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

const PropertyDetail = () => {
  const { id } = useParams();

  // Mock data - In the future, fetch this based on the ID
  const property = {
    name: "Khu nghỉ dưỡng Di sản (Mẫu)",
    location: "Trung tâm Hà Nội, Việt Nam",
    price: "2.500.000đ",
    rating: 4.95,
    reviews: 128,
    description: "Trải nghiệm không gian nghỉ dưỡng thượng lưu, nơi sự tinh tế giao hòa cùng nét đẹp văn hóa di sản. Tận hưởng kỳ nghỉ dưỡng hoàn hảo với các tiện nghi đẳng cấp 5 sao quốc tế và tầm nhìn tuyệt mỹ hướng ra trung tâm thành phố.",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-luxury-ivory min-h-screen pt-32 pb-24 text-luxury-emerald">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-luxury-emerald/70 hover:text-luxury-burgundy transition-colors mb-8 font-medium">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Trở về trang chủ
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">{property.name}</h1>
            <div className="flex items-center text-sm font-medium">
              <Star className="w-5 h-5 fill-luxury-brass text-luxury-brass mr-1" />
              <span>{property.rating}</span>
              <span className="mx-2 text-luxury-emerald/30">•</span>
              <span className="underline cursor-pointer hover:text-luxury-burgundy">{property.reviews} đánh giá</span>
              <span className="mx-2 text-luxury-emerald/30">•</span>
              <MapPin className="w-4 h-4 mr-1 text-luxury-emerald/70" />
              <span className="underline cursor-pointer hover:text-luxury-burgundy">{property.location}</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-3xl font-bold font-serif text-luxury-burgundy">{property.price}</p>
            <p className="text-sm text-luxury-emerald/60 uppercase tracking-wider mt-1">mỗi đêm</p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 h-[50vh] min-h-[400px]">
          <div className="md:col-span-3 rounded-l-md overflow-hidden border border-luxury-emerald/10 relative group">
            <img src={property.images[0]} alt="Main" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="hidden md:flex flex-col gap-4">
            <div className="flex-1 rounded-tr-md overflow-hidden border border-luxury-emerald/10 relative group">
              <img src={property.images[1]} alt="Side 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex-1 rounded-br-md overflow-hidden border border-luxury-emerald/10 relative group">
              <img src={property.images[2]} alt="Side 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>

        {/* Details Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold font-serif mb-6 border-b border-luxury-emerald/10 pb-4">Đôi nét về nơi lưu trú</h2>
            <p className="text-luxury-emerald/80 leading-relaxed mb-8 text-lg">
              {property.description}
            </p>
            
            <h2 className="text-2xl font-bold font-serif mb-6 border-b border-luxury-emerald/10 pb-4">Tiện nghi đẳng cấp</h2>
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
              <div className="flex items-center text-luxury-emerald/80"><Wifi className="w-6 h-6 mr-4 text-luxury-brass" /> Wi-Fi tốc độ cao miễn phí</div>
              <div className="flex items-center text-luxury-emerald/80"><Coffee className="w-6 h-6 mr-4 text-luxury-brass" /> Bữa sáng thượng hạng</div>
              <div className="flex items-center text-luxury-emerald/80"><Wind className="w-6 h-6 mr-4 text-luxury-brass" /> Điều hòa nhiệt độ</div>
              <div className="flex items-center text-luxury-emerald/80"><MonitorPlay className="w-6 h-6 mr-4 text-luxury-brass" /> TV màn hình phẳng cao cấp</div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-md p-6 shadow-xl shadow-black/5 border border-luxury-emerald/10 sticky top-32">
              <div className="mb-6">
                <span className="text-2xl font-bold font-serif text-luxury-burgundy">{property.price}</span>
                <span className="text-luxury-emerald/60"> / đêm</span>
              </div>
              
              <div className="border border-luxury-emerald/20 rounded-sm mb-6 overflow-hidden">
                <div className="flex border-b border-luxury-emerald/20">
                  <div className="flex-1 p-3 border-r border-luxury-emerald/20">
                    <label className="block text-[10px] font-bold uppercase mb-1">Nhận phòng</label>
                    <input type="text" placeholder="Thêm ngày" className="w-full text-sm outline-none bg-transparent" />
                  </div>
                  <div className="flex-1 p-3">
                    <label className="block text-[10px] font-bold uppercase mb-1">Trả phòng</label>
                    <input type="text" placeholder="Thêm ngày" className="w-full text-sm outline-none bg-transparent" />
                  </div>
                </div>
                <div className="p-3">
                  <label className="block text-[10px] font-bold uppercase mb-1">Khách</label>
                  <select className="w-full text-sm outline-none bg-transparent cursor-pointer">
                    <option>1 khách</option>
                    <option>2 khách</option>
                  </select>
                </div>
              </div>

              <Button className="w-full py-4 text-lg">Đặt phòng ngay</Button>
              <p className="text-center text-xs text-luxury-emerald/50 mt-4">Bạn vẫn chưa bị trừ tiền</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PropertyDetail;
