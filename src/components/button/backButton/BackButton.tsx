import React, { FC, useContext } from 'react';
import type { ViewProps } from 'react-native';
import styled from 'styled-components/native';
import Scale from '../../../utils/Scale';
import IconSvg from '../../icon/IconSvg';
import { MetricsContext } from '../../metricsProvider/MetricsProvider';

export interface BackButtonProps extends ViewProps {
  color?: string;
  metricEventName?: string;
  metricEventPayload?: Record<string, any>;  
  onPress?: () => void;
}

const UIBackButton = styled(IconSvg)`
  width: ${Scale(24)}px;
  height: 100%;
  margin-left: ${Scale(12.67)}px;
  justify-content: center;
`;

const BackButton: FC<BackButtonProps> = (props: BackButtonProps) => {
  const { color, metricEventName, metricEventPayload, onPress } = props;
  const { handleAnalyticsEventOnPress } = useContext(MetricsContext);
  
  return (
    <UIBackButton 
      color={color}
      name="back"
      onPress={() => handleAnalyticsEventOnPress(metricEventName, metricEventPayload, onPress)}
    />)
};

export default BackButton;
