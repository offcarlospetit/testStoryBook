import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import MoreVert from './MoreVert';
test('MoreVert icon component should render correctly', () => {
  render(<MoreVert />);
});
