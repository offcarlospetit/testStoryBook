import React, { useContext } from 'react';
import { StyleProp, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { MetricsContext } from '../metricsProvider/MetricsProvider';
import styled from 'styled-components/native';
import Text from '../text/Text';
import Colors from '../../constants/colors';
import ShadowStyles from '../../utils/ShadowStyles';
import Scale from '../../utils/Scale';
import IconSvg, { IconNameSvg } from '../icon/IconSvg';

export type BoxButtonTypes = 'active' | 'inactive';
export interface LargeBoxButtonProps extends TouchableOpacityProps {
  title: string;
  iconName: IconNameSvg;
  metricEventName?: string;
  metricEventPayload?: Record<string, any>;
  containerStyles?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const ContainerButton = styled(TouchableOpacity)`
  height: ${Scale(72)}px;
  width: 100%;
  padding-horizontal: ${Scale(16)}px;
  border-radius: ${Scale(12)}px;
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.white}
`;

const TitleText = styled(Text)`
  font-size: ${Scale(14)}px;
  color: ${Colors.NeutralDarkGrey90};
`;

const IconContainer = styled.View`
   width: ${Scale(32)}px;
   height: ${Scale(32)}px; 
   margin-right: ${Scale(16)}px; 
   background: ${Colors.primaryBlue10};
   border-radius: ${Scale(18)}px;   
   align-items: center;
   justify-content: center;
`;

const PersonMoneyIcon = styled(IconSvg)`
  height: ${Scale(16.69)}px;
  width: ${Scale(20.01)}px;
`;

const LargeBoxButton: React.FC<LargeBoxButtonProps> = props => {
  const {
    title,
    iconName,
    metricEventName,
    metricEventPayload,
    containerStyles,
    onPress,
  } = props;
  const { handleAnalyticsEventOnPress } = useContext(MetricsContext);

  return (
    <ContainerButton
      style={[containerStyles, ShadowStyles.basicShadow]}
      onPress={() => handleAnalyticsEventOnPress(metricEventName, metricEventPayload, onPress)}
    >
      <IconContainer>
        <PersonMoneyIcon name={iconName} />
      </IconContainer>
      <TitleText weight="600">{title}</TitleText>
    </ContainerButton>
  );
};

export default LargeBoxButton;
