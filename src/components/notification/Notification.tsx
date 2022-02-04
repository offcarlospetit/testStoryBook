import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import IconFont, { IconFontName } from '../icon/IconFont';
import Text, { TextProps } from '../text/Text';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';

interface NotificationProps {
  content: string;
  backgroundColor?: string;
  borderColor?: string;
  iconColor?: string;
  iconName?: IconFontName;
  iconSize?: number;
  contentStyle?: TextProps;
  containerStyle?: ViewStyle;
}

export default function Notification(props: NotificationProps) {
  const {
    content,
    backgroundColor = Colors.ComplementaryLightBlue10,
    borderColor = Colors.SemanticInfoBlue50,
    iconColor = Colors.SemanticInfoBlue50,
    iconName = 'check-circle',
    iconSize = 20,
    contentStyle,
    containerStyle,
  } = props;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor, borderColor },
        containerStyle && containerStyle,
      ]}
    >
      <IconFont name={iconName} color={iconColor} size={iconSize} />
      <Text weight="500" style={[styles.content, contentStyle && contentStyle]}>
        {content}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Scale(16),
    borderLeftWidth: Scale(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    marginLeft: Scale(16),
    flex: 1,
    fontSize: Scale(14),
  },
});
