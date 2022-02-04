import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import ErrorBalance from './ErrorBalance';

describe('ErrorBalance Component', () => {
  test('Should render correctly', () => {
    render(<ErrorBalance />);
  });
});
