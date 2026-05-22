import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => document.documentElement.classList.contains('dark'));
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('en') ? 'vi' : 'en';
    i18n.changeLanguage(newLang);
  };

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-8 text-white pt-6">
      
      {/* Top Bar for Mobile & Logo */}
      <div className="flex w-full md:w-auto md:flex-1 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight text-luxury-ivory flex items-center font-serif">
          <span className="text-luxury-brass text-3xl mr-1">20</span>Hotel
        </Link>

        {/* Mobile Actions: Theme Toggle + Hamburger */}
        <div className="flex md:hidden items-center space-x-3">
          <button 
            onClick={toggleLanguage}
            className="w-8 h-8 rounded-full bg-luxury-brass text-luxury-emerald font-bold text-xs shadow-lg flex items-center justify-center"
          >
            {i18n.language.startsWith('en') ? 'EN' : 'VN'}
          </button>
          <button 
            onClick={toggleTheme}
            className="p-1.5 rounded-full bg-black/20 text-luxury-ivory border border-luxury-ivory/10 shadow-lg"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            className="text-luxury-ivory hover:text-luxury-brass transition-colors p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Center Menu - The "Notch" (Desktop) */}
      <div className="flex-none bg-luxury-emerald/80 backdrop-blur-md text-luxury-ivory rounded-md px-8 py-3 shadow-lg shadow-black/5 -mt-4 hidden md:flex items-center space-x-8 text-sm font-semibold border border-luxury-ivory/10">
        <Link to="/" className="hover:text-luxury-brass transition-colors">{t('nav.home')}</Link>
        <Link to="/about" className="hover:text-luxury-brass transition-colors">{t('nav.about')}</Link>
        <Link to="/products" className="hover:text-luxury-brass transition-colors">{t('nav.rooms')}</Link>
        <Link to="/news" className="hover:text-luxury-brass transition-colors">{t('nav.news')}</Link>
        <Link to="/recruitment" className="hover:text-luxury-brass transition-colors">{t('nav.careers')}</Link>
        <Link to="/support" className="hover:text-luxury-brass transition-colors">{t('nav.support')}</Link>
        <Link to="/login" className="hover:text-luxury-brass transition-colors">{t('nav.login')}</Link>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-luxury-emerald/95 backdrop-blur-xl rounded-lg border border-luxury-brass/20 p-4 shadow-2xl flex flex-col space-y-2 text-center z-50">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-luxury-ivory hover:text-luxury-brass py-3 border-b border-luxury-ivory/10 font-medium">{t('nav.home')}</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-luxury-ivory hover:text-luxury-brass py-3 border-b border-luxury-ivory/10 font-medium">{t('nav.about')}</Link>
          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-luxury-ivory hover:text-luxury-brass py-3 border-b border-luxury-ivory/10 font-medium">{t('nav.rooms')}</Link>
          <Link to="/news" onClick={() => setIsMobileMenuOpen(false)} className="text-luxury-ivory hover:text-luxury-brass py-3 border-b border-luxury-ivory/10 font-medium">{t('nav.news')}</Link>
          <Link to="/recruitment" onClick={() => setIsMobileMenuOpen(false)} className="text-luxury-ivory hover:text-luxury-brass py-3 border-b border-luxury-ivory/10 font-medium">{t('nav.careers')}</Link>
          <Link to="/support" onClick={() => setIsMobileMenuOpen(false)} className="text-luxury-ivory hover:text-luxury-brass py-3 border-b border-luxury-ivory/10 font-medium">{t('nav.support')}</Link>
          <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="bg-luxury-brass text-luxury-emerald py-3 rounded font-bold mt-4 shadow-md">{t('nav.login_register')}</Link>
        </div>
      )}

      {/* Right Actions & Theme Toggle */}
      <div className="hidden md:flex flex-1 justify-end items-center space-x-4">
        <button 
          onClick={toggleLanguage}
          className="w-9 h-9 rounded-full bg-luxury-brass text-luxury-emerald font-bold text-sm shadow-lg hover:bg-luxury-ivory transition-colors flex items-center justify-center"
        >
          {i18n.language.startsWith('en') ? 'EN' : 'VN'}
        </button>
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-black/20 backdrop-blur-md text-luxury-ivory hover:text-luxury-brass border border-luxury-ivory/10 transition-colors shadow-lg"
          title="Toggle VIP Mode"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
