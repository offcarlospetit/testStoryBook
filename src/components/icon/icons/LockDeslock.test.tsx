import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import LockDeslock from './LockDeslock';
test('LockDeslock component should render correctly', () => {
  render(<LockDeslock />);
});
test('LockDeslock component should render correctly with color', () => {
  render(<LockDeslock color='locked' />);
});
