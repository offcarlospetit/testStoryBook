import React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
import styled from 'styled-components';
import Text from '../text/Text';
import type { IconNameSvg } from '../icon/IconSvg';
import IconSvg from '../icon/IconSvg';

export interface DebitHeroSummaryProps {
  title: string;
  icon: IconNameSvg;
  containerStyle?: StyleProp<ViewStyle>;
}

const ContainerDebitHero = styled(View)`
  height: ${Scale(46)}px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${Scale(12)}px;  
  background-color: ${Colors.NeutralWhite};
  border-top-left-radius: ${Scale(12)}px;  
  border-top-right-radius: ${Scale(12)}px;  
`;

const UIsvgIcon = styled(IconSvg)`
  width: ${Scale(24)}px;
  height: ${Scale(24)}px;
  height: 100%;
`;

const titleStyles = {
  fontSize: Scale(16),
  lineHeight: Scale(24),
  color: Colors.NeutralDarkGrey80,
  height: Scale(24),
};

const MovementsSearch = (props: DebitHeroSummaryProps) => {
  const { title = 'Movimientos', icon = 'search', containerStyle = {} } = props;
  return (
    <ContainerDebitHero style={containerStyle}>
      <Text weight="600" style={titleStyles}>
        {title}
      </Text>
      <UIsvgIcon name={icon} color={Colors.PrimaryBlue50} />
    </ContainerDebitHero>
  );
};

export default MovementsSearch;
