import React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
import Text from '../text/Text';

export interface DebitHeroSummaryProps {
  name: string;
  number: string;
  amount: string;
  overdraft?: string | null;
  containerStyle?: StyleProp<ViewStyle>;
}

const ContainerDebitHero = styled(View)`
  height: ${Scale(110)}px;
  width: ${Scale(250)}px;
  background: ${Colors.PrimaryBlue50};
`;

const styles = {
  name: {
    fontSize: Scale(16),
    lineHeight: Scale(24),
    color: Colors.NeutralWhite,
  },
  number: {
    fontSize: Scale(14),
    lineHeight: Scale(20),
    color: Colors.NeutralWhite,
  },
  amount: {
    marginTop: Scale(12),
    fontSize: Scale(24),
    lineHeight: Scale(32),
    color: Colors.NeutralWhite,
  },
  overdraft: {
    fontSize: Scale(12),
    lineHeight: Scale(16),
    color: Colors.NeutralWhite,
  },
};

const ContainerAmount = styled.View`
flex: 1;
justify-content: flex-end;
`;

const DebitHeroSummary = (props: DebitHeroSummaryProps) => {
  const { name, number, amount, overdraft, containerStyle = {} } = props;
  return (
    <ContainerDebitHero style={containerStyle}>
      <Text weight="600" style={styles.name}>
        {name}
      </Text>
      <Text weight="400" style={styles.number}>
        {number}
      </Text>
      <ContainerAmount>
        <Text weight="700" style={styles.amount}>
          {amount}
        </Text>
      </ContainerAmount>
      {overdraft && (
        <Text weight="400" style={styles.overdraft}>
          {overdraft}
        </Text>
      )}
    </ContainerDebitHero>
  );
};

export default DebitHeroSummary;
