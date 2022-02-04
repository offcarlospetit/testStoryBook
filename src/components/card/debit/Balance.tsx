import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

import Colors from '../../../constants/colors';
import Scale from '../../../utils/Scale';
import Icon from '../../icon/Icon';
import Text from '../../text/Text';

export type CurrencyType = 'CLP' | 'USD';

export interface BalanceProps {
  currencyType?: CurrencyType;
  balance: string;
  hideBalance: boolean;
  overdraft: string;
  onPressVisibility: () => void;
  isDebit?: boolean;
  isHideable?: boolean;
}

const ContainerBalance = styled.View`
  margin-top: ${Scale(20)}px;
`;

const ContainerMount = styled.View`
  flex-direction: row;
  align-items: center;
  align-content: center;
  width: ${Scale(219)}px;
  height: ${Scale(32)}px;
`;

const TextMount = styled(Text)`
  color: ${Colors.NeutralWhite};
  line-height: ${Scale(32)}px;
  font-size: ${Scale(24)}px;
`;

const Overdraft = styled(Text)`
  color: ${Colors.NeutralWhite};
  font-size: ${Scale(12)}px;
  line-height: ${Scale(16)}px;
`;

const IconDivider = styled(Icon)`
  margin-left: ${Scale(16)}px;
`;
const IconVisibility = styled(Icon)`
  margin-left: ${Scale(12)}px;
  height: 100%;
  width: ${Scale(35)}px;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 0px;
  padding-left: ${Scale(12)}px;
`;

const Balance: React.FC<BalanceProps> = props => {
  const {
    currencyType,
    balance,
    hideBalance,
    overdraft,
    onPressVisibility,
    isDebit,
    isHideable = true,
  } = props;
  const [hideBalances, setHideBalances] = useState(hideBalance);
  const [currency, setCurrency] = useState('');
  useEffect(() => {
    switch (currencyType) {
      case 'CLP':
        setCurrency('');
        break;
      case 'USD':
        setCurrency('USD');
        break;
      default:
        setCurrency('');
        break;
    }
  }, [currency, currencyType]);

  const handleHideBalance = () => {
    setHideBalances(!hideBalances);
    onPressVisibility();
  };

  return (
    <ContainerBalance>
      <ContainerMount>
        <TextMount weight="700" numberOfLines={1}>
          {hideBalances ? '••••••' : `${currency}${balance}`}
        </TextMount>
        {isHideable && (
          <>
            <IconDivider name="divider-horizontal" />
            {hideBalances ? (
              <IconVisibility
                name={'visibility-off-white'}
                onPress={() => handleHideBalance()}
              />
            ) : (
              <IconVisibility
                name={'visibility-on'}
                onPress={() => handleHideBalance()}
              />
            )}
          </>
        )}
      </ContainerMount>
      {isDebit ? (
        <Overdraft weight="400">
          Sobregiro disponible: {hideBalances ? '••••••' : `${overdraft}`}
        </Overdraft>
      ) : (
        <Overdraft weight="400" />
      )}
    </ContainerBalance>
  );
};

export default Balance;
