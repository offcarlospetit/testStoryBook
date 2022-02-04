import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import SearchInput from './SearchInput';

test('SearchInput component should render correctly', () => {
  render(<SearchInput txtBtnCancel="Test button cancel" />);
});
