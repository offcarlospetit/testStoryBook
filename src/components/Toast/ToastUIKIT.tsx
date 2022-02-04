import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
import IconFont, { IconFontName } from '../icon/IconFont';
import IconSvg, { IconNameSvg } from '../icon/IconSvg';
import Text from '../text/Text';

export type ToastType = 'success' | 'error' | 'warning';

const colorsByType = {
  success: Colors.SemanticSuccessGreen50,
  error: Colors.SemanticErrorRed50,
  warning: Colors.SemanticWarningYellow50,
};

const iconsAndroidByType: Record<ToastType, IconNameSvg> = {
  success: 'check-circle-outline',
  error: 'check-circle-outline',
  warning: 'alert-warning',
};

const iconsIosByType: Record<ToastType, IconFontName> = {
  success: 'check-circle',
  error: 'check-circle',
  warning: 'warning',
};
export interface ToastProps {
  text1: string;
  text2?: string;
  type: ToastType;
}

const ToastUIKIT: React.FC<ToastProps> = props => {
  const { text1, text2 = '', type } = props;

  const getColorAndIcon = () => {
    let color = Colors.SemanticSuccessGreen50;
    let iconFont: IconFontName = 'check-circle';
    let iconSvg: IconNameSvg = 'check-circle-outline';
    if (colorsByType[type]) color = colorsByType[type];
    if (iconsAndroidByType[type]) iconSvg = iconsAndroidByType[type];
    if (iconsIosByType[type]) iconFont = iconsIosByType[type];

    return { color, iconFont, iconSvg };
  };

  return (
    <View
      style={[
        styles.toastContainer,
        { backgroundColor: getColorAndIcon().color },
      ]}
    >
      <View style={styles.toastIconContainer}>
        {Platform.OS == 'ios' ? (
          <View style={styles.toastIconFontContainer}>
            <IconFont
              name={getColorAndIcon().iconFont}
              size={Scale(16)}
              color={Colors.NeutralWhite}
            />
          </View>
        ) : (
          <View
            style={[
              styles.toastIconSvgContainer,
              { backgroundColor: getColorAndIcon().color },
            ]}
          >
            <IconSvg
              name={getColorAndIcon().iconSvg}
              color={Colors.NeutralWhite}
            />
          </View>
        )}
      </View>
      <View style={styles.toastTextContainer}>
        <Text weight="600" style={styles.toastTextTitle}>
          {text1}
        </Text>
        {text2 !== '' && (
          <Text weight="600" style={styles.toastTextTitleAlt}>
            {text2}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    height: Scale(56),
    width: '93%',
    borderRadius: Scale(8),
    flexDirection: 'row',
  },
  toastIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toastIconFontContainer: {
    marginLeft: Scale(20),
  },
  toastIconSvgContainer: {
    width: Scale(24),
    height: Scale(24),
    marginLeft: Scale(20),
  },
  toastTextContainer: {
    width: Scale(320),
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: Scale(9),
  },
  toastTextTitle: {
    fontSize: Scale(14),
    lineHeight: Scale(20),
    color: Colors.NeutralWhite,
  },
  toastTextTitleAlt: {
    fontSize: Scale(14),
    lineHeight: Scale(20),
  },
});

export default ToastUIKIT;
