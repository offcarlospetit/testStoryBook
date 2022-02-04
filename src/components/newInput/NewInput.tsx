import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components/native';
import {
  StyleProp,
  TextInput as RNInput,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';

import type { NewInputProps, InputSize, InputPlaceholderType } from './types';
import Colors from '../../constants/colors';
import Icon, { IconName } from '../icon/Icon';
import Scale from '../../utils/Scale';
import Text, { TextProps } from '../text/Text';
import IconFont from '../icon/IconFont';
import { MetricsContext } from '../metricsProvider/MetricsProvider';

interface InputCommonProps {
  isInputFocused?: boolean;
  showError?: boolean;
}

interface InputSizeStyles {
  animatedPlaceholder: StyleProp<ViewStyle>;
  container: StyleProp<ViewStyle>;
  input: StyleProp<ViewStyle>;
  iconContainer: StyleProp<ViewStyle>;
  placeholderContainer: StyleProp<ViewStyle>;
}

interface PlaceholderTypeConfig {
  showOnTop: boolean;
  showInline: boolean;
}

const UIInputComponent = styled(RNInput)<NewInputProps>`
  position: absolute;
  top: 0;
  left: ${Scale(8)}px;
  width: 100%;
  background-color: transparent;
  color: ${Colors.NeutralDarkGrey80};
  margin: auto;
  border-width: 0;
  z-index: 10;
  font-weight: normal;
`;

const PlaceholderContainer = styled.View`
  position: absolute;
  width: 100%;
  top: 0;
  left: ${Scale(8)}px;
  z-index: 20;
  align-items: center;
  background-color: transparent;
`;

const ErrorMessage = styled(Text)`
  position: absolute;
  bottom: -${Scale(22)}px;
  font-size: ${Scale(12)}px;
  line-height: ${Scale(16)}px;  
  color: ${Colors.SemanticErrorRed50};  
`;

const AnimatedPlaceholder = styled(Text)<TextProps & InputCommonProps>`
  flex: 1;
  width: 100%;
  font-style: normal;
  color: ${props =>
    props.isInputFocused ? Colors.PrimaryBlue50 : Colors.NeutralLightGrey60};
  background-color: transparent;
`;

const RightIconContainer = styled.View`
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const RightFontIconContainer = styled.View`
  position: absolute;
  bottom: ${Scale(12)}px;
  right: ${Scale(12)}px;;
`;

const Container = styled.View<ViewProps & InputCommonProps>`
  justify-content: flex-start;
  background-color: ${Colors.white};
  width: 100%;
  margin: auto;
  border-width: 0;
  border-style: solid;
  border-radius: 0;
  border-bottom-width: ${props => (props.isInputFocused ? 2 : 1)}px;
  border-color: ${props => {
    return props.showError
      ? Colors.SemanticErrorRed50
      : props.isInputFocused
      ? Colors.PrimaryBlue50
      : Colors.NeutralLightGrey60;
  }};
  z-index: 0;
`;

const NewInput: React.FC<NewInputProps> = props => {
  const {
    value,
    placeholder,
    containerStyle,
    placeholderStyle,
    onFocus,
    onBlur,
    autoFocus = false,
    inputSize = 'normal',
    placeholderType,
    showError,
    errorMessage,
    rightIconName,
    rightFontIconName,
    innerRef,
    metricEvent,
    ...rest
  } = props;
  const metricsContext = useContext(MetricsContext);
  const _inputSizeStyles = inputSizeStyles(inputSize);
  const _placeholderPositioning = placeholderTypePositioning(placeholderType);
  const errorIconsizeMapping: Record<InputSize, IconName> = {
    normal: 'error',
    big: 'error-big',
  };
  const [isFocused, setIsFocused] = useState(autoFocus);
  const [showIcon, setShowIcon] = useState(!!rightIconName || showError);
  const [iconName, setIconName] = useState(errorIconsizeMapping[inputSize]);

  useEffect(() => {
    const hasRightIcon = !!rightIconName;
    setShowIcon(hasRightIcon || showError);
    if (showError) {
      setIconName(errorIconsizeMapping[inputSize]);
    } else if (!showError && rightIconName) {
      setIconName(rightIconName);
    }
  }, [rightIconName, showError]);

  return (
    <Container
      style={[_inputSizeStyles.container, containerStyle]}
      isInputFocused={isFocused}
      showError={showError}
    >
      <PlaceholderContainer style={[_inputSizeStyles.placeholderContainer, placeholderStyle]}>
        <AnimatedPlaceholder
          style={_inputSizeStyles.animatedPlaceholder}
          weight="500"
          isInputFocused={isFocused}
        >
          {_placeholderPositioning.showOnTop ? placeholder : ''}
        </AnimatedPlaceholder>
      </PlaceholderContainer>
      <UIInput
        {...rest}
        ref={innerRef}
        autoFocus={autoFocus}
        style={[_inputSizeStyles.input, { includeFontPadding: false }]}
        value={value}
        onFocus={e => {
          if (metricEvent?.onFocus && metricsContext?.metricsTool) {
            metricsContext.metricsTool.logEvent(
              metricEvent.onFocus.name,
              metricEvent.onFocus.payload,
            );
          }
          setIsFocused(true);
          onFocus && onFocus(e);
        }}
        onBlur={e => {
          if (metricEvent?.onBlur && metricsContext?.metricsTool) {
            metricsContext?.metricsTool.logEvent(
              metricEvent.onBlur.name,
              metricEvent.onBlur.payload,
            );
          }
          setIsFocused(false);
          onBlur && onBlur(e);
        }}
        placeholder={_placeholderPositioning.showInline ? placeholder : ''}
        placeholderTextColor={Colors.NeutralLightGrey60}
      />
      {showIcon && (
        <RightIconContainer style={_inputSizeStyles.iconContainer}>
          <Icon name={iconName} activeOpacity={1} />
        </RightIconContainer>
      )}

      {(!rightIconName && rightFontIconName) && (
        <RightFontIconContainer>
          <IconFont name='chevron-down' size={10} color={Colors.NeutralLightGrey60} />
        </RightFontIconContainer>        
      )}
      
      {errorMessage && (
        <ErrorMessage weight="500">{errorMessage}</ErrorMessage>
      )}
    </Container>
  );
};

const UIInput = React.forwardRef<RNInput, NewInputProps>((props, ref) => (
  <UIInputComponent {...props} ref={ref} />
));

function inputSizeStyles(inputSize: InputSize): InputSizeStyles {
  type StyleMapping = Record<InputSize, StyleProp<ViewStyle | TextStyle>>;

  const animatedPlaceholderStyles: StyleMapping = {
    big: {
      lineHeight: Scale(16),
      fontSize: Scale(12),
    },
    normal: {
      lineHeight: Scale(16),
      fontSize: Scale(12),
    },
  };
  const containerStyles: StyleMapping = {
    big: {
      height: Scale(72),
    },
    normal: {
      height: Scale(56),
    },
  };
  const inputStyles: StyleMapping = {
    big: {
      fontSize: Scale(32),
      lineHeight: Scale(40),
      marginTop: Scale(19),
      paddingTop: Scale(8),
      fontFamily: 'Poppins-SemiBold',
    },
    normal: {
      fontSize: Scale(16),
      lineHeight: Scale(24),
      marginTop: Scale(19),
      paddingTop: Scale(8),
      fontFamily: 'Poppins-Medium',
    },
  };
  const iconContainerStyles: StyleMapping = {
    big: {
      height: Scale(33),
      width: Scale(33),
      right: Scale(19),
      bottom: Scale(7),
    },
    normal: {
      height: Scale(20),
      width: Scale(20),
      right: Scale(10),
      bottom: Scale(6),
    },
  };
  const placeholderContainerStyles: StyleMapping = {
    big: {
      height: Scale(24),
      paddingTop: Scale(4),
    },
    normal: {
      height: Scale(24),
      paddingTop: Scale(4),
    },
  };

  return {
    animatedPlaceholder: animatedPlaceholderStyles[inputSize],
    container: containerStyles[inputSize],
    input: inputStyles[inputSize],
    iconContainer: iconContainerStyles[inputSize],
    placeholderContainer: placeholderContainerStyles[inputSize],
  };
}

function placeholderTypePositioning(
  pht: InputPlaceholderType = 'inline',
): PlaceholderTypeConfig {
  const placeholderConfigMap: Record<
    InputPlaceholderType,
    PlaceholderTypeConfig
  > = {
    inline: {
      showInline: true,
      showOnTop: false,
    },
    animated: {
      showInline: false,
      showOnTop: true,
    },
    staticOnTop: {
      showInline: false,
      showOnTop: true,
    },
  };

  return placeholderConfigMap[pht];
}

export default NewInput;
