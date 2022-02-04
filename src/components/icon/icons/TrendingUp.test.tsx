import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import TrendingUp from './TrendingUp';
test('Charge component should render correctly', () => {
  render(<TrendingUp />);
});
