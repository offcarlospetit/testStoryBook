import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Carrier from './Carrier';
test('Carrier component should render correctly', () => {
  render(<Carrier />);
});
