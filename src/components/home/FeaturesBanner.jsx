import React from 'react';

const FEATURES = [
  {
    title: "Bộ Sưu Tập Tinh Hoa",
    description: "Hàng triệu không gian lưu trú được tuyển chọn khắt khe, từ những kiệt tác boutique bản địa đến danh mục resort toàn cầu."
  },
  {
    title: "Tuyệt Đỉnh Tiện Nghi",
    description: "Quy tụ những thương hiệu lừng danh nhất thế giới, thỏa mãn mọi chuẩn mực khắt khe của giới tinh hoa."
  },
  {
    title: "Đặc Quyền Thượng Khách",
    description: "Tận hưởng đặc quyền ưu tiên và mức giá độc quyền chưa từng được công bố, giới hạn riêng cho thành viên 20Hotel."
  }
];

const FeaturesBanner = () => {
  return (
    <section className="bg-luxury-emerald py-24 md:py-32 border-y border-luxury-brass/20 relative">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.83-54.627 54.627-.83-.83L54.627 0zM0 54.627l.83-.83 54.627 54.627-.83.83L0 54.627z\' fill=\'%23FFFFF0\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group cursor-pointer"
              data-aos="fade-up" 
              data-aos-delay={index * 150}
            >
              <h3 className="text-luxury-ivory text-xl font-serif font-bold mb-4 transition-colors group-hover:text-luxury-brass">{feature.title}</h3>
              <p className="text-luxury-ivory/70 text-sm max-w-[250px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBanner;
