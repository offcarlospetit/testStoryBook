import React from 'react';
import { StyleProp, ViewStyle, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Text from '../text/Text';
import Scale from '../../utils/Scale';
import Colors from '../../constants/colors';
import Skeleton from '../skeleton/Skeleton';

export interface AmountToPayProps {
  label: string;
  value: string;
  isLoading?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

const Container = styled.View`
  background: ${Colors.NeutralWhite};
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LabelText = styled(Text)`
  color: ${Colors.NeutralLightGrey70};
  line-height: ${Scale(20)}px;
  font-size: ${Scale(14)}px;
`;

const ValueText = styled(Text)`
  color: ${Colors.NeutralLightGrey70};
  line-height: ${Scale(16)}px;
  font-size: ${Scale(12)}px;
`;

const AmountToPay: React.FC<AmountToPayProps> = props => {
  const { label, value, isLoading = false, containerStyle } = props;

  return (
    <Container style={containerStyle}>
      <LabelText weight="600">{label}</LabelText>
      {isLoading ? (
        <View style={styles.skeletonParent}>
          <Skeleton
            type="containerTitle"
            skeletonStyle={styles.skeletonStyles}
          />
        </View>
      ) : (
        <ValueText weight="400">{value}</ValueText>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  skeletonParent: {
    height: Scale(20),
    width: Scale(205),
  },
  skeletonStyles: {
    width: '96.5%',
    height: Scale(10),
  },
});

export default AmountToPay;
