import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Container from '../container/Container';
import BoxButtonEmpty from '../boxButtonEmpty/BoxButtonEmpty';

const receiptStories = storiesOf('Molecules/Box Button Empty', module);

receiptStories.addDecorator(withKnobs);

receiptStories
  //.addDecorator((story) => <Container>{story()}</Container>)
  .add('Default', () => (
    <Container>
      <BoxButtonEmpty
        disabled
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        iconName="alert-fense"
        title="Estamos diseñando el nuevo menú"
        content="Te notificaremos cuando puedas acceder a distintas funcionalidades y servicios."
      />
    </Container>
  ));
