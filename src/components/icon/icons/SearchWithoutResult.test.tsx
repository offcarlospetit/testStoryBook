import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import SearchWithoutResult from './SearchWithoutResult';
test('SearchWithoutResult component should render correctly', () => {
  render(<SearchWithoutResult />);
});
