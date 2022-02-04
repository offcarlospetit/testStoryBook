import React from 'react';
import styled from 'styled-components/native';
import type { ViewProps } from 'react-native';

import Colors from '../../../constants/colors';
import Scale from '../../../utils/Scale';
import IconSVG from '../../icon/IconSvg';

import Text from '../../text/Text';
import MaskedPanLocked from '../maskedPanLocked/MaskedPanLocked';

export type IconOfCreditCard =
  | 'TC-goldCredito'
  | 'TC-bancaJoven'
  | 'TC-bia'
  | 'TC-gold'
  | 'TC-infinite'
  | 'TC-platinum'
  | 'TC-signature';

export type LabelOFCreditCard =
  | 'Gold Crédito'
  | 'Banca Joven'
  | 'BIA'
  | 'Gold'
  | 'Infinite'
  | 'Platinum'
  | 'Signature';
export type ProductTypeCode =
  | '210001'
  | '210011'
  | '210006'
  | '210026'
  | '210027'
  | '210005'
  | '210025'
  | '210035'
  | '210015'
  | '210004'
  | '210014'
  | '210016'
  | '210021'
  | '210031';

export interface InfoCreditCardProps extends ViewProps {
  disableSharing?: boolean;
  isFavorite?: boolean;
  maskedPan: string;
  creditCardCode: ProductTypeCode;
  isLocked?:boolean,
  textLocked?: string
}

interface ContainerData extends ViewProps {
  isFavorite?: boolean;
}

export interface ObjetoTest {
  label: LabelOFCreditCard;
  icon: IconOfCreditCard;
}
export type CodeProductTypeMap = Record<string, ObjetoTest>;
export const Textos: CodeProductTypeMap = {
  ['210001']: {
    label: 'Gold',
    icon: 'TC-gold',
  },
  ['210011']: {
    label: 'Gold',
    icon: 'TC-gold',
  },
  ['210006']: {
    label: 'Platinum',
    icon: 'TC-platinum',
  },
  ['210026']: {
    label: 'Platinum',
    icon: 'TC-platinum',
  },
  ['210027']: {
    label: 'Platinum',
    icon: 'TC-platinum',
  },
  ['210005']: {
    label: 'Infinite',
    icon: 'TC-infinite',
  },
  ['210025']: {
    label: 'Infinite',
    icon: 'TC-infinite',
  },
  ['210035']: {
    label: 'Infinite',
    icon: 'TC-infinite',
  },
  ['210015']: {
    label: 'Signature',
    icon: 'TC-signature',
  },
  ['210004']: {
    label: 'BIA',
    icon: 'TC-bia',
  },
  ['210014']: {
    label: 'BIA',
    icon: 'TC-bia',
  },
  ['210016']: {
    label: 'BIA',
    icon: 'TC-bia',
  },
  ['210021']: {
    label: 'Banca Joven',
    icon: 'TC-bancaJoven',
  },
  ['210031']: {
    label: 'Gold Crédito',
    icon: 'TC-goldCredito',
  },
};
const ContainerInfo = styled.View``;

const ContainerData = styled.View<ContainerData>`
  margin-left: ${props => (props.isFavorite ? Scale(12) : 0)}px;
`;

const ContainerTypeCreditCard = styled.View`
  flex-direction: row;
  align-items: stretch;
`;

const IconCard = styled(IconSVG)`
  height: ${Scale(18)}px;
  width: ${Scale(66)}px;
`;
const TxtTitle = styled(Text)`
  color: ${Colors.neutralDarkGrey60};
  font-size: ${Scale(15)}px;
  line-height: ${Scale(19)}px;
  margin-left: ${Scale(3)}px;
  margin-top: ${Scale(1)}px;
`;

const MaskedPan = styled(Text)`
  color: ${Colors.NeutralLightGrey50};
  font-size: ${Scale(16)}px;
  line-height: ${Scale(20)}px;
`;

const InfoCreditCard: React.FC<InfoCreditCardProps> = props => {
  const { isFavorite, maskedPan, creditCardCode, isLocked, textLocked } = props;
  const renderIconByProductCode = (code: ProductTypeCode) => {
    return (
      <>
        <IconCard name={Textos[code].icon} />
        <TxtTitle weight={'600'}>{Textos[code].label}</TxtTitle>
      </>
    );
  };

  return (
    <ContainerInfo>
      <ContainerData isFavorite={isFavorite}>
        <ContainerTypeCreditCard>
          {renderIconByProductCode(creditCardCode)}
        </ContainerTypeCreditCard>
        {
          isLocked ? <MaskedPanLocked textLocked={textLocked}/> : <MaskedPan weight="400">{maskedPan}</MaskedPan>
        }
        
      </ContainerData>
    </ContainerInfo>
  );
};

export default InfoCreditCard;
