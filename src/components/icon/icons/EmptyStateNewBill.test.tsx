import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import EmptyStateNewBill from './EmptyStateNewBill';
test('EmptyStateNewBill component should render correctly', () => {
  render(<EmptyStateNewBill />);
});