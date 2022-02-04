import React from 'react';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import Container from '../../../container/Container';
import ErrorBalanceMovements from './ErrorBalanceMovements';

const ErrorBalanceMovementsStories = storiesOf(
  'Molecule/ErrorCreditCards',
  module,
);

ErrorBalanceMovementsStories.addDecorator(withKnobs);

ErrorBalanceMovementsStories.addDecorator(story => (
  <Container style={{backgroundColor: '#fff'}}>{story()}</Container>
)).add('Error balance movements', () => (
  <ErrorBalanceMovements
    iconName="receipt-all-wrong"
    titleError="Error"
    messageError="Error"
  />
));
