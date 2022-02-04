import {render} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import SpinnerBasic from './SpinnerBasic';

describe('SpinnerBasic component with variants', () => {
  test('SpinnerBasic component should render correctly cloader', () => {
    render(<SpinnerBasic name="loader" isVisible={true} style={{}} />);
  });
});
