import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import NoFunds from './NoFunds';
test('Charge component should render correctly', () => {
  render(<NoFunds />);
});
