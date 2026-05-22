import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import HotelCarousel from './components/home/HotelCarousel';
import FeaturesBanner from './components/home/FeaturesBanner';
import PropertyTypes from './components/home/PropertyTypes';
import Trending from './components/home/Trending';
import Footer from './components/layout/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetail from './pages/PropertyDetail';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Recruitment from './pages/Recruitment';
import RecruitmentDetail from './pages/RecruitmentDetail';
import PropertyCategory from './pages/PropertyCategory';
import Support from './pages/Support';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';

// Layout wrapper to hide Navbar/Footer on auth pages
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const isAuthPage = ['/login', '/register', '/forgot-password'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-luxury-ivory font-sans text-luxury-emerald">
      {!isAuthPage && <Navbar />}
      {children}
      {!isAuthPage && <Footer />}
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      duration: 800,
      easing: 'ease-in-out',
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-luxury-ivory flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-luxury-emerald border-t-luxury-brass rounded-full animate-spin mb-4 mx-auto"></div>
          <p className="text-luxury-emerald font-serif text-xl tracking-wider">Đang tải...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/recruitment/:id" element={<RecruitmentDetail />} />
          <Route path="/category/:categoryId" element={<PropertyCategory />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/support" element={<Support />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
