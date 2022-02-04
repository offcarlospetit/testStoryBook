import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Clubes from './Clubes';
test('Clubes component should render correctly', () => {
  render(<Clubes />);
});
