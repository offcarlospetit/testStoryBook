import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import ProgressBar from './ProgressBar';

test('ProgressBar component should render correctly', () => {
  render(<ProgressBar value={0.7} />);
});

