import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Scale from '../../utils/Scale';
import colors from '../../constants/colors';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export interface ContactItemProps extends ViewProps {}

const CardsMenuItem = (props: ContactItemProps) => {
  return (
    <Container style={props.style}>
      <SkeletonPlaceholder backgroundColor={colors.NeutralLightGrey30}>
        <View style={styles.rowContainer}>
          <View>
            <View style={styles.row1} />
            <View style={styles.row2} />
          </View>
          <View style={styles.row3} />
        </View>
      </SkeletonPlaceholder>
    </Container>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  row1: {
    width: Scale(148),
    height: Scale(16),
    borderRadius: Scale(4),
  },
  row2: {
    width: Scale(184),
    height: Scale(16),
    borderRadius: Scale(4),
    marginTop: Scale(16),
  },
  row3: {
    width: Scale(48),
    height: Scale(16),
    borderRadius: Scale(4),
    marginTop: Scale(18),
  },
});

export default CardsMenuItem;
