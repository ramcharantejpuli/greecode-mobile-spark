
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Sparkles, Shield, Zap } from 'lucide-react';

interface OnboardingFlowProps {
  onComplete: () => void;
}

const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ onComplete }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const onboardingPages = [
    {
      icon: Sparkles,
      title: "Welcome to Greecode-Copilot",
      description: "Your AI-powered interview assistant that helps you prepare, practice, and excel in technical interviews.",
      gradient: "from-primary to-purple-600"
    },
    {
      icon: Shield,
      title: "Smart Interview Preparation",
      description: "Get personalized feedback, practice with real interview questions, and track your progress with advanced AI analytics.",
      gradient: "from-secondary to-teal-600"
    }
  ];

  const currentPageData = onboardingPages[currentPage];
  const Icon = currentPageData.icon;

  const handleNext = () => {
    if (currentPage < onboardingPages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="fixed inset-0 gradient-bg flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Card className="bg-card/80 backdrop-blur-sm border-border/50 animate-slide-in-up">
          <CardContent className="p-8 text-center">
            {/* Icon */}
            <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${currentPageData.gradient} flex items-center justify-center animate-bounce-in`}>
              <Icon className="w-10 h-10 text-white" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-white mb-4 animate-fade-in-up">
              {currentPageData.title}
            </h2>

            {/* Description */}
            <p className="text-muted-foreground mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
              {currentPageData.description}
            </p>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mb-8">
              {onboardingPages.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentPage ? 'bg-primary w-6' : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            {/* Action Button */}
            <Button 
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium py-3 animate-fade-in-up animation-delay-400"
              size="lg"
            >
              {currentPage === onboardingPages.length - 1 ? 'Get Started' : 'Next'}
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OnboardingFlow;
