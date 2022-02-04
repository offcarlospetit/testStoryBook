import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Radio from './Radio';
import { View } from 'react-native';

const ticketStories = storiesOf('Molecules/Radio', module);

ticketStories.addDecorator(withKnobs);

ticketStories
  .add('Radio', () =>
    <View style={{ marginTop: 300, padding: 25 }}>
      <Radio
        primaryText="Facturado"
        secondaryText="US$97,40"
        selected={false}
        bottomText='Equivalente en pesos a $80.379'
        isLoadingBottomText={false}
      />
    </View>
  )