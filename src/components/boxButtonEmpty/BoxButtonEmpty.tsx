import React, { useContext } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { MetricsContext } from '../metricsProvider/MetricsProvider';
import styled from 'styled-components/native';
import Text from '../text/Text';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
import IconSvg, { IconNameSvg } from '../icon/IconSvg';

export interface BoxButtonProps extends TouchableOpacityProps {
  title?: string;
  content?: string;
  metricEventName?: string;
  metricEventPayload?: any;
  iconName?: IconNameSvg;
  iconBackgroundColor?: string;
  children?: React.ReactNode;
}

const Container = styled(TouchableOpacity)`
  padding: ${Scale(12)}px;
  border-radius: ${Scale(12)}px;
  border-style: dashed;
  border-width: ${Scale(1)}px;
  border-color: ${Colors.NeutralLightGrey40};
`;

const IconContainer = styled.View`
  width: ${Scale(64)}px;
  aspect-ratio: 1;
  border-radius: ${Scale(32)}px;
  background-color: ${(props: BoxButtonProps) => props.iconBackgroundColor};
  padding: ${Scale(12)}px;
  margin-bottom: ${Scale(12)}px;
`;

const TitleText = styled(Text)`
  color: ${Colors.neutralDarkGrey70}
  font-size: ${Scale(16)}px;
  text-align: center;
`;

const ContentText = styled(Text)`
  color: ${Colors.neutralDarkGrey70}
  font-size: ${Scale(14)}px;
  margin-top: ${Scale(8)}px;
  text-align: center;
`;

const BoxButtonEmpty: React.FC<BoxButtonProps> = props => {
  const {
    title,
    content,
    onPress,
    metricEventName,
    metricEventPayload,
    iconName,
    iconBackgroundColor = 'transparent',
    style,
    children,
    ...rest
  } = props;
  const metricsContext = useContext(MetricsContext);

  return (
    <Container
      {...rest}
      style={style}
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
    >
      {iconName && (
        <IconContainer iconBackgroundColor={iconBackgroundColor}>
          <IconSvg name={iconName} disabled />
        </IconContainer>
      )}
      <TitleText weight="700">{title}</TitleText>
      <ContentText>{content}</ContentText>
    </Container>
  );
};

export default BoxButtonEmpty;
