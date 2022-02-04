import React from 'react';
import {View, ViewProps} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Scale from '../../utils/Scale';
import colors from '../../constants/colors';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export interface ContactItemProps extends ViewProps {}

const ContactItem = (props: ContactItemProps) => {
  const {style} = props;
  return (
    <Container style={style}>
      <SkeletonPlaceholder backgroundColor={colors.neutralLightGrey20}>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'flex-start',
            marginTop: 10,
          }}>
          <View
            style={{
              width: Scale(40),
              height: Scale(40),
              borderRadius: Scale(50),
            }}
          />
          <View style={{marginLeft: Scale(20)}}>
            <View
              style={{
                width: Scale(87),
                height: Scale(16),
                borderRadius: Scale(4),
              }}
            />
            <View
              style={{
                width: Scale(287),
                height: Scale(16),
                borderRadius: Scale(4),
                marginTop: Scale(8),
              }}
            />
          </View>
        </View>
      </SkeletonPlaceholder>
    </Container>
  );
};

export default ContactItem;
