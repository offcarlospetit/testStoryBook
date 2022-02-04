import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Internet from './Internet';
test('Internet component should render correctly', () => {
  render(<Internet />);
});
