import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Container from '../../../../container/Container';
import LockAndDeslockBoxButton from './DefinitiveLock';

const LockAndDeslockBoxButtonStories = storiesOf('Molecule/LockAndDeslock', module);
LockAndDeslockBoxButtonStories.addDecorator(withKnobs);

LockAndDeslockBoxButtonStories
  .addDecorator((story) => <Container style={{backgroundColor: '#fff'}}>{story()}</Container>)
  .add('DefinitiveLock', () =>
    <LockAndDeslockBoxButton
      title='Bloqueo y desbloqueo'
      callTo='Llama al'
      phoneNumber='600 400 1000'
      bodyMessage={`en caso de robo o pérdida definitiva de tu tarjeta. Pide su reposición en el mismo momento`}
    />
  )