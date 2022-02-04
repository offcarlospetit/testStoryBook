import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Elipse from './Elipse';
test('Elipse component should render correctly', () => {
  render(<Elipse />);
});
