import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import InvestmentsActive from './InvestmentsActive';
test('InvestmentsActive component should render correctly', () => {
  render(<InvestmentsActive />);
});
