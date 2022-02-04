import React from 'react';
import ContentLoader, {
  Rect,
  IContentLoaderProps,
  Circle,
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
  styleDividerHorizontal?:StyleProp<ViewStyle>;
}

const MovementsSummaryTC = (props: MovementsItems) => {
  const { style,styleView,styleDividerHorizontal, styleDividerVertical  } = props;
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
        <Rect x={Scale(59)} y={Scale(20)} rx={Scale(4)} ry={Scale(4)} width={Scale(225)} height={Scale(10)} />

        <Divider color={Colors.neutralLightGrey20} width={1} style={[styles.dividerHorizontal, styleDividerHorizontal]} />

        <Rect x={Scale(62)} y={Scale(67)} rx={Scale(4)} ry={Scale(4)} width={Scale(75)} height={Scale(10)} /> 
        <Rect x={Scale(62)} y={Scale(92)} rx={Scale(4)} ry={Scale(4)} width={Scale(86)} height={Scale(10)} /> 
        <Circle cx={Scale(31)}  cy={Scale(95)} r={Scale(8)}/> 

        <Divider  color={Colors.neutralLightGrey20} width={70} style={[styles.dividerVertical, styleDividerVertical]} />

        <Rect x={Scale(256)} y={Scale(67)} rx={Scale(4)} ry={Scale(4)} width={Scale(75)} height={Scale(10)} /> 
        <Rect x={Scale(256)} y={Scale(92)} rx={Scale(4)} ry={Scale(4)} width={Scale(86)} height={Scale(10)} /> 
        <Circle cx={Scale(225)} cy={Scale(95)} r={Scale(8)} />
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
    height:Scale(122), 
    borderColor:Colors.neutralLightGrey20
  },
  dividerHorizontal:{
    top:Scale(50),
    width:WIDTH
  },
  dividerVertical:{
    top:Scale(50),
    left:Scale(185),
    width:Scale(1)
  }
})

export default MovementsSummaryTC;
