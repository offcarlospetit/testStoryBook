import React from 'react';
import styled from 'styled-components/native';
import {
  Text as RNEText,
  TextProps as RNETextProps,
} from 'react-native-elements';

export type Weight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;
export interface TextProps extends RNETextProps {
  weight?: Weight;
}

const setFontWeight = (weight: string | undefined): string | number => {
  switch (weight) {
    case '100':
      return 'Poppins-Thin';
    case '200':
      return 'Poppins-ExtraLight';
    case '300':
      return 'Poppins-Light';
    case '400':
      return 'Poppins-Regular';
    case '500':
      return 'Poppins-Medium';
    case '600':
      return 'Poppins-SemiBold';
    case '700':
      return 'Poppins-Bold';
    case '800':
      return 'Poppins-ExtraBold';
    case 'normal':
      return 'Poppins-Regular';
    case 'bold':
      return 'Poppins-Bold';
    case undefined:
      return 'Poppins-Regular';
    default:
      return 'Poppins-Regular';
  }
};

const UIText = styled(RNEText)<TextProps>`
  font-family: ${props => setFontWeight(props.weight)};
`;

const Text: React.FC<TextProps> = props => {
  return <UIText {...props} />;
};

export default Text;
