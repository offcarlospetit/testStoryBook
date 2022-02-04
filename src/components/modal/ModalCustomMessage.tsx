import React, { useContext } from 'react';
import type { ModalProps as RNModalProps } from 'react-native-modal';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

import Modal from './Modal';
import Colors from '../../constants/colors';
import Text from '../text/Text';
import Button from '../button/Button';
import Scale from '../../utils/Scale';
import { MetricsContext } from '../metricsProvider/MetricsProvider';
import type { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

export interface ModalErrorServicesProps extends RNModalProps {
  title: string;
  message: string;
  onPress?: (event: GestureResponderEvent) => void;
  txtBtn: string;
  visible: boolean;
  icon?: React.ReactNode;
  metricEventName?: string;
  metricEventPayload?: any;
  containerStyles?: StyleProp<ViewStyle>;
  customText?: React.ReactNode;
}

const Container = styled.View`
  height: 90%;
  background-color: ${Colors.NeutralWhite};
  justify-content: center;
  align-items: center;
  border-top-left-radius: ${Scale(38)}px;
  border-top-right-radius: ${Scale(38)}px;
  padding-right: ${Scale(14)}px;
  padding-left: ${Scale(14)}px;
  padding-bottom: ${Scale(44)}px;
`;

const ContentContainer = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
`;

const ContainerBody = styled.View`
  justify-content: center;
  margin-top: ${Scale(40)}px;
`;
const TextTitle = styled(Text)`
  text-align: center;
  font-size: ${Scale(18)}px;
  line-height: ${Scale(24)}px;
`;
const TextMessage = styled(Text)`
  text-align: center;
  font-size: ${Scale(16)}px;
  line-height: ${Scale(24)}px;
  margin-top: ${Scale(20)}px;
`;

const ContainerBtn = styled.View`
  width: 100%;
`;

const IconContainer = styled.View`
  width: ${Scale(88)}px;
  aspect-ratio: 1;
  background-color: ${Colors.NeutralLightGrey20};
  border-radius: ${Scale(44)}px;
`;

const ModalErrorServices: React.FC<ModalErrorServicesProps> = props => {
  const {
    visible,
    icon,
    txtBtn,
    title,
    message,
    onPress,
    onBackdropPress,
    metricEventName,
    metricEventPayload,
    containerStyles,
    customText = null,
    ...rest
  } = props;

  const metricsContext = useContext(MetricsContext);

  const handleOnPress = (event: GestureResponderEvent) => {
    if (metricEventName && metricsContext?.metricsTool) {
      metricsContext?.metricsTool.logEvent(metricEventName, metricEventPayload);
    }
    if (onPress) {
      onPress(event);
    }
  };

  const renderIcon = () => {
    if (icon) {
      return <IconContainer>{icon}</IconContainer>;
    }
    return (
      <LottieView
        style={{
          width: Scale(120),
          height: Scale(120),
        }}
        source={require('./icons/no-connection.json')}
        loop={false}
        autoPlay={true}
      />
    );
  };

  const handleOnBackdropPress = () => {
    if (onBackdropPress) {
      onBackdropPress();
    }
  };

  const renderText = () => {
    if (customText) {
      return (
        <>
          <TextTitle weight={'600'}>{title}</TextTitle>
          {customText}
        </>
      );
    } else {
      return (
        <>
          <TextTitle weight={'600'}>{title}</TextTitle>
          <TextMessage weight={'400'}>{message}</TextMessage>
        </>
      );
    }
  };
  return (
    <Modal
      {...rest}
      isVisible={visible}
      onBackdropPress={handleOnBackdropPress}
    >
      <Container style={containerStyles}>
        <ContentContainer>
          {renderIcon()}
          <ContainerBody>{renderText()}</ContainerBody>
        </ContentContainer>
        <ContainerBtn>
          <Button title={txtBtn} onPress={handleOnPress} />
        </ContainerBtn>
      </Container>
    </Modal>
  );
};

export default ModalErrorServices;
