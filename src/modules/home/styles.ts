import { StyleSheet } from 'react-native';
import { COLORS } from '../../components/constants/colors';
import { SPACES } from '../../components/constants/spaces';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 428,
    backgroundColor: COLORS.primaryColor,
    paddingTop: 24 + 40+ 16,
    paddingHorizontal: 24
  },
  icon_back_view: {
    position: 'absolute',
    top: 24,
    left: 24,
    zIndex: 4
  },
  ic_back: {
    width: 40,
    height: 40
  },

  header_title: {
    fontSize: 32,
    color: COLORS.white,
    marginTop: 16,
    lineHeight: 40,
  },
  header_description: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.b5,
    marginTop: 8,
  },

  body: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  absolute_content: {
    position: 'absolute',
    left: 24,
    top: -176,
    zIndex: 1
  },
  body_content: {
    paddingTop: 240 + 24,
    paddingLeft: 24
  }
});

export default styles;
