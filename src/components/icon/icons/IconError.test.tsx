import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import IconError from './IconError';

describe('IconError Component', () => {
  test('Should render correctly', () => {
    render(<IconError />);
  });
});
