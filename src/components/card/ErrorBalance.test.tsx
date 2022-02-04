import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import ErrorBalance from './ErrorBalance';

test('ErrorBalance component should render correctly', () => {
  render(<ErrorBalance iconName="error" messageError="Test message" />);
});
