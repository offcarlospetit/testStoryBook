import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Container from '../../../../container/Container';
import LockAndDeslockBoxButton from './LockAndDeslockBoxButton';

const LockAndDeslockBoxButtonStories = storiesOf('Molecule/LockAndDeslock', module);
LockAndDeslockBoxButtonStories.addDecorator(withKnobs);

LockAndDeslockBoxButtonStories
  .addDecorator((story) => <Container style={{backgroundColor: '#fff'}}>{story()}</Container>)
  .add('LockAndDeslockBoxButton', () =>
    <LockAndDeslockBoxButton
      title='Bloqueo y desbloqueo' 
      text='Por pérdida o robo de tarjeta, y por si la recuperas. '
    />
  )