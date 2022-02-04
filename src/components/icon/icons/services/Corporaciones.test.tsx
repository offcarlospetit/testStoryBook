import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Corporaciones from './Corporaciones';
test('Corporaciones component should render correctly', () => {
  render(<Corporaciones />);
});
