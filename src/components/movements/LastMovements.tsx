import * as React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import IconSvg from '../icon/IconSvg';
import Colors from '../../constants/colors';
import Scale from '../../utils/Scale';
import Text from '../text/Text';
import IconFont, { IconFontName } from '../icon/IconFont';

export type CardType = 'debitCard' | 'creditCard';

const DEBIT_CARD = 'debitCard';

export interface MovementsItemsProps {
  iconType: number; //0 depósito, 1 cargo
  description: string;
  amount: string;
  type: CardType;
}

interface TextComponentProps {
  type: CardType;
}

const UIContainerItem = styled.View`
 flex-direction: row;
 height:${Scale(24)}px;
`;

const UIContainerItemSectionIcon = styled.View`
 width: ${Scale(24)}px;
 aspect-ratio: 1;
 border-radius:${Scale(12)}px;
 justify-content: center;
 align-items: center;
 background-color: ${Colors.NeutralWhite};
`;

const UIContainerItemSectionDescription = styled.View`
 flex: 1;
 justify-content: center;
 margin-left:${Scale(8)}px;
`;

const UIContainerItemSectionAmount = styled.View`
 flex-direction: row;
 align-items: center;
`;

const ContainerIcon = styled.View`
  width: ${Scale(24)}px;
`;

const ContainerIconByType = styled.View`
  width: ${Scale(12)}px;
  margin-right: ${Scale(4.4)}px;
`;

const TextDescription = styled(Text)<TextComponentProps>`
  font-size: ${Scale(14)}px;
  line-height: ${Scale(20)}px;
  width: ${Scale(100 - 24)}%;
  margin-bottom: ${Scale(1)}px;
  color: ${props =>
    props.type === DEBIT_CARD ? Colors.NeutralWhite : Colors.NeutralDarkGrey80};
`;

const TextAmount = styled(Text)<TextComponentProps>`
  font-size: ${Scale(14)}px;
  line-height: ${Scale(20)}px;
  margin-bottom: ${Scale(1)}px;
  color: ${props =>
    props.type === DEBIT_CARD ? Colors.NeutralWhite : Colors.NeutralDarkGrey80};
`;

const IconArrowByType = ({
  iconType,
  cardType,
}: {
  iconType: number;
  cardType: CardType;
}) => {
  const getIconProps = (): { name: IconFontName; color: string } => {
    if (cardType === DEBIT_CARD) {
      return {
        name: iconType === 1 ? 'arrow-up' : 'arrow-down',
        color:
          iconType === 1
            ? Colors.SemanticWarningYellow40
            : Colors.ProfileConservador45,
      };
    } else {
      return {
        name: iconType === 1 ? 'arrow-up' : 'arrow-down',
        color:
          iconType === 1
            ? Colors.SemanticWarningYellow50
            : Colors.ProfileConservador60,
      };
    }
  };
  return <IconFont size={Scale(10)} {...getIconProps()} />;
};

const LastMovements = (props: MovementsItemsProps) => {
  const { iconType, amount, description, type } = props;
  return (
    <UIContainerItem>
      <UIContainerItemSectionIcon>
        <ContainerIcon>
          <IconSvg name={iconType === 1 ? 'charge' : 'deposit'} />
        </ContainerIcon>
      </UIContainerItemSectionIcon>
      <UIContainerItemSectionDescription>
        <TextDescription
          weight={type === DEBIT_CARD ? '600' : '500'}
          type={type}
          numberOfLines={1}
        >
          {description}
        </TextDescription>
      </UIContainerItemSectionDescription>
      <UIContainerItemSectionAmount>
        <ContainerIconByType>
          <IconArrowByType iconType={iconType} cardType={type} />
        </ContainerIconByType>
        <View>
          <TextAmount
            weight={type === DEBIT_CARD ? 'bold' : '700'}
            type={type}
            numberOfLines={1}
          >
            {amount}
          </TextAmount>
        </View>
      </UIContainerItemSectionAmount>
    </UIContainerItem>
  );
};

export default LastMovements;
