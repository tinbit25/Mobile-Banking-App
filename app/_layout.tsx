import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // State to handle theme change
  const [theme, setTheme] = useState(DefaultTheme); // Default theme or any other theme you want to set initially
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    // Optionally, you can listen for system theme preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = () => {
      setTheme(darkModeMediaQuery.matches ? DarkTheme : DefaultTheme);
    };

    darkModeMediaQuery.addEventListener('change', handleThemeChange);
    handleThemeChange(); // Set initial theme

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer theme={theme}> {/* Wrap the entire layout inside NavigationContainer */}
      <ThemeProvider value={theme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </NavigationContainer>
  );
}
