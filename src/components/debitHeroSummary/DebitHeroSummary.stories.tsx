import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import DebitHeroSummary from './/DebitHeroSummary';
import Container from '../container/Container';

const logoStories = storiesOf('Molecules/DebitHeroSummary', module);
logoStories.addDecorator(withKnobs);

logoStories
  .addDecorator(story => <Container style={{ backgroundColor: '#1976D2' }}>{story()}</Container>)
  .add('DebitHeroSummary', () => (
    <DebitHeroSummary
      name='Test Account'
      number='Nº 01-94760-5'
      amount='$23.594.770'
      overdraft='Sobregiro disponible: $12.000.000'
    />
  ));

