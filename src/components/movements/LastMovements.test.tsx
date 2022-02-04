import { render } from '@testing-library/react-native';
import React from 'react';
import LastMovements from './LastMovements';

describe('LastMovements Component', () => {
  test('Given a iconType 1, expect renders correctly', () => {
    render(
      <LastMovements
        iconType={1}
        description="Test description"
        amount="12000"
        type="creditCard"
      />,
    );
  });
  test('Given a iconType 2, expect renders correctly', () => {
    render(
      <LastMovements
        iconType={2}
        description="Test description"
        amount="12000"
        type="debitCard"
      />,
    );
  });
});
