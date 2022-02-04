import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Deposit from './Deposit';
test('Deposit component should render correctly', () => {
  render(<Deposit />);
});
