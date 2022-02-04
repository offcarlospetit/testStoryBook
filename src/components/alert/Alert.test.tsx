import { render } from '@testing-library/react-native'
import React from 'react';
import 'react-native';
import { Platform } from 'react-native';
import Alert from './Alert';

test('Alert component should render correctly', () => {
    render(
    <Alert
      icon={'menu'}
      message={'Movimientos sujetos a confirmación por los comercios respectivos.'}
    />)
});
test('Alert component should render correctly on android Platform', () => {
  Platform.OS = 'android'
  render(
  <Alert
    message={'Movimientos sujetos a confirmación por los comercios respectivos.'}
  />)
});