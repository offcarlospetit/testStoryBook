import React from 'react';
import { TouchableOpacity } from 'react-native';
import type { ViewProps, StyleProp, ViewStyle } from 'react-native';

import Colors from '../../../constants/colors';
import InfoCreditCard from './InfoCreditCard';
import BalanceCreditCard from './BalanceCreditCard';
import ErrorBalance from '../ErrorBalance';
import type { ProductTypeCode } from './InfoCreditCard';

export interface CreditCardProps extends ViewProps {
  disableSharing?: boolean;
  isFavorite?: boolean;
  maskedPan: string;
  errorBalance: boolean;
  onPressVisibility: () => void;
  onPressCard?: () => void;
  balanceNational: string;
  balanceInternational: string;
  messageError: string;
  hideBalance: boolean;
  containerStyles?: StyleProp<ViewStyle>;
  creditCardCode: ProductTypeCode;
}

const CreditCard: React.FC<CreditCardProps> = props => {
  const {
    errorBalance,
    onPressVisibility,
    onPressCard = () => {},
    maskedPan,
    balanceNational,
    balanceInternational,
    messageError,
    hideBalance,
    containerStyles,
    creditCardCode,
  } = props;

  return (
    <TouchableOpacity onPress={onPressCard} activeOpacity={1}>
      <InfoCreditCard
        creditCardCode={creditCardCode}
        maskedPan={maskedPan}
        disableSharing={true}
      />
      {!errorBalance ? (
        <BalanceCreditCard
          balanceNational={balanceNational}
          balanceInternational={balanceInternational}
          hideBalance={hideBalance}
          onPressVisibility={onPressVisibility}
        />
      ) : (
        <ErrorBalance
          iconName="error-balance-tc"
          messageError={messageError}
          containerStyles={[
            containerStyles,
            { backgroundColor: Colors.NeutralLightGrey10 },
          ]}
          textStyles={{ color: Colors.NeutralLightGrey60 }}
        />
      )}
    </TouchableOpacity>
  );
};

export default CreditCard;
