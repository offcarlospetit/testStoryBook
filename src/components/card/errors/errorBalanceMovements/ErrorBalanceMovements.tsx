import React from 'react';
import styled from 'styled-components/native';
import type { StyleProp, TextStyle, ViewProps, ViewStyle } from 'react-native';

import Colors from '../../../../constants/colors';
import Scale from '../../../../utils/Scale';
import IconSvg from '../../../icon/IconSvg';
import Text from '../../../text/Text';
import type { IconNameSvg } from '../../../icon/IconSvg';

export interface ErrorBalanceMovementsProps extends ViewProps {
  iconName?: IconNameSvg;
  iconHeight?: number;
  iconWidth?: number;
  titleError?: string;
  messageError?: string;
  containerStyles?: StyleProp<ViewStyle>;
  iconStyles?: StyleProp<ViewStyle>;
  titleStyles?: StyleProp<TextStyle>;
  messageStyles?: StyleProp<TextStyle>;
}

const Container = styled.View`
  width: 100%;
  align-items: center;  
`;

const IconError = styled(IconSvg)`
  width: ${Scale(64)}px;
  height: ${Scale(60)}px;
`;

const TitleError = styled(Text)`
  margin-top: ${Scale(30)}px;
  width: 100%;
  color: ${Colors.NeutralLightGrey90};
  font-size: ${Scale(16)}px;
  line-height: ${Scale(24)}px;
  text-align: center;
`;

const TextError = styled(Text)`
  margin-top: ${Scale(8)}px;
  width: 100%;
  color: ${Colors.NeutralLightGrey90};
  font-size: ${Scale(14)}px;
  line-height: ${Scale(20)}px;
  text-align: center;
  padding-horizontal: ${Scale(36)}px;
`;

const ErrorBalanceMovements: React.FC<ErrorBalanceMovementsProps> = (
  props: ErrorBalanceMovementsProps,
) => {
  const {
    iconName,
    titleError,
    messageError,
    containerStyles,
    iconStyles,
    titleStyles,
    messageStyles,
  } = props;
  return (
    <Container style={containerStyles}>
      <IconError
        activeOpacity={1}
        name={iconName || 'receipt-all-wrong'}
        style={iconStyles}
      />
      <TitleError style={titleStyles} weight="600">
        {titleError}
      </TitleError>
      <TextError style={messageStyles}>{messageError}</TextError>
    </Container>
  );
};

export default ErrorBalanceMovements;
