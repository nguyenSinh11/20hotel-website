import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { useTranslation } from 'react-i18next';

const Trending = () => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-luxury-emerald pt-32 pb-24 rounded-t-[3rem] mt-[-3rem] z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 justify-between">
          
          {/* Newsletter Section */}
          <div className="flex-1 max-w-md lg:mt-12" data-aos="fade-right">
            <h2 className="text-4xl font-bold text-luxury-ivory mb-6 font-serif">{t('home_trending.vip_title')}</h2>
            <p className="text-luxury-ivory/70 mb-8 text-sm leading-relaxed">
              {t('home_trending.vip_desc')}
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder={t('home_trending.email_placeholder')}
                className="flex-1 px-4 py-3 rounded-sm bg-luxury-ivory/5 text-luxury-ivory placeholder:text-luxury-ivory/50 border border-luxury-ivory/20 focus:outline-none focus:border-luxury-brass focus:bg-luxury-ivory/10 transition-colors"
              />
              <Button type="button" className="rounded-sm px-6 py-3 whitespace-nowrap hover:-translate-y-1 shadow-md hover:shadow-black/10 transition-all duration-300">
                {t('home_trending.subscribe')}
              </Button>
            </form>
            <p className="text-[10px] text-luxury-ivory/50 mt-4">
              {t('home_trending.policy_text')} <a href="#privacy" className="underline hover:text-luxury-ivory transition-colors">{t('home_trending.privacy_policy')}</a>.
            </p>
          </div>

          {/* Trending Bento Grid */}
          <div className="flex-1" data-aos="fade-left" data-aos-delay="200">
            <div className="mb-8 border-b border-luxury-ivory/10 pb-4">
              <h2 className="text-3xl font-bold text-luxury-ivory mb-2 font-serif">{t('home_trending.trending_title')}</h2>
              <p className="text-luxury-ivory/60 text-sm">{t('home_trending.trending_subtitle')}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 h-[400px]">
              {/* Hoan Kiem */}
              <Link to="/property/hoan-kiem" className="relative rounded-sm overflow-hidden group cursor-pointer hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300 border border-luxury-ivory/5">
                <img src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Hoàn Kiếm" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-luxury-emerald/40 group-hover:bg-luxury-emerald/20 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-luxury-ivory font-bold text-xl drop-shadow-md font-serif">{t('home_trending.hoan_kiem')}</span>
                </div>
              </Link>

              {/* Tay Ho */}
              <Link to="/property/tay-ho" className="relative rounded-sm overflow-hidden row-span-2 group cursor-pointer hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300 border border-luxury-ivory/5">
                <img src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Tây Hồ" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-luxury-emerald/40 group-hover:bg-luxury-emerald/20 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-luxury-ivory font-bold text-xl drop-shadow-md font-serif">{t('home_trending.tay_ho')}</span>
                </div>
              </Link>

              {/* Ba Dinh */}
              <Link to="/property/ba-dinh" className="relative rounded-sm overflow-hidden group cursor-pointer hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300 border border-luxury-ivory/5">
                <img src="https://images.unsplash.com/photo-1557335200-a65f7f032602?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Ba Đình" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-luxury-emerald/40 group-hover:bg-luxury-emerald/20 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-luxury-ivory font-bold text-xl drop-shadow-md font-serif">{t('home_trending.ba_dinh')}</span>
                </div>
              </Link>

              {/* Cau Giay */}
              <Link to="/property/cau-giay" className="relative rounded-sm overflow-hidden group cursor-pointer hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300 border border-luxury-ivory/5">
                <img src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Cầu Giấy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-luxury-emerald/40 group-hover:bg-luxury-emerald/20 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-luxury-ivory font-bold text-xl drop-shadow-md font-serif">{t('home_trending.cau_giay')}</span>
                </div>
              </Link>

              {/* Soc Son */}
              <Link to="/property/soc-son" className="relative rounded-sm overflow-hidden group cursor-pointer hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300 border border-luxury-ivory/5">
                <img src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sóc Sơn" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-luxury-emerald/40 group-hover:bg-luxury-emerald/20 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-luxury-ivory font-bold text-xl drop-shadow-md font-serif">{t('home_trending.soc_son')}</span>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
