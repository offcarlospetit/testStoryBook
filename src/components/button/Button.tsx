import React, {useState, useEffect, useContext} from 'react';
import {
  Button as RNEButton,
  ButtonProps as RNEButtonProps,
} from 'react-native-elements';
import styled from 'styled-components/native';

import LottieView from 'lottie-react-native';
import Text, {Weight} from '../text/Text';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
import {MetricsContext} from '../metricsProvider/MetricsProvider';
import IconFont, {IconFontName} from '../icon/IconFont';

export interface ButtonProps extends RNEButtonProps {
  weight?: Weight;
  loading?: boolean;
  loadText?: string;
  waitingTime?: number;
  metricEventName?: string;
  metricEventPayload?: any;
  withIcon?: boolean;
  IconFontName?: IconFontName;
}

const ContainerLoading = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

const ContainerLottie = styled.View`
  width: ${Scale(25)}px;
  height: ${Scale(25)}px;
`;

const ContainerTexForLoading = styled.View`
  flex: 1;
  margin-left: ${Scale(10)}px;
`;

const Button: React.FC<ButtonProps> = ({
  weight = '800',
  titleStyle,
  loading,
  title,
  loadText,
  disabled = false,
  activeOpacity,
  waitingTime,
  onPress,
  metricEventName,
  metricEventPayload,
  withIcon = false,
  IconFontName = 'add-contact',
  ...rest
}) => {
  const [showLoading, setShowLoading] = useState(false);

  const defaultTimeout = waitingTime !== undefined ? waitingTime : 500;
  const metricsContext = useContext(MetricsContext);

  useEffect(() => {
    if (loading && !showLoading) {
      setTimeout(() => {
        setShowLoading(!showLoading);
      }, defaultTimeout);
    }
  }, [loading, defaultTimeout, showLoading]);

  const renderTitle = (
    isLoading?: boolean,
    titleTxt?:
      | string
      | React.ReactElement<{}, string | React.JSXElementConstructor<any>>
      | undefined,
    textForLoading?: string,
  ) => {
    if (!isLoading && titleStyle) {
      if (withIcon) {
        return (
          <ContainerLoading>
            <>
              <IconFont
                name={IconFontName}
                color={Colors.white}
                size={Scale(16)}
              />
            </>
            <ContainerTexForLoading>
              <Text
                weight={weight}
                style={[
                  {fontSize: Scale(14), color: Colors.neutralLightGrey20},
                  titleStyle,
                ]}>
                {titleTxt}
              </Text>
            </ContainerTexForLoading>
          </ContainerLoading>
        );
      } else {
        return (
          <Text
            weight={weight}
            style={[
              {fontSize: Scale(14), color: Colors.neutralLightGrey20},
              titleStyle,
            ]}>
            {titleTxt}
          </Text>
        );
      }
    } else if (isLoading) {
      return (
        <ContainerLoading>
          <ContainerLottie>
            <LottieView source={require('./icons/loader.json')} autoPlay loop />
          </ContainerLottie>
          {showLoading && textForLoading && (
            <ContainerTexForLoading>
              <Text
                weight="600"
                style={[
                  {fontSize: Scale(14), color: Colors.neutralLightGrey20},
                  titleStyle,
                ]}>
                {textForLoading}
              </Text>
            </ContainerTexForLoading>
          )}
        </ContainerLoading>
      );
    } else {
      return titleTxt;
    }
  };
  return (
    <RNEButton
      {...rest}
      disabled={disabled}
      disabledStyle={{backgroundColor: Colors.neutralLightGrey20}}
      title={renderTitle(loading, title, loadText) || ''}
      activeOpacity={loading ? 1 : activeOpacity ? activeOpacity : 0.1}
      onPress={event => {
        if (metricEventName && metricsContext?.metricsTool) {
          metricsContext?.metricsTool.logEvent(
            metricEventName,
            metricEventPayload,
          );
        }
        if (onPress) {
          onPress(event);
        }
      }}
    />
  );
};

export default Button;
