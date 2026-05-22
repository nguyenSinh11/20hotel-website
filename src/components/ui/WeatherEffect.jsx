import React, { useState, useEffect, useRef } from 'react';
import { CloudRain, CloudFog, Sun, CloudSun } from 'lucide-react';

const WeatherEffect = () => {
  // 'none', 'rain', 'fog'
  const [weatherType, setWeatherType] = useState('none');
  const [isDemoMenuOpen, setIsDemoMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Fetch real weather for Hanoi
    const fetchWeather = async () => {
      try {
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=21.0285&longitude=105.8542&current_weather=true');
        const data = await res.json();
        const code = data.current_weather.weathercode;
        
        // WMO Weather interpretation codes
        if ([45, 48].includes(code)) setWeatherType('fog');
        else if (code >= 51 && code <= 99) setWeatherType('rain');
        else setWeatherType('none');
      } catch (error) {
        console.error("Failed to fetch weather", error);
      }
    };

    fetchWeather();
    
    // Expose for console testing
    window.setDemoWeather = (type) => setWeatherType(type);
  }, []);

  return (
    <>
      {/* Weather Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        {weatherType === 'rain' && (
          <div className="absolute inset-0">
            {/* Generate multiple raindrops */}
            {Array.from({ length: 50 }).map((_, i) => (
              <div 
                key={`rain-${i}`}
                className="absolute bg-white/30 w-[1px] h-[50px] animate-rain"
                style={{
                  left: `${Math.random() * 100}vw`,
                  top: `-${Math.random() * 50}vh`,
                  animationDuration: `${0.5 + Math.random() * 0.5}s`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        )}

        {weatherType === 'fog' && (
          <div className="absolute inset-0 opacity-40">
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={`fog-${i}`}
                className="absolute bg-white/10 blur-[100px] w-[500px] h-[300px] rounded-full animate-fog"
                style={{
                  top: `${Math.random() * 60}vh`,
                  left: `-500px`,
                  animationDuration: `${20 + Math.random() * 20}s`,
                  animationDelay: `${Math.random() * 10}s`
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Demo Controller (Pop-up style, responsive) */}
      <div 
        className="fixed top-[100px] left-4 z-[100]"
        onMouseEnter={() => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          setIsDemoMenuOpen(true);
        }}
        onMouseLeave={() => {
          timeoutRef.current = setTimeout(() => {
            setIsDemoMenuOpen(false);
          }, 600); // Đợi 600ms mới đóng menu
        }}
      >
        {/* Vùng vô hình để cầu nối (bridge) giúp di chuột không bị ngắt quãng */}
        <div className="absolute top-0 left-0 w-20 h-full bg-transparent z-0"></div>

        {/* Nút bấm / Biểu tượng khi thu gọn */}
        <button 
          onClick={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setIsDemoMenuOpen(!isDemoMenuOpen);
          }}
          className="p-3 bg-black/60 backdrop-blur-md rounded-full border border-luxury-brass/30 shadow-2xl text-luxury-brass hover:text-luxury-ivory hover:bg-black/80 transition-all z-10 relative"
          title="Test Thời Tiết"
        >
          <CloudSun className="w-5 h-5" />
        </button>

        {/* Menu xổ xuống */}
        <div 
          className={`absolute top-0 left-14 bg-black/80 backdrop-blur-md p-2 rounded-xl border border-luxury-brass/30 shadow-2xl flex items-center space-x-2 transition-all duration-300 origin-left ${
            isDemoMenuOpen ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 -translate-x-4 pointer-events-none'
          }`}
        >
          <button onClick={() => setWeatherType('none')} className={`p-2 rounded-full whitespace-nowrap ${weatherType === 'none' ? 'bg-luxury-brass text-luxury-emerald' : 'text-luxury-ivory hover:bg-white/10'} transition-colors`} title="Trời nắng/Bình thường">
            <Sun className="w-5 h-5 md:w-4 md:h-4" />
          </button>
          <button onClick={() => setWeatherType('fog')} className={`p-2 rounded-full whitespace-nowrap ${weatherType === 'fog' ? 'bg-luxury-brass text-luxury-emerald' : 'text-luxury-ivory hover:bg-white/10'} transition-colors`} title="Sương mù">
            <CloudFog className="w-5 h-5 md:w-4 md:h-4" />
          </button>
          <button onClick={() => setWeatherType('rain')} className={`p-2 rounded-full whitespace-nowrap ${weatherType === 'rain' ? 'bg-luxury-brass text-luxury-emerald' : 'text-luxury-ivory hover:bg-white/10'} transition-colors`} title="Mưa rào">
            <CloudRain className="w-5 h-5 md:w-4 md:h-4" />
          </button>
        </div>
      </div>
    </>
  );
};

export default WeatherEffect;
