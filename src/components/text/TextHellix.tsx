import React, { Children } from 'react';

import { StyleProp, Text, TextStyle } from 'react-native';
import { FONTS } from '../constants/fonts';


export interface BaseTextProps {
  bold?: boolean;
  children: any;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
  suppressHighlighting?: boolean;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  onPress?: () => void;
  adjustsFontSizeToFit?: boolean;
}

export default function TextHellix({
  children,
  numberOfLines,
  style,
  suppressHighlighting,
  ellipsizeMode,
  onPress,
  adjustsFontSizeToFit = false,
}: BaseTextProps) {
  const customStyle: TextStyle = {
    fontFamily: FONTS.Hellix,
  };
  return (
    <Text
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      onPress={onPress}
      style={[customStyle, style]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      suppressHighlighting={suppressHighlighting}>
      {children}
    </Text>
  );
}
