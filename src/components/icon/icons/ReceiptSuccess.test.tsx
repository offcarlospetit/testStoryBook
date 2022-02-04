import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import ReceiptSuccess from './ReceiptSuccess';
test('ReceiptSuccess component should render correctly', () => {
  render(<ReceiptSuccess />);
});
