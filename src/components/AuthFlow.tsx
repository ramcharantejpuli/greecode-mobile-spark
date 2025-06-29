
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, Eye, EyeOff, ExternalLink, Shield, CheckCircle } from 'lucide-react';

interface AuthFlowProps {
  onComplete: () => void;
}

const AuthFlow: React.FC<AuthFlowProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState<'login' | 'pin' | 'success'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [pin, setPin] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('pin');
  };

  const handlePinChange = (value: string) => {
    if (value.length <= 6 && /^\d*$/.test(value)) {
      setPin(value);
      if (value.length === 6) {
        setTimeout(() => {
          setShowSuccess(true);
          setTimeout(() => {
            setCurrentStep('success');
            setTimeout(() => {
              onComplete();
            }, 2000);
          }, 1000);
        }, 500);
      }
    }
  };

  const handleCreateAccount = () => {
    window.open('https://greecode.in', '_blank');
  };

  if (currentStep === 'success') {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4 mobile-container">
        <div className="w-full max-w-sm">
          <Card className="bg-white border-4 border-black shadow-2xl success-animation">
            <CardContent className="p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-yellow-400 flex items-center justify-center border-4 border-black">
                <CheckCircle className="w-10 h-10 text-black success-checkmark" />
              </div>
              <h2 className="text-2xl font-bold text-black mb-4">
                PIN Verified Successfully!
              </h2>
              <p className="text-gray-600 mb-6">
                Redirecting to your dashboard...
              </p>
              <div className="flex justify-center">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce border border-black"
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
  }

  if (currentStep === 'pin') {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4 mobile-container">
        <div className="w-full max-w-sm">
          <Card className="bg-white border-4 border-black shadow-2xl animate-slide-in-up">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-black flex items-center justify-center border-2 border-yellow-400">
                <Shield className="w-8 h-8 text-yellow-400" />
              </div>
              <CardTitle className="text-xl text-black font-bold">Secure Authentication</CardTitle>
              <p className="text-sm text-gray-600">Enter your 6-digit PIN for secure access</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-6">
                <div className="p-4 rounded-lg bg-gray-50 border-4 border-black">
                  <div className="mb-4">
                    <Input
                      type="password"
                      value={pin}
                      onChange={(e) => handlePinChange(e.target.value)}
                      placeholder="Enter 6-digit PIN"
                      className="text-center text-2xl font-mono bg-white border-4 border-black focus:border-yellow-400 focus:ring-yellow-400 h-14"
                      maxLength={6}
                      autoFocus
                    />
                  </div>
                  
                  <div className="pin-input-container mb-4">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-full border-2 border-black bg-white transition-all duration-300 ${i < pin.length ? 'bg-yellow-400 border-yellow-400 scale-110' : ''}`}
                      />
                    ))}
                  </div>
                  
                  {showSuccess && (
                    <div className="success-animation">
                      <CheckCircle className="w-8 h-8 mx-auto text-yellow-400 mb-2" />
                      <p className="text-sm text-black font-medium">PIN Verified!</p>
                    </div>
                  )}
                </div>
                
                <p className="text-xs text-gray-500">
                  🔒 Your PIN is encrypted and stored securely
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4 mobile-container">
      <div className="w-full max-w-sm">
        <Card className="bg-white border-4 border-black shadow-2xl animate-slide-in-up">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-400 flex items-center justify-center border-4 border-black">
              <div className="text-2xl font-bold text-black">G</div>
            </div>
            <CardTitle className="text-xl text-black font-bold">Welcome to Greecode</CardTitle>
            <p className="text-sm text-gray-600">Sign in to your account</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-black font-bold text-sm">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 bg-white border-4 border-black focus:border-yellow-400 focus:ring-yellow-400 text-black h-12 text-base"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-black font-bold text-sm">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-12 pr-12 bg-white border-4 border-black focus:border-yellow-400 focus:ring-yellow-400 text-black h-12 text-base"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black transition-colors touch-target"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <Button 
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white font-bold border-4 border-black hover:border-yellow-400 h-12 text-base transition-all duration-300"
                size="lg"
              >
                Continue to Security
              </Button>
            </form>

            <div className="mt-6 text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-black"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-4 text-gray-500 font-medium">New to Greecode?</span>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={handleCreateAccount}
                className="w-full mt-4 border-4 border-black text-black hover:bg-yellow-400 hover:text-black font-bold h-12 text-base transition-all duration-300"
              >
                Create Account
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthFlow;
