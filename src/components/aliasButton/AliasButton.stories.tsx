import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Container from '../container/Container';
import AliasButton from '../aliasButton/AliasButton';

const receiptStories = storiesOf('Molecules/Alias Button', module);

receiptStories.addDecorator(withKnobs);

receiptStories
  //.addDecorator((story) => <Container>{story()}</Container>)
  .add('Default', () => (
    <Container style={{ width: '100%' }}>
      <AliasButton text="Cristóbal Lamas" />
    </Container>
  ));
