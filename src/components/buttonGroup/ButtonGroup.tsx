import React, { useContext } from 'react';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';

import { StyleSheet, View, ViewStyle, Platform } from 'react-native';
import {
  ButtonGroup as ButtonGroupUI,
  ButtonGroupProps,
} from 'react-native-elements';
import { MetricsContext } from '../metricsProvider/MetricsProvider';

interface buttonsGruopMetric {
  name: string;
  metricEventName?: string;
  metricEventPayload?: any;
}

interface ButtonGroupUIProps extends ButtonGroupProps {
  backgroundStyle?: ViewStyle;
  buttonsWhitMetricData?: Array<buttonsGruopMetric>;
}

const ButtonGroup: React.FC<ButtonGroupUIProps> = props => {
  const {
    onPress,
    selectedIndex,
    buttons,
    containerStyle,
    buttonContainerStyle,
    selectedTextStyle,
    textStyle,
    selectedButtonStyle,
    backgroundStyle,
    buttonsWhitMetricData,
    ...rest
  } = props;

  const metricsContext = useContext(MetricsContext);

  const getButtons = () => {
    if (buttons) {
      return buttons;
    }
    if (buttonsWhitMetricData && buttonsWhitMetricData.length) {
      return buttonsWhitMetricData.map(item => {
        return item.name;
      });
    }
    return [];
  };

  return (
    <View style={[styles.viewStyle, backgroundStyle]}>
      <ButtonGroupUI
        {...rest}
        buttons={getButtons()}
        selectedIndex={selectedIndex}
        onPress={index => {
          if (
            metricsContext?.metricsTool &&
            buttonsWhitMetricData &&
            buttonsWhitMetricData[index] &&
            buttonsWhitMetricData[index]?.metricEventName
          ) {
            metricsContext?.metricsTool?.logEvent(
              buttonsWhitMetricData[index].metricEventName,
              buttonsWhitMetricData[index].metricEventPayload,
            );
          }
          if (onPress) {
            onPress(index);
          }
        }}
        buttonStyle={styles.buttonStyle}
        containerStyle={[styles.containerStyle, containerStyle]}
        buttonContainerStyle={[styles.btnContainer, buttonContainerStyle]}
        selectedTextStyle={[styles.textSelected, selectedTextStyle]}
        textStyle={[styles.textStyle, textStyle]}
        selectedButtonStyle={[styles.btnStyle, selectedButtonStyle]}
        innerBorderStyle={styles.innerBorderStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: Colors.NeutralLightGrey20,
    borderRadius: Scale(8),
    alignItems: 'center',
  },
  containerStyle: {
    width: '100%',
    height: Scale(40),
    borderRadius: Scale(8),
    marginHorizontal: Scale(4),
    marginVertical: Scale(4),
    borderWidth: 0,
  },
  btnContainer: {
    backgroundColor: Colors.neutralLightGrey20,
  },
  textSelected: {
    color: Colors.NeutralWhite,
    fontFamily: 'Poppins-Bold',
    fontWeight: Platform.OS === 'ios' ? '700' : undefined
  },
  textStyle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: Scale(16),
    color: Colors.NeutralLightGrey70,
    fontWeight: Platform.OS === 'ios' ? '600' : undefined,

  },
  btnStyle: {
    borderRadius: Scale(8),
  },
  innerBorderStyle: {
    width: 0,
  },
  buttonStyle: {
    borderWidth: 0,
  },
});

export default ButtonGroup;
