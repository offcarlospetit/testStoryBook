import React from 'react';
import 'react-native';
import { render } from '@testing-library/react-native';
import LockAndDeslockBoxButton from './LockAndDeslockBoxButton';

test('LockAndDeslockBoxButton component should render correctly', () => {
  render(
    <LockAndDeslockBoxButton
      title='Bloqueo y desbloqueo' 
      text='Por pérdida o robo de tarjeta, y por si la recuperas.'
    />
  );
});

