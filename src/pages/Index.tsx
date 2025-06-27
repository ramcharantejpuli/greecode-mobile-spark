
import React, { useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import OnboardingFlow from '@/components/OnboardingFlow';
import AuthFlow from '@/components/AuthFlow';
import LoadingAnimation from '@/components/LoadingAnimation';
import MainInterface from '@/components/MainInterface';

type AppState = 'splash' | 'onboarding' | 'auth' | 'loading' | 'dashboard';

const Index = () => {
  const [appState, setAppState] = useState<AppState>('splash');

  const handleSplashComplete = () => {
    setAppState('onboarding');
  };

  const handleOnboardingComplete = () => {
    setAppState('auth');
  };

  const handleAuthComplete = () => {
    setAppState('loading');
  };

  const handleLoadingComplete = () => {
    setAppState('dashboard');
  };

  return (
    <div className="min-h-screen bg-background">
      {appState === 'splash' && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}
      {appState === 'onboarding' && (
        <OnboardingFlow onComplete={handleOnboardingComplete} />
      )}
      {appState === 'auth' && (
        <AuthFlow onComplete={handleAuthComplete} />
      )}
      {appState === 'loading' && (
        <LoadingAnimation onComplete={handleLoadingComplete} />
      )}
      {appState === 'dashboard' && (
        <MainInterface />
      )}
    </div>
  );
};

export default Index;
