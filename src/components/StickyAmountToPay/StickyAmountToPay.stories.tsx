import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Container from '../container/Container';
import StickyAmountToPay from './StickyAmountToPay';
import Colors from '../../constants/colors';

const stickyAmountToPayStories = storiesOf('Molecules/StickyAmountToPay', module);
stickyAmountToPayStories.addDecorator(withKnobs);

stickyAmountToPayStories
  .addDecorator((story) => <Container style={{ backgroundColor: Colors.neutralLightGrey20 }}>{story()}</Container>)
  .add('StickyAmountToPay', () =>
  <StickyAmountToPay
    label='Monto a pagar:'
    value='$79.313'
    buttonText='Continuar'
    onPress={() => null}
  />
  )