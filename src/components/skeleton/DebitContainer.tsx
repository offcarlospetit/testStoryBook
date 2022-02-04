import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import type {ViewProps} from 'react-native';
import styled from 'styled-components/native';

import Scale from '../../utils/Scale';
import colors from '../../constants/colors';

const Container = styled.View`
  width: 100%;
  height: ${Scale(160)}px;
  background: ${colors.neutralLightGrey20};
  border-radius: ${Scale(16)}px;
  padding-right: ${Scale(14)}px;
  padding-left: ${Scale(12)}px;
  padding-top: ${Scale(19)}px;
`;
export interface DebitContainerProps extends ViewProps {}

const DebitContainer = (props: DebitContainerProps) => {
  const {style} = props;
  return (
    <Container style={style}>
      <SkeletonPlaceholder backgroundColor={colors.NeutralLightGrey30}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{paddingTop: Scale(6)}}>
            <View
              style={{
                width: Scale(141),
                height: Scale(12),
                borderRadius: Scale(20),
              }}
            />
            <View
              style={{
                width: Scale(94),
                height: Scale(12),
                marginTop: Scale(8),
                borderRadius: Scale(20),
              }}
            />
          </View>
          <View
            style={{
              width: Scale(24),
              height: Scale(24),
              borderRadius: Scale(50),
            }}
          />
        </View>
        <View style={{marginTop: Scale(34)}}>
          <View
            style={{
              width: Scale(116),
              height: Scale(12),
              borderRadius: Scale(20),
            }}
          />
          <View
            style={{
              width: Scale(196),
              height: Scale(12),
              marginTop: Scale(8),
              borderRadius: Scale(20),
            }}
          />
        </View>
      </SkeletonPlaceholder>
    </Container>
  );
};

export default DebitContainer;
