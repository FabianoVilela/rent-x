import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useState({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return;
  }

  return <Home />;
}
