import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import TCInfinite from './TC-infinite';
test('TCInfinite component should render correctly', () => {
  render(<TCInfinite />);
});
