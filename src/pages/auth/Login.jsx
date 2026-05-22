import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import Button from '../../components/ui/Button';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Chức năng login giả lập
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-luxury-ivory flex">
      {/* Left Image Section */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Hotel Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-emerald/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-16 text-white z-10" data-aos="fade-right">
          <Link to="/" className="text-4xl font-bold font-serif mb-6 inline-block hover:text-luxury-brass transition-colors">
            <span className="text-luxury-brass text-5xl mr-1">20</span>HOTEL
          </Link>
          <h2 className="text-4xl font-serif font-bold mb-4">Chào mừng trở lại</h2>
          <p className="text-lg text-white/80 max-w-md leading-relaxed">
            Đăng nhập để tận hưởng các đặc quyền dành riêng cho khách mời danh dự, lưu lại lịch sử đặt phòng và nhận ưu đãi bí mật.
          </p>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 relative">
        
        {/* Nút Back về trang chủ cho bản mobile */}
        <Link to="/" className="lg:hidden absolute top-8 left-8 flex items-center text-luxury-emerald/70 hover:text-luxury-emerald font-medium">
          <ArrowLeft className="w-5 h-5 mr-2" /> Trang chủ
        </Link>

        <div className="w-full max-w-md" data-aos="fade-up">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl font-bold text-luxury-emerald font-serif mb-3">Đăng nhập</h1>
            <p className="text-luxury-emerald/60">Vui lòng nhập thông tin tài khoản của bạn</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-luxury-emerald mb-2">Email</label>
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
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-semibold text-luxury-emerald">Mật khẩu</label>
                <Link to="/forgot-password" className="text-sm text-luxury-brass hover:text-luxury-burgundy hover:underline transition-colors">
                  Quên mật khẩu?
                </Link>
              </div>
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

            {/* Remember Me */}
            <div className="flex items-center">
              <input 
                id="remember_me" 
                name="remember_me" 
                type="checkbox" 
                className="h-4 w-4 text-luxury-brass focus:ring-luxury-brass border-gray-300 rounded" 
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-luxury-emerald/70">
                Ghi nhớ đăng nhập
              </label>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full py-4 text-base font-bold shadow-lg shadow-black/10">
              ĐĂNG NHẬP
            </Button>
          </form>

          {/* Register Link */}
          <div className="mt-8 text-center text-sm text-luxury-emerald/70">
            Chưa có tài khoản?{' '}
            <Link to="/register" className="font-bold text-luxury-brass hover:text-luxury-burgundy hover:underline transition-colors">
              Đăng ký ngay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
