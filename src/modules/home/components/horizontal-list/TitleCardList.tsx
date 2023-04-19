import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  ScrollView
} from 'react-native';
import styles from './styles';
import TextHellix from '../../../../components/text/TextHellix';
import icons from '../../../../assets/icons';
// import icons from '../../assets/icons';

export interface Card {
  image: ImageSourcePropType;
  title: string;
  description: string;
  isValid: boolean;
}

export interface CardList {
  label: string;
  cards: Card[];
}

const CardValid = ({ card }: { card: Card }) => {
  return (
    <View key={card.title} style={styles.card}>
      <Image style={styles.card_image} source={card.image} />

      <TextHellix style={styles.card_title}>{card.title}</TextHellix>

      <TextHellix style={styles.card_description}>{card.description}</TextHellix>
    </View>
  )
}

const CardInvalid = ({ card }: { card: Card }) => {
  return (
    <View key={card.title} style={styles.card}>
      <Image style={styles.card_image} source={card.image} />

      <View style={styles.card_invalid_row}>
        <Image source={icons.ic_invalid_coin} style={styles.card_invalid_icon} />
        <TextHellix style={styles.card_invalid_text}>{card.title}</TextHellix>
      </View>

      <TextHellix style={styles.card_description}>{card.description}</TextHellix>

      <TextHellix style={styles.card_insufficient}>Insufficient coins</TextHellix>
    </View>
  )
}

export default function TitleCardList({ data }: { data: CardList }) {
  const { label, cards } = data;
  return (
    <View style={styles.card_list_container}>
      <TextHellix style={styles.label}>
        {label || ''}
      </TextHellix>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 2, paddingLeft: 2 }}>
        <View style={styles.cards}>
          {cards?.map((card: Card) => {
            if (card?.isValid) {
              return <CardValid card={card} key={card.title} />
            }
            return <CardInvalid card={card} key={card.title} />
          })}
        </View>
      </ScrollView>
    </View>
  );
}
