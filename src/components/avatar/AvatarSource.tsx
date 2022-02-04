import React from 'react';
import {
  View,
  Image as RNImage,
  StyleSheet,
  TouchableOpacity,
  TextStyle,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
  ImageURISource,
  ImageStyle,
} from 'react-native';
import Text from '../text/Text';

import {
  renderNode,
  RneFunctionComponent,
} from 'react-native-elements/dist/helpers';
import Icon, { IconObject } from 'react-native-elements/dist/icons/Icon';
import Image, { ImageProps } from 'react-native-elements/dist/image/Image';
import Scale from '../../utils/Scale';
import IconSvg from '../icon/IconSvg';

const avatarSizes: any = {
  small: 34,
  medium: 50,
  large: 75,
  xlarge: 150,
};

type AvatarIcon = IconObject & {
  iconStyle?: StyleProp<TextStyle>;
};

export type AvatarBaseProps = {
  Component?: typeof React.Component;
  onPress?(): void;
  onLongPress?(): void;
  containerStyle?: StyleProp<ViewStyle>;
  source?: ImageSourcePropType;
  avatarStyle?: ImageStyle;
  rounded?: boolean;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  overlayContainerStyle?: StyleProp<TextStyle>;
  activeOpacity?: number;
  icon?: AvatarIcon;
  iconStyle?: StyleProp<TextStyle>;
  size?: ('small' | 'medium' | 'large' | 'xlarge') | number;
  placeholderStyle?: StyleProp<ViewStyle>;
  renderPlaceholderContent?: React.ReactElement<{}>;
  imageProps?: Partial<ImageProps>;
  ImageComponent?: React.ComponentClass;
};

export const AvatarBase: RneFunctionComponent<AvatarBaseProps> = ({
  onPress,
  onLongPress,
  Component = onPress || onLongPress ? TouchableOpacity : View,
  containerStyle,
  icon,
  iconStyle,
  source,
  size = 'small',
  avatarStyle,
  rounded,
  title,
  titleStyle,
  overlayContainerStyle,
  imageProps,
  placeholderStyle,
  renderPlaceholderContent,
  ImageComponent = RNImage,
  children,
  ...attributes
}) => {
  let width = avatarSizes.small;
  width = typeof size === 'number' ? size : avatarSizes[size];

  const height = width;
  const titleSize = width / 2;
  const iconSize = width / 2;

  const PlaceholderContent =
    (renderPlaceholderContent &&
      renderNode(undefined, renderPlaceholderContent)) ||
    (title && (
      <Text
        weight="600"
        style={[styles.title, { fontSize: titleSize }, titleStyle]}
      >
        {title}
      </Text>
    )) ||
    (icon && icon.name ? (
      <Icon
        style={StyleSheet.flatten([iconStyle && iconStyle])}
        color={icon.color || 'white'}
        name={icon.name || 'user'}
        size={icon.size || iconSize}
        type={icon.type && icon.type}
      />
    ) : (
      <View
        style={[
          {
            width: Scale(18),
            height: Scale(18),
            justifyContent: 'center',
          },
        ]}
      >
        <IconSvg name={'person'} />
      </View>
    ));

  const hidePlaceholder = !(source && (source as ImageURISource).uri);

  const imageContainerStyle = StyleSheet.flatten([
    styles.overlayContainer,
    rounded && { borderRadius: width / 2, overflow: 'hidden' },
    overlayContainerStyle,
    imageProps && imageProps.containerStyle,
  ]);
  if (imageProps && imageProps.containerStyle) {
    delete imageProps.containerStyle;
  }

  return (
    <Component
      onPress={onPress}
      onLongPress={onLongPress}
      style={StyleSheet.flatten([
        styles.container,
        { height, width },
        rounded && { borderRadius: width / 2 },
        containerStyle,
      ])}
      {...attributes}
    >
      <Image
        placeholderStyle={StyleSheet.flatten([
          placeholderStyle,
          hidePlaceholder && styles.hiddenPlaceholderStyle,
        ])}
        PlaceholderContent={PlaceholderContent}
        containerStyle={imageContainerStyle as StyleProp<TextStyle>}
        source={source ?? 0}
        borderRadius={rounded ? width / 2 : undefined}
        {...imageProps}
        style={StyleSheet.flatten([
          styles.avatar,
          imageProps && imageProps.style,
          avatarStyle,
        ])}
        ImageComponent={ImageComponent}
      />
      {children}
    </Component>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  avatar: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  overlayContainer: {
    flex: 1,
  },
  title: {
    color: '#4886AE',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  hiddenPlaceholderStyle: {
    backgroundColor: 'transparent',
  },
});

AvatarBase.displayName = 'AvatarBase';
