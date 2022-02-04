import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Search from './Search';
test('Search component should render correctly', () => {
  render(<Search />);
});
