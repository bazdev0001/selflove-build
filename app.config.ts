import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...(config as ExpoConfig),
  name: 'selfLove Build',
  slug: 'selflove-build',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.apex.selflovebuild',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/android-icon-foreground.png',
      backgroundColor: '#FAF7F4',
    },
    package: 'com.apex.selflovebuild',
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/favicon.png',
  },
  plugins: [
    'expo-router',
    'expo-font',
    [
      'expo-splash-screen',
      {
        image: './assets/splash-icon.png',
        imageWidth: 200,
        resizeMode: 'contain',
        backgroundColor: '#FAF7F4',
      },
    ],
    [
      'expo-notifications',
      {
        icon: './assets/icon.png',
        color: '#6B4C7A',
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
});
