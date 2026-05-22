import React from 'react';
import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-start justify-between px-8 text-white pt-6">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold tracking-tight text-luxury-ivory flex items-center font-serif">
          <span className="text-luxury-brass text-3xl mr-1">20</span>Hotel
        </Link>
      </div>

      {/* Center Menu - The "Notch" */}
      <div className="flex-none bg-luxury-emerald/80 backdrop-blur-md text-luxury-ivory rounded-md px-8 py-3 shadow-lg shadow-black/5 -mt-4 hidden md:flex items-center space-x-8 text-sm font-semibold border border-luxury-ivory/10">
        <Link to="/" className="hover:text-luxury-brass transition-colors">Trang chủ</Link>
        <Link to="/about" className="hover:text-luxury-brass transition-colors">Về chúng tôi</Link>
        <Link to="/products" className="hover:text-luxury-brass transition-colors">Phòng nghỉ</Link>
        <Link to="/news" className="hover:text-luxury-brass transition-colors">Tin tức</Link>
        <Link to="/recruitment" className="hover:text-luxury-brass transition-colors">Tuyển Dụng</Link>
        <Link to="#" className="hover:text-luxury-brass transition-colors">Hỗ trợ</Link>
        <Link to="/login" className="hover:text-luxury-brass transition-colors">Đăng nhập</Link>
      </div>

      {/* Right Actions */}
      <div className="flex-1 flex justify-end">
      </div>
    </nav>
  );
};

export default Navbar;
