import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import MoreVertical from './MoreVertical';
test('Elipse component should render correctly', () => {
  render(<MoreVertical />);
});
