import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import User from './User';
test('User component should render correctly', () => {
  render(<User />);
});
