import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Container from '../../../container/Container';
import GenericCardStatus from './GenericCardStatus';

const GenericCardStatusStories = storiesOf('Molecule/GenericCardStatus', module);

GenericCardStatusStories.addDecorator(withKnobs);

GenericCardStatusStories
  .addDecorator((story) => <Container style={{backgroundColor: '#fff'}}>{story()}</Container>)
  .add('Debit status card', () =>
    <GenericCardStatus
      title='Tarjeta de Débito' 
      cardNumber='4012 74XX XXXX 5185'
      type='debit'
      isActive={true}      
      activeStatusLabel='Activa'
      blockedStatusLabel='Bloqueada'
      onPress={() => null}
    />
  )
  .add('Credit status card', () =>
    <GenericCardStatus
      cardNumber='4012 74XX XXXX 5185'
      productTypeCode='210015'
      type='credit'
      isActive={true}
      activeStatusLabel='Activa'
      blockedStatusLabel='Bloqueada'
      onPress={() => null}
    />
)
