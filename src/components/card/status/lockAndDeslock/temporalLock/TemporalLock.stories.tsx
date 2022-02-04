import React from 'react';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import Container from '../../../../container/Container';
import TemporalLock from './TemporalLock';

const LockAndDeslockBoxButtonStories = storiesOf(
  'Molecule/LockAndDeslock',
  module,
);
LockAndDeslockBoxButtonStories.addDecorator(withKnobs);

LockAndDeslockBoxButtonStories.addDecorator(story => (
  <Container style={{backgroundColor: '#fff'}}>{story()}</Container>
))
  .add('TemporalLock active card', () => (
    <TemporalLock
      title="Test "
      blockCardFor="Test "
      aditionalInfo={`Text Test`}
      listItems={['Text Test']}
      cardStatusTitle="State: test"
      currentCardStatus="Active"
      currentCardStatusNumber={1}
      isActiveCard={true}
      toggleSwitch={() => null}
    />
  ))
  .add('TemporalLock loading lock', () => (
    <TemporalLock
      title="Test "
      blockCardFor="Test "
      aditionalInfo={`Text Test`}
      listItems={['Text Test']}
      cardStatusTitle="State: test"
      currentCardStatus="Bloqueando"
      currentCardStatusNumber={2}
      isActiveCard={true}
      toggleSwitch={() => null}
    />
  ))
  .add('TemporalLock locked card', () => (
    <TemporalLock
      title="Tu tarjeta tiene un Test "
      blockCardFor="Al desbloquear tu tarjeta vuelve a:"
      aditionalInfo={`Text Test`}
      listItems={['Text Test']}
      cardStatusTitle="State: test"
      currentCardStatus="Block"
      currentCardStatusNumber={0}
      isActiveCard={false}
      toggleSwitch={() => null}
    />
  ));
