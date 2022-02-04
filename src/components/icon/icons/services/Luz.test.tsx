import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Luz from './Luz';
test('Luz component should render correctly', () => {
  render(<Luz />);
});
