import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-luxury-ivory pt-24 pb-12 text-luxury-emerald z-10 relative border-t border-luxury-emerald/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-duration="1000">
        
        {/* Top Section - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 pb-16 border-b border-luxury-emerald/10">
          
          {/* Column 1: Hotels */}
          <div>
            <h3 className="font-bold text-lg mb-6 font-serif text-luxury-emerald">20 Hotel</h3>
            <ul className="space-y-4 text-sm text-luxury-emerald/80 mb-8">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 text-luxury-brass flex-shrink-0" />
                <span>93A Đội Cấn, Ba Đình, HN</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-0.5 text-luxury-brass flex-shrink-0" />
                <span>08 656 20204 / 024 321 23030</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-0.5 text-luxury-brass flex-shrink-0" />
                <span>hanoi20hotel@gmail.com</span>
              </li>
            </ul>

            <h3 className="font-bold text-lg mb-6 font-serif text-luxury-emerald">Hai Muoi Hotel</h3>
            <ul className="space-y-4 text-sm text-luxury-emerald/80">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 text-luxury-brass flex-shrink-0" />
                <span>49 Trần Quốc Vượng, Cầu Giấy, HN</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-0.5 text-luxury-brass flex-shrink-0" />
                <span>0826 761 380 / 024 399 00020</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-0.5 text-luxury-brass flex-shrink-0" />
                <span>haimuoihotel@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Apartment */}
          <div>
            <h3 className="font-bold text-lg mb-6 font-serif text-luxury-emerald">20 Apartment</h3>
            <ul className="space-y-6 text-sm text-luxury-emerald/80">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-luxury-brass mt-1.5 mr-3 flex-shrink-0 rounded-full"></span>
                <span>CS1: 49 Trần Quốc Vượng, Cầu Giấy, HN</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-luxury-brass mt-1.5 mr-3 flex-shrink-0 rounded-full"></span>
                <span>CS2: 93A Đội Cấn, Ba Đình, HN</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-luxury-brass mt-1.5 mr-3 flex-shrink-0 rounded-full"></span>
                <span>CS3: 92 Thợ Nhuộm, Hoàn Kiếm, HN</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-luxury-brass mt-1.5 mr-3 flex-shrink-0 rounded-full"></span>
                <span>CS4: 531 Kim Ngưu, Hai Bà Trưng, HN</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Coffee */}
          <div>
            <h3 className="font-bold text-lg mb-6 font-serif text-luxury-emerald">20 Coffee</h3>
            <ul className="space-y-6 text-sm text-luxury-emerald/80">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-luxury-brass mt-1.5 mr-3 flex-shrink-0 rounded-full"></span>
                <span>CS1: 49 Trần Quốc Vượng, Cầu Giấy, HN</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-luxury-brass mt-1.5 mr-3 flex-shrink-0 rounded-full"></span>
                <span>CS2: 93A Đội Cấn, Ba Đình, HN</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-luxury-brass mt-1.5 mr-3 flex-shrink-0 rounded-full"></span>
                <span>CS3: 92 Thợ Nhuộm, Hoàn Kiếm, HN</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-luxury-brass mt-1.5 mr-3 flex-shrink-0 rounded-full"></span>
                <span>CS4: 531 Kim Ngưu, Hai Bà Trưng, HN</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-luxury-brass mt-1.5 mr-3 flex-shrink-0 rounded-full"></span>
                <span>CS5: 108K17 Nguyễn Hiền, Hai Bà Trưng, HN</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-8">
            <a href="/" className="text-5xl font-bold tracking-tight flex items-center justify-center font-serif">
              <span className="text-luxury-burgundy text-6xl mr-1">20</span><span className="text-luxury-emerald">HOTEL</span>
            </a>
          </div>
          
          <div className="flex space-x-4 mb-8">
            <a href="#" className="w-10 h-10 rounded-full border border-luxury-emerald/20 flex items-center justify-center text-luxury-emerald hover:bg-luxury-emerald hover:text-luxury-ivory hover:border-luxury-emerald transition-all duration-300">
              <FaFacebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-luxury-emerald/20 flex items-center justify-center text-luxury-emerald hover:bg-luxury-emerald hover:text-luxury-ivory hover:border-luxury-emerald transition-all duration-300">
              <FaTwitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-luxury-emerald/20 flex items-center justify-center text-luxury-emerald hover:bg-luxury-emerald hover:text-luxury-ivory hover:border-luxury-emerald transition-all duration-300">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-luxury-emerald/20 flex items-center justify-center text-luxury-emerald hover:bg-luxury-emerald hover:text-luxury-ivory hover:border-luxury-emerald transition-all duration-300">
              <FaYoutube className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-luxury-emerald/60">
            © 20 Hotel & Apartment - Sống Hai Mươi
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
