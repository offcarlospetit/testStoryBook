import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import CreditCard from './CreditCard';
test('CreditCard component should render correctly', () => {
  render(
    <CreditCard
      maskedPan="****"
      errorBalance={false}
      onPressVisibility={() => jest.fn()}
      balanceInternational={'12000'}
      balanceNational={'12000'}
      hideBalance={false}
      creditCardCode={'210001'}
      messageError={'Test Error'}
    />,
  );
});
