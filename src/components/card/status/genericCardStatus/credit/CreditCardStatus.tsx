import React, { FC } from 'react';
import styled from 'styled-components/native';
import type { ViewProps } from 'react-native';
import Colors from '../../../../../constants/colors';
import Scale from '../../../../../utils/Scale';
import IconSvg from '../../../../icon/IconSvg';
import Text from '../../../../text/Text';
import { Textos } from '../../../credit/InfoCreditCard';

export interface CreditCardStatusProps extends ViewProps {
  cardNumber: string;
  productTypeCode?: string;
  isActive?: boolean;
  activeStatusLabel: string;
  blockedStatusLabel: string;
}

const CardInfo = styled.View`
  width: ${Scale(214)}px;
  height: ${Scale(49)}px;
`;

const IconTitleContainer = styled.View`
  flex-flow: row nowrap;
  align-items: center;
  height: ${Scale(24)}px;
  width: ${Scale(214)}px;  
`;

const CreditIcon = styled(IconSvg)`
  height: ${Scale(18)}px;
  width: ${Scale(66)}px;
  margin-right: ${Scale(4)}px;
`;

const CreditLabel = styled(Text)`
  height: ${Scale(24)}px;
  width: ${Scale(214)}px;
  font-size: ${Scale(16)}px;
  line-height: ${Scale(24)}px;
  color: ${Colors.neutralDarkGrey70}; 
`;

const CardNumber = styled(Text)`  
  width: ${Scale(214)}px;
  height: ${Scale(20)}px;
  font-size: ${Scale(16)}px;
  line-height: ${Scale(24)}px;
  color: ${Colors.neutralDarkGrey60};
  margin-top: ${Scale(5)}px;
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
  color: ${Colors.neutralDarkGrey60};
`;

const CreditCardStatus: FC<CreditCardStatusProps> = (
  props: CreditCardStatusProps,
) => {
  const {
    cardNumber,
    productTypeCode = '',
    isActive,
    activeStatusLabel,
    blockedStatusLabel,
  } = props;
  const product = Textos[productTypeCode];
  return (
    <>
      <CardInfo>
        <IconTitleContainer>
          <CreditIcon touchable={false} name={product?.icon} />
          <CreditLabel weight="600">{product?.label}</CreditLabel>
        </IconTitleContainer>
        <CardNumber weight="400">{cardNumber}</CardNumber>
      </CardInfo>
      <CardStatus>
        {!isActive && <CardIconStatusBlock name="pad-lock" />}
        <CardStatusText weight="600">
          {isActive ? activeStatusLabel : blockedStatusLabel}
        </CardStatusText>
      </CardStatus>
    </>
  );
};

export default CreditCardStatus;
