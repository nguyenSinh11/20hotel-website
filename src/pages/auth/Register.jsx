import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowLeft } from 'lucide-react';
import Button from '../../components/ui/Button';

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    // Chức năng đăng ký giả lập
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-luxury-ivory flex flex-row-reverse">
      {/* Right Image Section (Đảo ngược so với Login) */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img 
          src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury Hotel Exterior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-emerald/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-16 text-white z-10 text-right" data-aos="fade-left">
          <Link to="/" className="text-4xl font-bold font-serif mb-6 inline-block hover:text-luxury-brass transition-colors">
            <span className="text-luxury-brass text-5xl mr-1">20</span>HOTEL
          </Link>
          <h2 className="text-4xl font-serif font-bold mb-4">Trở thành hội viên</h2>
          <p className="text-lg text-white/80 max-w-md ml-auto leading-relaxed">
            Mở khóa những đặc quyền lưu trú giới hạn và khám phá chuẩn mực dịch vụ cá nhân hóa đỉnh cao.
          </p>
        </div>
      </div>

      {/* Left Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 relative">
        
        {/* Nút Back về trang chủ cho bản mobile */}
        <Link to="/" className="lg:hidden absolute top-8 left-8 flex items-center text-luxury-emerald/70 hover:text-luxury-emerald font-medium">
          <ArrowLeft className="w-5 h-5 mr-2" /> Trang chủ
        </Link>

        <div className="w-full max-w-md" data-aos="fade-up">
          <div className="mb-8 text-center lg:text-left">
            <h1 className="text-3xl font-bold text-luxury-emerald font-serif mb-3">Tạo tài khoản</h1>
            <p className="text-luxury-emerald/60">Điền thông tin để tham gia cộng đồng tinh hoa</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-luxury-emerald mb-1">Họ và tên</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-luxury-emerald/40" />
                </div>
                <input 
                  type="text" 
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-luxury-emerald/20 rounded-sm bg-white/50 text-luxury-emerald placeholder:text-luxury-emerald/30 focus:outline-none focus:ring-1 focus:ring-luxury-brass focus:border-luxury-brass transition-colors"
                  placeholder="Nguyễn Văn A"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-luxury-emerald mb-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-luxury-emerald/40" />
                </div>
                <input 
                  type="email" 
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-luxury-emerald/20 rounded-sm bg-white/50 text-luxury-emerald placeholder:text-luxury-emerald/30 focus:outline-none focus:ring-1 focus:ring-luxury-brass focus:border-luxury-brass transition-colors"
                  placeholder="nhapemail@example.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-luxury-emerald mb-1">Mật khẩu</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-luxury-emerald/40" />
                </div>
                <input 
                  type="password" 
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-luxury-emerald/20 rounded-sm bg-white/50 text-luxury-emerald placeholder:text-luxury-emerald/30 focus:outline-none focus:ring-1 focus:ring-luxury-brass focus:border-luxury-brass transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-semibold text-luxury-emerald mb-1">Xác nhận mật khẩu</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-luxury-emerald/40" />
                </div>
                <input 
                  type="password" 
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-luxury-emerald/20 rounded-sm bg-white/50 text-luxury-emerald placeholder:text-luxury-emerald/30 focus:outline-none focus:ring-1 focus:ring-luxury-brass focus:border-luxury-brass transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start">
              <input 
                id="terms" 
                name="terms" 
                type="checkbox" 
                required
                className="mt-1 h-4 w-4 text-luxury-brass focus:ring-luxury-brass border-gray-300 rounded" 
              />
              <label htmlFor="terms" className="ml-2 block text-xs text-luxury-emerald/70">
                Tôi đồng ý với <a href="#" className="text-luxury-brass hover:underline">Điều khoản Dịch vụ</a> và <a href="#" className="text-luxury-brass hover:underline">Chính sách Bảo mật</a> của 20Hotel.
              </label>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full py-4 mt-2 text-base font-bold shadow-lg shadow-black/10">
              ĐĂNG KÝ
            </Button>
          </form>

          {/* Login Link */}
          <div className="mt-8 text-center text-sm text-luxury-emerald/70">
            Đã có tài khoản?{' '}
            <Link to="/login" className="font-bold text-luxury-brass hover:text-luxury-burgundy hover:underline transition-colors">
              Đăng nhập ngay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
