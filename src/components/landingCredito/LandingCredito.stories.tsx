import React from 'react';

import { text, number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Container from '../container/Container';
import InfoCreditCard from '../card/credit/InfoCreditCard';
import ProgressBar from '../progressBar/ProgressBar';
import ButtonGroup from '../buttonGroup/ButtonGroup';

const buttonStories = storiesOf('Atoms/LandingCredito', module);
buttonStories.addDecorator(withKnobs);
buttonStories
  .addDecorator(story => <Container>{story()}</Container>)
  .add('MaskedPanLocked', () => (
    <InfoCreditCard
      maskedPan="123123"
      creditCardCode="210001"
      isLocked={true}
      textLocked={text('Texto', '')}
    />
  ))
  .add('ProgressBar', () => <ProgressBar value={0.8} />)
  .add('ButtonGroup', () => (
    <ButtonGroup
      // buttons={['Nacional', 'Internacional']}
      buttonsWhitMetricData={[
        {
          name: 'stringaaaa',
        },
        {
          name: 'btn1aaa',
          metricEventName: 'metricEventName1',
          metricEventPayload: 'metricEventPayload1',
        },
        {
          name: 'btn2aaa',
          metricEventName: 'metricEventName2',
          metricEventPayload: 'metricEventPayload2',
        },
      ]}
      selectedIndex={number('selectedIndex', 0)}
      onPress={$event => console.log($event)}
    />
  ));
//   .add('Loading', () => <Button title={text('title', 'Loading')} loading />)
//   .add('Outline', () => (
//     <Button title={text('title', 'Accept')} type="outline" />
//   ));
