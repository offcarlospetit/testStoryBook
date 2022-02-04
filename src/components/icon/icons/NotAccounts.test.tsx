import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import NotAccounts from './NotAccounts';
test('NotAccounts component should render correctly', () => {
  render(<NotAccounts />);
});
