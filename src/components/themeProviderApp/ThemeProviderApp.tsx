import Colors from '../../constants/colors';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider as RNEThemeProvider } from 'react-native-elements';
import { ThemeProvider as SCThemeProvider } from 'styled-components/native';
import Scale from '../../utils/Scale';

const FONT_FAMILY: string = 'Poppins-Regular';
const FONT_FAMILY_BOLD: string = 'Poppins-Bold';
const FONT_FAMILY_SEMI_BOLD: string = 'Poppins-SemiBold';

const theme = {
  background: '#ECF0F3',
  text: '#a52b2b',
  FONT_FAMILY: FONT_FAMILY,
  FONT_FAMILY_BOLD: FONT_FAMILY_BOLD,
  FONT_FAMILY_SEMI_BOLD: FONT_FAMILY_SEMI_BOLD,

  primary: Colors.primary,
  warning: Colors.warning,
  colors: {
    primary: Colors.primary,
    secondary: Colors.secondary,
  },
  Button: {
    titleStyle: {
      fontFamily: FONT_FAMILY_BOLD,
    },
    containerStyle: {
      borderRadius: Scale(48),
      width: 'auto',
    },
    buttonStyle: {
      minHeight: Scale(60),
      paddingHorizontal: Scale(90),
      borderRadius: Scale(48),
    },
  },
  Input: {
    inputStyle: {
      color: Colors.neutralDarkGrey70,
      fontFamily: 'Poppins-Regular',
      fontSize: Scale(15),
      height: Scale(56),
      paddingLeft: Scale(15),
    },
    inputContainerStyle: {
      borderWidth: 1,
      borderColor: Colors.neutralDarkGrey70,
      borderRadius: 4,
      backgroundColor: Colors.divider,
      height: Scale(56),
      paddingRight: Scale(15),
    },
    containerStyle: {
      paddingHorizontal: 0,
    },
    errorStyle: {
      fontFamily: FONT_FAMILY,
      color: Colors.SemanticErrorRed50,
      fontSize: Scale(12),
      fontWeight: `400`,
      lineHeight: Scale(16),
    },
  },
};
const ThemeManager = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaProvider>
      <SCThemeProvider theme={theme}>
        <RNEThemeProvider theme={theme}>{children}</RNEThemeProvider>
      </SCThemeProvider>
    </SafeAreaProvider>
  );
};
export default ThemeManager;
