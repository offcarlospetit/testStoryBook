import { render } from '@testing-library/react-native'
import React from 'react';
import 'react-native';
import StickyAmountToPay from './StickyAmountToPay';

test('StickyAmountToPay component should render correctly', () => {
  render(
    <StickyAmountToPay
      label='Monto a pagar:'
      value='$79.313'
      buttonText='Continuar'
      onPress={() => null}
    />)
});