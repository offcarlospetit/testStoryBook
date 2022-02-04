import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import MyAccountActive from './MyAccountActive';
test('MyAccountActive component should render correctly', () => {
  render(<MyAccountActive />);
});
