import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import MovementDebitOptions from './MovementDebitOptions';
test('Movement Debit Options component should render correctly', () => {
  render(<MovementDebitOptions />);
});
