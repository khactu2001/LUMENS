import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './navigationTypes';
import BottomTabNavigator from './BottomTabNavigator';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          header: () => null,
        }}
      >
        <RootStack.Screen name="MainStack" component={BottomTabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
