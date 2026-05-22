import React, { useState } from 'react';
import { Search, Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const SearchBar = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (location.trim()) {
      navigate(`/products?search=${encodeURIComponent(location.trim())}`);
    } else {
      navigate('/products');
    }
  };

  return (
    <form onSubmit={handleSearch} className="bg-luxury-ivory/95 backdrop-blur-md p-2 rounded-md inline-flex flex-col md:flex-row items-center w-full max-w-4xl border border-luxury-brass/20 shadow-lg shadow-black/5">
      
      {/* Location */}
      <div className="flex items-center px-6 py-4 flex-1 w-full md:w-auto border-b md:border-b-0 md:border-r border-luxury-emerald/10">
        <Search className="w-5 h-5 text-luxury-brass mr-3" />
        <input 
          type="text" 
          placeholder="Hà Nội, Việt Nam" 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="bg-transparent border-none text-luxury-emerald font-serif focus:outline-none w-full placeholder:text-luxury-emerald/50"
        />
      </div>

      {/* Check in & Check out */}
      <div className="flex items-center px-6 py-4 flex-1 w-full md:w-auto border-b md:border-b-0 md:border-r border-luxury-emerald/10">
        <Calendar className="w-5 h-5 text-luxury-brass mr-3" />
        <div className="flex items-center w-full justify-between">
          <input 
            type="text" 
            placeholder="Nhận phòng" 
            className="bg-transparent border-none text-luxury-emerald focus:outline-none w-[90px] placeholder:text-luxury-emerald/50 text-sm font-serif"
          />
          <span className="text-luxury-emerald/30 mx-2">-</span>
          <input 
            type="text" 
            placeholder="Trả phòng" 
            className="bg-transparent border-none text-luxury-emerald focus:outline-none w-[90px] placeholder:text-luxury-emerald/50 text-sm font-serif"
          />
        </div>
      </div>

      {/* Guests */}
      <div className="flex items-center px-6 py-4 flex-1 w-full md:w-auto">
        <Users className="w-5 h-5 text-luxury-brass mr-3" />
        <select className="bg-transparent border-none text-luxury-emerald focus:outline-none w-full appearance-none cursor-pointer font-serif">
          <option value="1" className="text-luxury-emerald">1 Khách</option>
          <option value="2" className="text-luxury-emerald">2 Khách</option>
          <option value="3" className="text-luxury-emerald">3 Khách</option>
        </select>
      </div>

      {/* Search Button */}
      <div className="p-2 w-full md:w-auto">
        <Button type="submit" className="w-full md:w-auto rounded-md px-8 py-4 shadow-lg shadow-black/5">
          Tìm kiếm
        </Button>
      </div>
      
    </form>
  );
};

export default SearchBar;
