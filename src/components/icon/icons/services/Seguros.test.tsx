import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Seguros from './Seguros';
test('Seguros component should render correctly', () => {
  render(<Seguros />);
});
