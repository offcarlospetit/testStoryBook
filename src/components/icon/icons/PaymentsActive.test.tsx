import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import PaymentsActive from './PaymentsActive';
test('PaymentsActive component should render correctly', () => {
  render(<PaymentsActive />);
});
