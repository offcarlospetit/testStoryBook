import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Educacion from './Educacion';
test('Educacion component should render correctly', () => {
  render(<Educacion />);
});
