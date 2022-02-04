import React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
import styled from 'styled-components';
import Text from '../text/Text';

export interface MovementDateProps {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<ViewStyle>;
}

const ContainerDate = styled(View)`
  align-self: flex-start;
  height: ${Scale(18)}px;
  margin-bottom: ${Scale(4)}px;
  opacity: 0.8;
  background-color: ${Colors.NeutralWhite};
  border-radius: ${Scale(4)}px;
`;

const TextTitle = styled(Text)`
font-size: ${Scale(12)}px;
line-height: ${Scale(16)}px;
color: ${Colors.NeutralLightGrey60};
height: 100%;
margin-horizontal: ${Scale(8)}px;
margin-vertical: ${Scale(2)}px;
`;

const MovementRow = (props: MovementDateProps) => {
  const { title, containerStyle = {}, textStyles = {} } = props;
  return (
    <ContainerDate style={containerStyle}>
      <TextTitle weight="600" style={textStyles} numberOfLines={1}>
        {title}
      </TextTitle>
    </ContainerDate>
  );
};

export default MovementRow;
