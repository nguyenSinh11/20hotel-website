import React from 'react';
import { useTranslation } from 'react-i18next';

const FEATURES = [
  {
    title: "Bộ Sưu Tập Tinh Hoa",
    title_en: "Elite Collection",
    description: "Hàng triệu không gian lưu trú được tuyển chọn khắt khe, từ những kiệt tác boutique bản địa đến danh mục resort toàn cầu.",
    description_en: "Millions of strictly curated stays, from local boutique masterpieces to global resort portfolios."
  },
  {
    title: "Tuyệt Đỉnh Tiện Nghi",
    title_en: "Ultimate Comfort",
    description: "Quy tụ những thương hiệu lừng danh nhất thế giới, thỏa mãn mọi chuẩn mực khắt khe của giới tinh hoa.",
    description_en: "Gathering the world's most renowned brands, satisfying all the rigorous standards of the elite."
  },
  {
    title: "Đặc Quyền Thượng Khách",
    title_en: "VIP Privileges",
    description: "Tận hưởng đặc quyền ưu tiên và mức giá độc quyền chưa từng được công bố, giới hạn riêng cho thành viên 20Hotel.",
    description_en: "Enjoy priority privileges and exclusive unpublished rates, limited to 20Hotel members only."
  }
];

const FeaturesBanner = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language.startsWith('en');

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
              <h3 className="text-luxury-ivory text-xl font-serif font-bold mb-4 transition-colors group-hover:text-luxury-brass">
                {isEn ? feature.title_en : feature.title}
              </h3>
              <p className="text-luxury-ivory/70 text-sm max-w-[250px] leading-relaxed">
                {isEn ? feature.description_en : feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBanner;
