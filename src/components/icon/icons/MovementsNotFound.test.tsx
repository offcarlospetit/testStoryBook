import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import MovementsNotFound from './MovementsNotFound';

describe('MovementsNotFound Component', () => {
  test('Should renders correctly', () => {
    render(<MovementsNotFound />);
  });
});
