import React from 'react';
import styled from 'styled-components/native';
import type { StyleProp, TextStyle, ViewProps, ViewStyle } from 'react-native';

import Colors from '../../../../constants/colors';
import Scale from '../../../../utils/Scale';
import IconSvg from '../../../icon/IconSvg';
import Text from '../../../text/Text';
import type { IconNameSvg } from '../../../icon/IconSvg';

export interface DebitCardMovementsNotFoundProps extends ViewProps {
  iconName?: IconNameSvg;
  titleMessage?: string;
  optionalText?: string;
  containerStyles?: StyleProp<ViewStyle>;
  iconStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  optionalTxtStyle?: StyleProp<TextStyle>;
}
const Container = styled.View`
  width: 100%;
  align-items: center;
`;

const IconError = styled(IconSvg)`
  width: ${Scale(75)}px;
  height: ${Scale(75)}px;
`;

const TitleMessage = styled(Text)`
  margin-top: ${Scale(10)}px;
  width: 100%;
  font-size: ${Scale(14)}px;
  line-height: ${Scale(20)}px;
  text-align: center;
  color: ${Colors.NeutralWhite};
`;

const OptionalText = styled(Text)`
  margin-top: ${Scale(8)}px;
  width: 100%;
  color: ${Colors.NeutralWhite};
  font-size: ${Scale(14)}px;
  line-height: ${Scale(20)}px;
  text-align: center;
  padding-horizontal: ${Scale(36)}px;
`;

const DebitCardMovementsNotFound: React.FC<DebitCardMovementsNotFoundProps> =
  props => {
    const {
      iconName,
      titleMessage,
      optionalText = '',
      containerStyles,
      iconStyles,
      textStyles,
      optionalTxtStyle,
    } = props;
    return (
      <Container style={containerStyles}>
        <IconError
          activeOpacity={1}
          name={iconName || 'debit-movements-not-found'}
          style={iconStyles}
        />
        <TitleMessage style={textStyles} weight="700">
          {titleMessage}
        </TitleMessage>
        {optionalText !== '' && (
          <OptionalText style={optionalTxtStyle} weight="400">
            {optionalText}
          </OptionalText>
        )}
      </Container>
    );
  };

export default DebitCardMovementsNotFound;
