import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Estacionamiento from './Estacionamiento';
test('Estacionamiento component should render correctly', () => {
  render(<Estacionamiento />);
});
