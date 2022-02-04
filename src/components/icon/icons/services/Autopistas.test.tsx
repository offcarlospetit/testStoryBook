import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Autopistas from './Autopistas';
test('Autopistas component should render correctly', () => {
  render(<Autopistas />);
});
