import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Menu from './Menu';
test('Menu component should render correctly', () => {
  render(<Menu />);
});
