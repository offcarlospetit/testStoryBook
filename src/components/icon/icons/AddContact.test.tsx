import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import AddContact from './AddContact';
test('AddContact component should render correctly', () => {
  render(<AddContact />);
});
