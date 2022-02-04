import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import MovementChargeHome from './MovementChargeHome';
test('Movement Charge Home component should render correctly', () => {
  render(<MovementChargeHome />);
});
