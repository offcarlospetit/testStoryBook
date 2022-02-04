import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const ShadowStyles = StyleSheet.create({
  basicShadow: {
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowColor: Colors.SombraCardMobile,
    elevation: 1,
  },
  lightShadow: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 3.84,
    shadowColor: Colors.SombraCardMobile,
    elevation: 1,
  },
});

export default ShadowStyles;
