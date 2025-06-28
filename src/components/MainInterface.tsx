
import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  User, 
  Briefcase, 
  Brain,
  Zap,
  Menu,
  ArrowRight,
  X
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const MainInterface: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [greeting, setGreeting] = useState('');
  const navigate = useNavigate();

  // Set greeting based on time of day
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good Morning');
    } else if (hour < 17) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  const features = [
    {
      id: 1,
      title: 'Interview Assistant',
      description: 'Ace your interview with real time Answers!',
      icon: Briefcase,
      color: 'bg-[#2DD4BF]', // Keep green color for this box only
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

  const navigationItems = [
    { title: 'Interview Assistant', description: 'Ace your interview with real time Answers!', progress: 75, id: 1 },
    { title: 'AI Analysis', description: 'Real-time response feedback', progress: 60, id: 2 },
    { title: 'Mock Interviews', description: 'Simulate real scenarios', progress: 40, id: 3 },
    { title: 'Performance', description: 'Track your progress', progress: 85, id: 4 }
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between p-4">
          <div className="animate-fade-in-up">
            <h1 className="text-xl font-bold text-black">Greecode</h1>
          </div>
          
          <Button 
            variant="outline" 
            size="icon"
            className="animate-bounce-in border-yellow-300 hover:border-yellow-400 w-10 h-10 bg-white hover:bg-yellow-50"
            onClick={toggleMenu}
          >
            <Menu className="w-4 h-4 text-black" />
          </Button>
        </div>
      </div>

      {/* Sliding Navigation Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-black">Menu</h2>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              className="hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-black" />
            </Button>
          </div>
          
          {/* User Profile Section */}
          <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-black" />
            </div>
            <div>
              <p className="text-sm font-medium text-black">{greeting}</p>
              <p className="text-lg font-semibold text-black">Ravi</p>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="p-6 space-y-4">
          {navigationItems.map((item) => (
            <div 
              key={item.id}
              className="p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors cursor-pointer"
              onClick={() => {
                handleCardClick(item.id);
                setIsMenuOpen(false);
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-black">{item.title}</h3>
                <ArrowRight className="w-4 h-4 text-gray-600" />
              </div>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              
              {/* Progress Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Progress</span>
                  <span className="text-black font-medium">{item.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 bg-yellow-400 rounded-full transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}

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
                  ${isSelected ? 'ring-2 ring-yellow-400 scale-105' : ''}
                  ${feature.color} border border-gray-200 shadow-md
                `}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
                onClick={() => handleCardClick(feature.id)}
              >
                <CardHeader className="pb-2 p-4">
                  <div className={`w-10 h-10 rounded-xl ${feature.isSpecial ? 'bg-white/20' : 'bg-yellow-100'} flex items-center justify-center mb-2`}>
                    <Icon className={`w-5 h-5 ${feature.isSpecial ? 'text-white' : 'text-yellow-600'}`} />
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
                    <div className={`w-full ${feature.isSpecial ? 'bg-white/20' : 'bg-yellow-200'} rounded-full h-1.5`}>
                      <div 
                        className={`h-1.5 ${feature.isSpecial ? 'bg-white' : 'bg-yellow-500'} rounded-full transition-all duration-1000`}
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
              <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-black" />
              </div>
              AI Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="min-h-24 p-4 bg-yellow-50 rounded-lg mb-4 border border-yellow-100">
              {isRecording ? (
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className={`w-1 bg-yellow-500 rounded-full animate-pulse`}
                        style={{ 
                          height: `${Math.random() * 20 + 10}px`,
                          animationDelay: `${i * 100}ms`
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-yellow-600 text-sm font-medium">Listening...</span>
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
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                AI Assistant Active
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Floating Customer Care Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={toggleRecording}
          className="w-16 h-16 rounded-full shadow-2xl relative overflow-hidden transition-all duration-300 bg-yellow-400 hover:bg-yellow-500"
        >
          <svg 
            className="w-7 h-7 text-black" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4.5C14.8 4.4 14.6 4.4 14.4 4.5L12 5.5L9.6 4.5C9.4 4.4 9.2 4.4 9 4.5L3 7V9L9 6.5L12 7.5L15 6.5L21 9ZM4 9V17H6V21H8V17H10V19H12V17H14V21H16V17H18V19H20V17H22V9H4Z"/>
          </svg>
        </Button>
      </div>

      {/* Bottom Navigation Placeholder */}
      <div className="fixed bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
    </div>
  );
};

export default MainInterface;
