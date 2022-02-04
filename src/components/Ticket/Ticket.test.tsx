import { render, act, fireEvent } from '@testing-library/react-native';
import React from 'react';
import Ticket from './Ticket';
import { metricsToolMock } from '../../utils/MetricsToolMock';
import MetricsProvider from '../metricsProvider/MetricsProvider';

test('Ticket component should render correctly', async () => {
  const metricsTool = {
    logEvent: jest.fn((name, payload) =>
      metricsToolMock.logEvent(name, payload),
    ),
  };
  const given = {
    metricsTool,
    metricEventName: 'App_ComprobantePagoTCNac_Volver',
  };
  const { getByText } = render(
    <MetricsProvider metricsTool={given.metricsTool}>
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
        metricEventName="App_ComprobantePagoTCNac_Volver"
        onPress={() => null}
        dollarValueAmount={'US$15432,12'}
        dollarValueTitle={'Dólares a pagar '}
      />
    </MetricsProvider>,
  );

  await act(async () => {
    const btn = getByText('Ir al inicio');
    fireEvent.press(btn);
  });
  expect(metricsTool.logEvent).toBeCalledWith(given.metricEventName, undefined);
});
