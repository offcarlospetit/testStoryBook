import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import WarningTime from './WarningTime';
test('AddContact component should render correctly', () => {
  render(<WarningTime />);
});
