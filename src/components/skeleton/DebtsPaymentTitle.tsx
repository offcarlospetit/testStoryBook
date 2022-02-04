import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Scale from '../../utils/Scale';
import colors from '../../constants/colors';

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export interface MovementsDebitTitleProps extends ViewProps {}

const DebtsPaymentTitle = (props: MovementsDebitTitleProps) => {
  const { style } = props;
  return (
    <Container style={style}>
      <SkeletonPlaceholder backgroundColor={colors.NeutralLightGrey30}>
        <View style={styles.skeletonTitle} />
        <View style={styles.skeletonBody} />
      </SkeletonPlaceholder>
    </Container>
  );
};

const styles = StyleSheet.create({
  skeletonTitle: {
    width: Scale(320),
    height: Scale(12),
    borderRadius: Scale(20),
    marginBottom: Scale(8),
  },
  skeletonBody: {
    width: Scale(123),
    height: Scale(12),
    borderRadius: Scale(20),
  },
});

export default DebtsPaymentTitle;
