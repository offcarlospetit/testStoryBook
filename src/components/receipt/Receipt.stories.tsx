import React from 'react';

import {text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import Receipt from './Receipt';
import Container from '../container/Container';
import Button from '../button/Button';

const receiptStories = storiesOf('Molecules/Receipt', module);

receiptStories.addDecorator(withKnobs);

const data = [
  {
    label: 'Test',
    value: 'Test',
  },
  {
    label: 'DNI',
    value: '11.111.1111',
  },
  {
    label: 'Test',
    value: 'Test',
  },
  {
    label: 'Test',
    value: 'test@test.com',
  },
  {
    label: 'Test',
    value: 'Test',
  },
];

receiptStories
  .add('Success', () => (
    <Container>
      <Receipt
        title={text('Success', 'test')}
        type="success"
        iconName="receipt-success"
        rows={data}
        message="Test"
        ammount="Test"
        date={'2001-01-01 12:01:01'}
        operationNumber="Test"
        shareButtonProps={{
          isVisibleShareButton: true,
          shareButtonTitle: 'Compartir',
          shareButtonMetricEventName: 'TEST',
          shareButtonOnPress: () => null,
        }}>
        <Button title="Finalizar" onPress={() => console.log('pressed')} />
      </Receipt>
    </Container>
  ))
  .add('Waiting', () => (
    <Container>
      <Receipt
        title="Waiting Test"
        subtitle="Test"
        type="waiting"
        iconName="receipt-waiting"
        ammount="Test"
        rows={data}
        message=""
        shareButtonProps={{
          isVisibleShareButton: true,
          shareButtonTitle: 'Test',
          shareButtonMetricEventName: 'TEST',
          shareButtonOnPress: () => null,
        }}>
        <Button title="Test" onPress={() => console.log('pressed')} />
      </Receipt>
    </Container>
  ));
