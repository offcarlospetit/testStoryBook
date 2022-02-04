import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Investments from './Investments';
test('Investments component should render correctly', () => {
  render(<Investments />);
});
