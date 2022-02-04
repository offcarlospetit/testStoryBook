import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import ReceiptAllWrong from './ReceiptAllWrong';
test('ReceiptAllWrong component should render correctly', () => {
  render(<ReceiptAllWrong />);
});
