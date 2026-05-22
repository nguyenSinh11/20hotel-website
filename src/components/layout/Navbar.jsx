import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-8 text-white pt-6">
      
      {/* Top Bar for Mobile & Logo */}
      <div className="flex w-full md:w-auto items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight text-luxury-ivory flex items-center font-serif">
          <span className="text-luxury-brass text-3xl mr-1">20</span>Hotel
        </Link>

        {/* Hamburger Menu Icon (Mobile Only) */}
        <button 
          className="md:hidden text-luxury-ivory hover:text-luxury-brass transition-colors p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Center Menu - The "Notch" (Desktop) */}
      <div className="flex-none bg-luxury-emerald/80 backdrop-blur-md text-luxury-ivory rounded-md px-8 py-3 shadow-lg shadow-black/5 -mt-4 hidden md:flex items-center space-x-8 text-sm font-semibold border border-luxury-ivory/10">
        <Link to="/" className="hover:text-luxury-brass transition-colors">Trang chủ</Link>
        <Link to="/about" className="hover:text-luxury-brass transition-colors">Về chúng tôi</Link>
        <Link to="/products" className="hover:text-luxury-brass transition-colors">Phòng nghỉ</Link>
        <Link to="/news" className="hover:text-luxury-brass transition-colors">Tin tức</Link>
        <Link to="/recruitment" className="hover:text-luxury-brass transition-colors">Tuyển Dụng</Link>
        <Link to="/support" className="hover:text-luxury-brass transition-colors">Hỗ trợ</Link>
        <Link to="/login" className="hover:text-luxury-brass transition-colors">Đăng nhập</Link>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-luxury-emerald/95 backdrop-blur-xl rounded-lg border border-luxury-brass/20 p-4 shadow-2xl flex flex-col space-y-2 text-center z-50">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-luxury-ivory hover:text-luxury-brass py-3 border-b border-luxury-ivory/10 font-medium">Trang chủ</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-luxury-ivory hover:text-luxury-brass py-3 border-b border-luxury-ivory/10 font-medium">Về chúng tôi</Link>
          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-luxury-ivory hover:text-luxury-brass py-3 border-b border-luxury-ivory/10 font-medium">Phòng nghỉ</Link>
          <Link to="/news" onClick={() => setIsMobileMenuOpen(false)} className="text-luxury-ivory hover:text-luxury-brass py-3 border-b border-luxury-ivory/10 font-medium">Tin tức</Link>
          <Link to="/recruitment" onClick={() => setIsMobileMenuOpen(false)} className="text-luxury-ivory hover:text-luxury-brass py-3 border-b border-luxury-ivory/10 font-medium">Tuyển Dụng</Link>
          <Link to="/support" onClick={() => setIsMobileMenuOpen(false)} className="text-luxury-ivory hover:text-luxury-brass py-3 border-b border-luxury-ivory/10 font-medium">Hỗ trợ</Link>
          <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="bg-luxury-brass text-luxury-emerald py-3 rounded font-bold mt-4 shadow-md">Đăng nhập / Đăng ký</Link>
        </div>
      )}

      {/* Right Actions */}
      <div className="hidden md:flex flex-1 justify-end">
      </div>
    </nav>
  );
};

export default Navbar;
