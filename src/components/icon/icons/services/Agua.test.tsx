import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Agua from './Agua';
test('Agua component should render correctly', () => {
  render(<Agua />);
});
