import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Close from './Close';
test('Close component should render correctly', () => {
  render(<Close />);
});
