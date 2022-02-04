import React from 'react';
import {StyleSheet} from 'react-native';
import { LinearProgress } from 'react-native-elements';
import type {LinearProgressProps} from 'react-native-elements';

import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';


const ProgressBar:React.FC<LinearProgressProps> = props => {
const { value, color, trackColor,variant,style, ...rest} = props;
    return (
        <LinearProgress 
          {...rest}
          style={[style, styles.ProgressBar]}
          color={color ||Colors.PrimaryBlue70 } 
          trackColor={trackColor || Colors.neutralLightGrey20} 
          variant={variant || 'determinate' }
          value={value}
         />
    )
}

const styles = StyleSheet.create({
    ProgressBar:{
        width:'100%',
        height:Scale(6),
        borderRadius:Scale(6)
    },
})
export default ProgressBar;


