import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import MovementChargeHealth from './MovementChargeHealth';
test('Movement Charge Health component should render correctly', () => {
  render(<MovementChargeHealth />);
});
