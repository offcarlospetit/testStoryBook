import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import MovementDebitSearch from './MovementDebitSearch';
test('Movement Debit Search component should render correctly', () => {
  render(<MovementDebitSearch />);
});
