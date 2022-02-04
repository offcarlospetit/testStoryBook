import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import ExchangeArrow from './ExchangeArrow';
test('Charge component should render correctly', () => {
  render(<ExchangeArrow />);
});
