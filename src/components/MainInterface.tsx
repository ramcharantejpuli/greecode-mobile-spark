
import React, { useState } from 'react';
import { 
  Mic, 
  MessageSquare, 
  Settings, 
  User, 
  Briefcase, 
  Brain,
  Zap,
  Play,
  Pause,
  Menu
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MainInterface: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      title: 'Interview Prep',
      description: 'Practice questions with AI feedback',
      icon: Briefcase,
      color: 'from-primary to-blue-600',
      progress: 75
    },
    {
      id: 2,
      title: 'AI Analysis',
      description: 'Real-time response feedback',
      icon: Brain,
      color: 'from-secondary to-teal-600',
      progress: 60
    },
    {
      id: 3,
      title: 'Mock Interviews',
      description: 'Simulate real scenarios',
      icon: MessageSquare,
      color: 'from-purple-600 to-pink-600',
      progress: 40
    },
    {
      id: 4,
      title: 'Performance',
      description: 'Track your progress',
      icon: Zap,
      color: 'from-orange-500 to-red-600',
      progress: 85
    }
  ];

  const handleCardClick = (id: number) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="min-h-screen gradient-bg">
      {/* Mobile Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border/20">
        <div className="flex items-center justify-between p-4">
          <div className="animate-fade-in-up">
            <h1 className="text-xl font-bold text-white">Greecode-Copilot</h1>
            <p className="text-xs text-muted-foreground">Ready to ace your interview?</p>
          </div>
          
          <Button 
            variant="outline" 
            size="icon"
            className="animate-bounce-in border-primary/30 hover:border-primary w-10 h-10"
          >
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="p-4 pb-24">
        {/* Feature Cards Grid - Mobile Optimized */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isSelected = selectedCard === feature.id;
            
            return (
              <Card 
                key={feature.id}
                className={`
                  card-hover cursor-pointer transition-all duration-500 
                  ${isSelected ? 'ring-2 ring-primary scale-105' : ''}
                  bg-card/80 backdrop-blur-sm border-border/50
                `}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
                onClick={() => handleCardClick(feature.id)}
              >
                <CardHeader className="pb-2 p-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-2`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-sm text-white leading-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-primary">{feature.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div 
                        className={`h-1.5 bg-gradient-to-r ${feature.color} rounded-full transition-all duration-1000`}
                        style={{ width: isSelected ? `${feature.progress}%` : '0%' }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* AI Response Panel - Mobile Optimized */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50 animate-fade-in-up">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-white text-lg">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              AI Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="min-h-24 p-4 bg-muted/30 rounded-lg mb-4">
              {isRecording ? (
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className={`w-1 bg-primary rounded-full animate-pulse`}
                        style={{ 
                          height: `${Math.random() * 20 + 10}px`,
                          animationDelay: `${i * 100}ms`
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-primary text-sm">Listening...</span>
                </div>
              ) : (
                <div className="text-muted-foreground text-sm">
                  <span className="typing-cursor">
                    Hi! I'm your AI interview assistant. Tap the microphone to start practicing
                  </span>
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                AI Assistant Active
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Floating Action Button - Mobile Style */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={toggleRecording}
          className={`
            w-16 h-16 rounded-full shadow-2xl relative overflow-hidden transition-all duration-300
            ${isRecording ? 'bg-destructive hover:bg-destructive/90 scale-110' : 'bg-primary hover:bg-primary/90'}
          `}
        >
          {isRecording ? (
            <Pause className="w-7 h-7" />
          ) : (
            <Mic className="w-7 h-7" />
          )}
          
          {/* Ripple Effect */}
          {isRecording && (
            <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
          )}
        </Button>
      </div>

      {/* Bottom Navigation Placeholder */}
      <div className="fixed bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
    </div>
  );
};

export default MainInterface;
