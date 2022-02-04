import React, { FC, useContext } from 'react';
import type { StyleProp, ViewStyle, ViewProps } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../../../constants/colors';
import Scale from '../../../../../utils/Scale';
import IconSvg, { IconNameSvg } from '../../../../icon/IconSvg';
import Text from '../../../../text/Text';
import { MetricsContext } from '../../../../metricsProvider/MetricsProvider';
import ShadowStyles from '../../../../../utils/ShadowStyles';

export interface LockAndDeslockBoxButtonProps extends ViewProps {
  title: string;
  text: string;
  iconName?: IconNameSvg;
  containerStyles?: StyleProp<ViewStyle>;
  metricEventName?: string;
  metricEventPayload?: Record<string, any>;  
  onPress?: () => void;
}

const LockAndDeslockContainer = styled.TouchableOpacity`  
  height: ${Scale(107.68)}px;
  width: 100%;
  padding: ${Scale(21)}px ${Scale(19.31)}px;
  border-radius: ${Scale(8)}px;
  border: ${Scale(1)}px solid ${Colors.NeutralLightGrey40};
  flex-flow: row nowrap;
  align-items: center;
  background-color: ${Colors.NeutralWhite}
`;

const TextsContainer = styled.View`
  height: ${Scale(66)}px;
  width: 80%;
`;

const LockCardIcon = styled(IconSvg)`
  height: ${Scale(32)}px;
  width: ${Scale(32)}px;
  margin-right: ${Scale(16)}px;
`;

const CardTitle = styled(Text)`
  font-size: ${Scale(16)}px;
  color: ${Colors.NeutralDarkGrey80};
`;

const CardText = styled(Text)`
  margin-top: ${Scale(6)}px;  
  font-size: ${Scale(14)}px;  
  color: ${Colors.neutralDarkGrey70};
`;

const LockAndDesblockBoxButton: FC<LockAndDeslockBoxButtonProps> = (props: LockAndDeslockBoxButtonProps) => {
  const { title, text, containerStyles, metricEventName, metricEventPayload, onPress } = props;
  const { handleAnalyticsEventOnPress } = useContext(MetricsContext);
  
  return (    
    <LockAndDeslockContainer 
      style={[containerStyles, ShadowStyles.basicShadow]}
      onPress={() => handleAnalyticsEventOnPress(metricEventName, metricEventPayload, onPress)}
    >
      <LockCardIcon name='change-pass' disabled />
      <TextsContainer>
        <CardTitle weight="600">{title}</CardTitle>
        <CardText weight="400">{text}</CardText>
      </TextsContainer>       
    </LockAndDeslockContainer>    
  );
};

export default LockAndDesblockBoxButton;