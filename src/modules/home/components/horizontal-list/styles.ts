import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../components/constants/colors';

const styles = StyleSheet.create({
  card_list_container: {
    // flex: 1
    marginVertical: 24
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 24,
    color: COLORS.primaryColor,
  },

  cards: {
    flexDirection: 'row',
    marginTop: 24
  },

  card: {
    width: 200,
    minHeight: 240,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLORS.borderF1,
    marginRight: 24,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  card_image: {
    width: '100%',
    height: 96,
    resizeMode: 'cover'
  },
  card_title: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    color: COLORS.primaryBlue,
    marginTop: 16,
    paddingHorizontal: 16
  },
  card_description: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    color: COLORS.gray92,
    marginTop: 8,
    paddingHorizontal: 16
  },
  card_invalid_icon: {
    width: 16,
    height: 16,
    marginRight: 4
  },
  card_invalid_text: {
    color: COLORS.gray69,
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
  },
  card_invalid_row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    paddingHorizontal: 16
  },
  card_insufficient: {
    color: COLORS.primaryBlue,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    marginLeft: 16,
  }
});

export default styles;
