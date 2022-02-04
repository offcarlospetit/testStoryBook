import React from 'react';
import styled from 'styled-components/native';
import {Image as RNEImg, ImageProps as RNEImgProps} from 'react-native';
import type {StyleProp, ImageStyle, ImageResizeMode} from 'react-native';
const image = require('./img/logo.png');
type LogoName = 'logo';

interface ImageProps extends RNEImgProps {}

export interface LogoProps {
  width?: number;
  height?: number;
  style?: StyleProp<ImageStyle>;
  resizeMode?: ImageResizeMode;
  name: LogoName;
}

const UILogos = styled(RNEImg)<ImageProps>`
  width: 136px;
  height: 13px;
`;

const Logo: React.FC<LogoProps> = props => {
  const {resizeMode, name, ...rest} = props;

  return (
    <UILogos {...rest} resizeMode={resizeMode || 'contain'} source={image} />
  );
};

export default Logo;
