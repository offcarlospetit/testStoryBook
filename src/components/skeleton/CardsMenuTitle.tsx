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

const CardsMenuTitle = (props: ContactItemProps) => {
  return (
    <Container style={props.style}>
      <SkeletonPlaceholder backgroundColor={colors.NeutralLightGrey20}>
        <View style={styles.column}>
          <View style={styles.skeleton} />
        </View>
      </SkeletonPlaceholder>
    </Container>
  );
};

const styles = StyleSheet.create({
  column: { flexDirection: 'column', alignContent: 'flex-start' },
  skeleton: {
    width: Scale(168),
    height: Scale(16),
    borderRadius: Scale(4),
  },
});

export default CardsMenuTitle;
