import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import CheckBoxUnchecked from './CheckBoxUnchecked';
test('CheckBoxUnchecked component should render correctly', () => {
  render(<CheckBoxUnchecked />);
});
