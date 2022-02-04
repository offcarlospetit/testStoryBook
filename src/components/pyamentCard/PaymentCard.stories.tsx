import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Container from '../container/Container';
import PaymentCard from './PaymentCard';

const alertStories = storiesOf('Molecules/PaymentCard', module);

alertStories.addDecorator(withKnobs);

alertStories
  .addDecorator(story => <Container>{story()}</Container>)
  .add('Basic', () => (
    <PaymentCard
      haveDetail={true}
      title={'Example'}
      subTitle={'Subtitle example'}
    />
  ))
  .add('Has error', () => (
    <PaymentCard
      hasError={true}
      title={'Example'}
      subTitle={'Subtitle example'}
    />
  ))
  .add('Not Have Detail', () => (
    <PaymentCard
      haveDetail={false}
      title={'Example'}
      subTitle={'Subtitle example'}
    />
  ))
  .add('Show Only State', () => (
    <PaymentCard
      showOnlyState={true}
      title={'Example'}
      subTitle={'Subtitle example'}
    />
  ));
