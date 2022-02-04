import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Input from './Input';
test('Input component should render correctly', () => {
  render(<Input />);
});
