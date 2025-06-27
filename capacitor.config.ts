
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.7b07e2a10c004c24af926f37c15be741',
  appName: 'greecode-mobile-spark',
  webDir: 'dist',
  server: {
    url: 'https://7b07e2a1-0c00-4c24-af92-6f37c15be741.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      launchAutoHide: true,
      backgroundColor: "#121212",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: "#121212"
    }
  }
};

export default config;
