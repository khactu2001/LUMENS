import {
    createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {
    NavigatorScreenParams,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
    MainStack: NavigatorScreenParams<MainStackParamList>;
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();

export const TabStack = createBottomTabNavigator<BottomBarParamList>();

export type MainStackParamList = {
    BottomBarStack: NavigatorScreenParams<BottomBarParamList>;
};

type BottomBarParamList = {
    Home: undefined;
    Notification: undefined;
    Wallet: undefined;
    Profile: undefined;
};


