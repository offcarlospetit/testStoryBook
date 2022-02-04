import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import CheckBox from './CheckBox';
test('CheckBox component should render correctly', () => {
  render(<CheckBox />);
});
