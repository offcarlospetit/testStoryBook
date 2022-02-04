import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Transfers from './Transfers';
test('Transfers component should render correctly', () => {
  render(<Transfers />);
});
