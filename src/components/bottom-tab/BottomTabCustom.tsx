import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';

import { Image, ImageBackground, ImageSourcePropType, TouchableOpacity, View } from 'react-native';

import icons from '../../assets/icons';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type TypeBottomMenu = {
  ic: ImageSourcePropType;
  title: string;
  route: string;
  isBadge?: boolean;
};

function BottomTabCustom({
  state,
  navigation,
}:
  BottomTabBarProps) {
  const BottomMenuData: TypeBottomMenu[] = [
    { ic: icons.ic_bottom_home, title: 'Home', route: 'Home' },
    { ic: icons.ic_bottom_notification, title: 'Notification', route: 'Notification', isBadge: true },
    { ic: icons.ic_bottom_wallet, title: 'Wallet', route: 'Wallet' },
    {
      ic: icons.ic_bottom_profile,
      title: 'Profile',
      route: 'Profile',
    },
  ];

  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {marginBottom: insets.bottom || 0}]}>
      <View style={styles.bottomTab_body_menu}>
        {BottomMenuData.map((item: TypeBottomMenu) => (
          <TouchableOpacity
            key={item.title}
            onPress={() => navigation.navigate(item.route)}
          >
            {item?.isBadge
              ? <ImageBackground source={item.ic} style={styles.bottomTab_icon}>
                <View style={{
                  width: 12, height: 12, backgroundColor: '#FC5A5A', borderRadius: 6, alignSelf: 'flex-end', marginTop: 4, marginRight: 4
                }} />
              </ImageBackground>
              : <Image source={item.ic} style={styles.bottomTab_icon} />}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default BottomTabCustom;