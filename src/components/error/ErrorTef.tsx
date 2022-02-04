import React from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constants/colors';
import Text from '../text/Text';
import Button from '../button/Button';
import Scale from '../../utils/Scale';
import Icon, { IconNameSvg } from '../icon/IconSvg';

export interface ErrorTefProps {
  containerStyle?: StyleProp<ViewStyle>;
  icon?: React.ReactNode;
  iconName?: IconNameSvg;
  containerIconStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ViewStyle>;
  title: string | React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
  message: string | React.ReactNode;
  onPress?: () => void;
  txtBtn: string;
  button?: React.ReactNode;
  containerTitleStyle?: StyleProp<ViewStyle>;
  containerBodyStyle?: StyleProp<ViewStyle>;
  containerButtonStyle?: StyleProp<ViewStyle>;
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ContainerIcon = styled.View`
  align-items: flex-start;
  width: 100%;
`;

const UIIcon = styled(Icon)`
  width: ${Scale(66)}px;
  height: ${Scale(61)}px;
`;

const ContainerTitle = styled.View`
  margin-top: ${Scale(32)}px;
  width: 100%;
`;

const ContainerBody = styled.View`
  margin-top: ${Scale(16)}px;
  width: 100%;
`;

const TitleText = styled(Text)`
  font-size: ${Scale(18)}px;
  line-height: ${Scale(24)}px;
  color: ${Colors.NeutralDarkGrey90};

  text-align: left;
`;

const MessageText = styled(Text)`
  font-size: ${Scale(14)}px;
  line-height: ${Scale(20)}px;
  color: ${Colors.NeutralDarkGrey90};

  text-align: left;
  width: 100%;
`;

const ContainerButton = styled.View`
  margin-top: ${Scale(82)}px;
  width: 100%;
`;

const UIButton = styled(Button)``;

const ErrorTef: React.FC<ErrorTefProps> = props => {
  const {
    icon,
    iconName,
    containerIconStyle,
    iconStyle,
    containerStyle,
    title,
    textStyle,
    message,
    txtBtn,
    onPress,
    button,
    containerTitleStyle,
    containerBodyStyle,
    containerButtonStyle,
  } = props;

  const renderIcon = () => {
    if (icon && React.isValidElement(icon)) {
      return icon;
    }
    return (
      <UIIcon
        activeOpacity={1}
        style={iconStyle}
        name={iconName || 'receipt-error'}
      />
    );
  };

  const renderTitle = () => {
    if (title && React.isValidElement(title)) {
      return title;
    }
    return (
      <TitleText style={textStyle} weight="700">
        {title}
      </TitleText>
    );
  };

  const renderBody = () => {
    if (message && React.isValidElement(message)) {
      return message;
    }
    return (
      <MessageText style={textStyle} weight="400">
        {message}
      </MessageText>
    );
  };

  const handleOnPress = () => {
    if (onPress) {
      onPress();
    }
  };

  const renderButton = () => {
    const defaultTitleStyle = {
      fontSize: Scale(16),
      width: '100%',
      textAlign: 'center' as 'center',
    };
    if (button && React.isValidElement(button)) {
      return button;
    }
    return (
      <UIButton
        titleStyle={defaultTitleStyle}
        weight="700"
        title={txtBtn}
        onPress={handleOnPress}
      />
    );
  };

  return (
    <Container style={containerStyle}>
      <ContainerIcon style={containerIconStyle}>{renderIcon()}</ContainerIcon>
      <ContainerTitle style={containerTitleStyle}>
        {renderTitle()}
      </ContainerTitle>
      <ContainerBody style={containerBodyStyle}>{renderBody()}</ContainerBody>
      <ContainerButton style={containerButtonStyle}>
        {renderButton()}
      </ContainerButton>
    </Container>
  );
};

export default ErrorTef;
