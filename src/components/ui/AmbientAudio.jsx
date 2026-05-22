import React, { useState, useRef, useEffect } from 'react';
import { Disc3, Music, VolumeX, Volume2 } from 'lucide-react';

// Using a reliable royalty-free ambient lounge jazz track
const AUDIO_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

const AmbientAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Check if user previously muted/unmuted
    const savedState = localStorage.getItem('ambient_audio_playing');
    if (savedState === 'true') {
      // Browser autoplay policy might block this until interaction
      // We will attempt to play, and catch error if blocked
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        }).catch(() => {
          // Autoplay blocked
          setIsPlaying(false);
        });
      }
    }
  }, []);

  const toggleAudio = () => {
    setHasInteracted(true);
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        localStorage.setItem('ambient_audio_playing', 'false');
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          localStorage.setItem('ambient_audio_playing', 'true');
        }).catch((err) => {
          console.error("Audio playback failed:", err);
        });
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src={AUDIO_URL} loop preload="auto" />
      
      <button
        onClick={toggleAudio}
        className={`fixed bottom-6 left-6 p-4 rounded-full shadow-2xl transition-all duration-300 z-[100] flex items-center justify-center border ${
          isPlaying 
            ? 'bg-luxury-brass text-luxury-emerald border-luxury-brass scale-100 hover:scale-110' 
            : 'bg-[#0f2a20]/80 text-luxury-brass border-luxury-brass/30 backdrop-blur-md scale-90 hover:scale-100'
        }`}
        title="Bật/Tắt Âm thanh Không gian"
      >
        <div className="relative">
          <Disc3 className={`w-6 h-6 ${isPlaying ? 'animate-spin-vinyl' : ''}`} />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full">
              <VolumeX className="w-3 h-3 text-white absolute" />
            </div>
          )}
          {isPlaying && (
            <div className="absolute -top-1 -right-1">
              <Music className="w-3 h-3 text-luxury-emerald animate-pulse" />
            </div>
          )}
        </div>
        
        {/* Helper tooltip on first load */}
        {!hasInteracted && !isPlaying && (
          <div className="absolute left-16 bg-black/80 text-luxury-ivory text-xs px-3 py-1.5 rounded-sm whitespace-nowrap border border-luxury-brass/30 animate-pulse hidden md:block">
            Bật nhạc nền thư giãn
          </div>
        )}
      </button>
    </>
  );
};

export default AmbientAudio;
