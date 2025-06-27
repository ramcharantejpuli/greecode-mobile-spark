
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
  Menu,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const MainInterface: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const navigate = useNavigate();

  const features = [
    {
      id: 1,
      title: 'Interview Assistant',
      description: 'Ace your interview with real time Answers!',
      icon: Briefcase,
      color: 'bg-[#2DD4BF]', // Keep the green color for first box only
      textColor: 'text-white',
      progress: 75,
      isSpecial: true
    },
    {
      id: 2,
      title: 'AI Analysis',
      description: 'Real-time response feedback',
      icon: Brain,
      color: 'bg-white',
      textColor: 'text-black',
      progress: 60,
      isSpecial: false
    },
    {
      id: 3,
      title: 'Mock Interviews',
      description: 'Simulate real scenarios',
      icon: MessageSquare,
      color: 'bg-white',
      textColor: 'text-black',
      progress: 40,
      isSpecial: false
    },
    {
      id: 4,
      title: 'Performance',
      description: 'Track your progress',
      icon: Zap,
      color: 'bg-white',
      textColor: 'text-black',
      progress: 85,
      isSpecial: false
    }
  ];

  const handleCardClick = (id: number) => {
    if (id === 1) {
      navigate('/interview-assistant');
    } else {
      setSelectedCard(selectedCard === id ? null : id);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between p-4">
          <div className="animate-fade-in-up">
            <h1 className="text-xl font-bold text-black">Greecode-Copilot</h1>
            <p className="text-xs text-gray-600">Ready to ace your interview?</p>
          </div>
          
          <Button 
            variant="outline" 
            size="icon"
            className="animate-bounce-in border-gray-300 hover:border-gray-400 w-10 h-10 bg-white hover:bg-gray-50"
          >
            <Settings className="w-4 h-4 text-black" />
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
                  cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-lg
                  ${isSelected ? 'ring-2 ring-gray-400 scale-105' : ''}
                  ${feature.color} border border-gray-200 shadow-md
                `}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
                onClick={() => handleCardClick(feature.id)}
              >
                <CardHeader className="pb-2 p-4">
                  <div className={`w-10 h-10 rounded-xl ${feature.isSpecial ? 'bg-white/20' : 'bg-black'} flex items-center justify-center mb-2`}>
                    <Icon className={`w-5 h-5 ${feature.isSpecial ? 'text-white' : 'text-white'}`} />
                  </div>
                  <CardTitle className={`text-sm ${feature.textColor} leading-tight font-semibold`}>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className={`text-xs ${feature.isSpecial ? 'text-white/80' : 'text-gray-600'} mb-3 leading-relaxed`}>
                    {feature.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className={`${feature.isSpecial ? 'text-white/70' : 'text-gray-500'}`}>Progress</span>
                      <span className={`${feature.isSpecial ? 'text-white' : 'text-black'} font-medium`}>{feature.progress}%</span>
                    </div>
                    <div className={`w-full ${feature.isSpecial ? 'bg-white/20' : 'bg-gray-200'} rounded-full h-1.5`}>
                      <div 
                        className={`h-1.5 ${feature.isSpecial ? 'bg-white' : 'bg-black'} rounded-full transition-all duration-1000`}
                        style={{ width: isSelected ? `${feature.progress}%` : '0%' }}
                      />
                    </div>
                  </div>

                  {feature.id === 1 && (
                    <div className="mt-3 flex items-center text-xs text-white/90">
                      <span>Get Started</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* AI Response Panel */}
        <Card className="bg-white border border-gray-200 shadow-md animate-fade-in-up">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-3 text-black text-lg">
              <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              AI Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="min-h-24 p-4 bg-gray-50 rounded-lg mb-4 border border-gray-100">
              {isRecording ? (
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className={`w-1 bg-black rounded-full animate-pulse`}
                        style={{ 
                          height: `${Math.random() * 20 + 10}px`,
                          animationDelay: `${i * 100}ms`
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-black text-sm font-medium">Listening...</span>
                </div>
              ) : (
                <div className="text-gray-600 text-sm">
                  <span className="typing-cursor">
                    Hi! I'm your AI interview assistant. Tap the microphone to start practicing
                  </span>
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                AI Assistant Active
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={toggleRecording}
          className={`
            w-16 h-16 rounded-full shadow-2xl relative overflow-hidden transition-all duration-300
            ${isRecording ? 'bg-red-500 hover:bg-red-600 scale-110' : 'bg-black hover:bg-gray-800'}
          `}
        >
          {isRecording ? (
            <Pause className="w-7 h-7 text-white" />
          ) : (
            <Mic className="w-7 h-7 text-white" />
          )}
          
          {isRecording && (
            <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
          )}
        </Button>
      </div>

      {/* Bottom Navigation Placeholder */}
      <div className="fixed bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
    </div>
  );
};

export default MainInterface;
