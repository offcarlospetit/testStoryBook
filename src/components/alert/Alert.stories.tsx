import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Container from '../container/Container';
import Alert from './Alert';

const alertStories = storiesOf('Molecules/Alert', module);

alertStories.addDecorator(withKnobs);

alertStories
  .addDecorator((story) => <Container style={{ paddingVertical: 250, backgroundColor: '#fff' }}>{story()}</Container>)
  .add('Alert', () =>
    <Alert
      icon='add-contact'      
      message={'Movimientos sujetos a confirmación por los comercios respectivos.'}
    />
  )
