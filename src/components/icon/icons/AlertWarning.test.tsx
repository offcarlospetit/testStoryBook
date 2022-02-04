import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import AlertWarning from './AlertWarning';
test('AlertWarning component should render correctly', () => {
  render(<AlertWarning />);
});
