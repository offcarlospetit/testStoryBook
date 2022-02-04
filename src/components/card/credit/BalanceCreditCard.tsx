import React, {useState} from 'react';
import type {ViewStyle, StyleProp} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../constants/colors';
import Scale from '../../../utils/Scale';
import Icon from '../../icon/Icon';
import Text from '../../text/Text';

export type CurrencyType = 'EUR' | 'USD';

export interface BalanceCreditCardProps {
  balanceNational: string;
  balanceInternational: string;
  hideBalance: boolean;
  onPressVisibility?: () => void;
}

interface RenderBalanceProps
  extends Pick<BalanceCreditCardProps, 'hideBalance'> {
  balance: string;
  txtAmountUsed: string;
  style?: StyleProp<ViewStyle>;
  hideBalance: boolean;
  typeBalance: CurrencyType;
}

const Container = styled.View`
  margin-top: ${Scale(13)}px;
  flex-direction: row;
  padding-right: ${Scale(13.66)}px;
`;

const ContainerBalance = styled.View`
  flex: 1;
  flex-direction: column;
`;
const ContainerAmount = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-right: ${Scale(12)}px;
`;
const BalanceNational = styled(Text)`
  font-size: ${Scale(18)}px;
  line-height: ${Scale(34)}px;
  color: ${Colors.NeutralDarkGrey80};
  text-align: center;
`;

const AmountUsed = styled(Text)`
  color: ${Colors.darkGrey};
  font-size: ${Scale(12)}px;
  line-height: ${Scale(16)}px;
`;
const ContainerIcon = styled.View`
  height: ${Scale(34)}px;
  width: ${Scale(30)}px;
`;

const IconVisibility = styled(Icon)`
  width: 100%;
  font-size: ${Scale(18)}px;
  height: ${Scale(34)}px;
  justify-content: center;
  align-items: center;
`;

const IconDivider = styled(Icon)`
  background-color: white;
`;

const BalanceCreditCard: React.FC<BalanceCreditCardProps> = props => {
  const {
    balanceNational,
    balanceInternational,
    hideBalance,
    onPressVisibility,
  } = props;
  const [hideBalances, setHideBalances] = useState(hideBalance);

  const handleHideBalance = () => {
    setHideBalances(!hideBalances);
    if (onPressVisibility) {
      onPressVisibility();
    }
  };

  const RenderBalance = (props: RenderBalanceProps) => {
    const {balance, txtAmountUsed, style, hideBalance} = props;
    return (
      <ContainerBalance>
        <ContainerAmount style={style}>
          <BalanceNational weight="700" numberOfLines={1}>
            {hideBalance ? '••••••••' : balance}
          </BalanceNational>
          <IconDivider name="divider-horizontal-grey" />
        </ContainerAmount>
        <AmountUsed weight="400">{txtAmountUsed}</AmountUsed>
      </ContainerBalance>
    );
  };

  return (
    <Container>
      <RenderBalance
        hideBalance={hideBalances}
        balance={balanceNational}
        txtAmountUsed={'Test\nTest'}
        typeBalance={'CLP'}
      />
      <RenderBalance
        hideBalance={hideBalances}
        balance={balanceInternational}
        txtAmountUsed={'Test\nTest'}
        typeBalance={'USD'}
      />
      <ContainerIcon>
        {hideBalances ? (
          <IconVisibility
            name={'visibility-off'}
            onPress={() => handleHideBalance()}
          />
        ) : (
          <IconVisibility
            name={'visibility'}
            onPress={() => handleHideBalance()}
          />
        )}
      </ContainerIcon>
    </Container>
  );
};

export default BalanceCreditCard;
