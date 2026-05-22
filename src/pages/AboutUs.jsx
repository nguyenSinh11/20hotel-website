import React, { useEffect } from 'react';
import { Building2, Users, HandHeart } from 'lucide-react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-luxury-ivory min-h-screen text-luxury-emerald">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="About 20 Hotel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-emerald/60 mix-blend-multiply"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4" data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold text-luxury-ivory mb-4 font-serif">About us</h1>
          <p className="text-luxury-brass text-lg md:text-xl font-semibold tracking-[0.3em] uppercase">
            20 HOTEL & APARTMENT
          </p>
        </div>
      </section>

      {/* Giới thiệu công ty */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold font-serif mb-12 text-luxury-emerald border-l-4 border-luxury-brass pl-4" data-aos="fade-right">
          Giới thiệu công ty
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="text-luxury-emerald/80 space-y-6 text-sm leading-relaxed" data-aos="fade-up">
            <p>
              <strong className="text-luxury-emerald font-semibold">Công ty Cổ phần Thương mại Dịch vụ Hai Mươi</strong> ra mắt thị trường vào tháng 06/2020, là đơn vị tiên phong trong lĩnh vực kinh doanh, mua bán và cho thuê căn hộ dịch vụ - khách sạn - cửa hàng coffee tại Hà Nội.
            </p>
            <p>
              Sở hữu các chuỗi thương hiệu là 20 Hotel & Apartment và 20 Coffee, Công ty Cổ phần Thương mại Dịch vụ Hai Mươi hiện đã mở rộng tới 04 chi nhánh tại các vị trí đắc địa trải dài qua nhiều quận trung tâm tại Thành phố Hà Nội.
            </p>
            <p>
              Các chuỗi khách sạn, căn hộ dịch vụ cao cấp cho thuê ngắn hạn - dài hạn của 20 Hotel & Apartment được trang bị đầy đủ nội thất tiện nghi, đáp ứng mọi nhu cầu khách hàng với chi phí hợp lý. Vị trí các khu căn hộ đều nằm gần các trường Đại học, bệnh viện, trung tâm thương mại, giao thông thuận tiện, tiện lợi trong sinh hoạt.
            </p>
            <p>
              Với định hướng chiến lược phát triển hệ sinh thái lưu trú toàn diện trong khu vực Đông Nam Á, mang Uy Tín - Tâm - Tầm làm kim chỉ nam cho mọi hành động.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-md shadow-lg shadow-black/5 border border-luxury-emerald/5" data-aos="fade-up" data-aos-delay="100">
            <h3 className="font-bold text-luxury-emerald mb-6 font-serif text-lg">Hệ thống 20 Hotel - Apartment - Coffee:</h3>
            <ul className="space-y-4 text-sm text-luxury-emerald/80">
              <li className="flex items-start">
                <span className="text-luxury-brass font-bold mr-2">1:</span> Số 49 Trần Quốc Vượng, Cầu Giấy, Hà Nội.
              </li>
              <li className="flex items-start">
                <span className="text-luxury-brass font-bold mr-2">2:</span> Số 581 Kim Ngưu, Hai Bà Trưng, Hà Nội.
              </li>
              <li className="flex items-start">
                <span className="text-luxury-brass font-bold mr-2">3:</span> Số 98A Đội Cấn, Ba Đình, Hà Nội.
              </li>
              <li className="flex items-start">
                <span className="text-luxury-brass font-bold mr-2">4:</span> Số 92 Thợ Nhuộm, Hoàn Kiếm, Hà Nội.
              </li>
              <li className="flex items-start">
                <span className="text-luxury-brass font-bold mr-2">5:</span> 108 K17 Nguyễn Hiền, Hai Bà Trưng, Hà Nội.
              </li>
            </ul>
            
            <div className="mt-8 pt-6 border-t border-luxury-emerald/10 space-y-2 text-sm text-luxury-emerald/80">
              <p><span className="font-semibold text-luxury-emerald">Website:</span> 20hotel.vn</p>
              <p><span className="font-semibold text-luxury-emerald">Hotline:</span> 0865 620 204</p>
              <p><span className="font-semibold text-luxury-emerald">Email:</span> cskh@20hotel.vn</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mô Hình Kinh Doanh */}
      <section className="py-24 bg-white border-y border-luxury-emerald/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 text-center md:text-left" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-luxury-emerald leading-tight">
                Mô Hình <br/>
                <span className="text-luxury-burgundy">Kinh Doanh</span>
              </h2>
            </div>
            
            <div className="md:col-span-2 space-y-6 text-sm text-luxury-emerald/80 leading-relaxed" data-aos="fade-left">
              <div className="flex items-start">
                <span className="text-luxury-brass mr-3 mt-1">-</span>
                <p><strong className="text-luxury-emerald">Chuỗi Khách sạn tiện ích:</strong> tọa lạc tại các vị trí có nhu cầu cao về lưu trú tham quan, du lịch, công tác như: Chùa Một Cột, Bảo Tàng Hồ Chí Minh, Văn Miếu Quốc Tử Giám... các trường đại học lớn như: Đại học Sư Phạm, Học viện Báo Chí Tuyên Truyền, Đại học Quốc Gia...</p>
              </div>
              <div className="flex items-start">
                <span className="text-luxury-brass mr-3 mt-1">-</span>
                <p><strong className="text-luxury-emerald">Chuỗi Căn hộ dịch vụ tiện ích:</strong> giải quyết các vấn đề về nhà ở cho sinh viên hoặc người mới đi làm ngay chính trung tâm thủ đô với một không gian sống thoải mái, tiện lợi, mức giá trung bình.</p>
              </div>
              <div className="flex items-start">
                <span className="text-luxury-brass mr-3 mt-1">-</span>
                <p><strong className="text-luxury-emerald">Chuỗi Coffee - Sống Hai Mươi:</strong> khát khao mang tới hệ sinh thái tiện ích trong không gian sống đến tinh thần thoải mái, yêu cuộc sống.</p>
              </div>
              <div className="flex items-start">
                <span className="text-luxury-brass mr-3 mt-1">-</span>
                <p><strong className="text-luxury-emerald">Quản lý, vận hành tòa nhà:</strong> tạo chuẩn mực trong quản lý, vận hành đối với các hệ sinh thái của công ty Hai Mươi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phát Triển Văn Hóa Doanh Nghiệp */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-luxury-brass font-bold tracking-widest uppercase text-xs mb-4">20 Hotel & Apartment</p>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-luxury-emerald">
            PHÁT TRIỂN VĂN HÓA DOANH NGHIỆP
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-md shadow-xl shadow-black/5 border border-luxury-emerald/5 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay="100">
            <div className="text-sm text-luxury-emerald/80 leading-relaxed space-y-4 mb-8">
              <p>Đối với <strong className="text-luxury-emerald">Công ty Hai Mươi</strong>, đội ngũ cán bộ nhân viên (CBNV) chính là tài sản quý giá và nguồn lực cho sự phát triển bền vững. Sự hưng thịnh của doanh nghiệp luôn đồng hành với sự phát triển nghề nghiệp của CBNV.</p>
              <p>Để đáp ứng sự kỳ vọng của CBNV, những người luôn phấn đấu làm việc tận tâm, nghiêm túc không ngừng học hỏi và nâng cao kinh nghiệm của bản thân. <strong className="text-luxury-emerald">Hai Mươi</strong> luôn nỗ lực tạo cơ hội phát triển tương xứng với tiềm năng của cá nhân.</p>
            </div>
            <div className="flex items-center text-luxury-emerald font-serif font-bold text-lg pt-6 border-t border-luxury-emerald/10">
              <Building2 className="w-8 h-8 text-luxury-brass mr-4" />
              Môi Trường Làm Việc
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-md shadow-xl shadow-black/5 border border-luxury-emerald/5 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay="200">
            <div className="text-sm text-luxury-emerald/80 leading-relaxed space-y-4 mb-8">
              <p>Để cải thiện chất lượng nhân sự, chúng tôi tiến hành các cuộc phỏng vấn đầu ra đối với các nhân viên ngưng công tác tại doanh nghiệp.</p>
              <p><strong className="text-luxury-emerald">Hai Mươi</strong> mong muốn qua các buổi phỏng vấn này có thể lắng nghe được ý kiến đóng góp của nhân viên trong suốt quá trình làm việc tại Công ty, để thấu hiểu những tâm tư, nguyện vọng của họ, từ đó đưa ra những lời khuyên, định hướng và lời tư vấn, đồng thời cũng rút kinh nghiệm cho chính chúng tôi.</p>
            </div>
            <div className="flex items-center text-luxury-emerald font-serif font-bold text-lg pt-6 border-t border-luxury-emerald/10">
              <Users className="w-8 h-8 text-luxury-brass mr-4" />
              Chính Sách Nhân Sự
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-md shadow-xl shadow-black/5 border border-luxury-emerald/5 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay="300">
            <div className="text-sm text-luxury-emerald/80 leading-relaxed space-y-4 mb-8">
              <p>Để thúc đẩy những nhân viên có năng lực cống hiến và gắn bó lâu dài với Công ty.</p>
              <p><strong className="text-luxury-emerald">Hai Mươi</strong> cũng gia tăng những chính sách chăm sóc sức khỏe, tinh thần cho CBNV như tổ chức Teambuilding, các cuộc thi nấu ăn, tài trợ CLB YOGA... nhằm tạo động lực thúc đẩy CBNV yên tâm làm việc.</p>
            </div>
            <div className="flex items-center text-luxury-emerald font-serif font-bold text-lg pt-6 border-t border-luxury-emerald/10">
              <HandHeart className="w-8 h-8 text-luxury-brass mr-4" />
              Chính Sách Đãi Ngộ
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
