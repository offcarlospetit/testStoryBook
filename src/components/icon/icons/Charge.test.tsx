import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Charge from './Charge';
test('Charge component should render correctly', () => {
  render(<Charge />);
});
