
import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [showBolt, setShowBolt] = useState(false);
  const [boltExpand, setBoltExpand] = useState(false);
  const [logoMoveLeft, setLogoMoveLeft] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowBolt(true), 300);
    const timer2 = setTimeout(() => setBoltExpand(true), 1000);
    const timer3 = setTimeout(() => setLogoMoveLeft(true), 1800);
    const timer4 = setTimeout(() => setShowLogo(true), 2200);
    const timer5 = setTimeout(() => setShowTagline(true), 2800);
    const timer6 = setTimeout(() => onComplete(), 4200);

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
    <div className="fixed inset-0 gradient-bg flex items-center justify-center z-50 overflow-hidden px-6">
      <div className="text-center relative max-w-4xl w-full">
        {/* Main Content Container */}
        <div className={`flex items-center justify-center transition-all duration-1000 ${logoMoveLeft ? 'justify-start' : ''}`}>
          
          {/* Animated Logo Circle */}
          {showBolt && (
            <div className={`relative transition-all duration-1000 ${logoMoveLeft ? 'mr-6' : 'mb-8'}`}>
              <div className={`
                rounded-full bg-gradient-to-br from-orange-400 to-orange-500 
                flex items-center justify-center shadow-2xl
                transition-all duration-1000 ease-out
                ${boltExpand ? 'w-20 h-20 sm:w-24 sm:h-24' : 'w-16 h-16 sm:w-20 sm:h-20'}
                ${showBolt ? 'animate-thinder-bolt-appear' : ''}
              `}>
                <Zap className={`text-slate-800 transition-all duration-500 ${boltExpand ? 'w-10 h-10 sm:w-12 sm:h-12' : 'w-8 h-8 sm:w-10 sm:h-10'}`} fill="currentColor" />
                
                {/* Pulsing Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-orange-400 animate-ping opacity-30"></div>
                <div className="absolute inset-[-6px] sm:inset-[-8px] rounded-full border border-orange-400/40 animate-pulse"></div>
              </div>
            </div>
          )}

          {/* Logo Text Container */}
          <div className={`${logoMoveLeft ? 'text-left' : 'text-center'}`}>
            {/* Logo Text */}
            {showLogo && (
              <div className="animate-logo-slide-in opacity-0">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 leading-tight">
                  Greecode
                </h1>
              </div>
            )}

            {/* Tagline */}
            {showTagline && (
              <div className="animate-tagline-fade-in opacity-0">
                <p className="text-base sm:text-lg text-muted-foreground mb-2">
                  Your AI-Powered Interview Assistant
                </p>
                <p className="text-sm text-muted-foreground/70">
                  by <span className="text-primary font-medium">Greecode.in</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
