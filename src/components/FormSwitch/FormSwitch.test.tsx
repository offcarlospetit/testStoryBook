import React from 'react';
import 'react-native';
import { render } from '@testing-library/react-native';
import FormSwitch from './FormSwitch';

test('FormSwitch component should render correctly', () => {
  render(
    <FormSwitch
      label='Guardar account'
      description='Esto sólo se hará efectivo al autenticar y transferir correctamente.'
      isActive={true}
      toggleSwitch={() => null}
    />
  );
});