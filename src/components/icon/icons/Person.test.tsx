import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Person from './Person';
test('Person component should render correctly', () => {
  render(<Person />);
});
