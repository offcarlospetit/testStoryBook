import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import MovementChargeTransportation from './MovementChargeTransportation';
test('Movement Charge Transportation component should render correctly', () => {
  render(<MovementChargeTransportation />);
});
