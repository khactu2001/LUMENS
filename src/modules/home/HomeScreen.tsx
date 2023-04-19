import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground
} from 'react-native';
import styles from './styles';
import icons from '../../assets/icons';
import TextHellix from '../../components/text/TextHellix';
import images from '../../assets/images';
import CardBalance from './components/card-balance';
import TitleCardList from './components/horizontal-list/TitleCardList';
import { DATA_FOOD, DATA_PETROL, DATA_RENTAL_REBATE } from '../../components/constants/data';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <>
          <View style={styles.header}>
            <TextHellix style={styles.header_title}>Silver Tier</TextHellix>

            <TextHellix style={styles.header_description}>
              In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.
            </TextHellix>
          </View>

          <View style={styles.body}>

            <View style={styles.absolute_content}>
              <CardBalance />
            </View>

            <View style={styles.body_content}>
              <TitleCardList data={DATA_PETROL} />

              <TitleCardList data={DATA_RENTAL_REBATE} />

              <TitleCardList data={DATA_FOOD} />
            </View>
          </View>
        </>
      </ScrollView>
      <View style={styles.icon_back_view}>
        <TouchableOpacity>
          <Image source={icons.ic_back} style={styles.ic_back} />
        </TouchableOpacity>
      </View>
    </View >
  );
}
