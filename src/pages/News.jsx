import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_NEWS } from '../data/newsData';
import { ArrowRight, Calendar } from 'lucide-react';

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-luxury-ivory min-h-screen pb-24 text-gray-800 font-sans">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center mb-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Tin tức" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-emerald/60 mix-blend-multiply"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4" data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold text-luxury-ivory mb-4 font-serif">Tin Tức</h1>
          <p className="text-luxury-brass text-lg md:text-xl font-semibold tracking-[0.3em] uppercase">
            CẬP NHẬT & SỰ KIỆN
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_NEWS.map((news, index) => (
            <Link 
              key={news.id} 
              to={`/news/${news.id}`}
              className="bg-white rounded-md overflow-hidden shadow-lg shadow-black/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-luxury-brass text-xs font-semibold mb-3 uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5 mr-1.5" />
                  {news.date}
                </div>
                
                <h3 className="text-xl font-bold text-luxury-emerald mb-3 line-clamp-2 group-hover:text-luxury-brass transition-colors leading-snug">
                  {news.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                  {news.excerpt}
                </p>
                
                <div className="mt-auto flex items-center text-luxury-emerald font-bold text-sm uppercase tracking-wide group-hover:text-luxury-brass transition-colors">
                  Đọc tiếp <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default News;
