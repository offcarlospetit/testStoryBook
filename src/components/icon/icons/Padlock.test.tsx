import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import PadLock from './PadLock';
test('PadLock component should render correctly', () => {
  render(<PadLock />);
});
