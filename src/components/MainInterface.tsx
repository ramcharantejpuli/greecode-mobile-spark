
import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  User, 
  Briefcase, 
  Brain,
  Zap,
  Menu,
  ArrowRight,
  X,
  Headphones
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
      color: 'bg-[#2DD4BF]',
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
    <div className="min-h-screen bg-white max-w-sm mx-auto relative overflow-x-hidden">
      {/* Mobile Header - Fixed */}
      <div className="sticky top-0 z-40 bg-white border-b border-black">
        <div className="flex items-center justify-between p-4 min-h-[60px]">
          <div className="animate-fade-in-up">
            <h1 className="text-2xl font-bold text-black">Greecode</h1>
          </div>
          
          <Button 
            variant="outline" 
            size="icon"
            className="animate-bounce-in border-2 border-black hover:border-black w-12 h-12 bg-white hover:bg-yellow-400 touch-target"
            onClick={toggleMenu}
          >
            <Menu className="w-5 h-5 text-black" />
          </Button>
        </div>
      </div>

      {/* Sliding Navigation Menu - Mobile Optimized */}
      <div className={`fixed top-0 right-0 h-full w-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 border-b border-black">
          <div className="flex items-center justify-between mb-6 min-h-[60px]">
            <h2 className="text-xl font-bold text-black">Menu</h2>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              className="hover:bg-gray-100 w-12 h-12 touch-target"
            >
              <X className="w-6 h-6 text-black" />
            </Button>
          </div>
          
          {/* User Profile Section - Mobile Optimized */}
          <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg border-2 border-black">
            <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-black">
              <User className="w-7 h-7 text-black" />
            </div>
            <div>
              <p className="text-sm font-medium text-black">{greeting}</p>
              <p className="text-xl font-bold text-black">Ravi</p>
            </div>
          </div>
        </div>

        {/* Navigation Items - Mobile Optimized */}
        <div className="p-6 space-y-4 overflow-y-auto max-h-[calc(100vh-200px)]">
          {navigationItems.map((item) => (
            <div 
              key={item.id}
              className="p-5 bg-gray-50 rounded-lg border-2 border-black hover:bg-yellow-50 transition-colors cursor-pointer touch-target"
              onClick={() => {
                handleCardClick(item.id);
                setIsMenuOpen(false);
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-black text-lg">{item.title}</h3>
                <ArrowRight className="w-5 h-5 text-black" />
              </div>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{item.description}</p>
              
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Progress</span>
                  <span className="text-black font-bold">{item.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 border border-black">
                  <div 
                    className="h-full bg-yellow-400 rounded-full transition-all duration-500 border-r border-black"
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

      <div className="p-4 pb-32">
        {/* Feature Cards Grid - Mobile Optimized */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isSelected = selectedCard === feature.id;
            
            return (
              <Card 
                key={feature.id}
                className={`
                  cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg touch-target
                  ${isSelected ? 'ring-4 ring-yellow-400 scale-105' : ''}
                  ${feature.color} border-2 border-black shadow-lg
                `}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
                onClick={() => handleCardClick(feature.id)}
              >
                <CardHeader className="pb-3 p-5">
                  <div className={`w-12 h-12 rounded-xl ${feature.isSpecial ? 'bg-white/20' : 'bg-yellow-400'} flex items-center justify-center mb-3 border-2 ${feature.isSpecial ? 'border-white/30' : 'border-black'}`}>
                    <Icon className={`w-6 h-6 ${feature.isSpecial ? 'text-white' : 'text-black'}`} />
                  </div>
                  <CardTitle className={`text-base ${feature.textColor} leading-tight font-bold`}>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0">
                  <p className={`text-sm ${feature.isSpecial ? 'text-white/80' : 'text-gray-600'} mb-4 leading-relaxed`}>
                    {feature.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className={`${feature.isSpecial ? 'text-white/70' : 'text-gray-500'} font-medium`}>Progress</span>
                      <span className={`${feature.isSpecial ? 'text-white' : 'text-black'} font-bold`}>{feature.progress}%</span>
                    </div>
                    <div className={`w-full ${feature.isSpecial ? 'bg-white/20' : 'bg-gray-200'} rounded-full h-2 border ${feature.isSpecial ? 'border-white/30' : 'border-black'}`}>
                      <div 
                        className={`h-2 ${feature.isSpecial ? 'bg-white' : 'bg-yellow-400'} rounded-full transition-all duration-1000 ${!feature.isSpecial ? 'border-r border-black' : ''}`}
                        style={{ width: isSelected ? `${feature.progress}%` : '0%' }}
                      />
                    </div>
                  </div>

                  {feature.id === 1 && (
                    <div className="mt-4 flex items-center text-sm text-white/90 font-medium">
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* AI Response Panel - Mobile Optimized */}
        <Card className="bg-white border-2 border-black shadow-lg animate-fade-in-up">
          <CardHeader className="pb-4 p-6">
            <CardTitle className="flex items-center gap-4 text-black text-xl">
              <div className="w-10 h-10 rounded-lg bg-yellow-400 flex items-center justify-center border-2 border-black">
                <MessageSquare className="w-5 h-5 text-black" />
              </div>
              AI Assistant
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="min-h-32 p-5 bg-yellow-50 rounded-lg mb-6 border-2 border-black">
              {isRecording ? (
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className={`w-1.5 bg-yellow-500 rounded-full animate-pulse`}
                        style={{ 
                          height: `${Math.random() * 20 + 15}px`,
                          animationDelay: `${i * 100}ms`
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-yellow-600 text-base font-bold">Listening...</span>
                </div>
              ) : (
                <div className="text-gray-600 text-base">
                  <span className="typing-cursor font-medium">
                    Hi! I'm your AI interview assistant. Tap the microphone to start practicing
                  </span>
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
                <span className="font-medium">AI Assistant Active</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Floating Customer Care Button - Mobile Optimized */}
      <div className="fixed bottom-8 right-6 z-50">
        <Button 
          onClick={toggleRecording}
          className="w-16 h-16 rounded-full shadow-2xl relative overflow-hidden transition-all duration-300 bg-yellow-400 hover:bg-yellow-500 border-2 border-black touch-target"
        >
          <Headphones className="w-8 h-8 text-black" />
          {isRecording && (
            <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
          )}
        </Button>
      </div>

      {/* Bottom Safe Area */}
      <div className="fixed bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
    </div>
  );
};

export default MainInterface;
