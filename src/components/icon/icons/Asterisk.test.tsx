import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Asterisk from './Asterisk';
test('Asterisk component should render correctly', () => {
  render(<Asterisk />);
});