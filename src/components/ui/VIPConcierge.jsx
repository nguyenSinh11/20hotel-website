import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { propertyData } from '../../data/propertyData';

const KEYWORD_MAP = {
  "gia đình": 5,
  "trẻ em": 5,
  "rộng": 6,
  "penthouse": 6,
  "cao cấp": 6,
  "vip": 6,
  "bơi": 6,
  "view": 3,
  "thành phố": 3,
  "ban công": 4,
  "ngoài trời": 4,
  "công tác": 2,
  "rẻ": 1,
  "cơ bản": 1
};

const VIPConcierge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Kính chào quý khách. Tôi có thể giúp ngài tìm căn phòng hoàn hảo cho kỳ nghỉ sắp tới không?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');

    // Simulate AI thinking
    setTimeout(() => {
      const lowerInput = userMessage.toLowerCase();
      let matchedId = null;

      for (const [word, id] of Object.entries(KEYWORD_MAP)) {
        if (lowerInput.includes(word)) {
          matchedId = id;
          break;
        }
      }

      if (matchedId) {
        const room = propertyData.find(p => p.id === matchedId);
        setMessages(prev => [...prev, {
          sender: 'bot',
          text: `Dựa trên yêu cầu của ngài, tôi xin trân trọng đề xuất căn ${room.name}. Căn phòng này mang đến trải nghiệm tuyệt vời với mức giá ${room.price}đ/đêm.`,
          link: `/property/${room.id}`
        }]);
      } else {
        setMessages(prev => [...prev, {
          sender: 'bot',
          text: 'Rất tiếc tôi chưa nắm rõ ý của ngài. Ngài có thể nói rõ hơn về sở thích như: đi cùng gia đình, cần ban công, hay muốn phòng cao cấp nhất không ạ?'
        }]);
      }
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-luxury-emerald text-luxury-brass rounded-full shadow-2xl hover:scale-105 transition-transform border border-luxury-brass/30 z-50 ${isOpen ? 'hidden' : 'flex'} items-center space-x-2`}
      >
        <Sparkles className="w-5 h-5 animate-pulse" />
        <span className="font-serif font-bold tracking-wider">Quản Gia</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 w-full h-[85vh] md:bottom-6 md:right-6 md:w-96 md:h-[32rem] bg-luxury-ivory rounded-t-xl md:rounded-b-xl shadow-2xl border border-luxury-brass/30 overflow-hidden flex flex-col z-50">
          {/* Header */}
          <div className="bg-luxury-emerald text-luxury-brass p-4 flex justify-between items-center border-b border-luxury-brass/20">
            <div className="flex items-center space-x-2">
              <Bot className="w-6 h-6" />
              <div>
                <h3 className="font-serif font-bold text-lg leading-tight">Quản Gia</h3>
                <p className="text-xs text-luxury-ivory/70">Luôn sẵn sàng phục vụ</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-luxury-ivory hover:text-white transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-luxury-ivory/50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-xl p-3 text-sm ${msg.sender === 'user' ? 'bg-luxury-emerald text-white rounded-tr-none' : 'bg-white text-luxury-emerald border border-luxury-emerald/10 shadow-sm rounded-tl-none'}`}>
                  {msg.text}
                  {msg.link && (
                    <Link to={msg.link} onClick={() => setIsOpen(false)} className="block mt-2 text-luxury-brass font-bold hover:underline">
                      Xem phòng ngay →
                    </Link>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-luxury-emerald/10">
            <form onSubmit={handleSend} className="flex relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ngài cần tìm phòng như thế nào?"
                className="w-full bg-luxury-ivory border border-luxury-emerald/20 rounded-full py-2 pl-4 pr-12 text-sm focus:outline-none focus:border-luxury-brass text-luxury-emerald"
              />
              <button type="submit" className="absolute right-1 top-1 bottom-1 w-8 h-8 flex items-center justify-center bg-luxury-emerald text-luxury-brass rounded-full hover:bg-luxury-emerald/90 transition">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default VIPConcierge;
