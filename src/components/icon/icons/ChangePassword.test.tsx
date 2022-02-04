import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import ChangePassword from './ChangePassword';
test('ChangePassword component should render correctly', () => {
  render(<ChangePassword />);
});
