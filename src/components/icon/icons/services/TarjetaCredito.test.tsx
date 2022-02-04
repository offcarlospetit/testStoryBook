import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import TarjetaCredito from './TarjetaCredito';
test('TarjetaCredito component should render correctly', () => {
  render(<TarjetaCredito />);
});
