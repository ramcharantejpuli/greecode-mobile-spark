
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
  Pause
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MainInterface: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      title: 'Interview Preparation',
      description: 'Practice common interview questions with AI feedback',
      icon: Briefcase,
      color: 'from-primary to-blue-600',
      progress: 75
    },
    {
      id: 2,
      title: 'AI Response Analysis',
      description: 'Get real-time feedback on your answers',
      icon: Brain,
      color: 'from-secondary to-teal-600',
      progress: 60
    },
    {
      id: 3,
      title: 'Mock Interviews',
      description: 'Simulate real interview scenarios',
      icon: MessageSquare,
      color: 'from-purple-600 to-pink-600',
      progress: 40
    },
    {
      id: 4,
      title: 'Performance Insights',
      description: 'Track your improvement over time',
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
    <div className="min-h-screen gradient-bg p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-white mb-2">
              Welcome Back!
            </h2>
            <p className="text-muted-foreground">
              Ready to ace your next interview?
            </p>
          </div>
          
          <Button 
            variant="outline" 
            size="icon"
            className="animate-bounce-in border-primary/30 hover:border-primary"
          >
            <Settings className="w-5 h-5" />
          </Button>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-primary">{feature.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 bg-gradient-to-r ${feature.color} rounded-full transition-all duration-1000`}
                        style={{ width: isSelected ? `${feature.progress}%` : '0%' }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* AI Response Panel */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              AI Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="min-h-32 p-4 bg-muted/30 rounded-lg mb-4">
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
                  <span className="text-primary">Listening...</span>
                </div>
              ) : (
                <div className="text-muted-foreground">
                  <span className="typing-cursor">
                    Hi! I'm your AI interview assistant. Click the microphone to start practicing
                  </span>
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                AI Assistant Active
              </div>
              
              <Button 
                onClick={toggleRecording}
                className={`
                  floating-button relative overflow-hidden
                  ${isRecording ? 'bg-destructive hover:bg-destructive/90' : 'bg-primary hover:bg-primary/90'}
                `}
              >
                {isRecording ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Mic className="w-6 h-6" />
                )}
                
                {/* Ripple Effect */}
                {isRecording && (
                  <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MainInterface;
