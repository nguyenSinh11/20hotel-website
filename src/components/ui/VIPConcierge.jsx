import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Initialize welcome message with translation
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ sender: 'bot', text: t('concierge.welcome') }]);
    }
  }, [t, messages.length]);

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
          text: t('concierge.recommendation').replace('{{roomName}}', room.name).replace('{{price}}', room.price),
          link: `/property/${room.id}`
        }]);
      } else {
        setMessages(prev => [...prev, {
          sender: 'bot',
          text: t('concierge.not_understood')
        }]);
      }
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 flex-col items-end space-y-2 md:space-y-3 z-50 ${isOpen ? 'hidden' : 'flex'}`}>
        <a
          href="https://zalo.me/"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 md:w-12 md:h-12 bg-luxury-emerald text-luxury-brass rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform border border-luxury-brass/30"
          title="Zalo"
        >
          <span className="font-bold text-[10px] md:text-sm">Zalo</span>
        </a>
        <a
          href="https://m.me/"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 md:w-12 md:h-12 bg-luxury-emerald text-luxury-brass rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform border border-luxury-brass/30"
          title="Facebook"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 md:p-4 bg-luxury-emerald text-luxury-brass rounded-full shadow-2xl hover:scale-105 transition-transform border border-luxury-brass/30 flex items-center md:space-x-2"
        >
          <Sparkles className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
          <span className="hidden md:block font-serif font-bold tracking-wider">{t('concierge.title')}</span>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 w-full h-[85vh] md:bottom-6 md:right-6 md:w-96 md:h-[32rem] bg-luxury-ivory rounded-t-xl md:rounded-b-xl shadow-2xl border border-luxury-brass/30 overflow-hidden flex flex-col z-50">
          {/* Header */}
          <div className="bg-luxury-emerald text-luxury-brass p-4 flex justify-between items-center border-b border-luxury-brass/20">
            <div className="flex items-center space-x-2">
              <Bot className="w-6 h-6" />
              <div>
                <h3 className="font-serif font-bold text-lg leading-tight">{t('concierge.title')}</h3>
                <p className="text-xs text-luxury-ivory/70">{t('concierge.subtitle')}</p>
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
                      {t('concierge.view_room')}
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
                placeholder={t('concierge.placeholder')}
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
