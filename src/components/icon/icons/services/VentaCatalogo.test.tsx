import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import VentaCatalogo from './VentaCatalogo';
test('VentaCatalogo component should render correctly', () => {
  render(<VentaCatalogo />);
});
