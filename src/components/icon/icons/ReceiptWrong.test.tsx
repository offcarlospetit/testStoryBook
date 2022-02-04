import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import ReceiptWrong from './ReceiptWrong';
test('ReceiptWrong component should render correctly', () => {
  render(<ReceiptWrong />);
});
