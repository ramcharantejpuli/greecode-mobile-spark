
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/')}
              className="hover:bg-gray-100"
            >
              <ArrowLeft className="w-5 h-5 text-black" />
            </Button>
            <div>
              <h1 className="text-xl font-bold text-black">Interview Assistant</h1>
              <p className="text-xs text-gray-600">Ace your interview with real time Answers!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 pb-24">
        {/* Hero Section */}
        <Card className="bg-gradient-to-r from-[#2DD4BF] to-[#20B2AA] text-white mb-6 animate-fade-in-up">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Ready to Excel?</h2>
                <p className="text-sm text-white/80">Start your AI-powered interview preparation</p>
              </div>
            </div>
            <Button 
              className="w-full bg-white text-[#2DD4BF] hover:bg-gray-100 font-semibold"
              onClick={toggleRecording}
            >
              {isRecording ? (
                <>
                  <Pause className="w-4 h-4 mr-2" />
                  Stop Session
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Start Practice Session
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <CardHeader className="pb-3">
                  <div className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center mb-2`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-sm font-semibold text-black">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Live Session Panel */}
        <Card className="bg-white border border-gray-200 shadow-md animate-fade-in-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-black">
              <div className="w-8 h-8 rounded-lg bg-[#2DD4BF] flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              Live Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="min-h-32 p-4 bg-gray-50 rounded-lg mb-4 border border-gray-100">
              {isRecording ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-1 bg-[#2DD4BF] rounded-full animate-pulse"
                          style={{ 
                            height: `${Math.random() * 20 + 10}px`,
                            animationDelay: `${i * 100}ms`
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-[#2DD4BF] text-sm font-medium">Recording your response...</span>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="text-sm text-gray-800 font-medium mb-1">Sample Question:</p>
                    <p className="text-sm text-gray-600">"Tell me about yourself and your experience in software development."</p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Mic className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 text-sm mb-2">Ready to start your interview practice?</p>
                  <p className="text-xs text-gray-500">Tap the microphone to begin recording your responses</p>
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className={`w-2 h-2 ${isRecording ? 'bg-red-500' : 'bg-green-500'} rounded-full animate-pulse`} />
                {isRecording ? 'Recording Active' : 'Assistant Ready'}
              </div>
              <span className="text-xs text-gray-400">AI-Powered</span>
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
            ${isRecording ? 'bg-red-500 hover:bg-red-600 scale-110' : 'bg-[#2DD4BF] hover:bg-[#2DD4BF]/90'}
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
    </div>
  );
};

export default InterviewAssistant;
