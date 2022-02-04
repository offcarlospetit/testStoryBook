import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import ReceiptWaiting from './ReceiptWaiting';
test('ReceiptWaiting component should render correctly', () => {
  render(<ReceiptWaiting />);
});
