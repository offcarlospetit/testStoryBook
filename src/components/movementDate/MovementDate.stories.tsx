import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import MovementDate from './MovementDate';
import Container from '../container/Container';

const logoStories = storiesOf('Molecules/MovementDate', module);
logoStories.addDecorator(withKnobs);

logoStories
  .addDecorator(story => <Container style={{ backgroundColor: '#fff' }}>{story()}</Container>)
  .add('MovementDate', () => (
    <MovementDate
      title={'18 de Septiembre de 2021'}
    />
  ));

