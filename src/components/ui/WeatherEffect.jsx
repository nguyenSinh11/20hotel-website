import React, { useState, useEffect } from 'react';
import { CloudRain, CloudFog, Sun } from 'lucide-react';

const WeatherEffect = () => {
  // 'none', 'rain', 'fog'
  const [weatherType, setWeatherType] = useState('none');
  const [isDemoMenuOpen, setIsDemoMenuOpen] = useState(false);

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

      {/* Demo Controller (Hidden unless hovered over the specific area at bottom center) */}
      <div 
        className="fixed bottom-0 left-1/2 -translate-x-1/2 h-4 w-32 z-50 group flex flex-col items-center justify-end"
      >
        <div className="bg-black/80 backdrop-blur-md rounded-t-xl p-2 border border-luxury-brass/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2 translate-y-full group-hover:translate-y-0">
          <button onClick={() => setWeatherType('none')} className={`p-1.5 rounded-full ${weatherType === 'none' ? 'bg-luxury-brass text-luxury-emerald' : 'text-luxury-ivory hover:text-luxury-brass'}`} title="Trời nắng/Bình thường">
            <Sun className="w-4 h-4" />
          </button>
          <button onClick={() => setWeatherType('fog')} className={`p-1.5 rounded-full ${weatherType === 'fog' ? 'bg-luxury-brass text-luxury-emerald' : 'text-luxury-ivory hover:text-luxury-brass'}`} title="Sương mù">
            <CloudFog className="w-4 h-4" />
          </button>
          <button onClick={() => setWeatherType('rain')} className={`p-1.5 rounded-full ${weatherType === 'rain' ? 'bg-luxury-brass text-luxury-emerald' : 'text-luxury-ivory hover:text-luxury-brass'}`} title="Mưa rào">
            <CloudRain className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};

export default WeatherEffect;
