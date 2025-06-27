
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
    <div className="fixed inset-0 gradient-bg flex items-center justify-center z-50 overflow-hidden">
      <div className="text-center relative">
        {/* Microphone Assembly Animation */}
        <div className="relative mb-12 h-32 flex items-end justify-center">
          {/* Microphone Base Stand */}
          {micBase && (
            <div className="animate-mic-base-crawl">
              <div className="w-16 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mb-2"></div>
            </div>
          )}
          
          {/* Microphone Stand */}
          {micStand && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-mic-stand-grow">
              <div className="w-1 h-16 bg-gradient-to-t from-primary to-secondary rounded-full"></div>
            </div>
          )}
          
          {/* Microphone Head */}
          {micHead && (
            <div className="absolute bottom-[4.5rem] left-1/2 transform -translate-x-1/2 animate-mic-head-assemble">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full shadow-2xl flex items-center justify-center">
                  <Mic className="w-10 h-10 text-white" />
                </div>
                {/* Pulsing Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20"></div>
                <div className="absolute inset-[-8px] rounded-full border border-primary/30 animate-pulse"></div>
              </div>
            </div>
          )}
        </div>

        {/* Logo Text */}
        {showLogo && (
          <div className="animate-logo-slide-in opacity-0">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              Greecode-Copilot
            </h1>
          </div>
        )}

        {/* Tagline */}
        {showTagline && (
          <div className="animate-tagline-fade-in opacity-0">
            <p className="text-lg text-muted-foreground mb-2">
              Your AI-Powered Interview Assistant
            </p>
            <p className="text-sm text-muted-foreground/70">
              by <span className="text-primary font-medium">Greecode.in</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;
