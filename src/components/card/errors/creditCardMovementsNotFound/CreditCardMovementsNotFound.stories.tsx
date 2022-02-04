import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Container from '../../../container/Container';
import CreditCardMovementsNotFound from './CreditCardMovementsNotFound';

const CreditCardMovementsNotFoundStories = storiesOf('Molecule/CreditCardMovementsNotFound', module);

CreditCardMovementsNotFoundStories.addDecorator(withKnobs);

CreditCardMovementsNotFoundStories
  .addDecorator((story) => <Container style={{backgroundColor: '#fff'}}>{story()}</Container>)
  .add('Credit card movements not found', () =>
    <CreditCardMovementsNotFound
      titleMessage='Aún no registras movimientos con tu tarjeta'      
    />
  )
