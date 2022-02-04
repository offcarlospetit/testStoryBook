import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import BrokenCard from './BrokenCard';
test('BrokenCard component should render correctly', () => {
  render(<BrokenCard />);
});
