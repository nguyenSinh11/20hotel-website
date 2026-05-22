import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_NEWS } from '../data/newsData';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const news = MOCK_NEWS.find(item => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!news) {
    return (
      <div className="min-h-screen bg-luxury-ivory flex flex-col items-center justify-center text-luxury-emerald">
        <h1 className="text-4xl font-serif font-bold mb-4">Không tìm thấy bài viết</h1>
        <button 
          onClick={() => navigate('/news')}
          className="flex items-center text-luxury-brass hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại danh sách tin tức
        </button>
      </div>
    );
  }

  return (
    <div className="bg-luxury-ivory min-h-screen pt-32 pb-24 text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back button */}
        <Link 
          to="/news" 
          className="inline-flex items-center text-sm font-semibold text-luxury-emerald hover:text-luxury-brass transition-colors mb-8 uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Quay lại tin tức
        </Link>

        {/* Article Header */}
        <div className="mb-10 text-center" data-aos="fade-up">
          <div className="flex items-center justify-center text-luxury-brass text-sm font-semibold mb-4 uppercase tracking-widest">
            <Calendar className="w-4 h-4 mr-2" />
            {news.date}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-luxury-emerald leading-tight mb-6">
            {news.title}
          </h1>
          <div className="w-24 h-1 bg-luxury-brass mx-auto mb-8"></div>
        </div>

        {/* Hero Image */}
        <div className="rounded-md overflow-hidden shadow-2xl mb-12" data-aos="fade-up" data-aos-delay="100">
          <img 
            src={news.image} 
            alt={news.title} 
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg prose-emerald max-w-none text-gray-700 leading-relaxed" 
          data-aos="fade-up" 
          data-aos-delay="200"
          dangerouslySetInnerHTML={{ __html: news.content }}
        />

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-luxury-emerald/10 flex justify-between items-center" data-aos="fade-up">
          <h4 className="font-bold text-luxury-emerald uppercase tracking-wider text-sm">Chia sẻ bài viết</h4>
          <div className="flex space-x-4">
            <button className="w-10 h-10 rounded-full border border-luxury-emerald/20 flex items-center justify-center text-luxury-emerald hover:bg-luxury-emerald hover:text-white transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default NewsDetail;
