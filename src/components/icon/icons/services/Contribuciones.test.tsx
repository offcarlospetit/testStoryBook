import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Contribuciones from './Contribuciones';
test('Contribuciones component should render correctly', () => {
  render(<Contribuciones />);
});
