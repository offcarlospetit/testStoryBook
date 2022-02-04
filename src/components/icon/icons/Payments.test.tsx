import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Payments from './Payments';
test('Payments component should render correctly', () => {
  render(<Payments />);
});
