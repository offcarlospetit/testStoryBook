import React, { useContext } from 'react';
import type { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
import { MetricsContext } from '../metricsProvider/MetricsProvider';

export interface SurfaceProps extends TouchableOpacityProps {
  showElevation?: boolean;
  metricEventName?: string;
  metricEventPayload?: any;
}

const UITouchable = styled.TouchableOpacity`
  padding-left: ${Scale(15)}px;
  padding-right: ${Scale(15)}px;
  padding-top: ${Scale(15)}px;
  padding-bottom: ${Scale(14)}px;
  background-color: ${Colors.NeutralWhite};
  border-radius: ${Scale(8)}px;
  border-color: ${Colors.NeutralLightGrey30};
  border-width: ${Scale(1)}px;
`;

const shadow = {
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  shadowColor: Colors.SombraCardMobile,
  elevation: 1,
};

const Surface: React.FC<SurfaceProps> = props => {
  const {
    children,
    style,
    showElevation,
    metricEventName,
    metricEventPayload,
    onPress,
    ...rest
  } = props;
  const metricsContext = useContext(MetricsContext);

  return (
    <UITouchable
      {...rest}
      style={[
        showElevation && shadow,
        {
          ...(style as object),
        },
      ]}
      onPress={e => {
        if (metricEventName && metricsContext?.metricsTool) {
          metricsContext?.metricsTool.logEvent(
            metricEventName,
            metricEventPayload,
          );
        }
        if (onPress) {
          onPress(e);
        }
      }}
    >
      {children}
    </UITouchable>
  );
};

export default Surface;
