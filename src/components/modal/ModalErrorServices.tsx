import React from 'react';
import type {ModalProps as RNModalProps} from 'react-native-modal';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

import Modal from './Modal';
import Colors from '../../constants/colors';
import Text from '../text/Text';
import Button from '../button/Button';
import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import Scale from '../../utils/Scale';

export interface ModalErrorServicesProps extends RNModalProps {
  title: string;
  message: string;
  onPress?: () => void;
  txtBtn: string;
  visible: boolean;
  icon?: React.ReactNode;
  titleStyle?: StyleProp<TextStyle>;
  messageStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  ContainerLottieStyle?: StyleProp<ViewStyle>;
  ContainerBodyStyle?: StyleProp<ViewStyle>;
  ContainerBtnStyle?: StyleProp<ViewStyle>;
}

const Container = styled.View`
  height: 90%;
  background-color: ${Colors.NeutralWhite};
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  border-top-left-radius: ${Scale(38)}px;
  border-top-right-radius: ${Scale(38)}px;
  padding-right: ${Scale(14)}px;
  padding-left: ${Scale(14)}px;
  padding-bottom: ${Scale(24)}px;
`;
const ContainerLottie = styled.View`
  margin-top: ${Scale(158)}px;
`;

const ContainerBody = styled.View`
  justify-content: center;
  flex: 1;
  margin-top: ${Scale(40)}px;
  justify-content: flex-start;
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
  margin-top: ${Scale(160)}px;
  width: 100%;
`;

const ModalErrorServices: React.FC<ModalErrorServicesProps> = (props) => {
  const {
    visible,
    icon,
    txtBtn,
    title,
    message,
    onPress,
    onBackdropPress,
    titleStyle,
    messageStyle,
    containerStyle,
    ContainerLottieStyle,
    ContainerBodyStyle,
    ContainerBtnStyle,
    ...rest
  } = props;

  const handleOnPress = () => {
    if (onPress) {
      onPress();
    }
  };
  const renderIcon = () => {
    if (icon && React.isValidElement(icon)) {
      return icon;
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
  return (
    <Modal
      {...rest}
      isVisible={visible}
      onBackdropPress={handleOnBackdropPress}>
      <Container style={containerStyle && containerStyle}>
        <ContainerLottie style={ContainerLottieStyle && ContainerLottieStyle}>
          {renderIcon()}
        </ContainerLottie>
        <ContainerBody style={ContainerBodyStyle && ContainerBodyStyle}>
          <TextTitle style={titleStyle && titleStyle} weight={'600'}>
            {title}
          </TextTitle>
          <TextMessage style={messageStyle && messageStyle} weight={'400'}>
            {message}
          </TextMessage>
        </ContainerBody>

        <ContainerBtn style={ContainerBtnStyle && ContainerBtnStyle}>
          <Button title={txtBtn} onPress={handleOnPress} />
        </ContainerBtn>
      </Container>
    </Modal>
  );
};

export default ModalErrorServices;
