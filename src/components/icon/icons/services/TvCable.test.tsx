import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import TvCable from './TvCable';
test('TvCable component should render correctly', () => {
  render(<TvCable />);
});
