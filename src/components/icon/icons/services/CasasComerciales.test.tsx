import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import CasasComerciales from './CasasComerciales';
test('CasasComerciales component should render correctly', () => {
  render(<CasasComerciales />);
});
