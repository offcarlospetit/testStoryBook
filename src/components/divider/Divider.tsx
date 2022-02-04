import React from 'react';
import { StyleSheet } from "react-native";
import type { ViewStyle, StyleProp } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';

export interface DebitHeroSummaryProps {
  containerStyle?: StyleProp<ViewStyle>;
}

const DividerUI = styled.View`  
  width: 100%;
  border-width: ${Scale(1)}px;  
  border-color: ${Colors.NeutralLightGrey30};
  borderBottomWidth: ${StyleSheet.hairlineWidth}px;
`;

const Divider = (props: DebitHeroSummaryProps) => {
  const { containerStyle = {} } = props;
  return ( <DividerUI style={containerStyle} /> );
};

export default Divider;