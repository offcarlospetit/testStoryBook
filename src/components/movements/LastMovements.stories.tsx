import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import LastMovements from './LastMovements';
import Container from '../container/Container';

const logoStories = storiesOf('Molecules/LastMovements', module);

logoStories.addDecorator(withKnobs);

logoStories
  .addDecorator(story => <Container>{story()}</Container>)
  .add('contact Avatar', () => (
    <LastMovements
      iconType={1}
      description={'Reverso compra nacional'}
      amount={'$8.200.200'}
      type="debitCard"
    />
  ))
  .add('contact flex', () => (
    <LastMovements
      iconType={1}
      description={'Reverso compra nacional'}
      amount={'$1.200.000'}
      type="creditCard"
    />
  ))
  .add('contact person icon', () => (
    <LastMovements
      iconType={2}
      description={'Reverso compra nacional'}
      amount={'$1.200'}
      type="creditCard"
    />
  ));
