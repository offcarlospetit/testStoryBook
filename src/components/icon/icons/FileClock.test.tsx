import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import FileClock from './FileClock';
test('FileClock component should render correctly', () => {
  render(<FileClock />);
});
