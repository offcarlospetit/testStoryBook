import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleProp, View} from 'react-native';

export type SpinnerName = 'loader';

export interface SpinnerProps {
  name: SpinnerName;
  isVisible: boolean;
  style: StyleProp<any>;
}

const setSpinnerNamer = (name: SpinnerName) => {
  switch (name) {
    case 'loader':
      return require('./icons/loader.json');
    default:
      return require('./icons/loader.json');
      break;
  }
};

const SpinnerBasic: React.FC<SpinnerProps> = props => {
  const {isVisible = true, style} = props;

  return (
    <View style={{display: 'flex'}}>
      {isVisible && (
        <LottieView
          style={style}
          speed={0.7}
          source={setSpinnerNamer(props.name)}
          autoPlay
          loop
        />
      )}
    </View>
  );
};

export default SpinnerBasic;
