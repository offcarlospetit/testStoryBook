import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Container from '../container/Container';
import TemporalLock from './FormSwitch';

const FormSwitchStories = storiesOf('Molecule/FormSwitch', module);
FormSwitchStories.addDecorator(withKnobs);

FormSwitchStories
  .addDecorator((story) => <Container style={{backgroundColor: '#fff'}}>{story()}</Container>)
  .add('FormSwitch', () =>
    <TemporalLock
      label='Guardar account'
      description='Esto sólo se hará efectivo al autenticar y transferir correctamente.'
      isActive={true}
      toggleSwitch={() => null}
    />
  )