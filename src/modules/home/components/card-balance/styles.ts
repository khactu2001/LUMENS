import { StyleSheet } from 'react-native';
import { SPACES } from '../../../../components/constants/spaces';
import { COLORS } from '../../../../components/constants/colors';

const styles = StyleSheet.create({
  card_balance: {
    width: SPACES.width - SPACES.size24 * 2,
    height: (SPACES.width - SPACES.size24 * 2) * 416 / 343,
    backgroundColor: COLORS.white,
    borderRadius: SPACES.size8,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  im_card_bg: {
    width: SPACES.width - SPACES.size24 * 2,
    height: SPACES.width - SPACES.size24 * 2,
    resizeMode: 'contain',
  },
  card_content: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: SPACES.size24
  },
  card_title: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 24,
    color: COLORS.b5
  },
  card_number: {
    fontSize: 48,
    fontWeight: "400",
    lineHeight: 56,
    color: COLORS.title,
    marginTop: 8,
  },
  card_bar_container: {
    height: 5,
    width: '100%',
    backgroundColor: COLORS.e2,
    borderRadius: 2.5,
    marginTop: 33
  },
  card_bar_active: {
    height: 5,
    width: '70%',
    backgroundColor: COLORS.primaryBlue,
    borderRadius: 2.5
  },

  card_text: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    color: COLORS.gray92,
    marginTop: 34
  },
  card_row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  card_text_benefit: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    color: COLORS.primaryBlue,
  },
  icon_next: {
    width: 24,
    height: 24
  },
  card_button: {
    width: '100%',
    height: 60,
    backgroundColor: COLORS.primaryColor,
    borderRadius: 4,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 24
  },
  card_button_text: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 24,
    color: COLORS.white,
    textAlign: 'center'
  },
  card_text_update: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    color: COLORS.b5,
    textAlign: 'center',
    marginTop: 16
  }
});

export default styles;
