import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import CheckCircle from './CheckCircle';
test('CheckCircle component should render correctly', () => {
  render(<CheckCircle />);
});
