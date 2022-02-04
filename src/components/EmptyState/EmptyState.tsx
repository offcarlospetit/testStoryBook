import React from 'react';
import type { ViewProps } from 'react-native';
import styled from 'styled-components/native';
import Text from '../text/Text';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
import type { IconNameSvg } from '../icon/IconSvg';
import IconSvg from '../icon/IconSvg';

export interface EmptyStateProps extends ViewProps {
  title: string;
  message?: string;
  icon?: IconNameSvg;
}

const getTextBasicStyles = (fontSize: number) => {
  return `
    text-align: center;
    font-size: ${Scale(fontSize)}px;
    line-height: ${Scale(24)}px;
    color: ${Colors.neutralDarkGrey70};`;
};

const AlertContainer = styled.View`
  width: 100%;
  align-items: center;
`;

const EmptyStateNewBillIcon = styled(IconSvg)`
  width: ${Scale(176)}px;
  height: ${Scale(176)}px;
  margin-bottom: ${Scale(16)}px;
`;

const TitleText = styled(Text)`
  ${getTextBasicStyles(18)};
  margin-bottom: ${Scale(16)}px;
`;

const MessageText = styled(Text)`
  ${getTextBasicStyles(16)};
`;

const EmptyState = ({ title, message = '', icon = 'empty-state-new-bill' }: EmptyStateProps) => {
  const doesItHaveMessage = message !== '';
  return (
    <AlertContainer>
      <EmptyStateNewBillIcon name={icon} />
      <TitleText weight='700'>{title}</TitleText>
      {doesItHaveMessage && <MessageText weight='400'>{message}</MessageText>}
    </AlertContainer>
  );
};

export default EmptyState;
