import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Ticket from './Ticket';

const ticketStories = storiesOf('Molecules/Ticket', module);

ticketStories.addDecorator(withKnobs);

ticketStories.add('Ticket', () => (
  <Ticket
    title="¡Listo! Pagaste tu tarjeta"
    subTitle=""
    amountTitle="Monto"
    amountValue="$50.000"
    cardTitle="Tarjeta"
    cardValue="Visa Gold 4259 44XX XXXX 2175"
    paymentTypeTitle="Tipo de pago"
    paymentTypeValue="Nacional"
    accountTitle="Test Account"
    accountValue="Nº 01-94760-5"
    dateValue="05 de abril de 2020 - 12:00 hrs"
    operationNumber="Operación 317786800098"
    buttonTitle="Ir al inicio"
    onPress={() => null}
  />
));
