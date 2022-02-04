import React from 'react';
import styled from 'styled-components/native';

import Colors from '../../../constants/colors';
import Scale from '../../../utils/Scale';
import IconSVG from '../../icon/IconSvg';

import Text from '../../text/Text';
import type { TextProps } from 'react-native-elements';

const ContainerBlockTypeCreditCard = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;
const IconLock= styled(IconSVG)`
  height: ${Scale(16)}px;
  width: ${Scale(16)}px;
  alignContent:flex-start;
`;

const TextLocked = styled(Text)`
  width:${Scale(159)}px;
  height:${Scale(16)}px;
  font-size: ${Scale(14)}px;
  line-height: ${Scale(18)}px; 
  color:${Colors.neutralDarkGrey60};
`;

export interface MaskedPanLockedProps extends TextProps {
    textLocked?: string,
  }

const MaskedPanLocked: React.FC<MaskedPanLockedProps> = props => {
    const { textLocked, ...rest } = props;

    return (

        <ContainerBlockTypeCreditCard >
          <IconLock name='card-lock' /> 
          <TextLocked weight='400' {...rest}> {!textLocked ? 'Tarjeta bloqueada' : textLocked}</TextLocked>
        </ContainerBlockTypeCreditCard>
  
    );
  };
  
  export default MaskedPanLocked;