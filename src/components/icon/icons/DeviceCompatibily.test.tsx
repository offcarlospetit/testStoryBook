import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import DeviceCompatibily from './DeviceCompatibily';
test('DeviceCompatibily component should render correctly', () => {
  render(<DeviceCompatibily />);
});
