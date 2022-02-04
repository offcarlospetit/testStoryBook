import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import CardLock from './CardLock';
test('Charge component should render correctly', () => {
  render(<CardLock />);
});
