import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_RECRUITMENT } from '../data/recruitmentData';
import { Tag, MessageSquare, Phone, Mail } from 'lucide-react';

const Recruitment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Title */}
        <div className="mb-10" data-aos="fade-right">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Link to="/" className="text-[#38a169] hover:underline">Home</Link>
            <span className="mx-2">&gt;</span>
            <span>Tuyển Dụng</span>
          </div>
          <h1 className="text-3xl font-normal text-gray-800">Tuyển Dụng</h1>
        </div>

        {/* Recruitment List */}
        <div className="space-y-16">
          {MOCK_RECRUITMENT.map((job, index) => (
            <div key={job.id} className="flex flex-col border-b border-gray-200 pb-12" data-aos="fade-up" data-aos-delay={index * 100}>
              
              {/* Image with overlay text (Simulating the poster) */}
              <Link to={`/recruitment/${job.id}`} className="relative h-80 md:h-96 w-full overflow-hidden group block mb-6">
                <img 
                  src={job.image} 
                  alt={job.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e4835]/90 via-[#0e4835]/40 to-transparent"></div>
                
                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row justify-between items-end">
                  <div className="text-white">
                    <p className="text-2xl font-bold tracking-widest uppercase mb-1 drop-shadow-lg">TUYỂN DỤNG</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#eab308] drop-shadow-lg">{job.title}</h2>
                  </div>
                  
                  {/* Contact overlay on image */}
                  <div className="text-white text-sm mt-4 md:mt-0 flex flex-col gap-2">
                    <div className="flex items-center font-semibold drop-shadow-md">
                      <Phone className="w-4 h-4 mr-2" />
                      {job.contact.phone}
                    </div>
                    <div className="flex items-center font-semibold drop-shadow-md">
                      <Mail className="w-4 h-4 mr-2" />
                      {job.contact.email}
                    </div>
                  </div>
                </div>
              </Link>

              {/* Title & Excerpt */}
              <div className="mb-6">
                <h3 className="text-2xl font-normal text-gray-800 mb-4 hover:text-[#38a169] transition-colors">
                  <Link to={`/recruitment/${job.id}`}>TUYỂN DỤNG {job.title}</Link>
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {job.excerpt}
                </p>
              </div>

              {/* Meta & Action */}
              <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                <div className="flex items-center space-x-4 text-sm text-[#38a169]">
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-1.5" />
                    Tuyển Dụng
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MessageSquare className="w-4 h-4 mr-1.5" />
                    0
                  </div>
                </div>
                
                <Link 
                  to={`/recruitment/${job.id}`}
                  className="bg-[#38a169] text-white px-5 py-2 text-sm font-medium hover:bg-[#2f855a] transition-colors"
                >
                  Read More
                </Link>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Recruitment;
