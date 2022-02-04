import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Container from './Container';
test('Container component should render correctly', () => {
  render(<Container />);
});
