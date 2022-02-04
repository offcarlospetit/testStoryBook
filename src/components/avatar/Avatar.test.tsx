import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Avatar from './Avatar';
test('Avatar component should render correctly', () => {
  render(<Avatar title="Test" />);
});
