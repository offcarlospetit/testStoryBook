import { render } from '@testing-library/react-native';
import React from 'react';
import AmountToPay from './AmountToPay';

test('AmountToPay component should render correctly', () => {
  render(
    <AmountToPay
    label='Monto a pagar'
    value='Valor referencial del dólar $825,25'
    isLoading={false}
    />
  );
});

test('AmountToPay component should render correctly with skeleton loading', () => {
  render(
    <AmountToPay
    label='Monto a pagar'
    value='Valor referencial del dólar $825,25'
    isLoading={true}
    />
  );
});
