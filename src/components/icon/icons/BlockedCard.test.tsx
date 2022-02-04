import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import BlockedCard from './BlockedCard';
test('BlockedCard component should render correctly', () => {
  render(<BlockedCard />);
});
