import React, { useContext } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
  StyleSheet,
} from 'react-native';
import { MetricsContext } from '../metricsProvider/MetricsProvider';
import styled from 'styled-components/native';
import Text from '../text/Text';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
import IconSvg, { IconNameSvg } from '../icon/IconSvg';

export type BoxButtonTypes = 'active' | 'inactive';

export interface BoxButtonProps extends TouchableOpacityProps {
  title: string;
  description: string;
  metricEventName?: string;
  metricEventPayload?: any;
  iconName: IconNameSvg;
  type?: BoxButtonTypes;
}

interface AvatarContainerProps extends ViewProps {
  isActive?: boolean;
}

const ContainerButton = styled(TouchableOpacity)`
  padding: ${Scale(12)}px;
  border-radius: ${Scale(12)}px;
  background-color: ${Colors.white}
`;

const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const AvatarContainer = styled.View<AvatarContainerProps>`
  width: ${Scale(36)}px;
  height: ${Scale(36)}px;
  border-radius: ${Scale(18)}px;  
  background-color: ${props => (props.isActive ?  Colors.ActiveOptionMenu: Colors.NeutralLightGrey10 )};
  align-self: flex-end;
  padding: ${Scale(6)}px;
`;

const DescriptionContainer = styled.View`
  width:100%;
  margin-top: auto;
`;

const DescriptionText = styled(Text)`
  font-size: ${Scale(14)}px;
  color: ${Colors.NeutralLightGrey50}
`;

const TitleText = styled(Text)`
  font-size: ${Scale(12)}px;
  line-height: ${Scale(16)}px;
  color: ${Colors.primary}
  text-transform: uppercase;
`;

const BoxButton: React.FC<BoxButtonProps> = props => {
  const {
    title,
    description,
    onPress,
    metricEventName,
    metricEventPayload,
    iconName,
    type = 'inactive',
    style,
    ...rest
  } = props;
  const metricsContext = useContext(MetricsContext);

  const isActive = (type === 'active')

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
      style={[
        style,
        type === 'inactive' && styles.inactiveCardContainer,
        type === 'active' && styles.activeCardContainer,
      ]}
    >
      <TitleContainer
        style={{ alignSelf: type === 'active' ? 'flex-end' : 'auto' }}
      >
        {type === 'inactive' && <TitleText weight="600">{title}</TitleText>}
        {iconName && (
          <AvatarContainer isActive={isActive}>
            <IconSvg disabled name={iconName} color={isActive ? Colors.PrimaryBlue50 : Colors.NeutralLightGrey40} />
          </AvatarContainer>
        )}
      </TitleContainer>
      <DescriptionContainer>
        <DescriptionText
          weight="600"
          style={type === 'active' && styles.contentTextActive}
        >
          {description}
        </DescriptionText>
      </DescriptionContainer>
    </ContainerButton>
  );
};

const styles = StyleSheet.create({
  contentTextActive: {
    color: Colors.neutralDarkGrey70,
  },
  inactiveCardContainer: {
    backgroundColor: Colors.white,
    borderStyle: 'dashed',
    borderWidth: Scale(1),
    borderColor: Colors.NeutralLightGrey40,
  },
  activeCardContainer: {
    shadowColor: '#121954',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default BoxButton;
