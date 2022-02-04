import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import FileError from './FileError';
test('FileClock component should render correctly', () => {
  render(<FileError />);
});
