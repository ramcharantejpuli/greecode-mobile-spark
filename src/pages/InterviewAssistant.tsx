
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowLeft, 
  Mic, 
  MessageSquare, 
  Brain, 
  Zap,
  Play,
  Pause,
  Users,
  BookOpen,
  Target
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InterviewAssistant: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Responses',
      description: 'Get intelligent, contextual answers to interview questions in real-time',
      color: 'bg-[#2DD4BF]'
    },
    {
      icon: Users,
      title: 'Practice Sessions',
      description: 'Simulate real interview scenarios with our advanced AI interviewer',
      color: 'bg-blue-500'
    },
    {
      icon: BookOpen,
      title: 'Question Bank',
      description: 'Access thousands of curated interview questions across all domains',
      color: 'bg-purple-500'
    },
    {
      icon: Target,
      title: 'Performance Analytics',
      description: 'Track your improvement with detailed performance metrics',
      color: 'bg-orange-500'
    }
  ];

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="min-h-screen bg-white max-w-sm mx-auto relative overflow-x-hidden">
      {/* Header - Mobile Optimized */}
      <div className="sticky top-0 z-40 bg-white border-b-2 border-black">
        <div className="flex items-center justify-between p-4 min-h-[60px]">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/')}
              className="hover:bg-gray-100 w-12 h-12 touch-target"
            >
              <ArrowLeft className="w-6 h-6 text-black" />
            </Button>
            <div>
              <h1 className="text-xl font-bold text-black">Interview Assistant</h1>
              <p className="text-sm text-gray-600">Ace your interview with real time Answers!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 pb-32">
        {/* Hero Section - Mobile Optimized */}
        <Card className="bg-gradient-to-r from-[#2DD4BF] to-[#20B2AA] text-white mb-8 animate-fade-in-up border-2 border-black">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Ready to Excel?</h2>
                <p className="text-base text-white/80">Start your AI-powered interview preparation</p>
              </div>
            </div>
            <Button 
              className="w-full bg-white text-[#2DD4BF] hover:bg-gray-100 font-bold text-lg h-14 touch-target border-2 border-black"
              onClick={toggleRecording}
            >
              {isRecording ? (
                <>
                  <Pause className="w-5 h-5 mr-3" />
                  Stop Session
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-3" />
                  Start Practice Session
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Features Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 gap-4 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="bg-white border-2 border-black shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <CardHeader className="pb-4 p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center border-2 border-black`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold text-black mb-2">
                        {feature.title}
                      </CardTitle>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Live Session Panel - Mobile Optimized */}
        <Card className="bg-white border-2 border-black shadow-lg animate-fade-in-up">
          <CardHeader className="p-6">
            <CardTitle className="flex items-center gap-4 text-black text-xl">
              <div className="w-10 h-10 rounded-lg bg-[#2DD4BF] flex items-center justify-center border-2 border-black">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              Live Assistant
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="min-h-40 p-5 bg-gray-50 rounded-lg mb-6 border-2 border-black">
              {isRecording ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-1.5 bg-[#2DD4BF] rounded-full animate-pulse"
                          style={{ 
                            height: `${Math.random() * 20 + 15}px`,
                            animationDelay: `${i * 100}ms`
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-[#2DD4BF] text-base font-bold">Recording your response...</span>
                  </div>
                  <div className="bg-white p-4 rounded border-2 border-black">
                    <p className="text-base text-black font-bold mb-2">Sample Question:</p>
                    <p className="text-base text-gray-600">"Tell me about yourself and your experience in software development."</p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Mic className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 text-base mb-3 font-medium">Ready to start your interview practice?</p>
                  <p className="text-sm text-gray-500">Tap the microphone to begin recording your responses</p>
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className={`w-3 h-3 ${isRecording ? 'bg-red-500' : 'bg-green-500'} rounded-full animate-pulse`} />
                <span className="font-medium">{isRecording ? 'Recording Active' : 'Assistant Ready'}</span>
              </div>
              <span className="text-sm text-gray-400 font-medium">AI-Powered</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Floating Action Button - Mobile Optimized */}
      <div className="fixed bottom-8 right-6 z-50">
        <Button 
          onClick={toggleRecording}
          className={`
            w-16 h-16 rounded-full shadow-2xl relative overflow-hidden transition-all duration-300 border-2 border-black touch-target
            ${isRecording ? 'bg-red-500 hover:bg-red-600 scale-110' : 'bg-[#2DD4BF] hover:bg-[#2DD4BF]/90'}
          `}
        >
          {isRecording ? (
            <Pause className="w-8 h-8 text-white" />
          ) : (
            <Mic className="w-8 h-8 text-white" />
          )}
          
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

export default InterviewAssistant;
