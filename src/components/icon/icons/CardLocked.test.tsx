import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import CardLocked from './CardLocked';
test('CardLocked component should render correctly', () => {
  render(<CardLocked />);
});
