import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Container from '../container/Container';
import BoxButton from '../boxButton/BoxButton';

const receiptStories = storiesOf('Molecules/Box Button', module);

receiptStories.addDecorator(withKnobs);

receiptStories
  //.addDecorator((story) => <Container>{story()}</Container>)
  .add('Default', () => (
    <Container>
      <BoxButton
        style={{ width: '50%' }}
        iconName="block-card"
        title="Pronto"
        description="Bloqueo y configuración"
        type="active"
      />
    </Container>
  ));
