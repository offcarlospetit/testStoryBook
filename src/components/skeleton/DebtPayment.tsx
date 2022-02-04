import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import type { ViewProps } from 'react-native';
import styled from 'styled-components/native';

import Scale from '../../utils/Scale';
import colors from '../../constants/colors';

const Container = styled.View`
  width: 100%;
  height: ${Scale(174)}px;
  background: ${colors.neutralLightGrey20};
  border-radius: ${Scale(8)}px;
  padding-top: ${Scale(22)}px;
  padding-bottom: ${Scale(23)}px;
  padding-horizontal: ${Scale(16)}px;
`;
export interface DebitContainerProps extends ViewProps {}

const DebtPayment = (props: DebitContainerProps) => {
  const {} = props;
  return (
    <Container>
      <SkeletonPlaceholder backgroundColor={colors.NeutralLightGrey30}>

        {/* Top circle and bars skeleton */}
        <View
          style={{
            height: Scale(50),
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: Scale(10)
          }}
        >      
          {/* Container ball + 2 lines */}
          <View
            style={{
              height: Scale(50),
              width: 100,
              flexDirection: 'row',
              justifyContent: 'space-between',            
            }}
          >
            {/* Pelota */}
            <View
              style={{
                width: Scale(34),
                height: Scale(34),
                borderRadius: Scale(50),
                marginRight: Scale(16),
              }}
            />
            {/* 2 lineas */}
            <View>
              <View
                style={{
                  width: Scale(116),
                  height: Scale(12),
                  borderRadius: Scale(20),
                }}
              />

              <View
                style={{
                  width: Scale(104),
                  height: Scale(12),
                  marginTop: Scale(13),
                  borderRadius: Scale(20),
                }}
              />
            </View>
          </View>

          {/* Cuadrado + pelota (derecha) */}
          <View style={{ paddingTop: Scale(6), marginRight: Scale(10), flexDirection: 'row' }}>
            <View
              style={{
                width: Scale(20),
                height: Scale(20),
                borderRadius: Scale(5),
                marginRight: Scale(26),
              }}
            />
            <View
              style={{
                width: Scale(20),
                height: Scale(20),
                borderRadius: Scale(20),
              }}
            />
          </View>
        </View>

        {/* Bottom bars skeleton */}
        <View
          style={{
            height: Scale(80),
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <View style={{ marginTop: Scale(16)}}>
            <View
              style={{
                width: Scale(47),
                height: Scale(12),
                borderRadius: Scale(20),
                marginBottom: Scale(14),
              }}
            />
            <View
              style={{
                width: Scale(62),
                height: Scale(12),
                borderRadius: Scale(20),
                marginBottom: Scale(15),
              }}
            />
            <View
              style={{
                width: Scale(56),
                height: Scale(12),
                borderRadius: Scale(20),
              }}
            />
          </View>
          <View style={{ alignItems: 'flex-end', marginTop: Scale(16) }}>
            <View
              style={{
                width: Scale(61),
                height: Scale(12),
                borderRadius: Scale(20),
                marginBottom: Scale(14),
              }}
            />
            <View
              style={{
                width: Scale(80),
                height: Scale(12),
                borderRadius: Scale(20),
                marginBottom: Scale(15),
              }}
            />
            <View
              style={{
                width: Scale(123),
                height: Scale(12),
                borderRadius: Scale(20),
              }}
            />
          </View>
        </View>
      </SkeletonPlaceholder>
    </Container>
  );
};

export default DebtPayment;
