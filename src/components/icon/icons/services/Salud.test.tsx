import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Salud from './Salud';
test('Salud component should render correctly', () => {
  render(<Salud />);
});
