import React from 'react';
import ContentLoader, {
  Rect,
  IContentLoaderProps,
} from 'react-content-loader/native';
import { Dimensions, StyleProp, View, ViewStyle ,StyleSheet} from 'react-native';
import { Divider } from 'react-native-elements';

import Scale from '../../utils/Scale';
import Colors from '../../constants/colors';

const WIDTH = Dimensions.get('window').width - Scale(32);
export interface MovementsItems extends IContentLoaderProps {
  style: StyleProp<ViewStyle>;
  styleView?: StyleProp<ViewStyle>;
  styleDividerVertical?:StyleProp<ViewStyle>;
}

const MovementsSummaryTCPrevius = (props: MovementsItems) => {
  const { style,styleView, styleDividerVertical  } = props;
  return (
    <>
      <View style={[styles.ContainerView, styleView]}>
        <ContentLoader
         speed={2}
         width={WIDTH}
         height={Scale(400)}
         backgroundColor={Colors.neutralLightGrey20}
         foregroundColor={Colors.NeutralLightGrey30}
         style={style}
        >
        <Rect x={Scale(16)} y={Scale(19)} rx={Scale(4)} ry={Scale(4)} width={Scale(142)} height={Scale(10)} /> 
        <Rect x={Scale(16)} y={Scale(40)} rx={Scale(4)} ry={Scale(4)} width={Scale(174)} height={Scale(10)} /> 

        <Divider  color={Colors.neutralLightGrey20} width={Scale(73)} style={[styles.dividerVertical, styleDividerVertical]} />

        <Rect x={Scale(264)} y={Scale(19)} rx={Scale(4)} ry={Scale(4)} width={Scale(93)} height={Scale(10)} /> 
        <Rect x={Scale(274)} y={Scale(40)} rx={Scale(4)} ry={Scale(4)} width={Scale(83)} height={Scale(10)} /> 
        </ContentLoader>
      </View>
    </>    
  );
};

const styles = StyleSheet.create({
  ContainerView:{
    width:WIDTH,
    borderWidth:Scale(1), 
    borderRadius:Scale(8), 
    height:Scale(73), 
    borderColor:Colors.neutralLightGrey20
  },
  dividerVertical:{
    left:Dimensions.get('window').width / 1.8,
    width:Scale(1),
  }
})

export default MovementsSummaryTCPrevius;
