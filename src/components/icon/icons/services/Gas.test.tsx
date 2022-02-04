import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Gas from './Gas';
test('Gas component should render correctly', () => {
  render(<Gas />);
});
