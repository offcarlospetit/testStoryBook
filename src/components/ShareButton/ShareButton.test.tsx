import { render, act, fireEvent } from '@testing-library/react-native';
import React from 'react'
import 'react-native'
import ShareButton from './ShareButton'
import { metricsToolMock } from '../../utils/MetricsToolMock';
import MetricsProvider from '../metricsProvider/MetricsProvider';

test('ShareButton must be rendered ok', async () => {
  const metricsTool = {
    logEvent: jest.fn((name, payload) =>
      metricsToolMock.logEvent(name, payload),
    ),
  }
  const given = { metricsTool, metricEventName: 'TEST', }
  const { getByText } = render(
    <MetricsProvider metricsTool={given.metricsTool}>
      <ShareButton
        title='Compartir'
        onPress={() => null}
      />
    </MetricsProvider>
  )
  await act(async () => {
    const btn = getByText('Compartir');
    fireEvent.press(btn);
  });
})