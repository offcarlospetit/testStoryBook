import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import PaymentCard from './PaymentCard';
test('Elipse component should render correctly', () => {
  render(<PaymentCard />);
});
