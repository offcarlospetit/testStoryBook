import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import CreditCardMovementsNotFound from './CreditCardMovementsNotFound';

describe('ErrorBalance Component', () => {
  test('Should render correctly', () => {
    render(<CreditCardMovementsNotFound titleMessage="test123" />);
  });
});
