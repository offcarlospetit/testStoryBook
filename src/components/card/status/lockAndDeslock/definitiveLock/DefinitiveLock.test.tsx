import React from 'react';
import 'react-native';
import { render } from '@testing-library/react-native';
import DefinitiveLock from './DefinitiveLock';

test('DefinitiveLock component should render correctly', () => {
  render(
    <DefinitiveLock
      title='Bloqueo y desbloqueo'
      callTo='Llama al'
      phoneNumber='600 400 1000'
      bodyMessage={`en caso de robo o pérdida definitiva de tu tarjeta. Pide su reposición en el mismo momento`}
      onPressPhoneNumber={() => null}
    />
  );
});