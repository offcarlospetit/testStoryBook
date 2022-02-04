import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import MovementsSearch from './MovementsSearch';
import Container from '../container/Container';

const logoStories = storiesOf('Molecules/MovementsSearch', module);
logoStories.addDecorator(withKnobs);

logoStories
  .addDecorator(story => <Container style={{ backgroundColor: '#fff' }}>{story()}</Container>)
  .add('MovementsSearch', () => (
    <MovementsSearch
      title='Movimientos'
      icon='search'
    />
  ));

