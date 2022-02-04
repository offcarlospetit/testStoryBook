import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Empty from './Empty';
test('Empty component should render correctly', () => {
  render(<Empty message="Test message" />);
});
