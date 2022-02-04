import React from 'react';
import {Overlay, OverlayProps} from 'react-native-elements';
import LottieView from 'lottie-react-native';
import Colors from '../../constants/colors';

export type SpinnerName = 'loader';

export interface SpinnerProps extends OverlayProps {
  name: SpinnerName;
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

const Spinner: React.FC<SpinnerProps> = props => {
  const {
    isVisible,
    backdropStyle,
    onBackdropPress,
    fullScreen = true,
    style,
    name,
    ...rest
  } = props;

  return (
    <Overlay
      {...rest}
      fullScreen={fullScreen}
      isVisible={isVisible}
      overlayStyle={{
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      statusBarTranslucent={true}
      backdropStyle={[
        {backgroundColor: Colors.backgroundModal},
        backdropStyle && backdropStyle,
      ]}>
      <LottieView
        style={style}
        speed={0.7}
        source={setSpinnerNamer(props.name)}
        autoPlay
        loop
      />
    </Overlay>
  );
};

export default Spinner;
