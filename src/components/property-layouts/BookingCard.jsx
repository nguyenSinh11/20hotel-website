import React from 'react';

const BookingCard = ({ price, className = '' }) => {
  return (
    <div className={`bg-white rounded-md p-6 shadow-xl shadow-black/5 border border-luxury-emerald/10 sticky top-32 ${className}`}>
      <div className="mb-6">
        <span className="text-2xl font-bold font-serif text-luxury-burgundy">{price}</span>
        <span className="text-luxury-emerald/60"> / đêm</span>
      </div>
      
      <div className="border border-luxury-emerald/20 rounded-sm mb-6 overflow-hidden">
        <div className="flex border-b border-luxury-emerald/20">
          <div className="flex-1 p-3 border-r border-luxury-emerald/20">
            <label className="block text-[10px] font-bold uppercase mb-1">Nhận phòng</label>
            <input type="text" placeholder="Thêm ngày" className="w-full text-sm outline-none bg-transparent" />
          </div>
          <div className="flex-1 p-3">
            <label className="block text-[10px] font-bold uppercase mb-1">Trả phòng</label>
            <input type="text" placeholder="Thêm ngày" className="w-full text-sm outline-none bg-transparent" />
          </div>
        </div>
        <div className="p-3">
          <label className="block text-[10px] font-bold uppercase mb-1">Khách</label>
          <select className="w-full text-sm outline-none bg-transparent cursor-pointer">
            <option>1 khách</option>
            <option>2 khách</option>
          </select>
        </div>
      </div>

      <button className="w-full py-4 text-lg bg-luxury-emerald text-luxury-ivory hover:bg-luxury-emerald/90 transition-colors font-medium">
        Đặt phòng ngay
      </button>
      <p className="text-center text-xs text-luxury-emerald/50 mt-4">Bạn vẫn chưa bị trừ tiền</p>
    </div>
  );
};

export default BookingCard;
