import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar, View } from 'react-native';
import { COLORS } from './src/components/constants/colors';

import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
const CustomStatusBar = (
  { backgroundColor, barStyle }
    : { backgroundColor: string, barStyle: any }) => {

  const insets = useSafeAreaInsets();

  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar
        barStyle={barStyle}
        backgroundColor={backgroundColor}
      />
    </View>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <CustomStatusBar barStyle={'light-content'} backgroundColor={COLORS.primaryColor} />
      <AppNavigator />
    </SafeAreaProvider>
  );
}
