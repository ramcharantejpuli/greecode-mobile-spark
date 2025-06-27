
import React, { useState, useEffect } from 'react';
import { Mic } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [showMic, setShowMic] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowMic(true), 500);
    const timer2 = setTimeout(() => setShowLogo(true), 2000);
    const timer3 = setTimeout(() => setShowSubtitle(true), 2500);
    const timer4 = setTimeout(() => onComplete(), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 gradient-bg flex items-center justify-center z-50">
      <div className="text-center">
        {/* Microphone Assembly Animation */}
        <div className="relative mb-8">
          {showMic && (
            <div className="animate-mic-assemble">
              <div className="relative">
                {/* Microphone Base */}
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full shadow-2xl">
                    <Mic className="w-12 h-12 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  {/* Pulsing Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20"></div>
                  <div className="absolute inset-[-8px] rounded-full border border-primary/30 animate-pulse"></div>
                </div>
                
                {/* Microphone Stand */}
                <div className="w-1 h-12 bg-gradient-to-b from-primary to-secondary mx-auto rounded-full"></div>
                <div className="w-8 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
              </div>
            </div>
          )}
        </div>

        {/* Logo Text */}
        {showLogo && (
          <div className="animate-logo-slide opacity-0">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Greecode-Copilot
            </h1>
          </div>
        )}

        {/* Subtitle */}
        {showSubtitle && (
          <div className="animate-fade-in-up opacity-0 animation-delay-500">
            <p className="text-lg text-muted-foreground">
              Your AI-Powered Interview Assistant
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;
