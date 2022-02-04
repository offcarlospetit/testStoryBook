import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Hipotecarios from './Hipotecarios';
test('Hipotecarios component should render correctly', () => {
  render(<Hipotecarios />);
});
