import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import DebitMovementsNotFound from './DebitMovementsNotFound';

describe('DebitMovementsNotFound Component', () => {
  test('Should renders correctly', () => {
    render(<DebitMovementsNotFound />);
  });
});
