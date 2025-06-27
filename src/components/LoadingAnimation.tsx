
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Database, User, Settings, CheckCircle } from 'lucide-react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    { icon: User, text: "Verifying credentials", delay: 1000 },
    { icon: Database, text: "Fetching your data", delay: 1500 },
    { icon: Settings, text: "Setting up workspace", delay: 1200 },
    { icon: CheckCircle, text: "Almost ready!", delay: 800 }
  ];

  useEffect(() => {
    let totalDelay = 0;
    
    loadingSteps.forEach((step, index) => {
      totalDelay += step.delay;
      setTimeout(() => {
        setCurrentStep(index + 1);
      }, totalDelay);
    });

    setTimeout(() => {
      onComplete();
    }, totalDelay + 500);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 gradient-bg flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Card className="bg-card/80 backdrop-blur-sm border-border/50 animate-fade-in">
          <CardContent className="p-8 text-center">
            {/* Main Loading Icon */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse">
              <Loader2 className="w-10 h-10 text-white animate-spin" />
            </div>

            <h2 className="text-2xl font-bold text-white mb-8">
              Getting Things Ready
            </h2>

            {/* Loading Steps */}
            <div className="space-y-4">
              {loadingSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep === index + 1;
                const isCompleted = currentStep > index + 1;
                
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-500 ${
                      isActive 
                        ? 'bg-primary/20 border border-primary/30 animate-pulse' 
                        : isCompleted 
                        ? 'bg-green-500/20 border border-green-500/30' 
                        : 'bg-muted/10 border border-transparent'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary text-white' 
                        : isCompleted 
                        ? 'bg-green-500 text-white' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {isActive && <Loader2 className="w-4 h-4 animate-spin" />}
                      {isCompleted && <CheckCircle className="w-4 h-4" />}
                      {!isActive && !isCompleted && <Icon className="w-4 h-4" />}
                    </div>
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      isActive || isCompleted ? 'text-white' : 'text-muted-foreground'
                    }`}>
                      {step.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex justify-center">
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoadingAnimation;
