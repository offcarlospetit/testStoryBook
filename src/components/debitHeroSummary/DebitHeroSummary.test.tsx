import React from 'react';
import { render } from '@testing-library/react-native';
import DebitHeroSummary from './DebitHeroSummary';

describe('DebitHeroSummary Component', () => {
  test('Should renders correctly', () => {
    render(
      <DebitHeroSummary
        name="Test Account"
        number="Nº 01-94760-5"
        amount="$23.594.770"
        overdraft="Sobregiro disponible: $12.000.000"
      />,
    );
  });
});
