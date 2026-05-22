import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Button from '../../components/ui/Button';

const ForgotPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Chức năng gửi email giả lập
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-luxury-ivory flex flex-col items-center justify-center p-4 relative">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.83-54.627 54.627-.83-.83L54.627 0zM0 54.627l.83-.83 54.627 54.627-.83.83L0 54.627z\' fill=\'%230e4835\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>

      <div className="w-full max-w-md relative z-10" data-aos="fade-up">
        
        {/* Logo */}
        <div className="text-center mb-10">
          <Link to="/" className="text-4xl font-bold font-serif inline-block text-luxury-emerald hover:text-luxury-brass transition-colors">
            <span className="text-luxury-brass text-5xl mr-1">20</span>HOTEL
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-lg shadow-2xl shadow-black/5 border border-luxury-emerald/10">
          
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-luxury-emerald font-serif mb-4">Đã gửi liên kết!</h2>
              <p className="text-luxury-emerald/70 mb-8 leading-relaxed">
                Chúng tôi đã gửi một liên kết khôi phục mật khẩu đến email của bạn. Vui lòng kiểm tra hộp thư đến (hoặc thư mục Spam).
              </p>
              <Link to="/login">
                <Button className="w-full py-3">Quay lại Đăng nhập</Button>
              </Link>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-luxury-emerald font-serif mb-3">Khôi phục mật khẩu</h1>
                <p className="text-sm text-luxury-emerald/70">
                  Nhập địa chỉ email mà bạn đã đăng ký, chúng tôi sẽ gửi liên kết để đặt lại mật khẩu.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-luxury-emerald mb-2">Email đăng ký</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-luxury-emerald/40" />
                    </div>
                    <input 
                      type="email" 
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-luxury-emerald/20 rounded-sm bg-white text-luxury-emerald placeholder:text-luxury-emerald/30 focus:outline-none focus:ring-1 focus:ring-luxury-brass focus:border-luxury-brass transition-colors"
                      placeholder="nhapemail@example.com"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full py-4 text-base font-bold shadow-lg shadow-black/10">
                  GỬI YÊU CẦU
                </Button>
              </form>

              <div className="mt-8 text-center">
                <Link to="/login" className="inline-flex items-center text-sm font-medium text-luxury-emerald/70 hover:text-luxury-emerald transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại trang Đăng nhập
                </Link>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
