
import React, { useState, useEffect } from 'react';
import { Mic } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [micBase, setMicBase] = useState(false);
  const [micStand, setMicStand] = useState(false);
  const [micHead, setMicHead] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setMicBase(true), 500);
    const timer2 = setTimeout(() => setMicStand(true), 1200);
    const timer3 = setTimeout(() => setMicHead(true), 1800);
    const timer4 = setTimeout(() => setShowLogo(true), 2500);
    const timer5 = setTimeout(() => setShowTagline(true), 3000);
    const timer6 = setTimeout(() => onComplete(), 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50 overflow-hidden px-6">
      <div className="text-center relative max-w-sm w-full">
        {/* Microphone Assembly Animation */}
        <div className="relative mb-8 h-24 sm:h-32 flex items-end justify-center">
          {/* Microphone Base Stand */}
          {micBase && (
            <div className="animate-mic-base-crawl">
              <div className="w-12 h-1.5 sm:w-16 sm:h-2 bg-gradient-to-r from-black to-gray-700 rounded-full mb-2"></div>
            </div>
          )}
          
          {/* Microphone Stand */}
          {micStand && (
            <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 transform -translate-x-1/2 animate-mic-stand-grow">
              <div className="w-0.5 h-12 sm:w-1 sm:h-16 bg-gradient-to-t from-black to-gray-700 rounded-full"></div>
            </div>
          )}
          
          {/* Microphone Head */}
          {micHead && (
            <div className="absolute bottom-[3.25rem] sm:bottom-[4.5rem] left-1/2 transform -translate-x-1/2 animate-mic-head-assemble">
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-black to-gray-800 rounded-full shadow-2xl flex items-center justify-center border-2 border-gray-300">
                  <Mic className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                {/* Pulsing Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-black animate-ping opacity-20"></div>
                <div className="absolute inset-[-6px] sm:inset-[-8px] rounded-full border border-gray-400 animate-pulse"></div>
              </div>
            </div>
          )}
        </div>

        {/* Logo Text */}
        {showLogo && (
          <div className="animate-logo-slide-in opacity-0">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent mb-2 leading-tight">
              Greecode-Copilot
            </h1>
          </div>
        )}

        {/* Tagline */}
        {showTagline && (
          <div className="animate-tagline-fade-in opacity-0">
            <p className="text-base sm:text-lg text-gray-600 mb-2">
              Your AI-Powered Interview Assistant
            </p>
            <p className="text-sm text-gray-500">
              by <span className="text-black font-medium">Greecode.in</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;
