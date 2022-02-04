import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import DebitCardMovementsNotFound from './DebitCardMovementsNotFound';

describe('DebitCardMovementsNotFound Component', () => {
  test('Should renders correctly', () => {
    render(<DebitCardMovementsNotFound titleMessage={'titulo'} />);
  });
});
