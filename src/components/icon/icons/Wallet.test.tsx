import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Wallet from './Wallet';
test('Charge component should render correctly', () => {
  render(<Wallet />);
});
