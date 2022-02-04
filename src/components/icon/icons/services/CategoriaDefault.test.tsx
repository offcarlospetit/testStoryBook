import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import CategoriaDefault from './CategoriaDefault';
test('CategoriaDefault component should render correctly', () => {
  render(<CategoriaDefault />);
});
