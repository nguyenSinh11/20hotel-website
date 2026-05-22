import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_RECRUITMENT } from '../data/recruitmentData';
import { Tag, MessageSquare } from 'lucide-react';

const RecruitmentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const job = MOCK_RECRUITMENT.find(item => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!job) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center text-gray-800">
        <h1 className="text-3xl font-normal mb-4">Không tìm thấy tin tuyển dụng</h1>
        <button 
          onClick={() => navigate('/recruitment')}
          className="text-[#38a169] hover:underline"
        >
          Quay lại danh sách tuyển dụng
        </button>
      </div>
    );
  }

  // Get other posts for "Related posts"
  const relatedPosts = MOCK_RECRUITMENT.filter(item => item.id !== parseInt(id)).slice(0, 3);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Tag */}
        <div className="mb-8">
          <span className="bg-[#3b5998] text-white px-2 py-1 font-bold text-lg uppercase shadow-sm">
            TUYỂN DỤNG {job.title}
          </span>
        </div>

        {/* Content Section */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-16">
          <p><strong>* Địa điểm:</strong> {job.location}</p>
          
          <p><strong>* Vị trí:</strong></p>
          <ul className="list-none pl-4 space-y-1">
            {job.positions.map((pos, idx) => (
              <li key={idx}>+ {pos}</li>
            ))}
          </ul>

          <p><strong>* Yêu cầu:</strong></p>
          <ul className="list-none pl-4 space-y-1">
            {job.requirements.map((req, idx) => (
              <li key={idx}>– {req}</li>
            ))}
          </ul>

          <p><strong>* Chế độ:</strong></p>
          <ul className="list-none pl-4 space-y-1">
            {job.benefits.map((ben, idx) => (
              <li key={idx}>– {ben}</li>
            ))}
          </ul>

          <p><strong>* Liên hệ:</strong></p>
          <ul className="list-none pl-4 space-y-1">
            <li>– Sđt: {job.contact.phone}</li>
            <li>– Email: {job.contact.email}</li>
            <li>– {job.contact.other}</li>
          </ul>
        </div>

        {/* Related posts */}
        <div className="mb-16">
          <h3 className="text-xl font-normal text-gray-800 mb-6">Related posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map(post => (
              <div key={post.id} className="flex flex-col group">
                <Link to={`/recruitment/${post.id}`} className="relative h-48 mb-4 overflow-hidden block">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white font-bold text-sm">
                    TUYỂN DỤNG<br/>{post.title}
                  </div>
                </Link>
                <div className="flex items-center text-xs text-[#38a169] mb-2">
                  <Tag className="w-3 h-3 mr-1" />
                  Tuyển Dụng
                </div>
                <h4 className="font-normal text-gray-800 mb-2 hover:text-[#38a169] transition-colors">
                  <Link to={`/recruitment/${post.id}`}>Tuyển Dụng {post.title}</Link>
                </h4>
                <p className="text-gray-500 text-xs line-clamp-2 mb-2">
                  {post.excerpt}
                </p>
                <Link to={`/recruitment/${post.id}`} className="text-[#38a169] text-xs hover:underline">
                  Continue reading
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Join The Discussion */}
        <div>
          <h3 className="text-2xl font-normal text-gray-800 mb-6">Join The Discussion</h3>
          <form className="space-y-4">
            <div>
              <textarea 
                rows="6" 
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#38a169]" 
                placeholder=" "
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#38a169]" 
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#38a169]" 
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="saveInfo" className="mr-2" />
              <label htmlFor="saveInfo" className="text-sm font-semibold text-gray-700">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>
            <button 
              type="button" 
              className="bg-gray-100 border border-gray-300 text-gray-800 px-6 py-2 rounded text-sm hover:bg-gray-200 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default RecruitmentDetail;
