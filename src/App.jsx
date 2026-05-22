import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import HotelCarousel from './components/home/HotelCarousel';
import FeaturesBanner from './components/home/FeaturesBanner';
import PropertyTypes from './components/home/PropertyTypes';
import Trending from './components/home/Trending';
import Footer from './components/layout/Footer';
import VIPConcierge from './components/ui/VIPConcierge';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const PropertyDetail = lazy(() => import('./pages/PropertyDetail'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Products = lazy(() => import('./pages/Products'));
const News = lazy(() => import('./pages/News'));
const NewsDetail = lazy(() => import('./pages/NewsDetail'));
const Recruitment = lazy(() => import('./pages/Recruitment'));
const RecruitmentDetail = lazy(() => import('./pages/RecruitmentDetail'));
const PropertyCategory = lazy(() => import('./pages/PropertyCategory'));
const Support = lazy(() => import('./pages/Support'));

// Auth Pages
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword'));

// Layout wrapper to hide Navbar/Footer on auth pages
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const isAuthPage = ['/login', '/register', '/forgot-password'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-luxury-ivory font-sans text-luxury-emerald transition-colors duration-500 relative">
      {!isAuthPage && <Navbar />}
      {children}
      {!isAuthPage && <Footer />}
      <VIPConcierge />
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check initial theme from localStorage
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

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
    <HelmetProvider>
      <Router>
        <LayoutWrapper>
          <Suspense fallback={
            <div className="min-h-[70vh] bg-luxury-ivory flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-luxury-emerald border-t-luxury-brass rounded-full animate-spin mb-4 mx-auto"></div>
                <p className="text-luxury-emerald font-serif text-lg tracking-wider">Đang tải trang...</p>
              </div>
            </div>
          }>
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
          </Suspense>
        </LayoutWrapper>
      </Router>
    </HelmetProvider>
  );
}

export default App;
