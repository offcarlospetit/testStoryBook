import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import MyAccount from './MyAccount';
test('MyAccount component should render correctly', () => {
  render(<MyAccount />);
});
