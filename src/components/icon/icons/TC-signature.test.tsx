import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import TCSignature from './TC-signature';
test('TCSignature component should render correctly', () => {
  render(<TCSignature />);
});
