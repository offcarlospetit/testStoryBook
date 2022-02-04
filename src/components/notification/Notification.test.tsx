import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Notification from './Notification';

test('Notification component should render correctly', () => {
  render(<Notification content="Este es el mensaje del body" />);
});
