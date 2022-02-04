import React from 'react';
import type { StyleProp, ViewStyle, TextStyle } from 'react-native';
import styled from 'styled-components/native';
import IconSvg, { IconNameSvg } from '../icon/IconSvg';
import Text, { Weight } from '../text/Text';
import Button, { ButtonProps } from '../button/Button';
import Scale from '../../utils/Scale';
import Colors from '../../constants/colors';

export type ErrorType = 'error' | 'waiting';

export interface GenericErrorProps {
  title?: string;
  message?: string;
  type?: ErrorType;
  icon?: React.ReactNode;
  iconName?: IconNameSvg;
  iconStyle?: StyleProp<ViewStyle>;
  styles?: StyleProp<ViewStyle>;
  titleTextStyle?: StyleProp<TextStyle>;
  descriptionTextStyle?: StyleProp<TextStyle>;
  weightTitle?: Weight;
  weightDescription?: Weight;
  weightSubTitle?: Weight;
  button?: ButtonProps[] | React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

const Container = styled.View`
 justify-content: center;
 align-items: center;
 align-content: center;
`;

const TextTitle = styled(Text)`
  font-size: ${Scale(18)}px;
  line-height: ${Scale(24)}px;
  margin-bottom: ${Scale(12)}px;
  margin-top: ${Scale(11)}px;
  color: ${Colors.NeutralDarkGrey90};
`;

const TextDescription = styled(Text)`
  font-size: ${Scale(14)}px;
  line-height: ${Scale(20)}px;
  margin-bottom: ${Scale(32)}px;
  color: ${Colors.NeutralDarkGrey90};
`;

const GenericError: React.FC<GenericErrorProps> = props => {
  const {
    icon,
    iconName,
    iconStyle,
    title,
    message,
    children,
    button = [],
    titleTextStyle,
    descriptionTextStyle,
    weightTitle = '700',
    containerStyle,
    weightDescription = '400',
  } = props;

  const renderIcon = () => {
    if (icon && React.isValidElement(icon)) {
      return icon;
    }
    if (!iconName) {
      return null;
    }
    return <IconSvg name={iconName} activeOpacity={1} style={iconStyle} />;
  };

  const renderContent = () => {
    return (
      <>
        {title && React.isValidElement(title) ? (
          title
        ) : title ? (
          <TextTitle style={titleTextStyle} weight={weightTitle}>
            {title}
          </TextTitle>
        ) : null}
        {message && React.isValidElement(message) ? (
          message
        ) : message ? (
          <TextDescription
            style={descriptionTextStyle}
            weight={weightDescription}
          >
            {message}
          </TextDescription>
        ) : null}
      </>
    );
  };

  const renderButton = () => {
    if (button && React.isValidElement(button)) {
      return button;
    }
    if (Array.isArray(button) && button?.length) {
      return button.map((btn, idx) => {
        return <Button key={idx} weight="700" {...btn} />;
      });
    }
    return null;
  };
  return (
    <Container style={containerStyle}>
      {renderIcon()}
      {renderContent()}
      {renderButton()}
      {children}
    </Container>
  );
};

export default GenericError;
