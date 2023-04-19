import React from 'react';
import {
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import TextHellix from '../../../../components/text/TextHellix';
import images from '../../../../assets/images';
import icons from '../../../../assets/icons';

export default function CardBalance() {
  return (
    <View style={styles.card_balance}>
      <Image source={images.im_card_bg} style={styles.im_card_bg} />

      <View style={styles.card_content}>
        <TextHellix style={styles.card_title}>Available Coin balance</TextHellix>

        <TextHellix style={styles.card_number}>340</TextHellix>

        <View style={styles.card_bar_container}>
          <View style={styles.card_bar_active} />
        </View>

        <TextHellix style={styles.card_text}>You have paid rental fee for $1,200.{'\n'} Pay more $800 to achieve Gold Tier.</TextHellix>

        <TouchableOpacity>
          <View style={[styles.card_row, { marginTop: 16 }]}>
            <TextHellix style={styles.card_text_benefit}>View tier benefits</TextHellix>
            <Image source={icons.ic_next} style={styles.icon_next} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card_button}>
          <TextHellix style={styles.card_button_text}>My Coupons</TextHellix>
        </TouchableOpacity>

        <TextHellix style={styles.card_text_update}>Updated : 02/11/2021</TextHellix>
      </View>
    </View>
  );
}
