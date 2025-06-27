
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, Eye, EyeOff, ExternalLink, Fingerprint, Shield } from 'lucide-react';

interface AuthFlowProps {
  onComplete: () => void;
}

const AuthFlow: React.FC<AuthFlowProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState<'login' | 'passkey'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('passkey');
  };

  const handlePasskeyAuth = () => {
    // Simulate passkey authentication
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  const handleCreateAccount = () => {
    window.open('https://greecode.in', '_blank');
  };

  if (currentStep === 'passkey') {
    return (
      <div className="fixed inset-0 gradient-bg flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 animate-slide-in-up">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse">
                <Fingerprint className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">Secure Authentication</CardTitle>
              <p className="text-muted-foreground">Use your passkey for secure access</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <div className="p-6 rounded-lg bg-muted/20 border border-border/30">
                  <Shield className="w-12 h-12 mx-auto mb-3 text-primary animate-pulse" />
                  <p className="text-sm text-muted-foreground">
                    Touch your fingerprint sensor or use face authentication
                  </p>
                </div>
                
                <Button 
                  onClick={handlePasskeyAuth}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium animate-bounce-in"
                  size="lg"
                >
                  <Fingerprint className="mr-2 w-5 h-5" />
                  Authenticate with Passkey
                </Button>
                
                <p className="text-xs text-muted-foreground">
                  Your biometric data is stored securely on your device
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 gradient-bg flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Card className="bg-card/80 backdrop-blur-sm border-border/50 animate-slide-in-up">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Welcome Back</CardTitle>
            <p className="text-muted-foreground">Sign in to your account</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-background/50 border-border/50 text-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 bg-background/50 border-border/50 text-white"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium"
                size="lg"
              >
                Continue
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Don't have an account?
              </p>
              <Button
                variant="outline"
                onClick={handleCreateAccount}
                className="w-full border-border/50 text-white hover:bg-primary/10"
              >
                Create Account
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthFlow;
