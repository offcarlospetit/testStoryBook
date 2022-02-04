import React from 'react';
import { TouchableOpacity } from 'react-native';

import InfoCta from './InfoCta';
import Balance from './Balance';
import ErrorBalance from '../ErrorBalance';
import type { CurrencyType } from './Balance';

interface DebitCardProps {
  errorBalance: React.ReactNode;
  errorInfoCta: any;
  onPressVisibility: () => void;
  accountNumber: string;
  accountName: string;
  isFavorite: boolean;
  isDebit: boolean;
  overdraft: string;
  currency: CurrencyType;
  balance: string;
  isHideable?: boolean;
  hideBalance: boolean;
  onPressCard?: () => void;
  messageError: string;
}
const DebitCard: React.FC<DebitCardProps> = props => {
  const {
    errorBalance,
    errorInfoCta,
    onPressVisibility,
    accountNumber,
    accountName,
    isFavorite,
    isDebit,
    overdraft,
    currency,
    balance,
    hideBalance,
    messageError,
    isHideable = true,
    onPressCard = () => {},
  } = props;

  const renderErrorBalance = () => {
    if (errorBalance && React.isValidElement(errorBalance)) {
      return errorBalance;
    }
    return (
      <ErrorBalance iconName="error-balance" messageError={messageError} />
    );
  };

  return (
    <TouchableOpacity onPress={onPressCard} activeOpacity={1}>
      <InfoCta
        accountNumber={accountNumber}
        accountName={accountName}
        isFavorite={isFavorite}
        disableSharing={errorBalance || errorInfoCta}
      />
      {!errorBalance ? (
        <Balance
          isDebit={isDebit}
          balance={balance}
          currencyType={currency}
          hideBalance={hideBalance}
          overdraft={overdraft}
          onPressVisibility={onPressVisibility}
          isHideable={isHideable}
        />
      ) : (
        renderErrorBalance()
      )}
    </TouchableOpacity>
  );
};

export default DebitCard;
