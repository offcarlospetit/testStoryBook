import { render, act, fireEvent } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Contact from './Contact';
import { metricsToolMock } from '../../utils/MetricsToolMock';
import MetricsProvider from '../metricsProvider/MetricsProvider';

describe('Contact component', () => {
  test('Should render correctly', async () => {
    render(<Contact contactName={'Test name'} accounts={['1', '2']} />);
  });
  test('Given a metricsTool and the Contact component with metricEventName, expect it to be executed once logEvent', async () => {
    const metricsTool = {
      logEvent: jest.fn((name, payload) =>
        metricsToolMock.logEvent(name, payload),
      ),
    };
    const given = {
      metricsTool,
      metricEventName: 'eventName',
    };
    const { getByText } = render(
      <MetricsProvider metricsTool={given.metricsTool}>
        <Contact
          alias={'alias'}
          metricEventName={'eventName'}
          contactName={'contactName'}
          accounts={['1', '2']}
          onPress={() => {}}
        />
      </MetricsProvider>,
    );
    await act(async () => {
      const contact = getByText('alias');
      fireEvent.press(contact);
    });
    expect(metricsTool.logEvent).toBeCalledWith(
      given.metricEventName,
      undefined,
    );
  });
});
