import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Construccion from './Construccion';
test('Construccion component should render correctly', () => {
  render(<Construccion />);
});
