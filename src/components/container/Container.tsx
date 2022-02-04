import React from 'react';
import styled from 'styled-components/native';
import {View as RNView, ViewProps as RNViewProps} from 'react-native';
import Colors from '../../constants/colors'

export interface ViewProps extends RNViewProps {}

const UIView = styled(RNView)<RNViewProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${Colors.grey2};
`;

const View: React.FC<RNViewProps> = (props) => {
  return <UIView {...props} />;
};

export default View;
