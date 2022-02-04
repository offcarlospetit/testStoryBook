import {render} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Logo from './Logo';
test('Logo component should render correctly', () => {
  render(<Logo name="logo" />);
});
