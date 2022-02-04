import React from 'react';
import {StyleProp, View, ViewStyle,StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import type {ViewProps} from 'react-native';
import Scale from '../../utils/Scale';
import colors from '../../constants/colors';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export interface ContainerTitleProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  skeletonStyle?:StyleProp<ViewStyle>;
}

const ContainerTitle = (props: ContainerTitleProps) => {
  const {style, skeletonStyle} = props;
  return (
    <Container style={style}>
      <SkeletonPlaceholder backgroundColor={colors.neutralLightGrey20}>
        <View style={{flexDirection: 'column', alignContent: 'flex-start'}}>
          <View
            style={[styles.skeleton, skeletonStyle]}
          />
        </View>
      </SkeletonPlaceholder>
    </Container>
  );
};

const styles = StyleSheet.create({
  skeleton:{
    width: Scale(280),
    height: Scale(32),
    borderRadius: Scale(4),
    marginTop: Scale(2),
    marginBottom: Scale(20),
    top: Scale(2),
  },
})

export default ContainerTitle;
