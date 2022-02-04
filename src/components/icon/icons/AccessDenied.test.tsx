import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import AccessDenied from './AccessDenied';
test('AccessDenied component should render correctly', () => {
  render(<AccessDenied />);
});
