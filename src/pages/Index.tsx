
import React, { useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import MainInterface from '@/components/MainInterface';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div>
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <MainInterface />
      )}
    </div>
  );
};

export default Index;
