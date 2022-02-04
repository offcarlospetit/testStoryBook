import React, { useContext } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { MetricsContext } from '../metricsProvider/MetricsProvider';
import styled from 'styled-components/native';
import Text from '../text/Text';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
import IconSvg from '../icon/IconSvg';

const ContainerButton = styled(TouchableOpacity)`
  background-color: ${Colors.NeutralLightGrey10}
  width:100%;
  padding-vertical: ${Scale(8)}px;
  padding-horizontal: ${Scale(12)}px;
  border-radius: ${Scale(12)}px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const AvatarContainer = styled.View`
  width: ${Scale(32)}px;
  height: ${Scale(32)}px;
  background-color: ${Colors.NeutralLightGrey30};
  border-radius: ${Scale(16)}px;
  align-items: center;
  justify-content: center;
`;

const TextName = styled(Text)`
  font-size: ${Scale(16)}px;
  color: ${Colors.NeutralLightGrey70}
  margin-left: ${Scale(16)}px;
  flex:1;
`;

interface AliasButtonProps extends TouchableOpacityProps {
  text: string;
  metricEventName?: string;
  metricEventPayload?: any;
}

const AliasButton: React.FC<AliasButtonProps> = props => {
  const { text, onPress, metricEventName, metricEventPayload, ...rest } = props;
  const metricsContext = useContext(MetricsContext);

  return (
    <ContainerButton
      {...rest}
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
      <ButtonContainer>
        <AvatarContainer>
          <IconSvg name="user" style={{ width: '100%' }} />
        </AvatarContainer>
        <TextName weight="500" numberOfLines={1}>
          {text}
        </TextName>
      </ButtonContainer>
    </ContainerButton>
  );
};

export default AliasButton;
