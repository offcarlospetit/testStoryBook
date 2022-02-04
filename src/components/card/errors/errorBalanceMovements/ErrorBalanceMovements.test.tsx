import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import ErrorBalanceMovements from './ErrorBalanceMovements';

describe('ErrorBalance Component', () => {
  test('Should renders correctly', () => {
    render(
      <ErrorBalanceMovements
        iconName="receipt-all-wrong"
        titleError="test123"
        messageError="123456"
      />,
    );
  });
});
