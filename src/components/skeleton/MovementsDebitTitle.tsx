import React from 'react';
import  {View, ViewProps,StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Scale from '../../utils/Scale';
import colors from '../../constants/colors';


const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export interface MovementsDebitTitleProps extends ViewProps {
  
}

const MovementsDebitTitle = (props: MovementsDebitTitleProps) => {
  const {style} = props;
  return (
    <Container style={style}>
      <SkeletonPlaceholder backgroundColor={colors.primaryBlue40} highlightColor={colors.primaryBlue70}>
         <View style={styles.skeletonTitle}/>
         <View style={styles.skeletonBody}/>
      </SkeletonPlaceholder>
    </Container>
  );
};

const styles = StyleSheet.create({
  skeletonTitle:{
    width: Scale(140),
    height: Scale(9),
    borderRadius: Scale(4),
    marginTop: Scale(8),
  },
  skeletonBody:{
    width: Scale(201),
    height: Scale(9),
    borderRadius: Scale(4),
    marginTop: Scale(14),
  }
})

export default MovementsDebitTitle;
