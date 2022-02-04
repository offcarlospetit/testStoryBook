import React from 'react';
import styled from 'styled-components/native';
import type { StyleProp, TextStyle, ViewProps, ViewStyle } from 'react-native';

import Colors from '../../../../constants/colors';
import Scale from '../../../../utils/Scale';
import IconSvg from '../../../icon/IconSvg';
import Text from '../../../text/Text';
import type { IconNameSvg } from '../../../icon/IconSvg';

export interface CreditCardMovementsNotFoundProps extends ViewProps {
  iconName?: IconNameSvg;
  titleMessage?: string;
  optionalText?: string;
  containerStyles?: StyleProp<ViewStyle>;
  iconStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
}
const Container = styled.View`
  width: 100%;
  align-items: center;
`;

const IconError = styled(IconSvg)`
  width: ${Scale(68)}px;
  height: ${Scale(68)}px;
`;

const TitleMessage = styled(Text)`
  margin-top: ${Scale(10)}px;
  width: 100%;
  font-size: ${Scale(16)}px;
  line-height: ${Scale(24)}px;
  text-align: center;
  color: ${Colors.NeutralLightGrey90};
`;

const OptionalText = styled(Text)`
  margin-top: ${Scale(8)}px;
  width: 100%;
  color: ${Colors.NeutralLightGrey90};
  font-size: ${Scale(14)}px;
  line-height: ${Scale(20)}px;
  text-align: center;
  padding-horizontal: ${Scale(36)}px;
`;

const CreditCardMovementsNotFound: React.FC<CreditCardMovementsNotFoundProps> =
  (props: CreditCardMovementsNotFoundProps) => {
    const {
      iconName,
      titleMessage,
      optionalText = '',
      containerStyles,
      iconStyles,
      textStyles,
    } = props;
    return (
      <Container style={containerStyles}>
        <IconError
          activeOpacity={1}
          name={iconName || 'deferred-payroll'}
          style={iconStyles}
        />
        <TitleMessage style={textStyles} weight="700">
          {titleMessage}
        </TitleMessage>
        {optionalText !== '' && (
          <OptionalText style={textStyles} weight="400">
            {optionalText}
          </OptionalText>
        )}
      </Container>
    );
  };

export default CreditCardMovementsNotFound;
