import React from 'react';
import styled from 'styled-components/native';
import type { StyleProp, TextStyle, ViewProps, ViewStyle } from 'react-native';

import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
import Icon from '../icon/Icon';
import Text from '../text/Text';
import type { IconName } from '../icon/Icon';

export interface ErrorsBalanceProps extends ViewProps {
  iconName: IconName;
  messageError: string;
  containerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
}

const Container = styled.View`
  background-color: ${Colors.backgroundError};
  flex-direction: row;
  align-items: center;
  padding-top: ${Scale(22)}px;
  padding-bottom: ${Scale(22)}px;
  border-radius: ${Scale(8)}px;
  margin-right: ${Scale(12)}px;
`;

const TextError = styled(Text)`
  color: ${Colors.NeutralWhite};
  font-size: ${Scale(12)}px;
  line-height: ${Scale(16)}px;
  margin-left: ${Scale(16)}px;
`;

const IconError = styled(Icon)`
  width: ${Scale(28)}px;
  height: ${Scale(25.2)}px;
  margin-left: ${Scale(16)}px;
`;

const ErrorBalances: React.FC<ErrorsBalanceProps> = (
  props: ErrorsBalanceProps,
) => {
  const { iconName, messageError, containerStyles, textStyles } = props;
  return (
    <Container style={containerStyles}>
      <IconError activeOpacity={1} name={iconName} />
      <TextError style={textStyles} weight="500">
        {messageError}
      </TextError>
    </Container>
  );
};

export default ErrorBalances;
