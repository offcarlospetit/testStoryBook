import React, { FC } from 'react';
import styled from 'styled-components/native';
import type { ViewProps } from 'react-native';
import Colors from '../../../../../constants/colors';
import Scale from '../../../../../utils/Scale';
import IconSvg from '../../../../icon/IconSvg';
import Text from '../../../../text/Text';

export interface DebitCardStatusProps extends ViewProps {
  title: string;
  cardNumber: string;
  isActive?: boolean;
}

const CardInfo = styled.View`
  width: ${Scale(214)}px;
  height: ${Scale(49)}px;
`;

const CardTitle = styled(Text)`
  height: ${Scale(24)}px;
  width: ${Scale(214)}px;
  font-size: ${Scale(16)}px;
  line-height: ${Scale(24)}px;
  margin-bottom: ${Scale(5)}px;
  color: ${Colors.NeutralWhite}; 
`;

const CardNumber = styled(Text)`  
  width: ${Scale(214)}px;
  height: ${Scale(20)}px;
  font-size: ${Scale(16)}px;
  line-height: ${Scale(24)}px;
  color: ${Colors.NeutralWhite};
`;

const CardStatus = styled.View`
  height: ${Scale(36)}px;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between; 
`;

const CardIconStatusBlock = styled(IconSvg)`
  width: ${Scale(20)}px;
  height: ${Scale(20)}px;
  margin-right: ${Scale(5)}px;
  margin-bottom: ${Scale(2)}px;
`;

const CardStatusText = styled(Text)`
  font-size: ${Scale(14)}px;
  color: ${Colors.NeutralWhite};
`;

const DebitCardStatus: FC<DebitCardStatusProps> = (props: DebitCardStatusProps) => {
  const { title, cardNumber, isActive } = props;
  return (
    <>
      <CardInfo>
        <CardTitle weight="700">{title}</CardTitle>
        <CardNumber weight="400">{cardNumber}</CardNumber>
      </CardInfo>
      <CardStatus>
        {!isActive && <CardIconStatusBlock name='pad-lock' color={Colors.NeutralWhite} />}     
        <CardStatusText weight="600">{isActive ? 'Activa' : 'Bloqueada'}</CardStatusText>
      </CardStatus>
    </>
  );
};

export default DebitCardStatus;
