import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 96,
  },
  bottomTab_body_menu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: COLORS.e2
  },
  bottomTab_icon: {
    width: 40,
    height: 40,
  }
});

export default styles;
