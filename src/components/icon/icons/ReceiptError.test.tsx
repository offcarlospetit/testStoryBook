import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import ReceiptError from './ReceiptError';
test('ReceiptError component should render correctly', () => {
  render(<ReceiptError />);
});
