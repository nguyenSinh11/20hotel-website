import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, ChevronUp } from 'lucide-react';
import Button from '../components/ui/Button';

const FAQS = [
  {
    question: "Thời gian nhận và trả phòng (Check-in/Check-out) là khi nào?",
    answer: "Giờ nhận phòng tiêu chuẩn của chúng tôi là từ 14:00 và giờ trả phòng là 12:00 trưa hôm sau. Tuy nhiên, nếu bạn có nhu cầu nhận phòng sớm hoặc trả phòng muộn, vui lòng liên hệ trước để chúng tôi sắp xếp (có thể tính thêm phụ phí)."
  },
  {
    question: "Khách sạn có bãi đậu xe cho khách không?",
    answer: "Có, 20Hotel cung cấp bãi đậu xe riêng biệt, an toàn và hoàn toàn miễn phí cho tất cả khách lưu trú. Đội ngũ an ninh của chúng tôi hoạt động 24/7 để đảm bảo an toàn cho phương tiện của bạn."
  },
  {
    question: "Tôi có được phép mang theo thú cưng không?",
    answer: "Để đảm bảo không gian yên tĩnh và vệ sinh chung cho tất cả các khách lưu trú, rất tiếc hiện tại 20Hotel chưa áp dụng chính sách cho phép mang theo thú cưng (ngoại trừ chó dẫn đường cho người khiếm thị)."
  },
  {
    question: "Có dịch vụ đưa đón sân bay không?",
    answer: "Chúng tôi cung cấp dịch vụ đưa đón sân bay 2 chiều bằng dòng xe sang trọng với mức phí ưu đãi. Bạn vui lòng đặt trước ít nhất 24 giờ để chúng tôi chuẩn bị tốt nhất."
  },
  {
    question: "Khách sạn có phục vụ bữa sáng không?",
    answer: "Giá phòng của chúng tôi đã bao gồm bữa sáng tự chọn (Buffet) tiêu chuẩn quốc tế tại nhà hàng chính từ 6:30 đến 10:00 sáng hàng ngày."
  }
];

const Support = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    alert("Cảm ơn bạn! Lời nhắn của bạn đã được gửi đến bộ phận CSKH.");
  };

  return (
    <div className="bg-white min-h-screen pb-24 font-sans text-black">
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Customer Support" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-emerald/70 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4" data-aos="fade-up">
          <p className="text-luxury-brass font-bold tracking-widest uppercase text-xs mb-4">Chúng Tôi Luôn Lắng Nghe</p>
          <h1 className="text-4xl md:text-6xl font-bold text-luxury-ivory mb-4 font-serif">Hỗ Trợ Khách Hàng</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-20">
          
          {/* Thông tin liên hệ */}
          <div className="lg:col-span-1 space-y-8" data-aos="fade-right">
            <div>
              <h2 className="text-2xl font-bold text-luxury-emerald font-serif mb-6">Liên Hệ Trực Tiếp</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Đội ngũ chuyên viên của 20Hotel luôn sẵn sàng hỗ trợ bạn 24/7. Hãy liên hệ với chúng tôi bất cứ khi nào bạn cần.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-luxury-emerald/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-luxury-emerald" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Địa chỉ</h4>
                  <p className="text-gray-600 mt-1">Số 93A Đội Cấn, Ba Đình, Hà Nội</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-luxury-emerald/10 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-luxury-emerald" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Điện thoại / Zalo</h4>
                  <p className="text-gray-600 mt-1">+84 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-luxury-emerald/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-luxury-emerald" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600 mt-1">support@20hotel.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-luxury-emerald/10 rounded-full flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-luxury-emerald" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Giờ hoạt động</h4>
                  <p className="text-gray-600 mt-1">Lễ tân 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Liên hệ */}
          <div className="lg:col-span-2" data-aos="fade-left">
            <div className="bg-white border border-gray-200 p-8 md:p-10 rounded-sm shadow-xl shadow-black/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-brass/10 rounded-bl-full z-0 pointer-events-none"></div>
              
              <h2 className="text-2xl font-bold text-luxury-emerald font-serif mb-6 relative z-10">Gửi Tin Nhắn Cho Chúng Tôi</h2>
              
              <form onSubmit={handleSendMessage} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Họ và tên *</label>
                    <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-luxury-emerald focus:border-luxury-emerald bg-gray-50" placeholder="Nguyễn Văn A" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Số điện thoại *</label>
                    <input type="tel" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-luxury-emerald focus:border-luxury-emerald bg-gray-50" placeholder="0912 345 678" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Địa chỉ Email *</label>
                  <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-luxury-emerald focus:border-luxury-emerald bg-gray-50" placeholder="email@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Chủ đề</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-luxury-emerald focus:border-luxury-emerald bg-gray-50 cursor-pointer">
                    <option>Hỗ trợ đặt phòng</option>
                    <option>Thay đổi / Hủy phòng</option>
                    <option>Phản hồi dịch vụ</option>
                    <option>Khác</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nội dung chi tiết *</label>
                  <textarea required rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-luxury-emerald focus:border-luxury-emerald bg-gray-50 resize-none" placeholder="Bạn cần chúng tôi giúp đỡ điều gì?"></textarea>
                </div>

                <Button type="submit" className="px-8 py-3 flex items-center justify-center">
                  <Send className="w-4 h-4 mr-2" /> Gửi Yêu Cầu
                </Button>
              </form>
            </div>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-luxury-emerald font-serif mb-4">Câu Hỏi Thường Gặp (FAQ)</h2>
            <p className="text-gray-600">Tổng hợp những thắc mắc phổ biến nhất từ khách hàng của chúng tôi.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-sm transition-colors duration-300 ${openFaqIndex === index ? 'border-luxury-emerald shadow-md' : 'border-gray-200'}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                >
                  <span className={`font-semibold text-left ${openFaqIndex === index ? 'text-luxury-emerald' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-luxury-emerald flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-3 mt-1">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Support;
