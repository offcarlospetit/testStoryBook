import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Credito from './Credito';
test('Credito component should render correctly', () => {
  render(<Credito />);
});
